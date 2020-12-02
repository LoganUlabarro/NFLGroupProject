var pageObject = {}

module.exports ={
    beforeEach: browser => {
        pageObject = browser.page.nflPage()
            pageObject.navigate()
    },
    after: browser => { 
        pageObject
        .end()
    },
    'news page test': browser => {
        pageObject
        .news(browser)
    },

    'scores page test': browser =>{
        pageObject
        .scores(browser)
    },

    'schedule page test': browser =>{
        pageObject
        .schedule(browser)

    },

    'navigate schedule menu test': browser => {
        pageObject
        .scheduleNavigation(browser)
    }
}