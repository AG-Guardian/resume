// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

var firebaseConfig = {
  apiKey: "AIzaSyCD_XEXzCrcfSOKjv5_EkXYGI7vqudhg-0",
  authDomain: "resume-db-f735f.firebaseapp.com",
  databaseURL: "https://resume-db-f735f.firebaseio.com",
  projectId: "resume-db-f735f",
  storageBucket: "resume-db-f735f.appspot.com",
  messagingSenderId: "1056862674983",
  appId: "1:1056862674983:web:865cc0d0c731d1c195ae02",
  measurementId: "G-YL63BS491G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
