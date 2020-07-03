// TODO: add recaptcha auth https://firebase.googleblog.com/2017/08/guard-your-web-content-from-abuse-with.html

firebase.auth().signInAnonymously().then( ()=> {
  let db = firebase.firestore();

  let docRef = db.collection("visitors").doc("count");

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

    document.getElementById("counter-loader").style.display = 'none';
    document.getElementById('counter').innerHTML = '';
    for (let i of nums) {
      document.getElementById('counter').innerHTML += '<span class="counter-item">' + i + '</span>';
    }

  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}).catch(function(error) {
  let errorCode = error.code;
  let errorMessage = error.message;
});
