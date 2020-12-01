let pageObject = {}
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var activePlayerData = require('../testAssets/nflActivePlayersArray')

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.nflPage()
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        pageObject.end()
    },
    /*
    //Tests for the Home Page
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
    /*
    'Home Page Watch NFL Network Live': browser => {
        pageObject
            .pause()
            .waitForElementPresent('@homeWatchLiveBtn')
            .click('@homeWatchLiveBtn')
            .assert.urlContains('network/watch')
    },
    */
    /*
     'Home Page Vote': browser => {
         pageObject
             .waitForElementPresent('@homeVoteBtn')
             .click('@homeVoteBtn')
             .assert.urlContains('voting')
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
             for (let i = 1; i <= 26; i++){
                 pageObject
                     .useXpath()
                     .click(`(//li[@class="d3-o-tabs__list-item "])[${i}]`)
                     .waitForElementVisible('@playersSearchResults')
                     .getText('@playersSearchResults', function name(result) {
                         console.log(result.value)
                         pageObject
                             .verify.containsText('@playersSearchResults', letters[i-1])
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
                 else{
                     console.log('X has no results')
                 }
         }
     },
     //*/
    /*
    'Verify Suggested Active Players': browser => {
        pageObject
            //navigate to the players section
            .waitForElementVisible('@playersTab')
            .click('@playersTab')
            //Verify we are on the page
            .waitForElementPresent('@playersRetiredTab')
            for (i = 1; i <= 11; i++){
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
    */
    'Check and Sort Players stats': browser => {
        pageObject
            //navigate to the players section
            .pause(2000)
            .click('@popupClear')
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
                                        .verify.ok(a <= b, 'Result 1 >= Result 2')
                                        .click(`(//th)[${i}]`)
                                }
                                else {
                                    pageObject
                                        .verify.ok(a >= b, 'Result 1 <= Result 2')
                                }
                                pageObject
                                    .pause(100)
                            })
                    })
            }
        }
        /*
        //Check the totals
        let total = 0
        //this will loop through all of the columns
        for (let j = 3; j <= 17; j++) {
            //Select a column
            pageObject
                .useXpath()
                //Select the list (sorting no longer matters)
                .click(`(//th)[${j}]`)
            //We need to loop through all of the rows
            for (let k = 1; k <= 21; k++) {
                pageObject
                    
        }
        /*
        for (let i = 2; i <= 16; i++) {
            pageObject
 
        }
        */
    }

    //Tests for the Stats Page


}