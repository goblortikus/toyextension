console.log('momo event.js')

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo,tab){
  console.log('CTOU!',tabId,changeInfo,tab)
})

chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
  console.log('CTQ Active Lastfocused', tabs, tabs[0].url);
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  console.log('CTQ Active currentwindow', tabs, tabs[0].url);
});

chrome.tabs.query({ }, function (tabs) {
  console.log('CTQ', tabs, tabs[0].url);
});