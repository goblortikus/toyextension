var bg =  chrome.extension.getBackgroundPage();

bg.console.log('popup.js')

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  bg.console.log('new tab', tabs[0],tabs)
})