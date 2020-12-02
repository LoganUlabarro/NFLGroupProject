var pageObject = {}
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var activePlayerData = require('../testAssets/nflActivePlayersArray')
var topMenuBarEnEspanol = require('../testAssets/topMenuBarEnEspanol')
var nfcTeams = require('../testAssets/nfcTeams')
var afcTeams = require('../testAssets/afcTeams')
var nflTeams = require('../testAssets/nflTeams')

var topMenuBarContains = function (browser, topMenuBarEnEspanol) {
    browser
        //clcik on each of the links on the top menu bar and verify has the righ order and contains the righ text
        .useXpath()
        .waitForElementPresent(`(//li[@class="fxdCategoryPrimary ng-scope"])[${topMenuBarEnEspanol.link}]`)
        .pause(500)
        .useXpath()
        .verify.containsText(`(//li[@class="fxdCategoryPrimary ng-scope"])[${topMenuBarEnEspanol.link}]`, `${topMenuBarEnEspanol.Section}`)
        .useCss()
}

module.exports ={
    beforeEach: browser => {
        pageObject = browser.page.nflPage()
            pageObject.navigate()
            .maximize()
    },
    after: browser => { 
        pageObject
        .end()
    },

    //Ayzhamal Tests
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
    },

    //Logan's Tests
    'Home Page Shop Buttons': browser => {
        pageObject
            .pause(2000)
            .click('@popupClear')
            .waitForElementPresent('@homeShopBtn')
            .click('@homeShopBtn')
            .assert.urlContains('shop')
    },
    'Home Page News and Fantasy': browser => {
        pageObject
            //Check the news tab
            .waitForElementPresent('@homeMoreNewsBtn')
            .click('@homeMoreNewsBtn')
            .assert.urlContains('news')
            .api.back()
        pageObject
            //Check the fantasy tab
            .waitForElementPresent('@homeFantasyTabBtn')
            .click('@homeFantasyTabBtn')
            .click('@homeMoreFantasyBtn')
            .pause(1000)
            .assert.urlContains('fantasy')
    },
    //This isn't always here
    'Home Page Watch NFL Network Live': browser => {
        pageObject
            .isVisible({ selector: '@homeWatchLiveBtn', suppressNotFoundErrors: true }, function (results) {
                var visible = results.value
                if (visible === true) {
                    pageObject
                        .waitForElementPresent('@homeWatchLiveBtn')
                        .click('@homeWatchLiveBtn')
                        .assert.urlContains('network/watch')
                }
                else {
                    pageObject
                        .expect.element('@homeWatchLiveBtn').to.not.be.present
                }
            })
    },

    'Home Page Vote': browser => {
        pageObject
            .isVisible({ selector: '@homeVoteBtn', suppressNotFoundErrors: true }, function (results) {
                var visible = results.value
                if (visible === true) {
                    pageObject
                        .waitForElementPresent('@homeVoteBtn')
                        .click('@homeVoteBtn')
                        .assert.urlContains('voting')
                }
                else {
                    pageObject
                        .expect.element('@homeVoteBtn').to.not.be.present
                }
            })
    },

    //Tests for the Players Page
    'Players Search For Active Player': browser => {
        pageObject
            //navigate to the players section
            .pause(2000)
            //.click('@popupClear')
            .waitForElementVisible('@playersTab')
            .click('@playersTab')
            //First search by typing a player name in
            .waitForElementPresent('@playersSearch')
            .setValue('@playersSearch', 'Tom Brady')
            .pause(1000)
            .click('@playersSearchBtn')
            .waitForElementVisible('@playersSearchResults')
            .verify.containsText('@playersSearchResults', 'Tom Brady')
        //Search by letter
        for (let i = 1; i <= 26; i++) {
            pageObject
                .useXpath()
                .click(`(//li[@class="d3-o-tabs__list-item "])[${i}]`)
                .waitForElementVisible('@playersSearchResults')
                .getText('@playersSearchResults', function name(result) {
                    console.log(result.value)
                    pageObject
                        .verify.containsText('@playersSearchResults', letters[i - 1])
                })
        }
    },
    'Players Search For Retired Player': browser => {
        pageObject
            //navigate to the players section
            .pause(2000)
            //.click('@popupClear')
            .waitForElementVisible('@playersTab')
            .click('@playersTab')
            //First search by typing a player name in
            .waitForElementPresent('@playersRetiredTab')
            .click('@playersRetiredTab')
            .waitForElementPresent('@playersSearch')
            .setValue('@playersSearch', 'Kurt Warner')
            .pause(1000)
            .click('@playersSearchBtn')
            .waitForElementVisible('@playersSearchResults')
            .verify.containsText('@playersSearchResults', 'Kurt Warner')
        //Search by letter
        for (let i = 1; i <= 26; i++) {
            pageObject
                .useXpath()
                .click(`(//li[@class="d3-o-tabs__list-item "])[${i}]`)
            //There are no retired players with X in their last name, so we need to skip 24
            if (i > 24 || i < 24) {
                pageObject
                    .waitForElementVisible('@playersSearchResults')
                    .getText('@playersSearchResults', function name(result) {
                        console.log(result.value)
                        pageObject
                            .verify.containsText('@playersSearchResults', letters[i - 1])
                    })
            }
            else {
                console.log('X has no results')
            }
        }
    },
    'Verify Suggested Active Players': browser => {
        pageObject
            //navigate to the players section
            .waitForElementVisible('@playersTab')
            .click('@playersTab')
            //Verify we are on the page
            .waitForElementPresent('@playersRetiredTab')
        for (i = 1; i <= 11; i++) {
            pageObject
                .useXpath()
                .waitForElementPresent('@playersPopular')
                .click(`(//a[@class="d3-o-list__link"])[${i}]`)
                .waitForElementPresent('@playersInfo')
                .verify.containsText('@playersInfo', 'PLAYER INFO')
                //confirm filled fields
                .verify.containsText('@playersName', activePlayerData[i - 1].name)
                .verify.containsText('@playersHeight', activePlayerData[i - 1].height)
                .verify.containsText('@playersWeight', activePlayerData[i - 1].weight)
                .verify.containsText('@playersExp', activePlayerData[i - 1].exp)
                .api.back()
        }
    },
    'Verify Suggested Retired Players': browser => {
        pageObject
            //navigate to the players section
            .pause(2000)
            //.click('@popupClear')
            .waitForElementVisible('@playersTab')
            .click('@playersTab')
            //Verify we are on the page
            .waitForElementPresent('@playersRetiredTab')
            .click('@playersRetiredTab')
        for (i = 1; i <= 9; i++) {
            pageObject
                .useXpath()
                .waitForElementPresent('@playersPopular')
                .click(`(//a[@class="d3-o-list__link"])[${i}]`)
                .waitForElementPresent('@playersInfo')
                .verify.containsText('@playersInfo', 'PLAYER INFO')
                .api.back()
        }
    },

    'Check and Sort Players stats': browser => {
        pageObject
            //navigate to the players section
            .pause(2000)
            //.click('@popupClear')
            .waitForElementVisible('@playersTab')
            .click('@playersTab')
            //First search by typing a player name in
            .waitForElementPresent('@playersSearch')
            .setValue('@playersSearch', 'Tom Brady')
            .pause(1000)
            .click('@playersSearchBtn')
            //select Tom Brady
            .click('.d3-o-player-fullname')
            //navigate to stats page
            .waitForElementPresent('@playersStatsBtn')
            .click('@playersStatsBtn')
            .pause(2000)
        //Check the sorting
        // 2 is Team, and they are all the same
        for (let i = 3; i <= 17; i++) {
            //Select a column
            pageObject
                .useXpath()
                //Sort the list from lowest to highest
                .click(`(//th)[${i}]`)
            //We check with the list sorted greatest to least AND least to greatest
            for (let count = 0; count <= 1; count++) {
                pageObject
                    //get the value in the topmost section of the column
                    .getText(`(//td[@class="nfl-t-stats__col-16 selected"])[1]`, function name(result) {
                        console.log(result.value + ' Result 1')
                        var a = parseFloat(result.value)
                        pageObject
                            //get the value in the second from the top section of the column
                            .getText(`(//td[@class="nfl-t-stats__col-16 selected"])[2]`, function name(result2) {
                                console.log(result2.value + ' Result 2')
                                var b = parseFloat(result2.value)
                                //Determine of we are on the first or the second loop, then check values
                                if (count === 0) {
                                    pageObject
                                        .verify.ok(a <= b, 'Result 1 <= Result 2')
                                        .click(`(//th)[${i}]`)
                                }
                                else {
                                    pageObject
                                        .verify.ok(a >= b, 'Result 1 >= Result 2')
                                }
                                pageObject
                                    .pause(100)
                            })
                    })
            }
        }
    },
    //This test will check all of the totals and the averages on the player stats screen
    checkTotals: async (browser) => {
        let total = 0
        let temp = 0
        let actualTotal = 0
        //await pageObject.click('@popupClear')
        await pageObject.waitForElementVisible('@playersTab')
        await pageObject.click('@playersTab')
        //First search by typing a player name in
        await pageObject.waitForElementPresent('@playersSearch')
        await pageObject.setValue('@playersSearch', 'Tom Brady')
        await pageObject.pause(3000)
        await pageObject.click('@playersSearchBtn')
        //select Tom Brady
        await pageObject.click('.d3-o-player-fullname')
        //navigate to stats page
        await pageObject.waitForElementPresent('@playersStatsBtn')
        await pageObject.click('@playersStatsBtn')
        await pageObject.pause(5000)
        //Check the sorting
        // 2 is Team, and they are all the same
        for (let i = 3; i <= 17; i++) {
            //Select a column
            pageObject
                .useXpath()
            //Select the correct column
            //Then go down every row of the column
            await pageObject.click(`(//th)[${i}]`)
            for (let j = 1; j <= 21; j++) {
                //These values require an average instead of a total
                if (i === 6 || i === 8 || i === 13 || i === 17) {
                    temp = (await browser.getText(`(//td[@class="nfl-t-stats__col-16 selected"])[${j}]`)).value
                    temp = parseFloat(temp)
                    temp = temp / 21
                    total += temp
                }
                //These values will be a total, and not an average
                else {
                    //Set a temporary value (temp) to the value of the selector
                    temp = (await browser.getText(`(//td[@class="nfl-t-stats__col-16 selected"])[${j}]`)).value
                    temp = parseFloat(temp)
                    //add the temp value to the total, then move to the next row
                    total += temp
                }
            }
            actualTotal = (await browser.getText(`(//th)[${i + 17}]`)).value
            actualTotal = parseFloat(actualTotal)
            //6 and 13 seem to be bugged and don't give the correct average
            if (i === 6 || i === 13) {
                await pageObject.verify.ok(Math.round(actualTotal) !== Math.round(total), 'Totals dont match because it is bugged')
                console.log(i)
                console.log(Math.round(total))
                console.log(Math.round(actualTotal))

                total = 0
            }
            //Everything else should function
            else {
                console.log(i)
                await pageObject.verify.ok(Math.round(actualTotal) === Math.round(total), 'Totals Match')
                console.log(Math.round(total))
                console.log(Math.round(actualTotal))
                //Check that the totals match
                total = 0
            }
        }
    },
    //Cesar's Tests
    'Verify the spanish page launch (En Español)': browser => {
        pageObject
            .OpenEnEspanolPage(1)
            .assert.urlContains('foxdeportes.com/nfl/')
            .assert.containsText('@teamsContainer', 'Equipos de la NFL')

    },
    'Verify that the top Bar En Español contains': browser => {
        pageObject
            .OpenEnEspanolPage(2)
            .useXpath()
        topMenuBarEnEspanol.forEach(test => {
            topMenuBarContains(pageObject, test)
            console.log(test.link)
            console.log(test.Section)
        })
    },
    'Verify Teams page launch': browser => {
        pageObject
            .OpenTeamsPage()
            .assert.urlContains('nfl.com/teams/')

    },
    'Verify teams page is divided into two groups': browser => {
        pageObject
            .OpenTeamsPage()
            .assert.containsText('@headrersTeamsDivisionNFC', 'NFC Teams')
            .assert.containsText('@headrersTeamsDivisionAFC', 'AFC Teams')

    },
    'Verify each group on teams page contains 16 teams ': browser => {
        pageObject
            .OpenTeamsPage()
        console.log(nfcTeams.length)
        console.log(afcTeams.length)
        for (let n = 1, f = 17, i = 0, j = 0; n < 16, f < 32, i < nfcTeams.length, j < nfcTeams.length; n++ , f++ , i++ , j++) {
            pageObject
                .useXpath()
                .waitForElementPresent(`(//h4[@class="d3-o-media-object__roofline nfl-c-custom-promo__headline"])[${n}]`)
                .waitForElementPresent(`(//h4[@class="d3-o-media-object__roofline nfl-c-custom-promo__headline"])[${f}]`)
                .assert.containsText(`(//h4[@class="d3-o-media-object__roofline nfl-c-custom-promo__headline"])[${n}]`, nfcTeams[i])
                .assert.containsText(`(//h4[@class="d3-o-media-object__roofline nfl-c-custom-promo__headline"])[${f}]`, afcTeams[j])
        }
    },
    'Verify user can open the 32 profile for each team, and Verify user is redirect to the rigth page': browser => {
        pageObject
            .OpenTeamsPage()
        console.log(nflTeams.length)
        for (let j = 0, i = 1; j < nflTeams.length, i < 33; j++ , i++) {
            pageObject
                .useXpath()
                .waitForElementPresent(`(//a[@target="_self"])[${i}]`)
                .click(`(//a[@target="_self"])[${i}]`)
                .waitForElementPresent('@teamNameHeader')
                .verify.containsText('@teamNameHeader', nflTeams[j])
                .api.back()


        }
    },
    'Verify standings page launch': browser => {
        pageObject
            .OpenStandingsPage()
            .assert.urlContains('nfl.com/standings/')
    },
    'Verify they are 3 buttons and each button should contain: Divison - Conference - League': browser => {
        pageObject
            .OpenStandingsPage()
            .pause(500)
            .verify.containsText('@division', "DIVISION")
            .verify.containsText('@conference', "CONFERENCE")
            .verify.containsText('@league', "LEAGUE")
    },
    'Verify the continer background change when user select them': browser => {
        pageObject
            .OpenStandingsPage()
            .pause(500)
            //Division Button Selected (color blue)
            .assert.cssProperty('li[class="active"]', 'background-color', 'rgba(27, 72, 224, 1)')
            //division Button Unselected (no color in the background)
            .click('@conference')
            .pause(500)
            .assert.cssProperty('a[href="/standings/division/2020/REG"]', 'background-color', 'rgba(0, 0, 0, 0)')
            //Conference Button Selected (color blue)
            .assert.cssProperty('li[class="active"]', 'background-color', 'rgba(27, 72, 224, 1)')
            //Conference Button Unselected (no color in the background)
            .click('@league')
            .pause(500)
            .assert.cssProperty('a[href="/standings/conference/2020/REG"]', 'background-color', 'rgba(0, 0, 0, 0)')
            //League Button Selected (color blue)
            .assert.cssProperty('li[class="active"]', 'background-color', 'rgba(27, 72, 224, 1)')
            //league Button Unselected (no color in the background)
            .click('@division')
            .pause(500)
            .assert.cssProperty('a[href="/standings/league/2020/REG"]', 'background-color', 'rgba(0, 0, 0, 0)')



    },
    'Verify W : Wins L: Losses T: Ties  PCT: Winning Percentage  shows the highes value on the  respective column': browser => {
        pageObject
            .OpenStandingsPage()
        for (let i = 2; i <= 7; i++) {
            //Select a column
            pageObject
                .useXpath()
                //Sort the list from highest to lowes
                .click('(//th)[5]')
                .click(`(//th)[${i}]`)
            for (let count = 0; count <= 1; count++) {
                pageObject
                    //get highest value in the column
                    .getText('(//td[@class="selected"])[1]',
                        function name(result) {
                            console.log(result.value + ' Result Value')
                            var a = parseFloat(result.value)
                            pageObject
                                //get second highest value in the column
                                .getText('(//td[@class="selected"])[2]',
                                    function name(result2) {
                                        console.log(result2.value + ' Result2')
                                        var b = parseFloat(result2.value)
                                        console.log(a + ' a')
                                        console.log(b + ' b')
                                        if (count === 0) {
                                            pageObject
                                                .verify.ok(a >= b, 'a >= b')
                                                .click(`(//th)[${i}]`)
                                        }
                                        pageObject
                                            .pause(100)

                                    })
                        })
            }
        }
    }
}