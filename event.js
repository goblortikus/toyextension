
  var socket = io('http://localhost:4099');

  console.log('init socket',socket);
  socket.on('connect', function(){
    console.log('chrome ex did connect', socket);
    socket.emit('roomy',{});

  });

  socket.on('event', function(data){
    console.log('chrome saw EVENT')
  });
  socket.on('disconnect', function(something){
    console.log('chrome ex did disconnect',something)
  });


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