var newsCommands ={
  //testing news page navigation
  news: function(browser){
    this
    .maximizeWindow()
    .pause(2000)
    .click('@popUp')
    .click('@newsHome')
    .pause(1000)
    .click('@latestNews')
    .api.back()
    return this
  }
}

var scoreCommands ={
  //testing scores page navigation
  scores: function(browser){
    this
    .maximizeWindow()
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

var scheduleCommands ={
//testing schedule page navigation
schedule: function(browser){
  this
  .maximizeWindow()
  .pause(3000)
  // .click('@popUp')
  .click('@scheduleHome')
  .waitForElementPresent('@scheduleHome')
  return this
}
}

var scheduleNavigationCommands ={
  //testing menu navigation in Schedule
  scheduleNavigation:function(browser,data){
    this
    .maximizeWindow()
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


module.exports = {
    url: 'https://www.nfl.com/',
    commands: [newsCommands, scoreCommands, scheduleCommands, scheduleNavigationCommands],
    elements:{

    //selectors for news page
    newsHome: ('[data-js-hook="c95353d4-8e91-4440-a134-41f0ab00d248"]'),
    popUp: ('#onesignal-slidedown-cancel-button'),
    latestNews:('[data-link_type="Latest News"'),

    //selectors for scores page
    scoresHome:('[data-js-hook="a5c716b3-2774-41d6-9580-93394e3f809d"]'),

    //selectors for schedule page
    scheduleHome:('[data-js-hook="404ef83f-7bed-4e23-b42e-eb84c066ffe5"]'),
    teamSchedules:('[data-js-hook="ad4615b3-67b6-4030-bb70-7c05518204d6"]'),
    tnf:('[data-js-hook="cd452046-1a65-43dd-a73a-dd91c1643af5"]'),
    snf:('[data-js-hook="b947e5c2-7c33-4845-9adc-b9cd9f1a6440"]'),
    mnf:('[data-js-hook="7ee9cd5f-32ff-4a8a-ae81-285d151253c0"]'),
    buyTickets:('[data-js-hook="3762a72e-d1e2-4250-afc3-b84916b71826"]'),
    fanPlaybook:('[data-js-hook="36e523e4-1790-4bad-b9df-a90a681b2bba"]')
  
  }
  }