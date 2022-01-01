//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCTlu9AyXQ51whlCvbUT4HpwHW1wLTU4y4",
      authDomain: "kwitter-8c794.firebaseapp.com",
      databaseURL: "https://kwitter-8c794-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c794",
      storageBucket: "kwitter-8c794.appspot.com",
      messagingSenderId: "995590122730",
      appId: "1:995590122730:web:8fb7a3996bbcea81833b93"
    };
    // Initialize Firebase   
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("Nickname");
room_name=localStorage.getItem("roomname");
function send(){
      msg=document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            likes:0
      });
      document.getElementById("msg_input").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("Nickname");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
