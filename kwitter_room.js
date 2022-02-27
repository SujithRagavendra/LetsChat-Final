const firebaseConfig = {
    apiKey: "AIzaSyDfMnkZJc1mFk2gxJexbwndGm81YgLwasY",
    authDomain: "kwitter-336a7.firebaseapp.com",
    databaseURL: "https://kwitter-336a7-default-rtdb.firebaseio.com",
    projectId: "kwitter-336a7",
    storageBucket: "kwitter-336a7.appspot.com",
    messagingSenderId: "586397980714",
    appId: "1:586397980714:web:a942e4909e715096aa4b53"
  };

  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("user_name")
document.getElementById("h3color3").innerHTML="Welcome"+username+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
       row="<div class='room_name' id="+Room_names+" onclick='RedirectToOwnRoom(this.id)'>#"+Room_names+"</div>"
       document.getElementById("output").innerHTML+=row
      //Start code

      //End code
      });});}
getData();
function addroom(){
  roomname=document.getElementById("add_room").value
  firebase.database().ref("/").child(roomname).update({
    purpose:"addinguser"
})
localStorage.setItem("room_name",roomname)
window.location="kwitter_page.html"

}
function RedirectToOwnRoom(name){
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
function Logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}