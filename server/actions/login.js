const CREDS = require('../config/creds');
const CONFIG = require('../config/config');

// DOM element selectors
const URL_MAIN = 'https://www.fantrax.com/fantasy/league/xr11guqnkebqvmam/team/roster';
const LOGIN_TITLE = 'Fantrax - The Home of Fantasy Sports';
const SEL_COOKIE= '/html/body/app-root/div/layout-overlay/overlay-toasts/toast/section/div[1]/button[3]';
const SEL_USERNAME = '//*[@id="mat-input-0"]';
const SEL_PASSWORD = '//*[@id="mat-input-1"]';

export default async function loginPage(page, counter) {

    try {
        // Set navigation timeout
        await page.setDefaultNavigationTimeout(CONFIG.navTimeOut); 
        console.log("Navigation timeout set to " + CONFIG.navTimeOut/1000 + " seconds");

        // Open Fantrax login page
        await page.goto(URL_MAIN);
        console.log("Fantrax login page opened");

        // Close the cookie popup
        await page.waitForXPath(SEL_COOKIE).then((result) => result.click());
        console.log("Cookie popup closed");

        await enterLoginDetails(page);
        
    } catch (e) {
        console.log("Error logging in: " + e);
        // Close the browser and increase counter of tries
        counter ++;

        // Check if max tries has been reached, otherwise try to login again
        if (counter <= CONFIG.maxLoginTries) {
            console.log("Trying to login again. Try nr: " + counter);
            await enterLoginDetails(page);
            
            //await loginPage(page, counter);
        } else {
            console.log("Maximum number of login tries reached");
            throw new Error('Max login tries reached');
        }
    }

    return page;
}

async function enterLoginDetails(page) {
    // Open Fantrax login page
    await page.goto(URL_MAIN);
    console.log("Fantrax login page opened");
    // Enter login details
    await page.waitForXPath(SEL_USERNAME).then((result) => result.focus());
    await page.keyboard.type(CREDS.username);
    await page.waitForXPath(SEL_PASSWORD).then((result) => result.focus());
    await page.keyboard.type(CREDS.password);
    await page.keyboard.press('Enter')
    console.log("Username/Password entered");

    const cookies = await page.cookies()

    console.log(cookies);

    await Promise.all([
        page.waitForNavigation(),
        
    ]).then(async () => {
        //Check page title of the loaded page
        await page.title().then(async result => {
            console.log("Page finished loading. Title: " + result);
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
        console.log("Waiting for response for login page failed");
        throw new Error('Login failed') 
    });

    return page;
}