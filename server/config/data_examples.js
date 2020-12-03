// ------- Goalkeeper Rows ------- //

[ 
    { 
        scorer: { 
            teamName: 'Everton',
            urlName: 'jordan-pickford',
            scorerId: '032f9',
            disableLineupChange: true,
            posIdsNoFlex: [Array],
            posShortNames: 'G',
            team: false,
            icons: [Array],
            rookie: false,
            posIds: [Array],
            teamId: '110050',
            name: 'Jordan Pickford',
            teamShortName: 'EVE',
            shortName: 'J. Pickford' 
        },
        eligibleStatusIds: [ '1', '2' ],
        posId: '704',
        cells:
            [ 
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object] 
            ],
        statusId: '1',
        eligiblePosIds: [ '704' ],
        actions: [ 
            [Object] 
        ] 
    },
    { 
        scorer:
        { 
            teamName: 'Liverpool',
            urlName: 'alisson-ramses-becker',
            scorerId: '04sjt',
            disableLineupChange: true,
            posIdsNoFlex: [Array],
            posShortNames: 'G',
            team: false,
            icons: [Array],
            rookie: false,
            posIds: [Array],
            teamId: '110070',
            name: 'Alisson',
            teamShortName: 'LIV',
            shortName: 'Alisson' },
        eligibleStatusIds: [ '1', '2' ],
        posId: '704',
        cells:
            [ 
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object] 
            ],
        statusId: '2',
        eligiblePosIds: [ '704' ],
        actions: [ 
            [Object] 
        ] 
    },
    { 
        numSpotsAvailableText: 'Reserve spot(s) available',
        description: 'Reserve spot(s) available Limited by Max Players on Team',
        numSpotsAvailableDescription: 'Limited by Max Players on Team',
        numSpotsAvailableIcon: 'LIMITED_BY_MAX',
        cells:
            [ 
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object] 
            ],
        statusId: '2' 
    },
    { 
        scorer: { team: false, rookie: false },
        scorerColumn: 'Totals',
        bold: true,
        cells:
            [ 
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object],
                [Object] 
            ],
        statusId: '9999' 
    } 
]

// -------------------------------------//

// ------- Goalkeeper Row ------- //
[{ 
    scorer: { 
        teamName: 'Everton',
        urlName: 'jordan-pickford',
        scorerId: '032f9',
        disableLineupChange: true,
        posIdsNoFlex: [ '704' ],
        posShortNames: 'G',
        team: false,
        icons: [ [Object] ],
        rookie: false,
        posIds: [ '704' ],
        teamId: '110050',
        name: 'Jordan Pickford',
        teamShortName: 'EVE',
        shortName: 'J. Pickford' 
    },
    eligibleStatusIds: [ '1', '2' ],
    posId: '704',
    cells:[ 
        { eventId: '03p9v', content: 'EVE 0<br/>@BUR 1 F' },
        { content: '6' },
        { content: '6' },
        { content: '1' },
        { content: '0' },
        { content: '1' },
        { content: '2' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '4' },
        { content: '3' } 
    ],
    statusId: '1',
    eligiblePosIds: [ '704' ],
    actions: [ { typeId: '4' } ] 
}]    
// -------------------------------------//

// ------- Goalkeeper Header ------- //

{ 
    cells:
        [ 
            { 
                eventStr: true,
                sortDirection: 1,
                name: 'Opponent',
                shortName: 'Opp',
                key: 'opponent' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORE',
                sortType: 'SCORE',
                name: 'Fantasy Points',
                shortName: 'FPts',
                key: 'fpts' 
            },
            { 
                sortDirection: 1,
                sortKey: 'FPTS_PER_GAME',
                sortType: 'FPTS_PER_GAME',
                name: 'Average Fantasy Points per Game',
                shortName: 'FP/G',
                key: 'fptsPerGame' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6060#-1',
                scipId: '5020#6060#-1',
                sortType: 'SCORING_CATEGORY',
                name: 'Games Played',
                shortName: 'GP',
                key: '5020#6060#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6250#-1',
                scipId: '5020#6250#-1',
                sortType: 'SCORING_CATEGORY',
                name:
                'Clean Sheets -- Awarded to a player who played at least 60 minutes and whose team gave up 0 goals that game.',
                shortName: 'CS',
                key: '5020#6250#-1' 
            },
            { 
                sortDirection: -1,
                sortKey: 'SCORING_CATEGORY_5020#6112#-1',
                scipId: '5020#6112#-1',
                sortType: 'SCORING_CATEGORY',
                name:
                'Goals Against -- Goals scored by opposing team while the player is on the field',
                shortName: 'GA',
                key: '5020#6112#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6200#-1',
                scipId: '5020#6200#-1',
                sortType: 'SCORING_CATEGORY',
                name: 'Saves',
                shortName: 'Sv',
                key: '5020#6200#-1' 
            },
            { 
                sortDirection: -1,
                sortKey: 'SCORING_CATEGORY_5020#6280#-1',
                scipId: '5020#6280#-1',
                sortType: 'SCORING_CATEGORY',
                name: 'Yellow Cards',
                shortName: 'YC',
                key: '5020#6280#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6170#-1',
                scipId: '5020#6170#-1',
                sortType: 'SCORING_CATEGORY',
                name:
                'Penalty Kick Saves -- Number of penalty kicks saved by the goalie',
                shortName: 'PKS',
                key: '5020#6170#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6002#-1',
                scipId: '5020#6002#-1',
                sortType: 'SCORING_CATEGORY',
                name:
                'Key Passes (Assists on Shots) -- Player assists a shot (including goals)',
                shortName: 'KP',
                key: '5020#6002#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6108#-1',
                scipId: '5020#6108#-1',
                sortType: 'SCORING_CATEGORY',
                name: 'Interceptions -- Player intercepts a pass',
                shortName: 'Int',
                key: '5020#6108#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6016#-1',
                scipId: '5020#6016#-1',
                sortType: 'SCORING_CATEGORY',
                name:
                'Effective Clearances -- Successful defensive clearance - where player under pressure kicks the ball clear of the defensive zone and/or out of play',
                shortName: 'CLR',
                key: '5020#6016#-1' 
            },
            { 
                sortDirection: 1,
                sortKey: 'SCORING_CATEGORY_5020#6007#-1',
                scipId: '5020#6007#-1',
                sortType: 'SCORING_CATEGORY',
                name:
                'Aerials Won -- Successful aerial duels (the definition of an aerial duel is that it is between two players - either both jumping or only one jumping and the other contesting the header by making it difficult to win - and one player has to win the contest with a header OR if it is between an outfield player and a goalkeeper then the goalkeeper is allowed to punch it clear)',
                shortName: 'AER',
                key: '5020#6007#-1' 
            } 
        ] 
}

// -------------------------------------//

// ------- Outfielder Row ------- //

[{ 
    scorer:{ 
        teamName: 'Tottenham Hotspur',
        urlName: 'ben-davies',
        scorerId: '02oo1',
        disableLineupChange: true,
        posIdsNoFlex: [ '703' ],
        posShortNames: 'D',
        team: false,
        icons: [ [Object] ],
        rookie: false,
        posIds: [ '703' ],
        teamId: '110160',
        name: 'Ben Davies',
        teamShortName: 'TOT',
        shortName: 'B. Davies' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '703',
    cells:[ 
        { eventId: '03p9u', content: 'TOT 0<br/>@BHA 3 F' },
        { content: '0' },
        { content: '0' },
        { content: '1' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '1' },
        { content: '1' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '3' },
        { content: '2' },
        { content: '0' },
        { content: '2' },
        { content: '0' },
        { content: '0' },
        { content: '0' },
        { content: '3' },
        { content: '0' } 
    ],
    statusId: '1',
    eligiblePosIds: [ '703' ],
    actions: [ { typeId: '4' } ] 
}]

// -------------------------------------//

// ------- Outfielder Rows ------- //

[ { 
    scorer:{ 
        teamName: 'Tottenham Hotspur',
        urlName: 'ben-davies',
        scorerId: '02oo1',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'D',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110160',
        name: 'Ben Davies',
        teamShortName: 'TOT',
        shortName: 'B. Davies' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '703',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
    statusId: '1',
    eligiblePosIds: [ '703' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Watford',
        urlName: 'jose-holebas',
        scorerId: '03rn2',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'D',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110165',
        name: 'José Holebas',
        teamShortName: 'WAT',
        shortName: 'J. Holebas' 
    },
    eligibleStatusIds: [ '1', '2' ],
    posId: '703',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '703' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Sheffield United',
        urlName: 'enda-stevens',
        scorerId: '02lmo',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'D',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110127',
        name: 'Enda Stevens',
        teamShortName: 'SHU',
        shortName: 'E. Stevens' 
    },
    eligibleStatusIds: [ '1', '2' ],
    posId: '703',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '703' ],
    actions: [ [Object] ] 
},
{ 
    posId: '703',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1' 
},
{ 
    posId: '703',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1' 
},
{ 
    scorer:{ 
        teamName: 'Everton',
        urlName: 'alex-iwobi',
        scorerId: '038ze',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110050',
        name: 'Alex Iwobi',
        teamShortName: 'EVE',
        shortName: 'A. Iwobi' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
    statusId: '1',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'West Ham United',
        urlName: 'manuel-lanzini',
        scorerId: '03sd5',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110175',
        name: 'Manuel Lanzini',
        teamShortName: 'WHU',
        shortName: 'M. Lanzini' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Watford',
        urlName: 'roberto-pereyra',
        scorerId: '046v3',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110165',
        name: 'Roberto Pereyra',
        teamShortName: 'WAT',
        shortName: 'R. Pereyra' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Wolverhampton',
        urlName: 'ruben-diogo-da-silva-neves',
        scorerId: '04qr6',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110191',
        name: 'Rúben Neves',
        teamShortName: 'WOL',
        shortName: 'Rúben Neves' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1' 
},
{ 
    scorer:{ 
        teamName: 'Chelsea',
        urlName: 'tammy-abraham',
        scorerId: '0410j',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'F',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110040',
        name: 'Tammy Abraham',
        teamShortName: 'CHE',
        shortName: 'T. Abraham' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '701',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '701' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Southampton',
        urlName: 'daniel-ings',
        scorerId: '03dxq',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'F',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110135',
        name: 'Danny Ings',
        teamShortName: 'SOU',
        shortName: 'Danny Ings' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '701',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '701' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Arsenal',
        urlName: 'nicolas-pepe',
        scorerId: '055sk',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'F',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110000',
        name: 'Nicolas Pépé',
        teamShortName: 'ARS',
        shortName: 'N. Pépé' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '701',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '1',
    eligiblePosIds: [ '701' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Leicester City',
        urlName: 'ricardo-domingos-barbosa-pereira',
        scorerId: '04qfy',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'D',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110230',
        name: 'Ricardo Pereira',
        teamShortName: 'LEI',
        shortName: 'Ricardo Pereira' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '703',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '2',
    eligiblePosIds: [ '703' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Bournemouth',
        urlName: 'ryan-fraser',
        scorerId: '03r8r',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110033',
        name: 'Ryan Fraser',
        teamShortName: 'BOU',
        shortName: 'R. Fraser' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '2',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Tottenham Hotspur',
        urlName: 'lucas-rodrigues-moura-da-silva',
        scorerId: '04mqz',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110160',
        name: 'Lucas Moura',
        teamShortName: 'TOT',
        shortName: 'Lucas Moura' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '2',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    scorer:{ 
        teamName: 'Crystal Palace',
        urlName: 'andros-townsend',
        scorerId: '02lp7',
        disableLineupChange: true,
        posIdsNoFlex: [Array],
        posShortNames: 'M',
        team: false,
        icons: [Array],
        rookie: false,
        posIds: [Array],
        teamId: '110045',
        name: 'Andros Townsend',
        teamShortName: 'CRY',
        shortName: 'A. Townsend' },
    eligibleStatusIds: [ '1', '2' ],
    posId: '702',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '2',
    eligiblePosIds: [ '702' ],
    actions: [ [Object] ] 
},
{ 
    numSpotsAvailableText: 'Reserve spot(s) available',
    description: 'Reserve spot(s) available Limited by Max Players on Team',
    numSpotsAvailableDescription: 'Limited by Max Players on Team',
    numSpotsAvailableIcon: 'LIMITED_BY_MAX',
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '2' 
},
{ 
    scorer: { 
        team: false, 
        rookie: false 
    },
    scorerColumn: 'Totals',
    bold: true,
    cells:[ 
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] 
    ],
    statusId: '9999' 
} ]

// -------------------------------------//

// ------- Outfielder Header ------- //

[{ cells:[ 
    { 
        eventStr: true,
        sortDirection: 1,
        name: 'Opponent',
        shortName: 'Opp',
        key: 'opponent' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORE',
        sortType: 'SCORE',
        name: 'Fantasy Points',
        shortName: 'FPts',
        key: 'fpts' 
    },
    { 
        sortDirection: 1,
        sortKey: 'FPTS_PER_GAME',
        sortType: 'FPTS_PER_GAME',
        name: 'Average Fantasy Points per Game',
        shortName: 'FP/G',
        key: 'fptsPerGame' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6060#-1',
        scipId: '5010#6060#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Games Played',
        shortName: 'GP',
        key: '5010#6060#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6090#-1',
        scipId: '5010#6090#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Goals',
        shortName: 'G',
        key: '5010#6090#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6002#-1',
        scipId: '5010#6002#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Key Passes (Assists on Shots) -- Player assists a shot (including goals)',
        shortName: 'KP',
        key: '5010#6002#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6362#-1',
        scipId: '5010#6362#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Assists (Total)\t -- Official Assists + Fantasy Assists',
        shortName: 'AT',
        key: '5010#6362#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6230#-1',
        scipId: '5010#6230#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Shots on Target',
        shortName: 'SOT',
        key: '5010#6230#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6256#-1',
        scipId: '5010#6256#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Tackles Won -- Total tackles won (winning possession or putting the ball out of play)',
        shortName: 'TkW',
        key: '5010#6256#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6039#-1',
        scipId: '5010#6039#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Dispossessed',
        shortName: 'DIS',
        key: '5010#6039#-1' 
    },
    { 
        sortDirection: -1,
        sortKey: 'SCORING_CATEGORY_5010#6280#-1',
        scipId: '5010#6280#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Yellow Cards',
        shortName: 'YC',
        key: '5010#6280#-1' 
    },
    { 
        sortDirection: -1,
        sortKey: 'SCORING_CATEGORY_5010#6281#-1',
        scipId: '5010#6281#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Second Yellow Cards',
        shortName: 'SYC',
        key: '5010#6281#-1' 
    },
    { 
        sortDirection: -1,
        sortKey: 'SCORING_CATEGORY_5010#6190#-1',
        scipId: '5010#6190#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Red Cards -- If a player receives a red card and then has his red card rescinded at a later time, his red card will remain (i.e. he will have credit for both a red card and a red card rescinded).',
        shortName: 'RC',
        key: '5010#6190#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6029#-1',
        scipId: '5010#6029#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Accurate Crosses (No Corners) -- Same as Accurate Crosses, but excludes corners',
        shortName: 'ACNC',
        key: '5010#6029#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6108#-1',
        scipId: '5010#6108#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Interceptions -- Player intercepts a pass',
        shortName: 'Int',
        key: '5010#6108#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6016#-1',
        scipId: '5010#6016#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Effective Clearances -- Successful defensive clearance - where player under pressure kicks the ball clear of the defensive zone and/or out of play',
        shortName: 'CLR',
        key: '5010#6016#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6019#-1',
        scipId: '5010#6019#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Successful Dribbles (Contests Succeeded) -- Total dribbles where a player beats an opponent - no overruns',
        shortName: 'CoS',
        key: '5010#6019#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6007#-1',
        scipId: '5010#6007#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Aerials Won -- Successful aerial duels (the definition of an aerial duel is that it is between two players - either both jumping or only one jumping and the other contesting the header by making it difficult to win - and one player has to win the contest with a header OR if it is between an outfield player and a goalkeeper then the goalkeeper is allowed to punch it clear)',
        shortName: 'AER',
        key: '5010#6007#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6106#-1',
        scipId: '5010#6106#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Hat Tricks -- Player scores 3 goals in a game',
        shortName: 'HT',
        key: '5010#6106#-1' 
    },
    { 
        sortDirection: -1,
        sortKey: 'SCORING_CATEGORY_5010#6332#-1',
        scipId: '5010#6332#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Penalty Kicks Missed -- Number of penalty kicks where the shooter did not score',
        shortName: 'PKM',
        key: '5010#6332#-1' 
    },
    { 
        sortDirection: -1,
        sortKey: 'SCORING_CATEGORY_5010#6105#-1',
        scipId: '5010#6105#-1',
        sortType: 'SCORING_CATEGORY',
        name: 'Own Goals -- Goals scored on own net',
        shortName: 'OG',
        key: '5010#6105#-1' 
    },
    { 
        sortDirection: -1,
        sortKey: 'SCORING_CATEGORY_5010#6101#-1',
        scipId: '5010#6101#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Goals Against Outfielders  -- Goals conceded by the team while the player was on the field. Any outfielder will get credit for this stat.',
        shortName: 'GAO',
        key: '5010#6101#-1' 
    },
    { 
        sortDirection: 1,
        sortKey: 'SCORING_CATEGORY_5010#6249#-1',
        scipId: '5010#6249#-1',
        sortType: 'SCORING_CATEGORY',
        name:
         'Clean Sheets On Field -- Awarded to a player who played at least 60 minutes and whose team gave up 0 goals during the time the player was on the field, even if a goal was scored after the player left the field',
        shortName: 'CS',
        key: '5010#6249#-1' 
    } 
] }]

// -------------------------------------//

// --------- Player Stats --------------//

[{
    "_id" : "neoNXa7yYwYiT3E9r",
    "team" : 0,
    "GK" : {
            "id" : "032f9",
            "pos" : "G",
            "name" : "Jordan Pickford",
            "club" : "EVE",
            "stats" : {
                    "FPts" : 6,
                    "FPpG" : 6,
                    "GP" : 1,
                    "CS" : 0,
                    "GA" : 1,
                    "Sv" : 2,
                    "YC" : 0,
                    "PKS" : 0,
                    "KP" : 0,
                    "Int" : 0,
                    "CLR" : 4,
                    "AER" : 3,
                    "RC" : 0
            }
    },
    "OF" : [
            {
                    "id" : "02oo1",
                    "pos" : "D",
                    "name" : "Ben Davies",
                    "club" : "TOT",
                    "stats" : {
                            "FPts" : 0,
                            "FPpG" : 0,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 0,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 1,
                            "DIS" : 1,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 3,
                            "CLR" : 2,
                            "CoS" : 0,
                            "AER" : 2,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 3,
                            "CS" : 0
                    }
            },
            {
                    "id" : "03rn2",
                    "pos" : "D",
                    "name" : "José Holebas",
                    "club" : "WAT",
                    "stats" : {
                            "FPts" : 13,
                            "FPpG" : 13,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 0,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 1,
                            "DIS" : 0,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 1,
                            "CLR" : 4,
                            "CoS" : 1,
                            "AER" : 3,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 0,
                            "CS" : 1
                    }
            },
            {
                    "id" : "02lmo",
                    "pos" : "D",
                    "name" : "Enda Stevens",
                    "club" : "SHU",
                    "stats" : {
                            "FPts" : 11,
                            "FPpG" : 11,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 0,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 2,
                            "DIS" : 3,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 1,
                            "Int" : 3,
                            "CLR" : 1,
                            "CoS" : 0,
                            "AER" : 1,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 0,
                            "CS" : 1
                    }
            },
            {
                    "id" : "038ze",
                    "pos" : "M",
                    "name" : "Alex Iwobi",
                    "club" : "EVE",
                    "stats" : {
                            "FPts" : 5,
                            "FPpG" : 5,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 1,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 1,
                            "DIS" : 1,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 1,
                            "Int" : 0,
                            "CLR" : 0,
                            "CoS" : 1,
                            "AER" : 2,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 1,
                            "CS" : 0
                    }
            },
            {
                    "id" : "03sd5",
                    "pos" : "M",
                    "name" : "Manuel Lanzini",
                    "club" : "WHU",
                    "stats" : {
                            "FPts" : 1,
                            "FPpG" : 1,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 0,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 0,
                            "DIS" : 0,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 1,
                            "Int" : 0,
                            "CLR" : 0,
                            "CoS" : 0,
                            "AER" : 0,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 1,
                            "CS" : 0
                    }
            },
            {
                    "id" : "046v3",
                    "pos" : "M",
                    "name" : "Roberto Pereyra",
                    "club" : "WAT",
                    "stats" : {
                            "FPts" : 4,
                            "FPpG" : 4,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 1,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 0,
                            "DIS" : 0,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 0,
                            "CLR" : 0,
                            "CoS" : 1,
                            "AER" : 0,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 0,
                            "CS" : 1
                    }
            },
            {
                    "id" : "04qr6",
                    "pos" : "M",
                    "name" : "Rúben Neves",
                    "club" : "WOL",
                    "stats" : {
                            "FPts" : 1,
                            "FPpG" : 1,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 0,
                            "AT" : 0,
                            "SOT" : 0,
                            "TkW" : 1,
                            "DIS" : 1,
                            "YC" : 1,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 3,
                            "CLR" : 3,
                            "CoS" : 0,
                            "AER" : 0,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 0,
                            "CS" : 1
                    }
            },
            {
                    "id" : "0410j",
                    "pos" : "F",
                    "name" : "Tammy Abraham",
                    "club" : "CHE",
                    "stats" : {
                            "FPts" : 17,
                            "FPpG" : 17,
                            "GP" : 1,
                            "G" : 1,
                            "KP" : 1,
                            "AT" : 0,
                            "SOT" : 3,
                            "TkW" : 0,
                            "DIS" : 3,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 0,
                            "CLR" : 1,
                            "CoS" : 0,
                            "AER" : 3,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 1,
                            "CS" : 0
                    }
            },
            {
                    "id" : "03dxq",
                    "pos" : "F",
                    "name" : "Danny Ings",
                    "club" : "SOU",
                    "stats" : {
                            "FPts" : 17,
                            "FPpG" : 17,
                            "GP" : 1,
                            "G" : 1,
                            "KP" : 1,
                            "AT" : 0,
                            "SOT" : 2,
                            "TkW" : 1,
                            "DIS" : 0,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 0,
                            "CLR" : 0,
                            "CoS" : 1,
                            "AER" : 0,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 3,
                            "CS" : 0
                    }
            },
            {
                    "id" : "055sk",
                    "pos" : "F",
                    "name" : "Nicolas Pépé",
                    "club" : "ARS",
                    "stats" : {
                            "FPts" : 10,
                            "FPpG" : 10,
                            "GP" : 1,
                            "G" : 0,
                            "KP" : 1,
                            "AT" : 1,
                            "SOT" : 0,
                            "TkW" : 1,
                            "DIS" : 3,
                            "YC" : 0,
                            "SYC" : 0,
                            "RC" : 0,
                            "ACNC" : 0,
                            "Int" : 0,
                            "CLR" : 0,
                            "CoS" : 2,
                            "AER" : 1,
                            "HT" : 0,
                            "PKM" : 0,
                            "OG" : 0,
                            "GAO" : 0,
                            "CS" : 1
                    }
            }
    ]
}]

// ------------------------------------- //

// https://www.fantrax.com/fantasy/league/fme67lofjyyvq48x/team/roster;pageNumber=1;period=16;seasonOrProjection=SEASON_919_BY_PERIOD;timeframeTypeCode=BY_PERIOD;scoringCategoryType=5;statsType=1;view=STATS;teamId=u438nol2jyyvq496;adminMode=false;startDate=2019-08-09;endDate=2020-05-18;lineupChangeSystem=EASY_CLICK;daily=false;origDaily=false;

/*
{data: {sDate: "3:58 PM EST", adrt: 45, up: "9.1.5"}, roles: ["02"], responses: [{data: {,…}}]}
data: {sDate: "3:58 PM EST", adrt: 45, up: "9.1.5"}
sDate: "3:58 PM EST"
adrt: 45
up: "9.1.5"
roles: ["02"]
0: "02"
responses: [{data: {,…}}]
0: {data: {,…}}
data: {,…}
settings: {logoUploaded: true, logoUrl: "https://img.fantrax.com/logos/lgLogo_pzpj8xpbjzfkzxwf_256.jpg"}
logoUploaded: true
logoUrl: "https://img.fantrax.com/logos/lgLogo_pzpj8xpbjzfkzxwf_256.jpg"
scoringCategoryTypes: [{value: "Tracked", key: "5"}, {value: "Scored", key: "6"}, {value: "Standard", key: "1"}]
0: {value: "Tracked", key: "5"}
value: "Tracked"
key: "5"
1: {value: "Scored", key: "6"}
value: "Scored"
key: "6"
2: {value: "Standard", key: "1"}
value: "Standard"
key: "1"
teamHeadingInfo: {h2hRecord: {name: "Record", shortName: "Rec", value: "3-0-13"},…}
h2hRecord: {name: "Record", shortName: "Rec", value: "3-0-13"}
name: "Record"
shortName: "Rec"
value: "3-0-13"
rank: {name: "Rank", shortName: "Rk", value: "10th"}
name: "Rank"
shortName: "Rk"
value: "10th"
owners: {owners: "Owner(s)", shortName: "Own", value: "Randoldinho"}
owners: "Owner(s)"
shortName: "Own"
value: "Randoldinho"
periodOppnentTeamIds: ["7fbk0wo5jyyvq496"]
0: "7fbk0wo5jyyvq496"
tabs: [{code: "STATS", text: "Stats"}, {code: "FPTS", text: "Fantasy Points"},…]
0: {code: "STATS", text: "Stats"}
code: "STATS"
text: "Stats"
1: {code: "FPTS", text: "Fantasy Points"}
code: "FPTS"
text: "Fantasy Points"
2: {code: "OVERVIEW", text: "Trends"}
code: "OVERVIEW"
text: "Trends"
3: {code: "SCHEDULE_PERIOD", text: "Schedule - Period"}
code: "SCHEDULE_PERIOD"
text: "Schedule - Period"
4: {code: "SCHEDULE_FULL", text: "Schedule - Full"}
code: "SCHEDULE_FULL"
text: "Schedule - Full"
5: {code: "GAMES_PER_POS", text: "Min/Max"}
code: "GAMES_PER_POS"
text: "Min/Max"
miscData: {displayedMaxDate: 1589749199000,…}
displayedMaxDate: 1589749199000
statusTotals: [{total: 11, max: 11, name: "Active", id: "1"}, {total: 5, max: 5, name: "Reserve", id: "2"}]
0: {total: 11, max: 11, name: "Active", id: "1"}
total: 11
max: 11
name: "Active"
id: "1"
1: {total: 5, max: 5, name: "Reserve", id: "2"}
total: 5
max: 5
name: "Reserve"
id: "2"
showConfirmWindow: true
periodName: "Gameweek"
transactionSalaryBudgetInfo: []
autoSubsOrderingType: "NONE"
displayedMinDate: 1565298000000
alwaysShowPosition: false
autoSubmitLineupChanges: false
applyToFuturePeriods: true
tradesAllowed: true
showPendingTransactions: true
claimsDropsAllowed: false
alwaysShowPositionIds: []
dataLists: {teamRosterViewTypeIds: ["1", "3", "5", "6"]}
teamRosterViewTypeIds: ["1", "3", "5", "6"]
0: "1"
1: "3"
2: "5"
3: "6"
myTeamIds: ["rsf8t6ykjyyvq496"]
0: "rsf8t6ykjyyvq496"
goBackDays: [1, 7, 14, 30, 60]
0: 1
1: 7
2: 14
3: 30
4: 60
rosterDisplayMap: []
hideRowsLineupChange: false
tables: [{scGroup: "5020", statusTotals: [{total: 1, name: "Active", id: "1"}],…}, {scGroup: "5010",…}]
0: {scGroup: "5020", statusTotals: [{total: 1, name: "Active", id: "1"}],…}
scGroup: "5020"
statusTotals: [{total: 1, name: "Active", id: "1"}]
0: {total: 1, name: "Active", id: "1"}
total: 1
name: "Active"
id: "1"
scGroupScorerHeader: "Goalkeeper"
header: {cells: [{eventStr: true, sortDirection: 1, name: "Opponent", shortName: "Opp", key: "opponent"},…]}
cells: [{eventStr: true, sortDirection: 1, name: "Opponent", shortName: "Opp", key: "opponent"},…]
0: {eventStr: true, sortDirection: 1, name: "Opponent", shortName: "Opp", key: "opponent"}
eventStr: true
sortDirection: 1
name: "Opponent"
shortName: "Opp"
key: "opponent"
1: {sortDirection: 1, sortKey: "SCORE", sortType: "SCORE", name: "Fantasy Points", shortName: "FPts",…}
sortDirection: 1
sortKey: "SCORE"
sortType: "SCORE"
name: "Fantasy Points"
shortName: "FPts"
key: "fpts"
2: {sortDirection: 1, sortKey: "FPTS_PER_GAME", sortType: "FPTS_PER_GAME",…}
sortDirection: 1
sortKey: "FPTS_PER_GAME"
sortType: "FPTS_PER_GAME"
name: "Average Fantasy Points per Game"
shortName: "FP/G"
key: "fptsPerGame"
3: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6060#-1", scipId: "5020#6060#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6060#-1"
scipId: "5020#6060#-1"
sortType: "SCORING_CATEGORY"
name: "Games Played"
shortName: "GP"
key: "5020#6060#-1"
4: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6250#-1", scipId: "5020#6250#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6250#-1"
scipId: "5020#6250#-1"
sortType: "SCORING_CATEGORY"
name: "Clean Sheets -- Awarded to a player who played at least 60 minutes and whose team gave up 0 goals that game."
shortName: "CS"
key: "5020#6250#-1"
5: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5020#6112#-1", scipId: "5020#6112#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5020#6112#-1"
scipId: "5020#6112#-1"
sortType: "SCORING_CATEGORY"
name: "Goals Against -- Goals scored by opposing team while the player is on the field"
shortName: "GA"
key: "5020#6112#-1"
6: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6200#-1", scipId: "5020#6200#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6200#-1"
scipId: "5020#6200#-1"
sortType: "SCORING_CATEGORY"
name: "Saves"
shortName: "Sv"
key: "5020#6200#-1"
7: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5020#6280#-1", scipId: "5020#6280#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5020#6280#-1"
scipId: "5020#6280#-1"
sortType: "SCORING_CATEGORY"
name: "Yellow Cards"
shortName: "YC"
key: "5020#6280#-1"
8: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5020#6190#-1", scipId: "5020#6190#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5020#6190#-1"
scipId: "5020#6190#-1"
sortType: "SCORING_CATEGORY"
name: "Red Cards -- If a player receives a red card and then has his red card rescinded at a later time, his red card will remain (i.e. he will have credit for both a red card and a red card rescinded)."
shortName: "RC"
key: "5020#6190#-1"
9: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6170#-1", scipId: "5020#6170#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6170#-1"
scipId: "5020#6170#-1"
sortType: "SCORING_CATEGORY"
name: "Penalty Kick Saves -- Number of penalty kicks saved by the goalie"
shortName: "PKS"
key: "5020#6170#-1"
10: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6002#-1", scipId: "5020#6002#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6002#-1"
scipId: "5020#6002#-1"
sortType: "SCORING_CATEGORY"
name: "Key Passes (Assists on Shots) -- Player assists a shot (including goals)"
shortName: "KP"
key: "5020#6002#-1"
11: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6108#-1", scipId: "5020#6108#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6108#-1"
scipId: "5020#6108#-1"
sortType: "SCORING_CATEGORY"
name: "Interceptions -- Player intercepts a pass"
shortName: "Int"
key: "5020#6108#-1"
12: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6016#-1", scipId: "5020#6016#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6016#-1"
scipId: "5020#6016#-1"
sortType: "SCORING_CATEGORY"
name: "Effective Clearances -- Successful defensive clearance - where player under pressure kicks the ball clear of the defensive zone and/or out of play"
shortName: "CLR"
key: "5020#6016#-1"
13: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5020#6007#-1", scipId: "5020#6007#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5020#6007#-1"
scipId: "5020#6007#-1"
sortType: "SCORING_CATEGORY"
name: "Aerials Won -- Successful aerial duels (the definition of an aerial duel is that it is between two players - either both jumping or only one jumping and the other contesting the header by making it difficult to win - and one player has to win the contest with a header OR if it is between an outfield player and a goalkeeper then the goalkeeper is allowed to punch it clear)"
shortName: "AER"
key: "5020#6007#-1"
rows: [{,…}, {numSpotsAvailableText: "Reserve spot(s) available",…},…]
0: {,…}
scorer: {teamName: "Manchester United", urlName: "david-de-gea", scorerId: "02ln1", disableLineupChange: true,…}
teamName: "Manchester United"
urlName: "david-de-gea"
scorerId: "02ln1"
disableLineupChange: true
posIdsNoFlex: ["704"]
0: "704"
posShortNames: "G"
team: false
icons: [{tooltip: "Dec 7, 10:45 PM: de Gea allowed a goal while making four...", typeId: "9"}]
0: {tooltip: "Dec 7, 10:45 PM: de Gea allowed a goal while making four...", typeId: "9"}
tooltip: "Dec 7, 10:45 PM: de Gea allowed a goal while making four..."
typeId: "9"
rookie: false
posIds: ["704"]
0: "704"
teamId: "110090"
name: "David de Gea"
teamShortName: "MUN"
shortName: "D. de Gea"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "704"
cells: [{eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}, {content: "3"}, {content: "3"}, {content: "1"},…]
0: {eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}
eventId: "03pbx"
content: "MUN 2<br/>@MCI 1 F"
1: {content: "3"}
content: "3"
2: {content: "3"}
content: "3"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "1"}
content: "1"
6: {content: "4"}
content: "4"
7: {content: "1"}
content: "1"
8: {content: "0"}
content: "0"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["704"]
0: "704"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
1: {numSpotsAvailableText: "Reserve spot(s) available",…}
numSpotsAvailableText: "Reserve spot(s) available"
description: "Reserve spot(s) available Limited by Max Players on Team"
numSpotsAvailableDescription: "Limited by Max Players on Team"
numSpotsAvailableIcon: "LIMITED_BY_MAX"
cells: [{content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""},…]
0: {content: ""}
content: ""
1: {content: ""}
content: ""
2: {content: ""}
content: ""
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
statusId: "2"
2: {scorer: {team: false, rookie: false}, scorerColumn: "Totals", bold: true,…}
scorer: {team: false, rookie: false}
team: false
rookie: false
scorerColumn: "Totals"
bold: true
cells: [{content: ""}, {content: "3"}, {content: "3"}, {content: "1"}, {content: "0"}, {content: "1"},…]
0: {content: ""}
content: ""
1: {content: "3"}
content: "3"
2: {content: "3"}
content: "3"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "1"}
content: "1"
6: {content: "4"}
content: "4"
7: {content: "1"}
content: "1"
8: {content: "0"}
content: "0"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
statusId: "y"
1: {scGroup: "5010",…}
scGroup: "5010"
statusTotals: [{total: 10, name: "Active", id: "1"}, {total: 5, name: "Reserve", id: "2"}]
0: {total: 10, name: "Active", id: "1"}
total: 10
name: "Active"
id: "1"
1: {total: 5, name: "Reserve", id: "2"}
total: 5
name: "Reserve"
id: "2"
scGroupScorerHeader: "Outfielder"
header: {cells: [{eventStr: true, sortDirection: 1, name: "Opponent", shortName: "Opp", key: "opponent"},…]}
cells: [{eventStr: true, sortDirection: 1, name: "Opponent", shortName: "Opp", key: "opponent"},…]
0: {eventStr: true, sortDirection: 1, name: "Opponent", shortName: "Opp", key: "opponent"}
eventStr: true
sortDirection: 1
name: "Opponent"
shortName: "Opp"
key: "opponent"
1: {sortDirection: 1, sortKey: "SCORE", sortType: "SCORE", name: "Fantasy Points", shortName: "FPts",…}
sortDirection: 1
sortKey: "SCORE"
sortType: "SCORE"
name: "Fantasy Points"
shortName: "FPts"
key: "fpts"
2: {sortDirection: 1, sortKey: "FPTS_PER_GAME", sortType: "FPTS_PER_GAME",…}
sortDirection: 1
sortKey: "FPTS_PER_GAME"
sortType: "FPTS_PER_GAME"
name: "Average Fantasy Points per Game"
shortName: "FP/G"
key: "fptsPerGame"
3: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6060#-1", scipId: "5010#6060#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6060#-1"
scipId: "5010#6060#-1"
sortType: "SCORING_CATEGORY"
name: "Games Played"
shortName: "GP"
key: "5010#6060#-1"
4: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6090#-1", scipId: "5010#6090#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6090#-1"
scipId: "5010#6090#-1"
sortType: "SCORING_CATEGORY"
name: "Goals"
shortName: "G"
key: "5010#6090#-1"
5: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6002#-1", scipId: "5010#6002#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6002#-1"
scipId: "5010#6002#-1"
sortType: "SCORING_CATEGORY"
name: "Key Passes (Assists on Shots) -- Player assists a shot (including goals)"
shortName: "KP"
key: "5010#6002#-1"
6: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6362#-1", scipId: "5010#6362#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6362#-1"
scipId: "5010#6362#-1"
sortType: "SCORING_CATEGORY"
name: "Assists (Total)	 -- Official Assists + Fantasy Assists"
shortName: "AT"
key: "5010#6362#-1"
7: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6230#-1", scipId: "5010#6230#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6230#-1"
scipId: "5010#6230#-1"
sortType: "SCORING_CATEGORY"
name: "Shots on Target"
shortName: "SOT"
key: "5010#6230#-1"
8: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6256#-1", scipId: "5010#6256#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6256#-1"
scipId: "5010#6256#-1"
sortType: "SCORING_CATEGORY"
name: "Tackles Won -- Total tackles won (winning possession or putting the ball out of play)"
shortName: "TkW"
key: "5010#6256#-1"
9: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6039#-1", scipId: "5010#6039#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6039#-1"
scipId: "5010#6039#-1"
sortType: "SCORING_CATEGORY"
name: "Dispossessed"
shortName: "DIS"
key: "5010#6039#-1"
10: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5010#6280#-1", scipId: "5010#6280#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5010#6280#-1"
scipId: "5010#6280#-1"
sortType: "SCORING_CATEGORY"
name: "Yellow Cards"
shortName: "YC"
key: "5010#6280#-1"
11: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5010#6281#-1", scipId: "5010#6281#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5010#6281#-1"
scipId: "5010#6281#-1"
sortType: "SCORING_CATEGORY"
name: "Second Yellow Cards"
shortName: "SYC"
key: "5010#6281#-1"
12: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5010#6190#-1", scipId: "5010#6190#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5010#6190#-1"
scipId: "5010#6190#-1"
sortType: "SCORING_CATEGORY"
name: "Red Cards -- If a player receives a red card and then has his red card rescinded at a later time, his red card will remain (i.e. he will have credit for both a red card and a red card rescinded)."
shortName: "RC"
key: "5010#6190#-1"
13: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6029#-1", scipId: "5010#6029#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6029#-1"
scipId: "5010#6029#-1"
sortType: "SCORING_CATEGORY"
name: "Accurate Crosses (No Corners) -- Same as Accurate Crosses, but excludes corners"
shortName: "ACNC"
key: "5010#6029#-1"
14: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6108#-1", scipId: "5010#6108#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6108#-1"
scipId: "5010#6108#-1"
sortType: "SCORING_CATEGORY"
name: "Interceptions -- Player intercepts a pass"
shortName: "Int"
key: "5010#6108#-1"
15: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6016#-1", scipId: "5010#6016#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6016#-1"
scipId: "5010#6016#-1"
sortType: "SCORING_CATEGORY"
name: "Effective Clearances -- Successful defensive clearance - where player under pressure kicks the ball clear of the defensive zone and/or out of play"
shortName: "CLR"
key: "5010#6016#-1"
16: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6019#-1", scipId: "5010#6019#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6019#-1"
scipId: "5010#6019#-1"
sortType: "SCORING_CATEGORY"
name: "Successful Dribbles (Contests Succeeded) -- Total dribbles where a player beats an opponent - no overruns"
shortName: "CoS"
key: "5010#6019#-1"
17: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6007#-1", scipId: "5010#6007#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6007#-1"
scipId: "5010#6007#-1"
sortType: "SCORING_CATEGORY"
name: "Aerials Won -- Successful aerial duels (the definition of an aerial duel is that it is between two players - either both jumping or only one jumping and the other contesting the header by making it difficult to win - and one player has to win the contest with a header OR if it is between an outfield player and a goalkeeper then the goalkeeper is allowed to punch it clear)"
shortName: "AER"
key: "5010#6007#-1"
18: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6106#-1", scipId: "5010#6106#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6106#-1"
scipId: "5010#6106#-1"
sortType: "SCORING_CATEGORY"
name: "Hat Tricks -- Player scores 3 goals in a game"
shortName: "HT"
key: "5010#6106#-1"
19: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5010#6332#-1", scipId: "5010#6332#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5010#6332#-1"
scipId: "5010#6332#-1"
sortType: "SCORING_CATEGORY"
name: "Penalty Kicks Missed -- Number of penalty kicks where the shooter did not score"
shortName: "PKM"
key: "5010#6332#-1"
20: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5010#6105#-1", scipId: "5010#6105#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5010#6105#-1"
scipId: "5010#6105#-1"
sortType: "SCORING_CATEGORY"
name: "Own Goals -- Goals scored on own net"
shortName: "OG"
key: "5010#6105#-1"
21: {sortDirection: -1, sortKey: "SCORING_CATEGORY_5010#6101#-1", scipId: "5010#6101#-1",…}
sortDirection: -1
sortKey: "SCORING_CATEGORY_5010#6101#-1"
scipId: "5010#6101#-1"
sortType: "SCORING_CATEGORY"
name: "Goals Against Outfielders  -- Goals conceded by the team while the player was on the field. Any outfielder will get credit for this stat."
shortName: "GAO"
key: "5010#6101#-1"
22: {sortDirection: 1, sortKey: "SCORING_CATEGORY_5010#6249#-1", scipId: "5010#6249#-1",…}
sortDirection: 1
sortKey: "SCORING_CATEGORY_5010#6249#-1"
scipId: "5010#6249#-1"
sortType: "SCORING_CATEGORY"
name: "Clean Sheets On Field -- Awarded to a player who played at least 60 minutes and whose team gave up 0 goals during the time the player was on the field, even if a goal was scored after the player left the field"
shortName: "CS"
key: "5010#6249#-1"
rows: [{,…}, {scorer: {teamName: "Tottenham Hotspur", urlName: "davinson-sanchez", scorerId: "04jyc",…},…},…]
0: {,…}
scorer: {teamName: "Arsenal", urlName: "sead-kolasinac", scorerId: "04fjx", disableLineupChange: true,…}
teamName: "Arsenal"
urlName: "sead-kolasinac"
scorerId: "04fjx"
disableLineupChange: true
posIdsNoFlex: ["703"]
0: "703"
posShortNames: "D"
team: false
icons: [{tooltip: "Dec 10, 3:57 PM: Kolasinac had an assist with his lone...", typeId: "9"}]
0: {tooltip: "Dec 10, 3:57 PM: Kolasinac had an assist with his lone...", typeId: "9"}
tooltip: "Dec 10, 3:57 PM: Kolasinac had an assist with his lone..."
typeId: "9"
rookie: false
posIds: ["703"]
0: "703"
teamId: "110000"
name: "Sead Kolasinac"
teamShortName: "ARS"
shortName: "S. Kolasinac"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "703"
cells: [{eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}, {content: "13.25"}, {content: "13.25"},…]
0: {eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}
eventId: "03pc1"
content: "ARS 3<br/>@WHU 1 F"
1: {content: "13.25"}
content: "13.25"
2: {content: "13.25"}
content: "13.25"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "1"}
content: "1"
6: {content: "1"}
content: "1"
7: {content: "0"}
content: "0"
8: {content: "0"}
content: "0"
9: {content: "2"}
content: "2"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "1"}
content: "1"
14: {content: "2"}
content: "2"
15: {content: "1"}
content: "1"
16: {content: "1"}
content: "1"
17: {content: "2"}
content: "2"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "1"}
content: "1"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["703"]
0: "703"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
1: {scorer: {teamName: "Tottenham Hotspur", urlName: "davinson-sanchez", scorerId: "04jyc",…},…}
scorer: {teamName: "Tottenham Hotspur", urlName: "davinson-sanchez", scorerId: "04jyc",…}
teamName: "Tottenham Hotspur"
urlName: "davinson-sanchez"
scorerId: "04jyc"
disableLineupChange: true
posIdsNoFlex: ["703"]
0: "703"
posShortNames: "D"
team: false
icons: [{tooltip: "Dec 8, 8:56 PM: Sanchez kept a clean sheet in...", typeId: "9"}]
0: {tooltip: "Dec 8, 8:56 PM: Sanchez kept a clean sheet in...", typeId: "9"}
tooltip: "Dec 8, 8:56 PM: Sanchez kept a clean sheet in..."
typeId: "9"
rookie: false
posIds: ["703"]
0: "703"
teamId: "110160"
name: "Davinson Sanchez"
teamShortName: "TOT"
shortName: "D. Sanchez"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "703"
cells: [{eventId: "03pbz", content: "BUR 0<br/>@TOT 5 F"}, {content: "15.25"}, {content: "15.25"},…]
0: {eventId: "03pbz", content: "BUR 0<br/>@TOT 5 F"}
eventId: "03pbz"
content: "BUR 0<br/>@TOT 5 F"
1: {content: "15.25"}
content: "15.25"
2: {content: "15.25"}
content: "15.25"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "0"}
content: "0"
6: {content: "0"}
content: "0"
7: {content: "0"}
content: "0"
8: {content: "2"}
content: "2"
9: {content: "1"}
content: "1"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "7"}
content: "7"
16: {content: "0"}
content: "0"
17: {content: "6"}
content: "6"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "0"}
content: "0"
22: {content: "1"}
content: "1"
statusId: "1"
eligiblePosIds: ["703"]
0: "703"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
2: {scorer: {teamName: "Arsenal", urlName: "sokratis-papastathopoulos", scorerId: "04ril",…},…}
scorer: {teamName: "Arsenal", urlName: "sokratis-papastathopoulos", scorerId: "04ril",…}
teamName: "Arsenal"
urlName: "sokratis-papastathopoulos"
scorerId: "04ril"
disableLineupChange: true
posIdsNoFlex: ["703"]
0: "703"
posShortNames: "D"
team: false
rookie: false
posIds: ["703"]
0: "703"
teamId: "110000"
name: "Sokratis"
teamShortName: "ARS"
shortName: "Sokratis"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "703"
cells: [{eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}, {content: "7.25"}, {content: "7.25"},…]
0: {eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}
eventId: "03pc1"
content: "ARS 3<br/>@WHU 1 F"
1: {content: "7.25"}
content: "7.25"
2: {content: "7.25"}
content: "7.25"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "0"}
content: "0"
6: {content: "0"}
content: "0"
7: {content: "0"}
content: "0"
8: {content: "0"}
content: "0"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "1"}
content: "1"
15: {content: "5"}
content: "5"
16: {content: "0"}
content: "0"
17: {content: "7"}
content: "7"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "1"}
content: "1"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["703"]
0: "703"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
3: {,…}
scorer: {teamName: "Manchester City", urlName: "john-stones", scorerId: "02yl5", disableLineupChange: true,…}
teamName: "Manchester City"
urlName: "john-stones"
scorerId: "02yl5"
disableLineupChange: true
posIdsNoFlex: ["703"]
0: "703"
posShortNames: "D"
team: false
icons: [{tooltip: "Undisclosed - Late fitness test (Game-time decision)", typeId: "1"},…]
0: {tooltip: "Undisclosed - Late fitness test (Game-time decision)", typeId: "1"}
tooltip: "Undisclosed - Late fitness test (Game-time decision)"
typeId: "1"
1: {tooltip: "Dec 10, 4:49 PM: Stones (thigh) missed Tuesday's...", typeId: "9"}
tooltip: "Dec 10, 4:49 PM: Stones (thigh) missed Tuesday's..."
typeId: "9"
rookie: false
posIds: ["703"]
0: "703"
teamId: "110080"
name: "John Stones"
teamShortName: "MCI"
shortName: "J. Stones"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "703"
cells: [{eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}, {content: "-2.75"}, {content: "-2.75"},…]
0: {eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}
eventId: "03pbx"
content: "MUN 2<br/>@MCI 1 F"
1: {content: "-2.75"}
content: "-2.75"
2: {content: "-2.75"}
content: "-2.75"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "0"}
content: "0"
6: {content: "0"}
content: "0"
7: {content: "0"}
content: "0"
8: {content: "0"}
content: "0"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "1"}
content: "1"
16: {content: "0"}
content: "0"
17: {content: "1"}
content: "1"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "2"}
content: "2"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["703"]
0: "703"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
4: {posId: "703",…}
posId: "703"
cells: [{content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""},…]
0: {content: ""}
content: ""
1: {content: ""}
content: ""
2: {content: ""}
content: ""
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "1"
5: {,…}
scorer: {teamName: "Norwich City", urlName: "todd-cantwell", scorerId: "051kq", disableLineupChange: true,…}
teamName: "Norwich City"
urlName: "todd-cantwell"
scorerId: "051kq"
disableLineupChange: true
posIdsNoFlex: ["702"]
0: "702"
posShortNames: "M"
team: false
icons: [{tooltip: "Dec 1, 8:18 PM: Cantwell scored one goal on three shots...", typeId: "8"}]
0: {tooltip: "Dec 1, 8:18 PM: Cantwell scored one goal on three shots...", typeId: "8"}
tooltip: "Dec 1, 8:18 PM: Cantwell scored one goal on three shots..."
typeId: "8"
rookie: false
posIds: ["702"]
0: "702"
teamId: "110111"
name: "Todd Cantwell"
teamShortName: "NOR"
shortName: "T. Cantwell"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "702"
cells: [{eventId: "03phz", content: "SHU 2<br/>@NOR 1 F"}, {content: "4"}, {content: "4"}, {content: "1"},…]
0: {eventId: "03phz", content: "SHU 2<br/>@NOR 1 F"}
eventId: "03phz"
content: "SHU 2<br/>@NOR 1 F"
1: {content: "4"}
content: "4"
2: {content: "4"}
content: "4"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "1"}
content: "1"
6: {content: "0"}
content: "0"
7: {content: "1"}
content: "1"
8: {content: "1"}
content: "1"
9: {content: "2"}
content: "2"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "0"}
content: "0"
16: {content: "0"}
content: "0"
17: {content: "0"}
content: "0"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "0"}
content: "0"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["702"]
0: "702"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
6: {,…}
scorer: {teamName: "Wolverhampton", urlName: "joao-filipe-iria-santos-moutinho", scorerId: "04t3s",…}
teamName: "Wolverhampton"
urlName: "joao-filipe-iria-santos-moutinho"
scorerId: "04t3s"
disableLineupChange: true
posIdsNoFlex: ["702"]
0: "702"
posShortNames: "M"
team: false
icons: [{tooltip: "Dec 7, 12:15 AM: Moutinho tallied an assist and seven...", typeId: "9"}]
0: {tooltip: "Dec 7, 12:15 AM: Moutinho tallied an assist and seven...", typeId: "9"}
tooltip: "Dec 7, 12:15 AM: Moutinho tallied an assist and seven..."
typeId: "9"
rookie: false
posIds: ["702"]
0: "702"
teamId: "110191"
name: "João Moutinho"
teamShortName: "WOL"
shortName: "João Moutinho"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "702"
cells: [{eventId: "03pbv", content: "WOL 2<br/>@BHA 2 F"}, {content: "7"}, {content: "7"}, {content: "1"},…]
0: {eventId: "03pbv", content: "WOL 2<br/>@BHA 2 F"}
eventId: "03pbv"
content: "WOL 2<br/>@BHA 2 F"
1: {content: "7"}
content: "7"
2: {content: "7"}
content: "7"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "1"}
content: "1"
6: {content: "0"}
content: "0"
7: {content: "0"}
content: "0"
8: {content: "1"}
content: "1"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "2"}
content: "2"
14: {content: "2"}
content: "2"
15: {content: "1"}
content: "1"
16: {content: "0"}
content: "0"
17: {content: "0"}
content: "0"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "2"}
content: "2"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["702"]
0: "702"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
7: {,…}
scorer: {teamName: "Southampton", urlName: "nathan-redmond", scorerId: "02rll", disableLineupChange: true,…}
teamName: "Southampton"
urlName: "nathan-redmond"
scorerId: "02rll"
disableLineupChange: true
posIdsNoFlex: ["702"]
0: "702"
posShortNames: "M"
team: false
icons: [{tooltip: "Dec 9, 2:34 AM: Redmond attempted three shots (two on...", typeId: "9"}]
0: {tooltip: "Dec 9, 2:34 AM: Redmond attempted three shots (two on...", typeId: "9"}
tooltip: "Dec 9, 2:34 AM: Redmond attempted three shots (two on..."
typeId: "9"
rookie: false
posIds: ["702"]
0: "702"
teamId: "110135"
name: "Nathan Redmond"
teamShortName: "SOU"
shortName: "N. Redmond"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "702"
cells: [{eventId: "03pby", content: "SOU 1<br/>@NEW 2 F"}, {content: "11"}, {content: "11"}, {content: "1"},…]
0: {eventId: "03pby", content: "SOU 1<br/>@NEW 2 F"}
eventId: "03pby"
content: "SOU 1<br/>@NEW 2 F"
1: {content: "11"}
content: "11"
2: {content: "11"}
content: "11"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "0"}
content: "0"
6: {content: "0"}
content: "0"
7: {content: "2"}
content: "2"
8: {content: "4"}
content: "4"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "0"}
content: "0"
16: {content: "3"}
content: "3"
17: {content: "0"}
content: "0"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "2"}
content: "2"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["702"]
0: "702"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
8: {posId: "702",…}
posId: "702"
cells: [{content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""},…]
0: {content: ""}
content: ""
1: {content: ""}
content: ""
2: {content: ""}
content: ""
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "1"
9: {posId: "702",…}
posId: "702"
cells: [{content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""},…]
0: {content: ""}
content: ""
1: {content: ""}
content: ""
2: {content: ""}
content: ""
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "1"
10: {scorer: {teamName: "Arsenal", urlName: "pierre-emerick-aubameyang", scorerId: "04mqy",…},…}
scorer: {teamName: "Arsenal", urlName: "pierre-emerick-aubameyang", scorerId: "04mqy",…}
teamName: "Arsenal"
urlName: "pierre-emerick-aubameyang"
scorerId: "04mqy"
disableLineupChange: true
posIdsNoFlex: ["701"]
0: "701"
posShortNames: "F"
team: false
icons: [{tooltip: "Dec 10, 3:53 PM: Aubameyang had an assist and added a...", typeId: "9"}]
0: {tooltip: "Dec 10, 3:53 PM: Aubameyang had an assist and added a...", typeId: "9"}
tooltip: "Dec 10, 3:53 PM: Aubameyang had an assist and added a..."
typeId: "9"
rookie: false
posIds: ["701"]
0: "701"
teamId: "110000"
name: "Pierre-Emerick Aubameyang"
teamShortName: "ARS"
shortName: "P. Aubameyang"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "701"
cells: [{eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}, {content: "23"}, {content: "23"}, {content: "1"},…]
0: {eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}
eventId: "03pc1"
content: "ARS 3<br/>@WHU 1 F"
1: {content: "23"}
content: "23"
2: {content: "23"}
content: "23"
3: {content: "1"}
content: "1"
4: {content: "1"}
content: "1"
5: {content: "2"}
content: "2"
6: {content: "1"}
content: "1"
7: {content: "1"}
content: "1"
8: {content: "0"}
content: "0"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "1"}
content: "1"
14: {content: "0"}
content: "0"
15: {content: "0"}
content: "0"
16: {content: "1"}
content: "1"
17: {content: "0"}
content: "0"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "1"}
content: "1"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["701"]
0: "701"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
11: {,…}
scorer: {teamName: "Chelsea", urlName: "pedro-rodriguez-ledesma", scorerId: "03uln", disableLineupChange: true,…}
teamName: "Chelsea"
urlName: "pedro-rodriguez-ledesma"
scorerId: "03uln"
disableLineupChange: true
posIdsNoFlex: ["701"]
0: "701"
posShortNames: "F"
team: false
icons: [{tooltip: "Dec 11, 4:33 AM: Pedro was not in the 18-man squad in...", typeId: "9"}]
0: {tooltip: "Dec 11, 4:33 AM: Pedro was not in the 18-man squad in...", typeId: "9"}
tooltip: "Dec 11, 4:33 AM: Pedro was not in the 18-man squad in..."
typeId: "9"
rookie: false
posIds: ["701"]
0: "701"
teamId: "110040"
name: "Pedro"
teamShortName: "CHE"
shortName: "Pedro"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "701"
cells: [{eventId: "03pbw", content: "CHE 1<br/>@EVE 3 F"}, {content: "0"}, {content: "0"}, {content: ""},…]
0: {eventId: "03pbw", content: "CHE 1<br/>@EVE 3 F"}
eventId: "03pbw"
content: "CHE 1<br/>@EVE 3 F"
1: {content: "0"}
content: "0"
2: {content: "0"}
content: "0"
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "1"
eligiblePosIds: ["701"]
0: "701"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
12: {,…}
scorer: {teamName: "Everton", urlName: "richarlison-de-andrade", scorerId: "04io4", disableLineupChange: true,…}
teamName: "Everton"
urlName: "richarlison-de-andrade"
scorerId: "04io4"
disableLineupChange: true
posIdsNoFlex: ["701"]
0: "701"
posShortNames: "F"
team: false
icons: [{tooltip: "Dec 7, 7:03 PM: Richarlison scored the opener and had...", typeId: "9"}]
0: {tooltip: "Dec 7, 7:03 PM: Richarlison scored the opener and had...", typeId: "9"}
tooltip: "Dec 7, 7:03 PM: Richarlison scored the opener and had..."
typeId: "9"
rookie: false
posIds: ["701"]
0: "701"
teamId: "110050"
name: "Richarlison"
teamShortName: "EVE"
shortName: "Richarlison"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "701"
cells: [{eventId: "03pbw", content: "CHE 1<br/>@EVE 3 F"}, {content: "12.5"}, {content: "12.5"},…]
0: {eventId: "03pbw", content: "CHE 1<br/>@EVE 3 F"}
eventId: "03pbw"
content: "CHE 1<br/>@EVE 3 F"
1: {content: "12.5"}
content: "12.5"
2: {content: "12.5"}
content: "12.5"
3: {content: "1"}
content: "1"
4: {content: "1"}
content: "1"
5: {content: "0"}
content: "0"
6: {content: "0"}
content: "0"
7: {content: "2"}
content: "2"
8: {content: "2"}
content: "2"
9: {content: "2"}
content: "2"
10: {content: "1"}
content: "1"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "0"}
content: "0"
16: {content: "1"}
content: "1"
17: {content: "1"}
content: "1"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "1"}
content: "1"
22: {content: "0"}
content: "0"
statusId: "1"
eligiblePosIds: ["701"]
0: "701"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
13: {scorer: {teamName: "Crystal Palace", urlName: "patrick-van-aanholt", scorerId: "02llp",…},…}
scorer: {teamName: "Crystal Palace", urlName: "patrick-van-aanholt", scorerId: "02llp",…}
teamName: "Crystal Palace"
urlName: "patrick-van-aanholt"
scorerId: "02llp"
disableLineupChange: true
posIdsNoFlex: ["703"]
0: "703"
posShortNames: "D"
team: false
icons: [{tooltip: "Undisclosed - Out for next game", typeId: "30"},…]
0: {tooltip: "Undisclosed - Out for next game", typeId: "30"}
tooltip: "Undisclosed - Out for next game"
typeId: "30"
1: {tooltip: "Dec 12, 3:25 PM: Van Aanholt (hamstring) is "working...", typeId: "14"}
tooltip: "Dec 12, 3:25 PM: Van Aanholt (hamstring) is "working..."
typeId: "14"
rookie: false
posIds: ["703"]
0: "703"
teamId: "110045"
name: "Patrick van Aanholt"
teamShortName: "CRY"
shortName: "P. van Aanholt"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "703"
cells: [{eventId: "03pc0", content: "CRY 0<br/>@WAT 0 F"}, {content: "0"}, {content: "0"}, {content: ""},…]
0: {eventId: "03pc0", content: "CRY 0<br/>@WAT 0 F"}
eventId: "03pc0"
content: "CRY 0<br/>@WAT 0 F"
1: {content: "0"}
content: "0"
2: {content: "0"}
content: "0"
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "2"
eligiblePosIds: ["703"]
0: "703"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
14: {,…}
scorer: {teamName: "Manchester City", urlName: "ilkay-gundogan", scorerId: "0435t", disableLineupChange: true,…}
teamName: "Manchester City"
urlName: "ilkay-gundogan"
scorerId: "0435t"
disableLineupChange: true
posIdsNoFlex: ["702"]
0: "702"
posShortNames: "M"
team: false
icons: [{tooltip: "Dec 12, 3:20 PM: Gundogan completed 100 passes and...", typeId: "14"}]
0: {tooltip: "Dec 12, 3:20 PM: Gundogan completed 100 passes and...", typeId: "14"}
tooltip: "Dec 12, 3:20 PM: Gundogan completed 100 passes and..."
typeId: "14"
rookie: false
posIds: ["702"]
0: "702"
teamId: "110080"
name: "Ilkay Gundogan"
teamShortName: "MCI"
shortName: "I. Gundogan"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "702"
cells: [{eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}, {content: "2"}, {content: "2"}, {content: "1"},…]
0: {eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}
eventId: "03pbx"
content: "MUN 2<br/>@MCI 1 F"
1: {content: "2"}
content: "2"
2: {content: "2"}
content: "2"
3: {content: "1"}
content: "1"
4: {content: "0"}
content: "0"
5: {content: "1"}
content: "1"
6: {content: "0"}
content: "0"
7: {content: "0"}
content: "0"
8: {content: "0"}
content: "0"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "0"}
content: "0"
16: {content: "0"}
content: "0"
17: {content: "0"}
content: "0"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "0"}
content: "0"
22: {content: "0"}
content: "0"
statusId: "2"
eligiblePosIds: ["702"]
0: "702"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
15: {,…}
scorer: {teamName: "Chelsea", urlName: "jorge-luiz-frello-filho", scorerId: "04s8k", disableLineupChange: true,…}
teamName: "Chelsea"
urlName: "jorge-luiz-frello-filho"
scorerId: "04s8k"
disableLineupChange: true
posIdsNoFlex: ["702"]
0: "702"
posShortNames: "M"
team: false
icons: [{tooltip: "Dec 11, 4:35 AM: Jorginho won two tackles and recorded...", typeId: "9"}]
0: {tooltip: "Dec 11, 4:35 AM: Jorginho won two tackles and recorded...", typeId: "9"}
tooltip: "Dec 11, 4:35 AM: Jorginho won two tackles and recorded..."
typeId: "9"
rookie: false
posIds: ["702"]
0: "702"
teamId: "110040"
name: "Jorginho"
teamShortName: "CHE"
shortName: "Jorginho"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "702"
cells: [{eventId: "03pbw", content: "CHE 1<br/>@EVE 3 F"}, {content: "0"}, {content: "0"}, {content: ""},…]
0: {eventId: "03pbw", content: "CHE 1<br/>@EVE 3 F"}
eventId: "03pbw"
content: "CHE 1<br/>@EVE 3 F"
1: {content: "0"}
content: "0"
2: {content: "0"}
content: "0"
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "2"
eligiblePosIds: ["702"]
0: "702"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
16: {scorer: {teamName: "Manchester United", urlName: "anthony-martial", scorerId: "03vlm",…},…}
scorer: {teamName: "Manchester United", urlName: "anthony-martial", scorerId: "03vlm",…}
teamName: "Manchester United"
urlName: "anthony-martial"
scorerId: "03vlm"
disableLineupChange: true
posIdsNoFlex: ["701"]
0: "701"
posShortNames: "F"
team: false
icons: [{tooltip: "Dec 7, 10:47 PM: Martial scored a goal while taking...", typeId: "9"}]
0: {tooltip: "Dec 7, 10:47 PM: Martial scored a goal while taking...", typeId: "9"}
tooltip: "Dec 7, 10:47 PM: Martial scored a goal while taking..."
typeId: "9"
rookie: false
posIds: ["701"]
0: "701"
teamId: "110090"
name: "Anthony Martial"
teamShortName: "MUN"
shortName: "A. Martial"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "701"
cells: [{eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}, {content: "16"}, {content: "16"}, {content: "1"},…]
0: {eventId: "03pbx", content: "MUN 2<br/>@MCI 1 F"}
eventId: "03pbx"
content: "MUN 2<br/>@MCI 1 F"
1: {content: "16"}
content: "16"
2: {content: "16"}
content: "16"
3: {content: "1"}
content: "1"
4: {content: "1"}
content: "1"
5: {content: "1"}
content: "1"
6: {content: "0"}
content: "0"
7: {content: "2"}
content: "2"
8: {content: "1"}
content: "1"
9: {content: "0"}
content: "0"
10: {content: "0"}
content: "0"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "0"}
content: "0"
14: {content: "0"}
content: "0"
15: {content: "0"}
content: "0"
16: {content: "0"}
content: "0"
17: {content: "0"}
content: "0"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "0"}
content: "0"
22: {content: "1"}
content: "1"
statusId: "2"
eligiblePosIds: ["701"]
0: "701"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
17: {scorer: {teamName: "West Ham United", urlName: "andriy-yarmolenko", scorerId: "04s1e",…},…}
scorer: {teamName: "West Ham United", urlName: "andriy-yarmolenko", scorerId: "04s1e",…}
teamName: "West Ham United"
urlName: "andriy-yarmolenko"
scorerId: "04s1e"
disableLineupChange: true
posIdsNoFlex: ["701"]
0: "701"
posShortNames: "F"
team: false
icons: [{tooltip: "Back - Late fitness test (Game-time decision)", typeId: "1"}]
0: {tooltip: "Back - Late fitness test (Game-time decision)", typeId: "1"}
tooltip: "Back - Late fitness test (Game-time decision)"
typeId: "1"
rookie: false
posIds: ["701"]
0: "701"
teamId: "110175"
name: "Andriy Yarmolenko"
teamShortName: "WHU"
shortName: "A. Yarmolenko"
eligibleStatusIds: ["1", "2"]
0: "1"
1: "2"
posId: "701"
cells: [{eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}, {content: "0"}, {content: "0"}, {content: ""},…]
0: {eventId: "03pc1", content: "ARS 3<br/>@WHU 1 F"}
eventId: "03pc1"
content: "ARS 3<br/>@WHU 1 F"
1: {content: "0"}
content: "0"
2: {content: "0"}
content: "0"
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "2"
eligiblePosIds: ["701"]
0: "701"
actions: [{typeId: "4"}]
0: {typeId: "4"}
typeId: "4"
18: {numSpotsAvailableText: "Reserve spot(s) available",…}
numSpotsAvailableText: "Reserve spot(s) available"
description: "Reserve spot(s) available Limited by Max Players on Team"
numSpotsAvailableDescription: "Limited by Max Players on Team"
numSpotsAvailableIcon: "LIMITED_BY_MAX"
cells: [{content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""}, {content: ""},…]
0: {content: ""}
content: ""
1: {content: ""}
content: ""
2: {content: ""}
content: ""
3: {content: ""}
content: ""
4: {content: ""}
content: ""
5: {content: ""}
content: ""
6: {content: ""}
content: ""
7: {content: ""}
content: ""
8: {content: ""}
content: ""
9: {content: ""}
content: ""
10: {content: ""}
content: ""
11: {content: ""}
content: ""
12: {content: ""}
content: ""
13: {content: ""}
content: ""
14: {content: ""}
content: ""
15: {content: ""}
content: ""
16: {content: ""}
content: ""
17: {content: ""}
content: ""
18: {content: ""}
content: ""
19: {content: ""}
content: ""
20: {content: ""}
content: ""
21: {content: ""}
content: ""
22: {content: ""}
content: ""
statusId: "2"
19: {scorer: {team: false, rookie: false}, scorerColumn: "Totals", bold: true,…}
scorer: {team: false, rookie: false}
team: false
rookie: false
scorerColumn: "Totals"
bold: true
cells: [{content: ""}, {content: "108.5"}, {content: "9.86"}, {content: "11"}, {content: "3"}, {content: "7"},…]
0: {content: ""}
content: ""
1: {content: "108.5"}
content: "108.5"
2: {content: "9.86"}
content: "9.86"
3: {content: "11"}
content: "11"
4: {content: "3"}
content: "3"
5: {content: "7"}
content: "7"
6: {content: "2"}
content: "2"
7: {content: "8"}
content: "8"
8: {content: "11"}
content: "11"
9: {content: "7"}
content: "7"
10: {content: "1"}
content: "1"
11: {content: "0"}
content: "0"
12: {content: "0"}
content: "0"
13: {content: "4"}
content: "4"
14: {content: "5"}
content: "5"
15: {content: "15"}
content: "15"
16: {content: "6"}
content: "6"
17: {content: "17"}
content: "17"
18: {content: "0"}
content: "0"
19: {content: "0"}
content: "0"
20: {content: "0"}
content: "0"
21: {content: "10"}
content: "10"
22: {content: "2"}
content: "2"
statusId: "y"
displayedSelections: {displayedStatsType: "1", displayedPeriod: 16, adminMode: false, displayedView: "STATS",…}
displayedStatsType: "1"
displayedPeriod: 16
adminMode: false
displayedView: "STATS"
lineupChangeSystem: "EASY_CLICK"
displayedStartDate: 1565298000000
displayedScoringCategoryType: "5"
displayedFantasyTeamId: "u438nol2jyyvq496"
displayedViewType: "1"
displayedSeasonOrProjection: {standard: true, code: "SEASON_919_BY_PERIOD", endDate: 1589774399000, name: "2019-2020 - Game Week",…}
standard: true
code: "SEASON_919_BY_PERIOD"
endDate: 1589774399000
name: "2019-2020 - Game Week"
shortName: "2019-2020 Reg - Game Week"
timeframeTypeCode: "BY_PERIOD"
startDate: 1565323200000
displayedEndDate: 1589749200000
fantasyTeams: [{logoUrl256: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png",…},…]
0: {logoUrl256: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png",…}
logoUrl256: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png"
name: "FC Važiin"
logoUrl512: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.svg"
id: "drrutahvjyyvq496"
logoUrl128: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png"
shortName: "jssagim"
commissioner: false
1: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_256.jpg", name: "Hendrik Toots",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_256.jpg"
name: "Hendrik Toots"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_512.jpg"
id: "879b500ljyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_128.jpg"
shortName: "Sambla20"
commissioner: false
logoId: "znxsg0bejzpsqh5u"
2: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_256.jpg",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_256.jpg"
name: "Imelise soomlase muinasjutt"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_512.jpg"
id: "we0lst20jyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_128.jpg"
shortName: "priitros"
commissioner: false
logoId: "jeumddn7jzi7awra"
3: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_256.jpg", name: "JK Nihhuijaa",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_256.jpg"
name: "JK Nihhuijaa"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_512.jpg"
id: "rsf8t6ykjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_128.jpg"
shortName: "KK"
commissioner: false
logoId: "o9uknbikjkauspvs"
4: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_256.jpg", name: "Kuusk Hernesto",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_256.jpg"
name: "Kuusk Hernesto"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_512.jpg"
id: "7fbk0wo5jyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_128.jpg"
shortName: "Virmo"
commissioner: false
logoId: "q23vsu18jo0du3vw"
5: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_256.jpg", name: "Kõhutunde Mart",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_256.jpg"
name: "Kõhutunde Mart"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_512.jpg"
id: "3tuj2hnpjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_128.jpg"
shortName: "Mardu"
commissioner: false
logoId: "a8xdqj6ijzekhalz"
6: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_256.jpg", name: "Kümme kaamlit",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_256.jpg"
name: "Kümme kaamlit"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_512.jpg"
id: "8y863qggjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_128.jpg"
shortName: "nogija"
commissioner: false
logoId: "oo2o0ks2k2k4waxv"
7: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_256.jpg", name: "PJK",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_256.jpg"
name: "PJK"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_512.jpg"
id: "aoj4nusxjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_128.jpg"
shortName: "hendrikt"
commissioner: false
logoId: "es8kf9tsk0jiepci"
8: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_256.jpg", name: "Toots",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_256.jpg"
name: "Toots"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_512.jpg"
id: "u438nol2jyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_128.jpg"
shortName: "Toots"
commissioner: true
logoId: "396706iqk13kxag3"
9: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_256.jpg", name: "Toots Hendrik",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_256.jpg"
name: "Toots Hendrik"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_512.jpg"
id: "9yn20ljojyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_128.jpg"
shortName: "kormoran"
commissioner: false
logoId: "7e83nxcqk0ro07ov"
displayedLists: {,…}
statsTypes: [{code: "REAL", name: "Premier League", id: "1"}, {code: "FANTASY", name: "Fantasy Team", id: "2"},…]
0: {code: "REAL", name: "Premier League", id: "1"}
code: "REAL"
name: "Premier League"
id: "1"
1: {code: "FANTASY", name: "Fantasy Team", id: "2"}
code: "FANTASY"
name: "Fantasy Team"
id: "2"
2: {code: "FANTASY_FULL", name: "Full Fantasy Team", id: "3"}
code: "FANTASY_FULL"
name: "Full Fantasy Team"
id: "3"
goBackDays: [1, 7, 14, 30, 60]
0: 1
1: 7
2: 14
3: 30
4: 60
scoringCategoryTypes: [{value: "Tracked", key: "5"}, {value: "Scored", key: "6"}, {value: "Standard", key: "1"}]
0: {value: "Tracked", key: "5"}
value: "Tracked"
key: "5"
1: {value: "Scored", key: "6"}
value: "Scored"
key: "6"
2: {value: "Standard", key: "1"}
value: "Standard"
key: "1"
seasonOrProjections: [,…]
0: {standard: true, code: "SEASON_919_YEAR_TO_DATE", endDate: 1589774399000, name: "2019-2020 - YTD",…}
standard: true
code: "SEASON_919_YEAR_TO_DATE"
endDate: 1589774399000
name: "2019-2020 - YTD"
showGoBackDays: true
shortName: "2019-2020 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1565323200000
1: {standard: true, code: "SEASON_919_BY_PERIOD", endDate: 1589774399000, name: "2019-2020 - Game Week",…}
standard: true
code: "SEASON_919_BY_PERIOD"
endDate: 1589774399000
name: "2019-2020 - Game Week"
showGoBackDays: true
shortName: "2019-2020 Reg - Game Week"
timeframeTypeCode: "BY_PERIOD"
startDate: 1565323200000
2: {standard: true, code: "SEASON_919_BY_DATE", endDate: 1589774399000, name: "2019-2020 - Dates",…}
standard: true
code: "SEASON_919_BY_DATE"
endDate: 1589774399000
name: "2019-2020 - Dates"
showGoBackDays: true
shortName: "2019-2020 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1565323200000
3: {standard: true, code: "SEASON_918_YEAR_TO_DATE", endDate: 1557719999000, name: "2018-2019 - YTD",…}
standard: true
code: "SEASON_918_YEAR_TO_DATE"
endDate: 1557719999000
name: "2018-2019 - YTD"
shortName: "2018-2019 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1533873600000
4: {standard: true, code: "SEASON_918_BY_DATE", endDate: 1557719999000, name: "2018-2019 - Dates",…}
standard: true
code: "SEASON_918_BY_DATE"
endDate: 1557719999000
name: "2018-2019 - Dates"
shortName: "2018-2019 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1533873600000
5: {standard: true, code: "SEASON_917_YEAR_TO_DATE", endDate: 1526443199000, name: "2017-2018 - YTD",…}
standard: true
code: "SEASON_917_YEAR_TO_DATE"
endDate: 1526443199000
name: "2017-2018 - YTD"
shortName: "2017-2018 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1502424000000
6: {standard: true, code: "SEASON_917_BY_DATE", endDate: 1526443199000, name: "2017-2018 - Dates",…}
standard: true
code: "SEASON_917_BY_DATE"
endDate: 1526443199000
name: "2017-2018 - Dates"
shortName: "2017-2018 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1502424000000
7: {standard: true, code: "SEASON_916_YEAR_TO_DATE", endDate: 1495425599000, name: "2016-2017 - YTD",…}
standard: true
code: "SEASON_916_YEAR_TO_DATE"
endDate: 1495425599000
name: "2016-2017 - YTD"
shortName: "2016-2017 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1471060800000
8: {standard: true, code: "SEASON_916_BY_DATE", endDate: 1495425599000, name: "2016-2017 - Dates",…}
standard: true
code: "SEASON_916_BY_DATE"
endDate: 1495425599000
name: "2016-2017 - Dates"
shortName: "2016-2017 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1471060800000
9: {standard: true, code: "SEASON_915_YEAR_TO_DATE", endDate: 1463543999000, name: "2015-2016 - YTD",…}
standard: true
code: "SEASON_915_YEAR_TO_DATE"
endDate: 1463543999000
name: "2015-2016 - YTD"
shortName: "2015-2016 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1439006400000
10: {standard: true, code: "SEASON_915_BY_DATE", endDate: 1463543999000, name: "2015-2016 - Dates",…}
standard: true
code: "SEASON_915_BY_DATE"
endDate: 1463543999000
name: "2015-2016 - Dates"
shortName: "2015-2016 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1439006400000
11: {standard: true, code: "SEASON_914_YEAR_TO_DATE", endDate: 1432526399000, name: "2014-2015 - YTD",…}
standard: true
code: "SEASON_914_YEAR_TO_DATE"
endDate: 1432526399000
name: "2014-2015 - YTD"
shortName: "2014-2015 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1408161600000
12: {standard: true, code: "SEASON_914_BY_DATE", endDate: 1432526399000, name: "2014-2015 - Dates",…}
standard: true
code: "SEASON_914_BY_DATE"
endDate: 1432526399000
name: "2014-2015 - Dates"
shortName: "2014-2015 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1408161600000
13: {standard: true, code: "SEASON_913_YEAR_TO_DATE", endDate: 1399867199000, name: "2013-2014 - YTD",…}
standard: true
code: "SEASON_913_YEAR_TO_DATE"
endDate: 1399867199000
name: "2013-2014 - YTD"
shortName: "2013-2014 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1376712000000
14: {standard: true, code: "SEASON_913_BY_DATE", endDate: 1399867199000, name: "2013-2014 - Dates",…}
standard: true
code: "SEASON_913_BY_DATE"
endDate: 1399867199000
name: "2013-2014 - Dates"
shortName: "2013-2014 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1376712000000
15: {standard: true, code: "SEASON_912_YEAR_TO_DATE", endDate: 1369022399000, name: "2012-2013 - YTD",…}
standard: true
code: "SEASON_912_YEAR_TO_DATE"
endDate: 1369022399000
name: "2012-2013 - YTD"
shortName: "2012-2013 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1345262400000
16: {standard: true, code: "SEASON_912_BY_DATE", endDate: 1369022399000, name: "2012-2013 - Dates",…}
standard: true
code: "SEASON_912_BY_DATE"
endDate: 1369022399000
name: "2012-2013 - Dates"
shortName: "2012-2013 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1345262400000
17: {standard: true, code: "SEASON_911_YEAR_TO_DATE", endDate: 1336967999000, name: "2011-2012 - YTD",…}
standard: true
code: "SEASON_911_YEAR_TO_DATE"
endDate: 1336967999000
name: "2011-2012 - YTD"
shortName: "2011-2012 Reg - YTD"
timeframeTypeCode: "YEAR_TO_DATE"
startDate: 1313208000000
18: {standard: true, code: "SEASON_911_BY_DATE", endDate: 1336967999000, name: "2011-2012 - Dates",…}
standard: true
code: "SEASON_911_BY_DATE"
endDate: 1336967999000
name: "2011-2012 - Dates"
shortName: "2011-2012 Reg - Dates"
timeframeTypeCode: "BY_DATE"
startDate: 1313208000000
periodList: ["1 (Aug 9 - Aug 11)", "2 (Aug 12 - Aug 19)", "3 (Aug 20 - Aug 25)", "4 (Aug 26 - Sep 1)",…]
0: "1 (Aug 9 - Aug 11)"
1: "2 (Aug 12 - Aug 19)"
2: "3 (Aug 20 - Aug 25)"
3: "4 (Aug 26 - Sep 1)"
4: "5 (Sep 2 - Sep 16)"
5: "6 (Sep 17 - Sep 22)"
6: "7 (Sep 23 - Sep 30)"
7: "8 (Oct 1 - Oct 6)"
8: "9 (Oct 7 - Oct 21)"
9: "10 (Oct 22 - Oct 27)"
10: "11 (Oct 28 - Nov 3)"
11: "12 (Nov 4 - Nov 10)"
12: "13 (Nov 11 - Nov 25)"
13: "14 (Nov 26 - Dec 1)"
14: "15 (Dec 2 - Dec 5)"
15: "16 (Dec 6 - Dec 9)"
16: "17 (Dec 10 - Dec 16)"
17: "18 (Dec 17 - Dec 22)"
18: "19 (Dec 23 - Dec 27)"
19: "20 (Dec 28 - Dec 29)"
20: "21 (Dec 30 - Jan 2)"
21: "22 (Jan 3 - Jan 12)"
22: "23 (Jan 13 - Jan 19)"
23: "24 (Jan 20 - Jan 23)"
24: "25 (Jan 24 - Feb 1)"
25: "26 (Feb 2 - Feb 8)"
26: "27 (Feb 9 - Feb 22)"
27: "28 (Feb 23 - Feb 29)"
28: "29 (Mar 1 - Mar 7)"
29: "30 (Mar 8 - Mar 14)"
30: "31 (Mar 15 - Mar 21)"
31: "32 (Mar 22 - Apr 4)"
32: "33 (Apr 5 - Apr 11)"
33: "34 (Apr 12 - Apr 18)"
34: "35 (Apr 19 - Apr 25)"
35: "36 (Apr 26 - May 2)"
36: "37 (May 3 - May 9)"
37: "38 (May 10 - May 17)"
availableActiveViewType: "ALL_ROWS"
leagueNotices: []






















{data: {sDate: "3:58 PM EST", adrt: 45, up: "9.1.5"}, roles: ["02"],…}
data: {sDate: "3:58 PM EST", adrt: 45, up: "9.1.5"}
sDate: "3:58 PM EST"
adrt: 45
up: "9.1.5"
roles: ["02"]
0: "02"
responses: [{data: {shortcutMenuNew: [{routerLink: "SHORTCUT_ROW", requiresLogin: false,…},…],…}}, {data: {,…}},…]
0: {data: {shortcutMenuNew: [{routerLink: "SHORTCUT_ROW", requiresLogin: false,…},…],…}}
data: {shortcutMenuNew: [{routerLink: "SHORTCUT_ROW", requiresLogin: false,…},…],…}
shortcutMenuNew: [{routerLink: "SHORTCUT_ROW", requiresLogin: false,…},…]
0: {routerLink: "SHORTCUT_ROW", requiresLogin: false,…}
routerLink: "SHORTCUT_ROW"
requiresLogin: false
children: [{requiresLogin: false, linkKey: "FANTASY_HOME", icon: "home", description: "League Home Page",…},…]
0: {requiresLogin: false, linkKey: "FANTASY_HOME", icon: "home", description: "League Home Page",…}
requiresLogin: false
linkKey: "FANTASY_HOME"
icon: "home"
description: "League Home Page"
text: "Home"
url: "/newui/fantasy/home.go"
1: {requiresLogin: false, linkKey: "FANTASY_PLAYERS", icon: "person",…}
requiresLogin: false
linkKey: "FANTASY_PLAYERS"
icon: "person"
description: "Display players and their statistics"
text: "Players"
url: "/newui/fantasy/statistics.go"
2: {requiresLogin: false, linkKey: "TEAM_ROSTER", icon: "group",…}
requiresLogin: false
linkKey: "TEAM_ROSTER"
icon: "group"
description: "Rosters, stats, info of the teams in your league"
text: "Team Roster"
url: "/newui/fantasy/teamRoster.go"
3: {requiresLogin: false, linkKey: "LIVE_SCORING", icon: "fiber_manual_record",…}
requiresLogin: false
linkKey: "LIVE_SCORING"
icon: "fiber_manual_record"
description: "See your league stats update in real-time"
text: "Live Scoring"
url: "/newuixxxxx"
text: "Menu0"
1: {routerLink: "SHORTCUT_ROW", requiresLogin: false,…}
routerLink: "SHORTCUT_ROW"
requiresLogin: false
children: [{requiresLogin: false, linkKey: "FANTASY_STANDINGS", icon: "format_list_numbered",…},…]
0: {requiresLogin: false, linkKey: "FANTASY_STANDINGS", icon: "format_list_numbered",…}
requiresLogin: false
linkKey: "FANTASY_STANDINGS"
icon: "format_list_numbered"
description: "Display standard league standings"
text: "Standings"
url: "/newui/fantasy/standings.go"
1: {requiresLogin: false, linkKey: "TEAM_PREFS", icon: "camera_front",…}
requiresLogin: false
linkKey: "TEAM_PREFS"
icon: "camera_front"
description: "View/edit fields such as team name. logo, e-mail preferences, etc."
text: "My Team Settings"
url: "/newui/fantasy/myTeam.go"
2: {requiresLogin: false, linkKey: "PENDING_TRANSACTIONS", icon: "group_add",…}
requiresLogin: false
linkKey: "PENDING_TRANSACTIONS"
icon: "group_add"
description: "Transactions that are waiting to be processed"
text: "Pending Transactions"
url: "/newui/fantasy/txDetailsPending.go"
3: {requiresLogin: false, linkKey: "TRANSACTION_HISTORY", icon: "history",…}
requiresLogin: false
linkKey: "TRANSACTION_HISTORY"
icon: "history"
description: "Transactions that have already been processed"
text: "Transaction History"
url: "/newui/fantasy/txDetailsHistory.go"
text: "Menu1"
2: {routerLink: "SHORTCUT_ROW", requiresLogin: false, text: "Menu2"}
routerLink: "SHORTCUT_ROW"
requiresLogin: false
text: "Menu2"
shortcutMenu: [{routerLink: "SHORTCUT_ROW", requiresLogin: false,…},…]
0: {routerLink: "SHORTCUT_ROW", requiresLogin: false,…}
routerLink: "SHORTCUT_ROW"
requiresLogin: false
children: [{requiresLogin: false, linkKey: "FANTASY_HOME", icon: "home", description: "League Home Page",…},…]
0: {requiresLogin: false, linkKey: "FANTASY_HOME", icon: "home", description: "League Home Page",…}
requiresLogin: false
linkKey: "FANTASY_HOME"
icon: "home"
description: "League Home Page"
text: "Home"
url: "/newui/fantasy/home.go"
1: {requiresLogin: false, linkKey: "FANTASY_PLAYERS", icon: "person",…}
requiresLogin: false
linkKey: "FANTASY_PLAYERS"
icon: "person"
description: "Display players and their statistics"
text: "Players"
url: "/newui/fantasy/statistics.go"
2: {requiresLogin: false, linkKey: "TEAM_ROSTER", icon: "group",…}
requiresLogin: false
linkKey: "TEAM_ROSTER"
icon: "group"
description: "Rosters, stats, info of the teams in your league"
text: "Team Roster"
url: "/newui/fantasy/teamRoster.go"
3: {requiresLogin: false, linkKey: "LIVE_SCORING", icon: "fiber_manual_record",…}
requiresLogin: false
linkKey: "LIVE_SCORING"
icon: "fiber_manual_record"
description: "See your league stats update in real-time"
text: "Live Scoring"
url: "/newuixxxxx"
text: "Menu0"
1: {routerLink: "SHORTCUT_ROW", requiresLogin: false,…}
routerLink: "SHORTCUT_ROW"
requiresLogin: false
children: [{requiresLogin: false, linkKey: "FANTASY_STANDINGS", icon: "format_list_numbered",…},…]
0: {requiresLogin: false, linkKey: "FANTASY_STANDINGS", icon: "format_list_numbered",…}
requiresLogin: false
linkKey: "FANTASY_STANDINGS"
icon: "format_list_numbered"
description: "Display standard league standings"
text: "Standings"
url: "/newui/fantasy/standings.go"
1: {requiresLogin: false, linkKey: "TEAM_PREFS", icon: "camera_front",…}
requiresLogin: false
linkKey: "TEAM_PREFS"
icon: "camera_front"
description: "View/edit fields such as team name. logo, e-mail preferences, etc."
text: "My Team Settings"
url: "/newui/fantasy/myTeam.go"
2: {requiresLogin: false, linkKey: "PENDING_TRANSACTIONS", icon: "group_add",…}
requiresLogin: false
linkKey: "PENDING_TRANSACTIONS"
icon: "group_add"
description: "Transactions that are waiting to be processed"
text: "Pending Transactions"
url: "/newui/fantasy/txDetailsPending.go"
3: {requiresLogin: false, linkKey: "TRANSACTION_HISTORY", icon: "history",…}
requiresLogin: false
linkKey: "TRANSACTION_HISTORY"
icon: "history"
description: "Transactions that have already been processed"
text: "Transaction History"
url: "/newui/fantasy/txDetailsHistory.go"
text: "Menu1"
2: {routerLink: "SHORTCUT_ROW", requiresLogin: false, text: "Menu2"}
routerLink: "SHORTCUT_ROW"
requiresLogin: false
text: "Menu2"
fantasySettings: {hidePlayerHeadshotsMobile: false, teamName: "JK Nihhuijaa",…}
hidePlayerHeadshotsMobile: false
teamName: "JK Nihhuijaa"
teamLogo: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_128.jpg"
enableSportColors: true
myDefaultTeamId: "rsf8t6ykjyyvq496"
wallImageUrl: "https://img.fantrax.com/logos/lgWall_pgtpcexujzfl1l8b_2048.jpg"
hideLeagueLogo: false
leagueName: "Da Spinning Squad"
myTeamIds: ["rsf8t6ykjyyvq496"]
0: "rsf8t6ykjyyvq496"
sportId: "009"
hidePlayerHeadshotsDesktop: false
subtitle: "2019-2020 Premier League"
season: {displayNameShort: "2019-2020 Reg", endDate: 1589774399000, displayName: "2019-2020", id: "919",…}
displayNameShort: "2019-2020 Reg"
endDate: 1589774399000
displayName: "2019-2020"
id: "919"
startDate: 1565323200000
displayYear: "2019-2020"
leagueHomeStandingsPosition: "1"
contentScaleTypeId: "1"
enableMultiColumnLayoutHome: true
multiColumnLeftWidthHome: 50
commissioner: false
treasurerUsed: false
positionMap: {700: {id: "700", name: "Outfielder", shortName: "OF"},…}
700: {id: "700", name: "Outfielder", shortName: "OF"}
id: "700"
name: "Outfielder"
shortName: "OF"
701: {id: "701", name: "Forward", shortName: "F"}
id: "701"
name: "Forward"
shortName: "F"
702: {id: "702", name: "Midfielder", shortName: "M"}
id: "702"
name: "Midfielder"
shortName: "M"
703: {id: "703", name: "Defender", shortName: "D"}
id: "703"
name: "Defender"
shortName: "D"
704: {id: "704", name: "Goalkeeper", shortName: "G"}
id: "704"
name: "Goalkeeper"
shortName: "G"
707: {id: "707", name: "Team Outfielder", shortName: "TmOF"}
id: "707"
name: "Team Outfielder"
shortName: "TmOF"
708: {id: "708", name: "Team Goalkeepers", shortName: "TmG"}
id: "708"
name: "Team Goalkeepers"
shortName: "TmG"
709: {id: "709", name: "Team", shortName: "Tm"}
id: "709"
name: "Team"
shortName: "Tm"
710: {id: "710", name: "Midfielder/Forward", shortName: "M/F"}
id: "710"
name: "Midfielder/Forward"
shortName: "M/F"
711: {id: "711", name: "Defender/Midfielder", shortName: "D/M"}
id: "711"
name: "Defender/Midfielder"
shortName: "D/M"
fantasyMenu: [{requiresLogin: false, linkKey: "FANTASY_HOME", icon: "home", description: "League Home Page",…},…]
0: {requiresLogin: false, linkKey: "FANTASY_HOME", icon: "home", description: "League Home Page",…}
requiresLogin: false
linkKey: "FANTASY_HOME"
icon: "home"
description: "League Home Page"
text: "Home"
url: "/newui/fantasy/home.go"
1: {requiresLogin: false, linkKey: "FANTASY_STANDINGS", icon: "format_list_numbered",…}
requiresLogin: false
linkKey: "FANTASY_STANDINGS"
icon: "format_list_numbered"
description: "Display standard league standings"
text: "Standings"
url: "/newui/fantasy/standings.go"
2: {requiresLogin: false, linkKey: "FANTASY_PLAYERS", icon: "person",…}
requiresLogin: false
linkKey: "FANTASY_PLAYERS"
icon: "person"
description: "Display players and their statistics"
text: "Players"
url: "/newui/fantasy/statistics.go"
3: {requiresLogin: false, children: [{requiresLogin: false, linkKey: "TEAM_ROSTER", icon: "group",…},…],…}
requiresLogin: false
children: [{requiresLogin: false, linkKey: "TEAM_ROSTER", icon: "group",…},…]
0: {requiresLogin: false, linkKey: "TEAM_ROSTER", icon: "group",…}
requiresLogin: false
linkKey: "TEAM_ROSTER"
icon: "group"
description: "Rosters, stats, info of the teams in your league"
text: "Team Roster"
url: "/newui/fantasy/teamRoster.go"
1: {requiresLogin: false, linkKey: "TEAM_PREFS", icon: "camera_front",…}
requiresLogin: false
linkKey: "TEAM_PREFS"
icon: "camera_front"
description: "View/edit fields such as team name. logo, e-mail preferences, etc."
text: "My Team Settings"
url: "/newui/fantasy/myTeam.go"
2: {requiresLogin: false, icon: "insert_chart",…}
requiresLogin: false
icon: "insert_chart"
description: "Condensed chart showing all teams in your league"
text: "Team Roster Chart"
url: "/newui/fantasy/teamRosterChart.go"
3: {requiresLogin: false, icon: "date_range",…}
requiresLogin: false
icon: "date_range"
description: "The position, status, and other info per period of each player on your team"
text: "Team Service Time"
url: "/newui/fantasy/teamServiceTime.go"
4: {requiresLogin: false, icon: "info_outline", description: "View info about the teams in your league",…}
requiresLogin: false
icon: "info_outline"
description: "View info about the teams in your league"
text: "Team Info"
url: "/newui/fantasy/teamInfo.go"
5: {requiresLogin: false, linkKey: "TEAM_OWNERS", icon: "email",…}
requiresLogin: false
linkKey: "TEAM_OWNERS"
icon: "email"
description: "List of all teams' owners with contact information, and send emails to owners"
text: "Owner List / Send Emails"
url: "/newui/fantasy/teamOwners.go"
6: {requiresLogin: false, icon: "view_list",…}
requiresLogin: false
icon: "view_list"
description: "List of all teams' owners with contact information, and send emails to owners"
text: "Owner List / Send Emails (Old)"
url: "/newui/fantasy/teamOwners.go"
7: {requiresLogin: false, icon: "warning",…}
requiresLogin: false
icon: "warning"
description: "List of all teams' rosters that are in violation of roster rules, including illegal rosters, min/max stat rules, and minors eligibilitiy, where applicable"
text: "Roster Violations"
url: "/newui/fantasy/rosterViolations.go"
8: {requiresLogin: false, icon: "format_list_numbered", description: "Display standard league standings",…}
requiresLogin: false
icon: "format_list_numbered"
description: "Display standard league standings"
text: "Standings (Old)"
url: "/newui/fantasy/standings.go"
linkKey: "TEAM_ROSTER"
description: "Screens related to the teams in your league"
text: "Team"
url: "/newui/fantasy/teamRoster.go"
4: {requiresLogin: false, linkKey: "LIVE_SCORING", icon: "fiber_manual_record",…}
requiresLogin: false
linkKey: "LIVE_SCORING"
icon: "fiber_manual_record"
description: "See your league stats update in real-time"
text: "Live Scoring"
url: "/newuixxxxx"
5: {requiresLogin: false,…}
requiresLogin: false
children: [{requiresLogin: false, icon: "store", description: "View/Edit Trade Block", text: "Trade Block",…},…]
0: {requiresLogin: false, icon: "store", description: "View/Edit Trade Block", text: "Trade Block",…}
requiresLogin: false
icon: "store"
description: "View/Edit Trade Block"
text: "Trade Block"
url: "/newui/fantasy/tradeBlock.go"
1: {requiresLogin: false, linkKey: "PENDING_TRANSACTIONS", icon: "group_add",…}
requiresLogin: false
linkKey: "PENDING_TRANSACTIONS"
icon: "group_add"
description: "Transactions that are waiting to be processed"
text: "Pending Transactions"
url: "/newui/fantasy/txDetailsPending.go"
2: {requiresLogin: false, linkKey: "TRANSACTION_HISTORY", icon: "history",…}
requiresLogin: false
linkKey: "TRANSACTION_HISTORY"
icon: "history"
description: "Transactions that have already been processed"
text: "Transaction History"
url: "/newui/fantasy/txDetailsHistory.go"
3: {requiresLogin: false, icon: "format_list_numbered",…}
requiresLogin: false
icon: "format_list_numbered"
description: "Waiver Wire priority order for all teams in this league. The Commissioner of this league may edit this order."
text: "Waiver Wire Order"
url: "/newui/fantasy/waiverWireOrder.go"
description: "Transaction-related functions"
text: "Transactions"
url: "/newui/fantasy/transactions.go"
6: {requiresLogin: false,…}
requiresLogin: false
children: [{requiresLogin: false, linkKey: "LEAGUE_RULES_SUMMARY", icon: "label_outline",…},…]
0: {requiresLogin: false, linkKey: "LEAGUE_RULES_SUMMARY", icon: "label_outline",…}
requiresLogin: false
linkKey: "LEAGUE_RULES_SUMMARY"
icon: "label_outline"
description: "Display the rules configured for this league"
text: "League Rules Summary"
url: "/newui/fantasy/leagueRulesSummary.go"
1: {requiresLogin: false, icon: "view_agenda",…}
requiresLogin: false
icon: "view_agenda"
description: "View your league's head-to-head schedule for the entire season. The Commissioner of this league may edit this schedule."
text: "Head to Head Schedule"
url: "/newui/fantasy/fantasyMatchups.go"
2: {requiresLogin: false, linkKey: "LEAGUE_FORUM", icon: "forum", description: "League message forum",…}
requiresLogin: false
linkKey: "LEAGUE_FORUM"
icon: "forum"
description: "League message forum"
text: "League Forum"
3: {requiresLogin: false,…}
requiresLogin: false
description: "Create, view and edit notes to help you remember things related to your team or anything else."
text: "Notes"
url: "/newui/fantasy/leagueNotes.go"
4: {requiresLogin: false, icon: "local_library", description: "Articles for this league",…}
requiresLogin: false
icon: "local_library"
description: "Articles for this league"
text: "League Articles"
url: "/newui/fantasy/leagueArticles.go"
5: {requiresLogin: false, icon: "poll", description: "League Polls", text: "League Polls",…}
requiresLogin: false
icon: "poll"
description: "League Polls"
text: "League Polls"
url: "/newui/fantasy/leaguePolls.go"
6: {requiresLogin: false, icon: "playlist_add_check", description: "Result of league's draft",…}
requiresLogin: false
icon: "playlist_add_check"
description: "Result of league's draft"
text: "Draft Results"
url: "/newui/fantasy/draftResults.go"
7: {requiresLogin: false, description: "League History", text: "League History",…}
requiresLogin: false
description: "League History"
text: "League History"
url: "/newui/fantasy/leagueHistory.go"
8: {requiresLogin: false, linkKey: "SYSTEM_LOG", icon: "event",…}
requiresLogin: false
linkKey: "SYSTEM_LOG"
icon: "event"
description: "View log of rules changes and actions performed by system or commissioner"
text: "System Log"
url: "/newui/fantasy/systemLog.go"
9: {requiresLogin: false, icon: "all_out", description: "View all available options", text: "All Options",…}
requiresLogin: false
icon: "all_out"
description: "View all available options"
text: "All Options"
url: "/newui/fantasy/miscellaneous.go"
description: "Various functions for your fantasy league"
text: "Other"
url: "/newui/fantasy/miscellaneous.go"
1: {data: {,…}}
data: {,…}
fantasyTeams: [{logoUrl256: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png",…},…]
0: {logoUrl256: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png",…}
logoUrl256: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png"
name: "FC Važiin"
logoUrl512: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.svg"
id: "drrutahvjyyvq496"
logoUrl128: "https://img.fantrax.com/assets/images/icons/fantasyteam/soccer/soccer_15.png"
shortName: "jssagim"
commissioner: false
1: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_256.jpg", name: "Hendrik Toots",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_256.jpg"
name: "Hendrik Toots"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_512.jpg"
id: "879b500ljyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_znxsg0bejzpsqh5u_128.jpg"
shortName: "Sambla20"
commissioner: false
logoId: "znxsg0bejzpsqh5u"
2: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_256.jpg",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_256.jpg"
name: "Imelise soomlase muinasjutt"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_512.jpg"
id: "we0lst20jyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_jeumddn7jzi7awra_128.jpg"
shortName: "priitros"
commissioner: false
logoId: "jeumddn7jzi7awra"
3: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_256.jpg", name: "JK Nihhuijaa",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_256.jpg"
name: "JK Nihhuijaa"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_512.jpg"
id: "rsf8t6ykjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_o9uknbikjkauspvs_128.jpg"
shortName: "KK"
commissioner: false
logoId: "o9uknbikjkauspvs"
4: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_256.jpg", name: "Kuusk Hernesto",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_256.jpg"
name: "Kuusk Hernesto"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_512.jpg"
id: "7fbk0wo5jyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_q23vsu18jo0du3vw_128.jpg"
shortName: "Virmo"
commissioner: false
logoId: "q23vsu18jo0du3vw"
5: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_256.jpg", name: "Kõhutunde Mart",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_256.jpg"
name: "Kõhutunde Mart"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_512.jpg"
id: "3tuj2hnpjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_a8xdqj6ijzekhalz_128.jpg"
shortName: "Mardu"
commissioner: false
logoId: "a8xdqj6ijzekhalz"
6: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_256.jpg", name: "Kümme kaamlit",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_256.jpg"
name: "Kümme kaamlit"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_512.jpg"
id: "8y863qggjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_oo2o0ks2k2k4waxv_128.jpg"
shortName: "nogija"
commissioner: false
logoId: "oo2o0ks2k2k4waxv"
7: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_256.jpg", name: "PJK",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_256.jpg"
name: "PJK"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_512.jpg"
id: "aoj4nusxjyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_es8kf9tsk0jiepci_128.jpg"
shortName: "hendrikt"
commissioner: false
logoId: "es8kf9tsk0jiepci"
8: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_256.jpg", name: "Toots",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_256.jpg"
name: "Toots"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_512.jpg"
id: "u438nol2jyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_396706iqk13kxag3_128.jpg"
shortName: "Toots"
commissioner: true
logoId: "396706iqk13kxag3"
9: {logoUrl256: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_256.jpg", name: "Toots Hendrik",…}
logoUrl256: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_256.jpg"
name: "Toots Hendrik"
logoUrl512: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_512.jpg"
id: "9yn20ljojyyvq496"
logoUrl128: "https://img.fantrax.com/logos/tmLogo_7e83nxcqk0ro07ov_128.jpg"
shortName: "kormoran"
commissioner: false
logoId: "7e83nxcqk0ro07ov"
2: {data: {,…}}
data: {,…}
columnTypes: [{imageFilename: "authRatingMinors.jpg", code: "MINORS", sortOrder: 1, rank: 1, id: "1"},…]
0: {imageFilename: "authRatingMinors.jpg", code: "MINORS", sortOrder: 1, rank: 1, id: "1"}
imageFilename: "authRatingMinors.jpg"
code: "MINORS"
sortOrder: 1
rank: 1
id: "1"
1: {imageFilename: "authRatingRookie.jpg", code: "ROOKIE", sortOrder: 2, rank: 2, id: "2"}
imageFilename: "authRatingRookie.jpg"
code: "ROOKIE"
sortOrder: 2
rank: 2
id: "2"
2: {imageFilename: "authRatingPro.jpg", code: "PRO", sortOrder: 3, rank: 3, id: "3"}
imageFilename: "authRatingPro.jpg"
code: "PRO"
sortOrder: 3
rank: 3
id: "3"
3: {imageFilename: "authRatingAllStar.jpg", code: "ALL_STAR", sortOrder: 4, rank: 4, id: "4"}
imageFilename: "authRatingAllStar.jpg"
code: "ALL_STAR"
sortOrder: 4
rank: 4
id: "4"
4: {imageFilename: "authRatingHallFame.jpg", code: "HALL_OF_FAME", sortOrder: 5, rank: 5, id: "5"}
imageFilename: "authRatingHallFame.jpg"
code: "HALL_OF_FAME"
sortOrder: 5
rank: 5
id: "5"
selectedTypes: [{imageFilename: "authRatingMinors.jpg", code: "MINORS", sortOrder: 1, rank: 1, id: "1"},…]
0: {imageFilename: "authRatingMinors.jpg", code: "MINORS", sortOrder: 1, rank: 1, id: "1"}
imageFilename: "authRatingMinors.jpg"
code: "MINORS"
sortOrder: 1
rank: 1
id: "1"
1: {imageFilename: "authRatingHallFame.jpg", code: "HALL_OF_FAME", sortOrder: 5, rank: 5, id: "5"}
imageFilename: "authRatingHallFame.jpg"
code: "HALL_OF_FAME"
sortOrder: 5
rank: 5
id: "5"
2: {imageFilename: "authRatingAllStar.jpg", code: "ALL_STAR", sortOrder: 4, rank: 4, id: "4"}
imageFilename: "authRatingAllStar.jpg"
code: "ALL_STAR"
sortOrder: 4
rank: 4
id: "4"
3: {imageFilename: "authRatingPro.jpg", code: "PRO", sortOrder: 3, rank: 3, id: "3"}
imageFilename: "authRatingPro.jpg"
code: "PRO"
sortOrder: 3
rank: 3
id: "3"
4: {imageFilename: "authRatingRookie.jpg", code: "ROOKIE", sortOrder: 2, rank: 2, id: "2"}
imageFilename: "authRatingRookie.jpg"
code: "ROOKIE"
sortOrder: 2
rank: 2
id: "2"
columns: [{,…}, {,…}, {,…}, {,…}, {,…}, {,…}, {,…}, {,…}, {,…}, {,…}]
0: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/09/EPL-Points-Against-150x150.jpg"
author: {name: "Luke Wilkins", sourceName: "Fantraxhq", title: "Writer"}
name: "Luke Wilkins"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-17-epl-points-againsta-strategy-for-streaming"
postDate: 1576147043000
id: "qb4y08gnk42lej98"
synopsis: ""
title: "Fantasy EPL Gameweek 17: EPL Points Against…A Strategy for Streaming"
permalink: "fantasy-epl-gameweek-17-epl-points-againsta-strategy-for-streaming"
1: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/Gameweek-17-Sleepers-Martin-Kelly-150x150.jpg"
author: {name: "The Fantasy Football Chaps", sourceName: "Fantraxhq", title: "Writer"}
name: "The Fantasy Football Chaps"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-17-chaps-choices-sleepers-xi"
postDate: 1576146593000
id: "cu043jw3k42l2cjb"
synopsis: "Looking for a Fantasy EPL differential? We outline a Gameweek 17 Sleepers XI capable of picking up excellent Premier League Draft points!"
title: "Fantasy EPL Gameweek 17: Chaps Choices Sleepers XI"
permalink: "fantasy-epl-gameweek-17-chaps-choices-sleepers-xi"
2: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/Gameweek-17-Waiver-Wire-Ngolo-Kante-150x150.jpg"
author: {name: "The Fantasy Football Chaps", sourceName: "Fantraxhq", title: "Writer"}
name: "The Fantasy Football Chaps"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-17-hot-or-cold-player-rankings"
postDate: 1576061030000
id: "17aukar2k4164afj"
synopsis: "Looking for the best players to target in Fantasy EPL? Look no further than our Gameweek 17 Premier League Hot or Cold Player Rankings!"
title: "Fantasy EPL Gameweek 17: Hot or Cold Player Rankings"
permalink: "fantasy-epl-gameweek-17-hot-or-cold-player-rankings"
3: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/Gameweek-17-Waiver-Wire-Ngolo-Kante-150x150.jpg"
author: {name: "Ibrahim Moustafa", sourceName: "Fantraxhq", title: "Writer"}
name: "Ibrahim Moustafa"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-17-waiver-wire-and-trade-targets"
postDate: 1575887211000
id: "e0mcgug0k3yaq88j"
synopsis: "Ahead of Gameweek 17, look to bring in these players from your Fantrax Fantasy EPL waiver wire during the busy December EPL schedule."
title: "Fantasy EPL Gameweek 17 Waiver Wire and Trade Targets"
permalink: "fantasy-epl-gameweek-17-waiver-wire-and-trade-targets"
4: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/50-Ownership-By-Team-150x150.png"
author: {name: "Luke Wilkins", sourceName: "Fantraxhq", title: "Writer"}
name: "Luke Wilkins"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-16-stats-corner"
postDate: 1575678137000
id: "lpkdgvzpk3uu8n8r"
synopsis: "Stats Corner takes a look at PP90, Lost Points, Expected Goals: Bookends Removed, and a bonus analysis in the build-up to Gameweek 16."
title: "Fantasy EPL Gameweek 16: Stats Corner"
permalink: "fantasy-epl-gameweek-16-stats-corner"
5: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/10/EPL-Points-Against-Tim-Krul-150x150.jpg"
author: {name: "The Fantasy Football Chaps", sourceName: "Fantraxhq", title: "Writer"}
name: "The Fantasy Football Chaps"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-16-chaps-choices-sleepers-xi"
postDate: 1575627853000
id: "w4cjwif1k3u080ze"
synopsis: "Looking for a Fantasy EPL differential? We outline a Gameweek 16 Sleepers XI capable of picking up excellent Premier League Draft points!"
title: "Fantasy EPL Gameweek 16: Chaps Choices Sleepers XI"
permalink: "fantasy-epl-gameweek-16-chaps-choices-sleepers-xi"
6: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/Gameweek-16-Player-Rankings-Benjamin-Mendy-150x150.jpg"
author: {name: "The Fantasy Football Chaps", sourceName: "Fantraxhq", title: "Writer"}
name: "The Fantasy Football Chaps"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-16-hot-or-cold-player-rankings"
postDate: 1575627510000
id: "12o4t5efk3u01yft"
synopsis: "Looking for the best players to target in Fantasy EPL? Look no further than our Gameweek 16 Premier League Hot or Cold Player Rankings!"
title: "Fantasy EPL Gameweek 16: Hot or Cold Player Rankings"
permalink: "fantasy-epl-gameweek-16-hot-or-cold-player-rankings"
7: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/Gameweek-19-Waiver-Wire-Mason-Greenwood-150x150.jpg"
author: {name: "Ibrahim Moustafa", sourceName: "Fantraxhq", title: "Writer"}
name: "Ibrahim Moustafa"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-16-waiver-wire-and-trade-targets"
postDate: 1575542319000
id: "plihc2rak3sl9v5j"
synopsis: "Ahead of Gameweek 16, look to bring in these players from your Fantrax Fantasy EPL waiver wire during the busy December EPL schedule."
title: "Fantasy EPL Gameweek 16: Waiver Wire and Trade Targets"
permalink: "fantasy-epl-gameweek-16-waiver-wire-and-trade-targets"
8: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/10/Gameweek-11-Sleepers-Lucas-Digne-150x150.jpg"
author: {name: "The Fantasy Football Chaps", sourceName: "Fantraxhq", title: "Writer"}
name: "The Fantasy Football Chaps"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-15-chaps-choices-sleepers-xi"
postDate: 1575367973000
id: "ifl4mo72k3ppiy6s"
synopsis: "Looking for a Fantasy EPL differential? We outline a Gameweek 15 Sleepers XI capable of picking up excellent Premier League Draft points!"
title: "Fantasy EPL Gameweek 15: Chaps Choices Sleepers XI"
permalink: "fantasy-epl-gameweek-15-chaps-choices-sleepers-xi"
9: {,…}
smallImageUrl: "https://www.fantraxhq.com/wp-content/uploads/2019/12/Underlying-Numbers-Dejan-Lovren-150x150.jpg"
author: {name: "Luke Wilkins", sourceName: "Fantraxhq", title: "Writer"}
name: "Luke Wilkins"
sourceName: "Fantraxhq"
title: "Writer"
name: "Soccer"
link: "fantasy-epl-gameweek-15-the-underlying-numbers"
postDate: 1575367692000
id: "qeflgoapk3ppcuq8"
synopsis: "Check out which players the underlying numbers identify as targets in the build-up to Gameweeks 15, 16, and 17! Essential Fantasy EPL reading!"
title: "Fantasy EPL Gameweek 15: The Underlying Numbers"
permalink: "fantasy-epl-gameweek-15-the-underlying-numbers"
columnSources: [{showNameUrl: true, code: "FANTRAX", authorManuallyAdded: true, sortOrder: 1, id: "3",…},…]
0: {showNameUrl: true, code: "FANTRAX", authorManuallyAdded: true, sortOrder: 1, id: "3",…}
showNameUrl: true
code: "FANTRAX"
authorManuallyAdded: true
sortOrder: 1
id: "3"
url: "http://www.fantrax.com"
1: {showNameUrl: true, code: "COLLEGE_FOOTBALL_GEEK", authorManuallyAdded: true, sortOrder: 30, id: "2",…}
showNameUrl: true
code: "COLLEGE_FOOTBALL_GEEK"
authorManuallyAdded: true
sortOrder: 30
id: "2"
url: "http://www.collegefootballgeek.com"
2: {showNameUrl: false, code: "ROTOWORLD", authorManuallyAdded: false, sortOrder: 999, id: "1",…}
showNameUrl: false
code: "ROTOWORLD"
authorManuallyAdded: false
sortOrder: 999
id: "1"
url: "http://www.rotoworld.com"
3: {data: {stories: []}}
data: {stories: []}
stories: []
4: {data: {allObjs: {1: {id: "1", code: "ACTIVE", name: "Active", shortName: "Act",…},…},…}}
data: {allObjs: {1: {id: "1", code: "ACTIVE", name: "Active", shortName: "Act",…},…},…}
allObjs: {1: {id: "1", code: "ACTIVE", name: "Active", shortName: "Act",…},…}
1: {id: "1", code: "ACTIVE", name: "Active", shortName: "Act",…}
id: "1"
code: "ACTIVE"
name: "Active"
shortName: "Act"
description: "On this fantasy team's Active section (starting), thus accumulating stats."
color: "FFFFFF"
2: {id: "2", code: "RESERVE", name: "Reserve", shortName: "Res",…}
id: "2"
code: "RESERVE"
name: "Reserve"
shortName: "Res"
description: "On this fantasy team's Reserve section (bench), thus not accumulating stats."
color: "CFCFCF"
3: {id: "3", code: "INJURED_RESERVE", name: "Inj Res", shortName: "IR",…}
id: "3"
code: "INJURED_RESERVE"
name: "Inj Res"
shortName: "IR"
description: "On this fantasy team's Injured Reserve section, thus not accumulating stats."
color: "E9967A"
4: {id: "4", code: "FREE_AGENT", name: "Free Agent", shortName: "FA", description: "Free Agent"}
id: "4"
code: "FREE_AGENT"
name: "Free Agent"
shortName: "FA"
description: "Free Agent"
5: {id: "5", code: "WAIVER_WIRE", name: "Waiver Wire", shortName: "WW", description: "On Waivers"}
id: "5"
code: "WAIVER_WIRE"
name: "Waiver Wire"
shortName: "WW"
description: "On Waivers"
7: {id: "7", code: "INACTIVE", name: "Not On Team", shortName: "-", description: "Not On Team",…}
id: "7"
code: "INACTIVE"
name: "Not On Team"
shortName: "-"
description: "Not On Team"
color: "A1A192"
8: {id: "8", code: "ON_TEAM", name: "On Team", shortName: "T", description: "On a fantasy team roster"}
id: "8"
code: "ON_TEAM"
name: "On Team"
shortName: "T"
description: "On a fantasy team roster"
9: {id: "9", code: "MINORS", name: "Minors", shortName: "Min",…}
id: "9"
code: "MINORS"
name: "Minors"
shortName: "Min"
description: "On this fantasy team's Minor Leagues section, thus not accumulating stats."
color: "90EE90"
y: {id: "y", code: "GRAND_TOTAL"}
id: "y"
code: "GRAND_TOTAL"
z: {id: "z", code: "OUT_OF_LEAGUE", name: "Out of League", shortName: "N/A",…}
id: "z"
code: "OUT_OF_LEAGUE"
name: "Out of League"
shortName: "N/A"
description: "Not in this league anymore because of league rules"
lastModified: 1351921046000



*/



/*

SofaScore API endpoints:

Premier League: {comp_id=17}
Seasons: https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/seasons
League participating teams: https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/season/{season_id}/teams {team_id=category.id}
Team info: https://api.sofascore.com/api/v1/team/{team_id}
Team players: https://api.sofascore.com/api/v1/team/{team_id}/players
Gameweeks: https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/season/{season_id}/rounds {round_id}
Fixtures: https://api.sofascore.com/api/v1/unique-tournament/{comp_id}/season/{season_id}/events/round/{round_id}
Fixture info: https://api.sofascore.com/api/v1/event/{fixture_id}
Fixture lineups: https://api.sofascore.com/api/v1/event/{fixture_id}/lineups
Fixture player stats: https://api.sofascore.com/api/v1/event/{fixture_id}/player/{player_id}/statistics

SofaSocre Lineups

{
	confirmed: true,
	home: {
		players: [
			{
				player: {
					name: "Mathew Ryan",
					slug: "mathew-ryan",
					shortName: "M. Ryan",
					position: "G",
					userCount: 983,
					id: 134029,
					country: {
						alpha2: "AU",
						name: "Australia"
					},
					marketValueCurrency: "€",
					dateOfBirthTimestamp: 702691200
				},
				shirtNumber: 1,
				position: "G",
				substitute: false,
				statistics: {
					totalPass: 30,
					accuratePass: 17,
					totalLongBalls: 19,
					accurateLongBalls: 6,
					totalClearance: 1,
					saves: 1,
					totalKeeperSweeper: 1,
					accurateKeeperSweeper: 1,
					minutesPlayed: 90,
					touches: 37,
					rating: 6.4,
					possessionLostCtrl: 13
				}
			}
		],
		formation: "3-4-1-2",
		playerColor: {
			number: "fafafa",
			outline: "ffff00"
		},
		goalkeeperColor: {
			number: "000000",
			outline: "ffff00"
		},
		missingPlayers: [
			{
				player: {
					name: "Tariq Lamptey",
					firstName: "",
					lastName: "",
					slug: "lamptey-tariq",
					shortName: "T. Lamptey",
					position: "D",
					userCount: 2877,
					id: 914691,
					country: {
						alpha2: "EN",
						name: "England"
					},
					marketValueCurrency: "€",
					dateOfBirthTimestamp: 970272000
				},
				type: "missing",
				reason: 13
			}
		]
    },
    away: {...}	


*/












