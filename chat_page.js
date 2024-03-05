const firebaseConfig = {
    apiKey: "AIzaSyCcFwrQ9QzBTrr7jhlZzWAHMVxXYloTGSg",
    authDomain: "let-s-chat-b31c6.firebaseapp.com",
    databaseURL: "https://let-s-chat-b31c6-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-b31c6",
    storageBucket: "let-s-chat-b31c6.appspot.com",
    messagingSenderId: "491360610280",
    appId: "1:491360610280:web:9959ee15d55d16e169265d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""
};
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();