var commands = {
    OpenEnEspanolPage: function(tapnumber) {
        this
            .waitForElementVisible('@topMenuBar')
            .click('@meatBallMenu')
            .pause(1000)
            .waitForElementVisible('@secondLevelBar')
            .click('@enEspanol', function() {
                this.windowHandles(function(result) {
                    var handle = result.value[tapnumber];
                    this.switchWindow(handle, function() {
                        this


                    })
                })
            })
        return this
    },
    closePopUpWindow: function() {
        this
            .waitForElementVisible('@popUpWindow')
            .click('@noThanksButton')
            .pause(500)
        return this

    },
    OpenTeamsPage: function() {
        this
            .waitForElementVisible('@topMenuBar')
            .pause(1000)
            .click('@teamsFromTopMenuBar')

        return this
    },
    OpenStandingsPage: function() {
        this
            .waitForElementVisible('@topMenuBar')
            .pause(1000)
            .click('@standingsTopMenuBar')

        return this
    }
}



module.exports = {
    url: 'https://www.nfl.com/',
    commands: [commands],
    elements: {
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