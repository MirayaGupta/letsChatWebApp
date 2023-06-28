
var firebaseConfig = {
      apiKey: "AIzaSyDCG_XhF_SEMCMm_ZNZJ7bHvkobEcvCOA8",
      authDomain: "kwitter-65790.firebaseapp.com",
      databaseURL: "https://kwitter-65790-default-rtdb.firebaseio.com",
      projectId: "kwitter-65790",
      storageBucket: "kwitter-65790.appspot.com",
      messagingSenderId: "1038978274160",
      appId: "1:1038978274160:web:bc83835275b407d8f435b5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
