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
  firebase.auth.Auth.Persistence.LOCAL;

  // login process button
  $("#btn-login").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();

   if (email != "" &&  password != "" )
   {
    var result = firebase.auth().signInWithEmailAndPassword(email,password);

    // Gửi tên đăng nhập lên firebase Realtime
    firebase.database().ref("Login").child('User').set(email);
    firebase.database().ref("Login").child('Password').set(password);

     result.catch(function(error)
     {
      
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode);
       console.log(errorMessage);
       window.alert("Message :" + errorMessage);

       
     });
   
 } else {
   window.alert("Please, fill out all fields");

 }
     });

// signup process button
     $("#btn-signup").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

   if (email != "" &&  password != ""  && cPassword != "")
   {
    if (password == cPassword )
    {
      var result = firebase.auth().createUserWithEmailAndPassword(email,password);
     result.catch(function(error)
     {
      
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorCode);
       console.log(errorMessage);
       window.alert("Message :" + errorMessage);

       
     });
    } else {
      window.alert("Confirm password doesn't match with the password");
    }}

 });


 // reset password process button
 $("#btn-resetPassword").click(function()
 {
   var auth = firebase.auth();
   var email = $("#email").val();
   if (email != "")
   {
    auth.sendPasswordResetEmail(email).then(function()
    {
      window.alert("Email have been sent to you, Please check and verify");

    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message :" + errorMessage);
    });
   } else{
    window.alert("Please write your email first");
  }

 });

// sigout process button
  $("#btn-logout").click(function()
  {
    firebase.auth().signOut()
  });

  $("btn-update").click(function()
  {
    var phone = $("#phone").val();
    var gender = $("#gender").val();
    var bio = $("#bio").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var country = $("#country").val();
    var address = $("#address").val();

    var rootRef = firebase.database().ref().child("User_information");
    var userId = fire.auth().currentUser.uid;
    var usersRef = rootRef.child(userId);

    

      var userData = 
      {
        "phone" : phone,
        "gender" : gender,
        "bio" : bio,
        "firstName" : fName,
        "secondName" : sName,
        "country" : country,
        "address" : address,
      };

      usersRef.set(userData,function(error)
      {
        if (error){
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message :" + errorMessage);
        } else {
          window.location.href = "MainPage.html";
        }

      });

     
  }
    

  );


  