var newsCommands = {
  //testing news page navigation
  news: function (browser) {
    this
      .pause(2000)
      .click('@popUp')
      .click('@newsHome')
      .pause(1000)
      .click('@latestNews')
      .api.back()
    return this
  }
}

var scoreCommands = {
  //testing scores page navigation
  scores: function (browser) {
    this
      .pause(2000)
      // .click('@popUp')
      .click('@scoresHome')
      .click('#season')
      .waitForElementPresent('#season')
      .useXpath()
      .click('//*[text()="2019"]')
      .waitForElementPresent('//*[text()="2019"]')
      .useCss()
      .click('#week')
      .pause(2000)
      .useXpath()
      .click('//*[text()="Week 10"]')
      .waitForElementPresent('//*[text()="Week 10"]')
    return this
  }
}

var scheduleCommands = {
  //testing schedule page navigation
  schedule: function (browser) {
    this
      .pause(3000)
      // .click('@popUp')
      .click('@scheduleHome')
      .waitForElementPresent('@scheduleHome')
    return this
  }
}

var scheduleNavigationCommands = {
  //testing menu navigation in Schedule
  scheduleNavigation: function (browser, data) {
    this
      .pause(3000)
      // .click('@popUp')
      .click('@scheduleHome')
      .waitForElementPresent('@scheduleHome')
      .click('@teamSchedules')
      .waitForElementPresent('@teamSchedules')
      .click('@snf')
      .waitForElementPresent('@snf')
      .click('@mnf')
      .waitForElementPresent('@mnf')
      .click('@fanPlaybook')
    return this
  }
}
var commands = {
  OpenEnEspanolPage: function (tapnumber) {
    this
      .waitForElementVisible('@topMenuBar')
      .click('@meatBallMenu')
      .pause(1000)
      .waitForElementVisible('@secondLevelBar')
      .click('@enEspanol', function () {
        this.windowHandles(function (result) {
          var handle = result.value[tapnumber];
          this.switchWindow(handle, function () {
            this


          })
        })
      })
    return this
  },
  closePopUpWindow: function () {
    this
      .waitForElementVisible('@popUpWindow')
      .click('@noThanksButton')
      .pause(500)
    return this

  },
  OpenTeamsPage: function () {
    this
      .waitForElementVisible('@topMenuBar')
      .pause(1000)
      .click('@teamsFromTopMenuBar')

    return this
  },
  OpenStandingsPage: function () {
    this
      .waitForElementVisible('@topMenuBar')
      .pause(1000)
      .click('@standingsTopMenuBar')

    return this
  }
}


module.exports = {
  url: 'https://www.nfl.com/',
  commands: [commands, newsCommands, scoreCommands, scheduleCommands, scheduleNavigationCommands],
  elements: {

    //selectors for news page
    newsHome: ('[data-js-hook="c95353d4-8e91-4440-a134-41f0ab00d248"]'),
    popUp: ('#onesignal-slidedown-cancel-button'),
    latestNews: ('[data-link_type="Latest News"'),

    //selectors for scores page
    scoresHome: ('[data-js-hook="a5c716b3-2774-41d6-9580-93394e3f809d"]'),

    //selectors for schedule page
    scheduleHome: ('[data-js-hook="404ef83f-7bed-4e23-b42e-eb84c066ffe5"]'),
    teamSchedules: ('[data-js-hook="ad4615b3-67b6-4030-bb70-7c05518204d6"]'),
    tnf: ('[data-js-hook="cd452046-1a65-43dd-a73a-dd91c1643af5"]'),
    snf: ('[data-js-hook="b947e5c2-7c33-4845-9adc-b9cd9f1a6440"]'),
    mnf: ('[data-js-hook="7ee9cd5f-32ff-4a8a-ae81-285d151253c0"]'),
    buyTickets: ('[data-js-hook="3762a72e-d1e2-4250-afc3-b84916b71826"]'),
    fanPlaybook: ('[data-js-hook="36e523e4-1790-4bad-b9df-a90a681b2bba"]'),

    //Logan's selectors
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
    pStatTotal: '(//th)[20 - 34]',

    //Cesar's Selectors
    //En Español Page
    teamsContainer: 'p[class="hidden-xs hidden-sm hidden-md"]',
    homePage: {
      selector: '//body[@class="home  nfl-body ng-scope homepage"]',
      locateStrategy: 'xpath'
    },
    portada: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[1]',
      locateStrategy: 'xpath'
    },
    marcadores: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[2]',
      locateStrategy: 'xpath'
    },
    calendario: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[3]',
      locateStrategy: 'xpath'
    },
    videos: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[4]',
      locateStrategy: 'xpath'
    },
    fotos: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[5]',
      locateStrategy: 'xpath'
    },
    reglasDelJuego: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[6]',
      locateStrategy: 'xpath'
    },
    posiciones: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[7]',
      locateStrategy: 'xpath'
    },
    fantasy: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[8]',
      locateStrategy: 'xpath'
    },
    herenciaHispana: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[9]',
      locateStrategy: 'xpath'
    },
    foxDeportesInicio: {
      selector: '(//li[@class="fxdCategoryPrimary ng-scope"])[10]',
      locateStrategy: 'xpath'
    },
    logoEnEspanol: {
      selector: '//img[@class="logo-nfl"]',
      locateStrategy: 'xpath'
    },
    suscribete: {
      selector: '//button/*[@target="_blank"]"]',
      locateStrategy: 'xpath'
    },
    //Teams page 
    teamsFromTopMenuBar: {
      selector: '(//li[@class="d3-o-nav__item  "])[5]',
      locateStrategy: 'xpath'
    },
    //from 1 till 16
    nfcTeams: {
      selector: '(//h4[@class="d3-o-media-object__roofline nfl-c-custom-promo__headline"])[]',
      locateStrategy: 'xpath'
    },
    //from 17 till 32
    afcTeams: {
      selector: '(//h4[@class="d3-o-media-object__roofline nfl-c-custom-promo__headline"])[]',
      locateStrategy: 'xpath'
    },
    //from 1 till 32 (NFC Teams 1-16, AFC Team 17-32)
    viewProfil: {
      selector: '(//a[@target="_self"])[]',
      locateStrategy: 'xpath'
    },
    //from 1 till 32 (NFC Teams 1-16, AFC Team 17-32)
    viewFullSite: {
      selector: '(//a[@data-link_name="2nd CTA View Full Site"])[]',
      locateStrategy: 'xpath'
    },
    teamNameHeader: {
      selector: '//div[@class="nfl-c-team-header__title"]',
      locateStrategy: 'xpath'
    },
    info: {
      selector: '(//li/*[contains(text(),"Info")])',
      locateStrategy: 'xpath'
    },
    roster: {
      selector: '(//li/*[contains(text(),"Roster")])',
      locateStrategy: 'xpath'
    },
    stats: {
      selector: '(//li/*[contains(text(),"Stats")])',
      locateStrategy: 'xpath'
    },
    headrersTeamsDivisionNFC: {
      selector: '(//div[@class="d3-l-section-header"])[1]',
      locateStrategy: 'xpath'
    },
    headrersTeamsDivisionAFC: {
      selector: '(//div[@class="d3-l-section-header"])[2]',
      locateStrategy: 'xpath'
    },

    //To open En Español secction 
    meatBallMenu: {
      selector: '//li[@class="d3-o-nav__item  d3-o-nav__item--has-submenu "]',
      locateStrategy: 'xpath'
    },
    enEspanol: {
      selector: '(//li[@class="d3-o-nav__item "])[10]',
      locateStrategy: 'xpath'

    },
    topMenuBar: 'header[role="banner"]',
    secondLevelBar: {
      selector: '//ul[@class="d3-o-nav__dropdown d3-o-list d3-o-nav__list d3-o-nav--is-open"]',
      locateStrategy: 'xpath'

    },
    //
    //Standings 

    standingsTopMenuBar: {
      selector: '(//li[@class="d3-o-nav__item  "])[8]',
      locateStrategy: 'xpath'
    },

    division: {
      selector: '(//li/*[contains(text(),"Division")])',
      locateStrategy: 'xpath'
    },
    conference: {
      selector: '(//li/*[contains(text(),"Conference")])',
      locateStrategy: 'xpath'
    },
    league: {
      selector: '(//li/*[contains(text(),"League")])',
      locateStrategy: 'xpath'

    },
    //Preseason - Regular Season
    sesonDropDown: '#season-dropdown-button',
    //1920 - 2020
    yearDropDow: '#year-dropdown-button',
    //
    //ways to watch
    waysToWatch: {
      selector: '(//li[@class="d3-o-nav__item "])[9]',
      locateStrategy: 'xpath'
    },

    byDevice: 'a[title="BY DEVICE"]',
    byDay: 'a[title="BY DAY"]',
    //
    //pop up window 
    popUpWindow: '#onesignal-slidedown-dialog',
    noThanksButton: '#onesignal-slidedown-cancel-button'

  }
}