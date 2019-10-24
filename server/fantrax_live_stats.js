const CREDS = require('./creds');

// DOM element selectors
const URL_MAIN = 'https://www.fantrax.com/login';
const URL_TEAM = 'https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/roster';
const URL_TEAM_RESP = 'https://www.fantrax.com/fxpa/req?leagueId=fme67lofjyyvq48x';
const LOGIN_TITLE = 'Fantrax - The Home of Fantasy Sports';
const SEL_COOKIE= '/html/body/app-root/div/layout-overlay/overlay-toasts/toast/section/div[1]/button[3]';
const SEL_USERNAME = '//*[@id="mat-input-0"]';
const SEL_PASSWORD = '//*[@id="mat-input-1"]';
const SEL_LOGIN_ERROR = "//*[@class='notice notice--error ng-star-inserted']";
const SEL_GAMEWEEK = '//*[@id="mat-select-1"]';
const SEL_GW_CURRENT = '//*[@id="mat-option-11"]';
const SEL_GW_PREVIOUS = '/html/body/app-root/div/div/div/app-league-team-roster/div/section/div[2]/div[4]/div[1]/mat-form-field/div/div[1]/div[4]/button[1]/span/mat-icon';

let nr_of_teams = 10;

async function loginPage(page, counter) {

    const maxTries = 3;

    try {
        // Set navigation timeout to 10 seconds
        await page.setDefaultNavigationTimeout(10*1000); 
        console.log("Navigation timeout set to 10 seconds");

        // Open Fantrax login page
        await page.goto(URL_MAIN);
        console.log("Fantrax login page opened");

        // Close the cookie popup
        await page.waitForXPath(SEL_COOKIE).then((result) => result.click());
        console.log("Cookie popup closed");

        // Enter login details
        await page.waitForXPath(SEL_USERNAME).then((result) => result.click());
        await page.keyboard.type(CREDS.username);
        await page.waitForXPath(SEL_PASSWORD).then((result) => result.click());
        await page.keyboard.type(CREDS.password);
        await page.keyboard.press('Enter');
        console.log("Username/Password entered");
        
        // Wait for the page to finish loading
        await page.waitForNavigation().then(async () => {
            //Check page title of the loaded page
            await page.title().then(async result => {
                // Check if logged in page is opened
                if (result === LOGIN_TITLE) {
                    // End login flow and return the resulting page object
                    console.log("Fantrax user logged in");
                } else {
                    // Throw error about incorrect page title
                    throw new Error('Incorrect login page');
                }
            });
        }, async () => {
            // If wait for navigation fails, check if login error is present
            await page.waitForXPath(SEL_LOGIN_ERROR).then(async (result) => { 
                console.log("Login failed: Invalid username/password.");
                throw new Error('Login failed') 
            });
        });
    } catch (e) {
        console.log("Error logging in: " + e);
        // Close the browser and increase counter of tries
        browser.close();
        counter ++;

        // Check if max tries has been reached, otherwise try to login again
        if (counter <= maxTries) {
            console.log("Trying to login again. Try nr: " + counter);
            await loginPage(counter);
        } else {
            console.log("Maximum number of login tries reached");
            throw new Error('Max login tries reached');
        }
    }

    return page;
}

async function fillTeamData(page, team) {
    let stats;

    await page.waitForResponse(URL_TEAM_RESP).then(
        (response) => response.json().then(
            (res) => stats = res.responses[0].data.tables
        ));
        
    return { "stats": stats, "team": team };
}

async function fillTeamsData(page, teams) {
    console.log("Starting data collection");
    // Locate the Team Roster page
    await page.goto(URL_TEAM);

    // Select current gameweek
    await page.waitForXPath(SEL_GAMEWEEK).then((result) => result.click());
    await page.waitForXPath(SEL_GW_CURRENT).then((result) => result.click());

    // Select previous gameweek (for testing)
    await page.waitForXPath(SEL_GW_PREVIOUS).then((result) => result.click());
    
    let teamsData = [];
    
    teamsData[0] = await fillTeamData(page, teams[0]);
    console.log("Data for team nr 0 (" + teams[0].name + ") loaded");

    // Cycle through all team pages and collect the data
    for (let i = 1; i < nr_of_teams; i++) {
        
        await page.waitForXPath('//*[@id="mat-select-0"]').then((result) => result.click());
        await page.waitForXPath('//*[@id="mat-option-' + i + '"]').then((result) => result.click());

        teamsData[i] = await fillTeamData(page, teams[i]);
        console.log("Data for team nr " + i + " (" + teams[i].name + ") loaded");
    }

    console.log("Finished data collection");
    return teamsData;
}

export { loginPage, fillTeamsData };
