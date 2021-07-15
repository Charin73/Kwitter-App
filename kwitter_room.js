//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBsEEAMGPNyAWZ48WF88CQEpEZuuiLcmjE",
      authDomain: "kwitter-3a392.firebaseapp.com",
      databaseURL: "https://kwitter-3a392-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a392",
      storageBucket: "kwitter-3a392.appspot.com",
      messagingSenderId: "227991532839",
      appId: "1:227991532839:web:30605d18dfb260c864e502"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Username = localStorage.getItem("Username");
document.getElementById("UserName").innerHTML = "Welcome " + Username + "!";

function AddRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "AddingRoomName"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("Output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);
                  //Start code
row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("Output").innerHTML += row; 
                  //End code
            });
      });
}
getData();
function redirectToRoomName(Name) {
      localStorage.setItem("room_name", Name);
      window.location = "kwitter_page.html";
}
function Logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}