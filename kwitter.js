function AddUser() {
    Username = document.getElementById("User_Name").value;
    localStorage.setItem("Username", Username);
    window.location = "kwitter_room.html";
}