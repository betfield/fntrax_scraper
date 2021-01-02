export const nrTeams = 10;
export const maxLoginTries = 3;
export const navTimeOut = 10*1000;
export const dataCollectionInterval = 4*1000;

export const LOGIN_TITLE = 'Fantrax - The Home of Fantasy Sports';

export const URL_TEAM = 'https://www.fantrax.com/fantasy/league/xr11guqnkebqvmam/team/roster;';
export const URL_TEAM_RESP = 'https://www.fantrax.com/fxpa/req?leagueId=xr11guqnkebqvmam';
export const URL_SCHEDULE = 'https://www.fantrax.com/newui/EPL/schedules.go?season=920';

export const URL_PARAMS = {
    reload: 1,
    view: 'STATS',
    seasonOrProjection: 'SEASON_920_BY_PERIOD',
    timeframeTypeCode: 'BY_PERIOD',
    /*scoringCategoryType: 5,
    statsType: 1,
    
    adminMode: false,
    startDate: '2019-08-09',
    endDate: '2020-05-18',
    lineupChangeSystem: 'EASY_CLICK',
    daily: false,
    origDaily: false
    */
}

export const SEL_PRIVACY = '/html/body/div[3]/div[1]/div[2]/div/div/div/div[4]/div[2]/a/span';
export const SEL_CURRENT_GW = '/html/body/section/div[4]/div[4]/div[4]/div[1]/div[1]/div/div[2]/div[2]/div[2]';
export const SEL_COOKIE= '/html/body/app-root/div/layout-overlay/overlay-toasts/toast/section/div[1]/button[3]';
export const SEL_USERNAME = '//*[@id="mat-input-0"]';
export const SEL_PASSWORD = '//*[@id="mat-input-1"]';

// Premier League: {comp_id=17}
const comp_id = 17;
const season_id = 29415;

export const URL_SOFASCORE_SEASONS = 'https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/seasons';
export const URL_SOFASCORE_TEAMS = 'https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/season/{season_id}/teams';  //{team_id=category.id}
export const URL_SOFASCORE_TEAM_INFO = 'https://api.sofascore.com/api/v1/team/{team_id}';
export const URL_SOFASCORE_TEAM_PLAYERS = 'https://api.sofascore.com/api/v1/team/{team_id}/players';
export const URL_SOFASCORE_GAMEWEEKS = 'https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/season/{season_id}/rounds';
export const URL_SOFASCORE_FIXTURES = 'https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/season/{season_id}/events/round/{round_id}';
export const URL_SOFASCORE_FIXTURE_INFO = 'https://api.sofascore.com/api/v1/event/{fixture_id}';
export const URL_SOFASCORE_FIXTURE_LINEUPS = 'https://api.sofascore.com/api/v1/event/{fixture_id}/lineups';
export const URL_SOFASCORE_FIXTURE_INCIDENTS = 'https://api.sofascore.com/api/v1/event/{fixture_id}/incidents';
export const URL_SOFASCORE_FIXTURE_PLAYER_STATS = 'https://api.sofascore.com/api/v1/event/{fixture_id}/player/{player_id}/statistics';