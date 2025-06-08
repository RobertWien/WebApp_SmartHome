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
        document.getElementById("imgLight").setAttribute("src","./image/lampbulbon.png");
        valueLight = "Open";
        document.getElementById('btn_light_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_light_bed").innerHTML = "OPEN";
        document.getElementById("txt_light_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgLight").setAttribute("src","./image/lampbulboff.png");
        valueLight = "Close";
        document.getElementById('btn_light_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_light_bed").innerHTML = "CLOSE";
        document.getElementById("txt_light_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    firebase.database().ref("Bedroom").child('Light').set(valueLight);
}

function ClickFan(){
    stateFan =!stateFan;

    if(stateFan){
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanon.png");
        valueFan = "Open";
        document.getElementById('btn_fan_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_fan_bed").innerHTML = "OPEN";
        document.getElementById("txt_fan_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanoff.png");
        valueFan = "Close";
        document.getElementById('btn_fan_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_fan_bed").innerHTML = "CLOSE";
        document.getElementById("txt_fan_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
   firebase.database().ref("Bedroom").child('Fan').set(valueFan);
}
function ClickAir(){
    stateAir =!stateAir;
    if(stateAir){
        document.getElementById("imgAir").setAttribute("src",".//image/aircondition.png");
        valueAir = "Open";
        document.getElementById('btn_air_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_air_bed").innerHTML = "OPEN";
        document.getElementById("txt_air_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgAir").setAttribute("src",".//image/airconditionoff.png");
        valueAir = "Close";
        document.getElementById('btn_air_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_air_bed").innerHTML = "CLOSE";
        document.getElementById("txt_air_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
   // firebase.database().ref("Livingroom").set({Air_conditioner:valueAir});
   firebase.database().ref("Bedroom").child('Air_conditioner').set(valueAir);
}


//change listen data when update when loading the webapp from Firebase
var dbRefLight = firebase.database().ref('Bedroom').child('Light');
dbRefLight.on('value', snap =>{
    if(snap.val() == "Open"){
        stateLight = true;
        valueLight = "Open";
        document.getElementById('btn_light_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_light_bed").innerHTML = "OPEN";
        document.getElementById("txt_light_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else if(snap.val() == "Close"){
        stateLight = false;
        valueLight = "Close";
        document.getElementById('btn_light_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_light_bed").innerHTML = "CLOSE";
        document.getElementById("txt_light_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    if(stateLight){
        document.getElementById("imgLight").setAttribute("src","./image/lampbulbon.png");
    }else{
        document.getElementById("imgLight").setAttribute("src","./image/lampbulboff.png");
    }
});

var dbRefFan = firebase.database().ref('Bedroom').child('Fan');
dbRefFan.on('value', snap =>{
    if(snap.val() == "Open"){
        stateFan = true;
        valueFan = "Open";
        document.getElementById('btn_fan_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_fan_bed").innerHTML = "OPEN";
        document.getElementById("txt_fan_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else if(snap.val() == "Close"){
        stateFan = false;
        valueFan = "Close";
        document.getElementById('btn_fan_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_fan_bed").innerHTML = "CLOSE";
        document.getElementById("txt_fan_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    if(stateFan){
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanon.png");
    }else{
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanoff.png");
    }
});

var dbRefAir = firebase.database().ref('Bedroom').child('Air_conditioner');
dbRefAir.on('value', snap =>{
    if(snap.val() == "Open"){
        stateAir = true;
        valueAir = "Open";
        document.getElementById('btn_air_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_air_bed").innerHTML = "OPEN";
        document.getElementById("txt_air_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else if(snap.val() == "Close"){
        stateAir = false;
        valueAir = "Close";
        document.getElementById('btn_air_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_air_bed").innerHTML = "CLOSE";
        document.getElementById("txt_air_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
        
    }
    if(stateAir){
        document.getElementById("imgAir").setAttribute("src",".//image/aircondition.png");
    }else{
        document.getElementById("imgAir").setAttribute("src",".//image/airconditionoff.png");
    }
});

// get value Temperature and Humidity from firebase//
var valueTemp = firebase.database().ref('Bedroom').child('Temperature');
valueTemp.on('value', snap =>{
    console.log("Nhiet do : " + snap.val());
    document.getElementById("tvTemp").innerHTML = snap.val() + "°C";
});

var valueHumid = firebase.database().ref('Bedroom').child('Humidity');
valueHumid.on('value', snap =>{
    console.log("Do am : "+snap.val());
    document.getElementById("tvHumid").innerHTML = snap.val()+" %";
});

window.alert("WELCOME TO BEDROOM PANEL!");


// xử lí click vào các ảnh
function ClickLightImg(){
    stateLight = !stateLight;
    if(stateLight){
        document.getElementById("imgLight").setAttribute("src","./image/lampbulbon.png");
        valueLight = "Open";
        document.getElementById('btn_light_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_light_bed").innerHTML = "OPEN";
        document.getElementById("txt_light_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgLight").setAttribute("src","./image/lampbulboff.png");
        valueLight = "Close";
        document.getElementById('btn_light_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_light_bed").innerHTML = "CLOSE";
        document.getElementById("txt_light_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    firebase.database().ref("Bedroom").child('Light').set(valueLight);
}

function ClickFanImg(){
    stateFan =!stateFan;

    if(stateFan){
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanon.png");
        valueFan = "Open";
        document.getElementById('btn_fan_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_fan_bed").innerHTML = "OPEN";
        document.getElementById("txt_fan_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgFan").setAttribute("src",".//image/electricfanoff.png");
        valueFan = "Close";
        document.getElementById('btn_fan_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_fan_bed").innerHTML = "CLOSE";
        document.getElementById("txt_fan_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
   firebase.database().ref("Bedroom").child('Fan').set(valueFan);
}

function ClickAirImg(){
    stateAir =!stateAir;
    if(stateAir){
        document.getElementById("imgAir").setAttribute("src",".//image/aircondition.png");
        valueAir = "Open";
        document.getElementById('btn_air_bed').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_air_bed").innerHTML = "OPEN";
        document.getElementById("txt_air_bed").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgAir").setAttribute("src",".//image/airconditionoff.png");
        valueAir = "Close";
        document.getElementById('btn_air_bed').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_air_bed").innerHTML = "CLOSE";
        document.getElementById("txt_air_bed").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
   // firebase.database().ref("Livingroom").set({Air_conditioner:valueAir});
   firebase.database().ref("Bedroom").child('Air_conditioner').set(valueAir);
}

// điều khiển tốc độ của quạt phòng ngủ

function SelectUnit () {
    var unit = $("#select_unit").val();

  if (valueFan == "Open"){
    if (unit != "No Selection") {
    firebase.database().ref("Bedroom").child('Fan_controll').set(unit);
    }
} else {
    window.alert("Plesea, turn on your fan to select the speed unit!!!");

}
}

function ClickUnit () {
    if (valueFan == "Open"){
    }
    else {
        window.alert("Plesea, turn on your fan to select the speed unit!!!");
    }
}

var unitSpeed = firebase.database().ref('Bedroom').child('Fan_speed');
unitSpeed.on('value', snap =>{
    document.getElementById("fan_speed_unit").innerHTML = snap.val();
});

// sigout process button
$("#btn-logout").click(function()
{
  firebase.auth().signOut()
});

