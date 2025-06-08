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

var stateLight = false;
var stateFan = false;
var stateAir = false;
var valueLight;
var valueFan;
var valueAir;

function ClickLight(){
    stateLight = !stateLight;
    if(stateLight){
        document.getElementById("imgLamp").setAttribute("src","./image/lampbulbon.png");
        valueLight = "Open";
    }else{
        document.getElementById("imgLamp").setAttribute("src","./image/lampbulboff.png");
        valueLight = "Close";
    }
    firebase.database().ref("Livingroom").set({Light:valueLight});
}
function ClickFan(){
    stateFan =!stateFan;
    if(stateFan){
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanon.png");
        valueFan = "Open";
    }else{
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanoff.png");
        valueFan = "Close";
    }
    firebase.database().ref("Livingroom").set({Fan:valueFan});
}
function ClickAir(){
    stateAir =!stateAir;
    if(stateAir){
        document.getElementById("imgAir").setAttribute("src",".//image/aircondition.png");
        valueAir = "Open";
    }else{
        document.getElementById("imgAir").setAttribute("src",".//image/airconditionoff.png");
        valueAir = "Close";
    }
    firebase.database().ref("Livingroom").set({Air_conditioner:valueAir});
}

//change listen data when update when loading the webapp from Firebase
var dbRefLight = firebase.database().ref('Livingroom').child('Light');
dbRefLight.on('value', snap =>{
    if(snap.val() == "Open"){
        stateLight = true;
        valueLight = "Open";
    }else if(snap.val() == "Close"){
        stateLight = false;
        valueLight = "Close";
    }
    if(stateLight){
        document.getElementById("imgLamp").setAttribute("src","./image/lampbulbon.png");
    }else{
        document.getElementById("imgLamp").setAttribute("src","./image/lampbulboff.png");
    }
});

var dbRefFan = firebase.database().ref('Livingroom').child('Fan');
dbRefFan.on('value', snap =>{
    if(snap.val() == "Open"){
        stateFan = true;
        valueFan = "Open";
    }else if(snap.val() == "Close"){
        stateFan = false;
        valueFan = "Close";
    }
    if(stateFan){
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanon.png");
    }else{
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanoff.png");
    }
});

var dbRefAir = firebase.database().ref('Livingroom').child('Air_conditioner');
dbRefAir.on('value', snap =>{
    if(snap.val() == "Open"){
        stateAir = true;
        valueAir = "Open";
    }else if(snap.val() == "Close"){
        stateAir = false;
        valueAir = "Close";
    }
    if(stateAir){
        document.getElementById("imgAir").setAttribute("src",".//image/aircondition.png");
    }else{
        document.getElementById("imgAir").setAttribute("src",".//image/airconditionoff.png");
    }
});

// get value Temperature and Humidity from firebase//
var valueTemp = firebase.database().ref('Livingroom').child('Temperature');
valueTemp.on('value', snap =>{
    console.log("Nhiet do : " + snap.val());
    document.getElementById("tvTemp").innerHTML = snap.val() + "°C";
});

var valueHumid = firebase.database().ref('Livingroom').child('Humidity');
valueHumid.on('value', snap =>{
    console.log("Do am : "+snap.val());
    document.getElementById("tvHumid").innerHTML = snap.val()+" %";
});


// check connect internet//
window.addEventListener("online",function(){
    window.alert("WELCOME TO LIVINGROOM PANEL!");
});
window.addEventListener("offline",function(){
    window.alert("OPP! CHECK YOUR CONNECTION!");
});