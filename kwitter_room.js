  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCwX7nYWw0fMxOc7umsN6VDE-ccbZ7elsg",
      authDomain: "kwitter-cfadd.firebaseapp.com",
      databaseURL: "https://kwitter-cfadd.firebaseio.com",
      projectId: "kwitter-cfadd",
      storageBucket: "kwitter-cfadd.appspot.com",
      messagingSenderId: "83084616004",
      appId: "1:83084616004:web:de0151884e4750fa75b711",
      measurementId: "G-EMYG4LPFKT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
