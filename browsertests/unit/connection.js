module("Stomp Connection");

test("Connect to an invalid Stomp server", function() {
  
  var client = Stomp.client(TEST.badUrl);
  client.connect(
    function() {},
    TEST.connectHeaders,
    function() {
      start();
    });
  stop(TEST.timeout);
});

test("Connect to a valid Stomp server", function() {
  
  var client = Stomp.client(TEST.url);
  client.connect(
    function() {
      start();
    }, TEST.connectHeaders);
  stop(TEST.timeout);
});

test("Disconnect", function() {
  
  var client = Stomp.client(TEST.url);
  client.connect(
    function() {
      // once connected, we disconnect
      client.disconnect(function() {
        start();
      });
    }, TEST.connectHeaders);
  stop(TEST.timeout);
});