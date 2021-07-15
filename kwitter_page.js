var firebaseConfig = {
      apiKey: "AIzaSyBsEEAMGPNyAWZ48WF88CQEpEZuuiLcmjE",
      authDomain: "kwitter-3a392.firebaseapp.com",
      databaseURL: "https://kwitter-3a392-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a392",
      storageBucket: "kwitter-3a392.appspot.com",
      messagingSenderId: "227991532839",
      appId: "1:227991532839:web:30605d18dfb260c864e502"
};
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("Username");
RoomName = localStorage.getItem("RoomName");

function Sent() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(RoomName).push({
            name: Username, 
            message: msg, 
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("Output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("Output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(RoomName).child(message_id).update({
            like : updated_likes
      });
}
function Logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}