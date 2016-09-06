//Public avaialable cordova functions (loaded on initialization)
var geolocation;
var bt;
var push;

var app = {
    // Application Constructor
    initialize: function() {
       console.log("Initializing app");
        this.bindEvents();
    },
    bindEvents: function() {
      console.log("Binding events");

        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
      console.log("Cordova start", "Device ready");

        //Start nofication listener
        console.log("Notification listener " +notificationListener);
        setNotificationListenerCallback();
    }
};

app.initialize();

var setNotificationListenerCallback = function(){
  notificationListener.listen(function(n){
    console.log("Received notification " + JSON.stringify(n) );

    sendNotification(n);

  }, function(e){
    setTimeout(setNotificationListenerCallback, 1000);
    console.log("Notification Error " + e);
  });
};
