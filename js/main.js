// Your web app's Firebase configuration
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

var db = firebase.firestore();

var docRef = db.collection("visitors").doc("count");

docRef.get().then(function(doc) {
  let n;
  if (doc.exists) {
    n = doc.data()['value'];

    if (n === null) {
      n = 0;
    }
    n++;

  } else {
    n = 1;
  }

  db.collection("visitors").doc("count").set({
    value: n
  });

  nums = n.toString().split('').map(Number);
  fill = [];
  for (let i = 0; i < 6 - nums.length; i++) {
    fill.push(0);
  }
  nums = fill.concat(nums);

  document.getElementById('counter').innerHTML = '';
  for (var i of nums) {
    document.getElementById('counter').innerHTML += '<span class="counter-item">' + i + '</span>';
  }

}).catch(function(error) {
  console.log("Error getting document:", error);
});
