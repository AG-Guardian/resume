// TODO: add recaptcha auth https://firebase.googleblog.com/2017/08/guard-your-web-content-from-abuse-with.html

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});
