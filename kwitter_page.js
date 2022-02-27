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
 room_name=localStorage.getItem("room_name")
 user_name=localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
message=message_data["message"]
user=message_data["name"]
like=message_data["like"]
firstrow="<h4>"+user+"<img class='user_tick' src='tick.png'>"+"</h4>"
second="<h4 class='message_h4'>"+message+"</h4>"
third="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='Updatelike(this.id)'>";
tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
console.log(like)
row=firstrow+second+third+tag
document.getElementById("output").innerHTML+=row
 

//End code
 } });  }); }
getData();
function Logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
function send(){
msg = document.getElementById("msg").value 
firebase.database().ref(room_name).push({
like:0,
message:msg,
name:user_name
})

document.getElementById("msg").value=""
}
function Updatelike(message_id){
console.log(message_id)
buttonid=message_id
likes=document.getElementById(buttonid).value
UpdatedLike=Number(likes)+1
console.log(Updatedlike)
firebase.database().ref(room_name).child(message_id).update({
like:UpdatedLike
})

}