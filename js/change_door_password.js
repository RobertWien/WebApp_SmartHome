const firebaseConfig = {
  apiKey: "AIzaSyBN5Osm0BC7nNdgSnaDqxZiyP4ZigNUJwk",
  authDomain: "smarthome-e7e9b.firebaseapp.com",
  databaseURL: "https://smarthome-e7e9b-default-rtdb.firebaseio.com",
  projectId: "smarthome-e7e9b",
  storageBucket: "smarthome-e7e9b.appspot.com",
  messagingSenderId: "678386383016",
  appId: "1:678386383016:web:6cd4583806a9deda6a6a9d",
  measurementId: "G-XHS0T37PFE"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;

  function Change()
  {
     var checkSuccess = false;
     var oldpass = $("#old_password").val();
     var password = $("#password").val();
     var passconf = $("#conf_password").val();
     
     var oldPass;
     
     var old_pass = firebase.database().ref('Security').child('Door_password');
     old_pass.on('value', snap =>{
          oldPass = snap.val();
     });

if (oldpass != "")  {
   if (oldpass == oldPass){
     if (passconf != "" && password != ""){
         if (passconf == password){
            firebase.database().ref("Security").child('Door_password').set(passconf);
            window.alert("You changed door password successfully!!!");
            window.location.href = "security.html";
         } else {
             window.alert("Error, your new door password and confirm door password don't match!!!");
         }

     } else {
         window.alert("Please, fill out all fields");
     }
       
    } else {
        window.alert("Please, checkout you entered wrong your old door password!!!");
    }

  } else {
    window.alert("Please, enter your old door password");
  }
}
