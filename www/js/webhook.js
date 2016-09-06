$("#record").click(function(){
  var input = $("#input").val();
  console.log("Saving webhook address in localstorage: "+ input);
  window.localStorage.setItem('webhook', input);
});

$("#send-test").click(function(){
  notification = {title:"Title",
    package:"test.notification",
    text:"text",
    textLines:"textlines"
  };
  sendNotification(notification);
});

var webhook = window.localStorage.getItem("webhook");
if (webhook) $("#input").val(webhook);

var sendNotification = function(n) {
  var webhook = window.localStorage.getItem("webhook");
  console.log("Sending notification to webhook: " + webhook, n);

  $.ajax({
    url: webhook,
    type: "POST",
    data : JSON.stringify(n),
    contentType : 'application/json',
    success: function(json) {
      console.log("Successfully sent data to webhook ", json);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Unable to send data to webhook " +textStatus);
    }
  });
};
