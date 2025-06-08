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
var stateAlarm = false;
var stateLine = false;

var valueLight;
var valueAlarm;
var valueLine;

var stateLineCheck;

function ClickLight(){
    stateLight = !stateLight;
    if(stateLight){
        document.getElementById("imgLight").setAttribute("src","./image/lampbulbon.png");
        valueLight = "Open";
        document.getElementById('btn_light_kit').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_light_kit").innerHTML = "OPEN";
        document.getElementById("txt_light_kit").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgLight").setAttribute("src","./image/lampbulboff.png");
        valueLight = "Close";
        document.getElementById('btn_light_kit').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_light_kit").innerHTML = "CLOSE";
        document.getElementById("txt_light_kit").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    firebase.database().ref("Kitchen").child('Light').set(valueLight);
}

function ClickAlarm(){
    stateAlarm =!stateAlarm;

    if(stateAlarm){
        document.getElementById("imgAlarm").setAttribute("src",".//image/alarm_on.png");
        valueAlarm = "Open";
        document.getElementById('btn_alarm_kit').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_alarm_kit").innerHTML = "OPEN";
        document.getElementById("txt_alarm_kit").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgAlarm").setAttribute("src",".//image/alarm_off.png");
        valueAlarm = "Close";
        document.getElementById('btn_alarm_kit').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_alarm_kit").innerHTML = "CLOSE";
        document.getElementById("txt_alarm_kit").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
   firebase.database().ref("Kitchen").child('Alarm').set(valueAlarm);
}

function ClickLine(){

    stateLine = !stateLine ;

    if(!stateLine && stateLineCheck == "Out"){
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_in_manual.png");
        valueLine = "In";
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_line").innerHTML = "IN";
        document.getElementById("txt_line").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
        firebase.database().ref("Kitchen").child('Clothes_line').set(valueLine);

    }
     if (stateLine && stateLineCheck == "In") {
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_out.png");
        valueLine = "Out";
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_line").innerHTML = "OUT";
        firebase.database().ref("Kitchen").child('Clothes_line').set(valueLine);

    }
    if (stateLine && stateLineCheck == "Rain_In") {
        stateLine = !stateLine;
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_in_rain.png");
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        window.alert("It's raining, please don't pull out your clothes line !!!");
    } 
}


//change listen data when update when loading the webapp from Firebase
var dbRefLight = firebase.database().ref('Kitchen').child('Light');
dbRefLight.on('value', snap =>{
    if(snap.val() == "Open"){
        stateLight = true;
        valueLight = "Open";
        document.getElementById('btn_light_kit').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_light_kit").innerHTML = "OPEN";
        document.getElementById("txt_light_kit").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else if(snap.val() == "Close"){
        stateLight = false;
        valueLight = "Close";
        document.getElementById('btn_light_kit').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_light_kit").innerHTML = "CLOSE";
        document.getElementById("txt_light_kit").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    if(stateLight){
        document.getElementById("imgLight").setAttribute("src","./image/lampbulbon.png");
    }else{
        document.getElementById("imgLight").setAttribute("src","./image/lampbulboff.png");
    }
});

var dbRefAlarm = firebase.database().ref('Kitchen').child('Alarm');
dbRefAlarm.on('value', snap =>{
    if(snap.val() == "Open"){
        stateAlarm = true;
        valueAlarm = "Open";
        document.getElementById('btn_alarm_kit').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_alarm_kit").innerHTML = "OPEN";
        document.getElementById("txt_alarm_kit").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else if(snap.val() == "Close"){
        stateAlarm = false;
        valueAlarm = "Close";
        document.getElementById('btn_alarm_kit').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_alarm_kit").innerHTML = "CLOSE";
        document.getElementById("txt_alarm_kit").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    if(stateAlarm){
        document.getElementById("imgAlarm").setAttribute("src",".//image/alarm_on.png");
    }else{
        document.getElementById("imgAlarm").setAttribute("src",".//image/alarm_off.png");
    }
});

var dbRefLine = firebase.database().ref('Kitchen').child('Clothes_line');
dbRefLine.on('value', snap =>{
    if(snap.val() == "Out"){
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_out.png");
        valueLine = "OUT";
        stateLine = true;
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_line").innerHTML = "OUT";
        document.getElementById("txt_line").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
        window.alert("You pulled out clothes line !!!");
        document.getElementById("txt_line_warning").innerHTML = "You pulled out clothes line !!!";
        stateLineCheck = "Out";

    } else if (snap.val() == "In") {
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_in_manual.png");
        valueLine = "In";
        stateLine = false;
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_line").innerHTML = "IN";
        document.getElementById("txt_line").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
        window.alert("You pulled in clothes line manually!!!");
        document.getElementById("txt_line_warning").innerHTML = "You pulled in clothes line manually!!!";
        stateLineCheck = "In";


    } else if (snap.val() == "Rain_In") {
        valueLine = "Rain_In";
        stateLine = false;
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_in_rain.png");
        document.getElementById("txt_line").innerHTML = "IN";
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        window.alert("It's raining, please don't pull out your clothes line !!!");
        document.getElementById("txt_line_warning").innerHTML = "It's raining, please don't pull out your clothes line !!!";
        stateLineCheck = "Rain_In";
    } 
});

window.alert("WELCOME TO KITCHEN PANEL!");

// xử lí click vào các ảnh
function ClickLightImg(){
    stateLight = !stateLight;
    if(stateLight){
        document.getElementById("imgLight").setAttribute("src","./image/lampbulbon.png");
        valueLight = "Open";
        document.getElementById('btn_light_kit').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_light_kit").innerHTML = "OPEN";
        document.getElementById("txt_light_kit").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgLight").setAttribute("src","./image/lampbulboff.png");
        valueLight = "Close";
        document.getElementById('btn_light_kit').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_light_kit").innerHTML = "CLOSE";
        document.getElementById("txt_light_kit").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    firebase.database().ref("Kitchen").child('Light').set(valueLight);
}

function ClickAlarmImg(){
    stateAlarm =!stateAlarm;

    if(stateAlarm){
        document.getElementById("imgAlarm").setAttribute("src",".//image/alarm_on.png");
        valueAlarm = "Open";
        document.getElementById('btn_alarm_kit').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_alarm_kit").innerHTML = "OPEN";
        document.getElementById("txt_alarm_kit").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgAlarm").setAttribute("src",".//image/alarm_off.png");
        valueAlarm = "Close";
        document.getElementById('btn_alarm_kit').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_alarm_kit").innerHTML = "CLOSE";
        document.getElementById("txt_alarm_kit").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
   firebase.database().ref("Kitchen").child('Alarm').set(valueAlarm);
}

function ClickLineImg(){

    stateLine = !stateLine ;

    if(!stateLine && stateLineCheck == "Out"){
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_in_manual.png");
        valueLine = "In";
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_line").innerHTML = "IN";
        document.getElementById("txt_line").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
        firebase.database().ref("Kitchen").child('Clothes_line').set(valueLine);

    }
     if (stateLine && stateLineCheck == "In") {
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_out.png");
        valueLine = "Out";
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_line").innerHTML = "OUT";
        firebase.database().ref("Kitchen").child('Clothes_line').set(valueLine);

    }
    if (stateLine && stateLineCheck == "Rain_In") {
        stateLine = !stateLine;
        document.getElementById("imgLine").setAttribute("src",".//image/clothes_in_rain.png");
        document.getElementById('btn_line').setAttribute("style", "background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        window.alert("It's raining, please don't pull out your clothes line !!!");
    } 
}

// sigout process button
$("#btn-logout").click(function()
{
  firebase.auth().signOut()
});


