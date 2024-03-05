// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



