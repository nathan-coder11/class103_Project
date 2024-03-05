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

var username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+username+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="chat_page.html";      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
};
