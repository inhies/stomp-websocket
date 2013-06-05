$(document).ready(function(){
  
  TEST = {
    destination : "/topic/chat.general",
    url : "ws://localhost:61623",
    badUrl: "ws://localhost:61625",
    timeout: 2000,
    debug : function(str) {
      $("#debug").append(str + "\n");
    },
    connectHeaders: {
      login: "admin",
      passcode: "password"
    }
  };

  // fill server requirements:
  $("#test_url").text(TEST.url);
  $("#test_destination").text(TEST.destination);
  $("#test_login").text(TEST.connectHeaders.login);
  $("#test_password").text(TEST.connectHeaders.passcode);
  
});
