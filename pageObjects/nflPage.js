

module.exports = {
    url: 'https://www.nfl.com/',

    elements: {
        homeBtn: 'img[alt=" logo"]',
        popupClear: '#onesignal-slidedown-cancel-button',
        //home page selectors
        homeShopBtn: 'a[aria-label="Shop Now"]',
        homeMoreNewsBtn: 'a[href="/news"]',
        homeFantasyTabBtn: {
            selector: '(//button[@role="tab"])[2]',
            locateStrategy: 'xpath'
        },
        homeMoreFantasyBtn: 'a[href="/fantasy"]',
        homeWatchLiveBtn: {
            selector: '//p[text()="Watch NFL Network live"]',
            locateStrategy: 'xpath'
        },
        homeVoteBtn: 'a[aria-label="Vote"]',

        //Player page selectors
        playersTab: 'a[title="Players"]',
        playersSearch: '#player-search-input',
        playersSearchBtn: '#player-search-button',
        playersLetters: {
            //use 1 through 26 for each letter
            selector: '(//li[@class="d3-o-tabs__list-item "])[1]',
            locateStrategy: 'xpath'
        },
        playersSearchResults: '.d3-o-table__header',
        playersHeader: '.nfl-c-content-header__roofline',
        playersActiveTab: {
            selector: '(//span[@class="d3-o-tabbed-controls-selector__label"])[1]',
            locateStrategy: 'xpath'
        },
        playersRetiredTab: {
            selector: '(//span[@class="d3-o-tabbed-controls-selector__label"])[2]',
            locateStrategy: 'xpath'
        },
        playersPopular: {
            //popular players 1 through 11 for active, 1 through 9 for retired
            selector: `(//a[@class="d3-o-list__link"])[1]`,
            locateStrategy: 'xpath'
        },
        //Players info section
        playersInfo: '.nfl-o-sub-section__title',
        playersName: '.nfl-c-player-header__title',
        playersHeight: {
            //1-8, height, weight, arms, hands, exp, college, age, hometown
            selector: '(//div[@class="nfl-c-player-info__value"])[1]',
            locateStrategy: 'xpath'
        },
        playersWeight: {
            //1-8, height, weight, arms, hands, exp, college, age, hometown
            selector: '(//div[@class="nfl-c-player-info__value"])[2]',
            locateStrategy: 'xpath'
        },
        playersExp: {
            //1-8, height, weight, arms, hands, exp, college, age, hometown
            selector: '(//div[@class="nfl-c-player-info__value"])[5]',
            locateStrategy: 'xpath'
        },
        //Players Stats Section
        playersStatsBtn: {
            selector: '//a[text()="Stats"]',
            locateStrategy: 'xpath'
        },
        //16 across, 21 Down
        //team (1), G(2), ATT(3), COMP (4), PCT(5), YDS (6), AVG (8)
        //LNG (9), TD (10), INT (11), 1st (12), 20+ (13), SCK (14), SCKY (15), Rate (16)
        pStatPassingIndex: '(//td[@class="nfl-t-stats__col-16"])[1 through 336]',
        pStatSort: '(//th)[1 through 16]',
        pStatTotal: '(//th)[17 through 32]',

    }
}