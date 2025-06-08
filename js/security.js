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

var stateDoor = false;
var valueDoor;
var valueWarning;
var valueDoorWarning;
var doorPassword;
var num_ctrl = "0";
var doorOpen = "";
function ClickDoor(){
    if (doorOpen == "Open")  {
    window.location.href = "door_controll.html";
    }

    if (doorOpen == "Close" || num_ctrl != "0") {
    stateDoor = !stateDoor;
}
    if(stateDoor){
        document.getElementById("imgDoor").setAttribute("src","./image/pic_door_open.png");
        valueDoor = "Open";
        document.getElementById('btn_door').setAttribute("style", "margin-left:140px;margin-top:15px;background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_door").innerHTML = "OPEN";
        document.getElementById("txt_door").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
        document.getElementById("imgDoor").setAttribute("src","./image/pic_door_close.png");
        valueDoor = "Close";
        document.getElementById('btn_door').setAttribute("style", "margin-left:140px;margin-top:15px;background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_door").innerHTML = "CLOSE";
        document.getElementById("txt_door").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    firebase.database().ref("Security").child('Door_status').set(valueDoor);
}

//change listen data when update when loading the webapp from Firebase
var dbRefDoor = firebase.database().ref('Security').child('Door_status');
dbRefDoor.on('value', snap =>{
    if(snap.val() == "Open"){

        doorOpen = "Close";
        stateDoor = true;
        valueDoor = "Open";
        document.getElementById('btn_door').setAttribute("style", "margin-left:140px;margin-top:15px;background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_door").innerHTML = "OPEN";
        document.getElementById("txt_door").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else if(snap.val() == "Close"){
        doorOpen = "Open";
        stateDoor = false;
        valueDoor = "Close";
        document.getElementById('btn_door').setAttribute("style", "margin-left:140px;margin-top:15px;background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_door").innerHTML = "CLOSE";
        document.getElementById("txt_door").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    if(stateDoor){
        document.getElementById("imgDoor").setAttribute("src","./image/pic_door_open.png");
    }else{
        document.getElementById("imgDoor").setAttribute("src","./image/pic_door_close.png");
    }
});

function ClickDoorImg(){
    if (doorOpen == "Open")  {
        window.location.href = "door_controll.html";
        }
    
        if (doorOpen == "Close" || num_ctrl != "0") {
        stateDoor = !stateDoor;
    }
    if(stateDoor){
        document.getElementById("imgDoor").setAttribute("src",".//image/pic_door_open.png");
        valueDoor = "Open";
        document.getElementById('btn_door').setAttribute("style", "margin-left:140px;margin-top:15px;background-image: linear-gradient(to right,#0000FF,#99CCFF,#00FFCC);");
        document.getElementById("txt_door").innerHTML = "OPEN";
        document.getElementById("txt_door").setAttribute("style","font-family: cusive;color: #CC3300; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }else{
       document.getElementById("imgDoor").setAttribute("src","./image/pic_door_close.png");
        valueDoor = "Close";
        document.getElementById('btn_door').setAttribute("style", "margin-left:140px;margin-top:15px;background-image: linear-gradient(to right,#eb1313,#ebc20c,#e2e7c5);");
        document.getElementById("txt_door").innerHTML = "CLOSE";
        document.getElementById("txt_door").setAttribute("style","font-family: cusive;color: #0033CC; position:relative;bottom:15px;font-size:20px;font-weight: bold; ");
    }
    firebase.database().ref("Security").child('Door_status').set(valueDoor);
}

// Xử lý để DoorWaning trở lại Normal khi đã hiểu tình trạng đã xảy ra.
function ClickDoorWarningImg(){
    document.getElementById("imgDoorWarning").setAttribute("src",".//image/pic_door_normal.png");
    firebase.database().ref("Security").child('Door').set("Normal");
    firebase.database().ref("Security").child('Door_solve').set("Normal");
    window.alert("YOU UNDERSTOOD THE DOOR CONDITION ?");
}


// xử lý để cho Warning trở lại Normal khi đã hiểu tình trạng
function ClickWarningImg(){
    document.getElementById("imgWarning").setAttribute("src",".//image/pic_door_normal.png");
    firebase.database().ref("Security").child('Warning').set("Normal");
    window.alert("YOU UNDERSTOOD THE WARNING CONDITION ?");
}

// xử lý hệ thống an ninh chung của ngôi nhà

var warning = firebase.database().ref('Security').child('Warning');
warning.on('value', snap =>{
    valueWarning = snap.val();
    if (valueWarning == "Normal"){
        document.getElementById("txt_warning").innerHTML = "NORMAL";
        document.getElementById("imgWarning").setAttribute("src","./image/pic_normal.png");
    } else if (valueWarning == "There is fire") {
        document.getElementById("txt_warning").innerHTML = "THERE IS FIRE";
        document.getElementById("imgWarning").setAttribute("src","./image/pic_fire.png");
    } else if (valueWarning == "Gas leakage") {
        document.getElementById("txt_warning").innerHTML = "GAS LEAKAGE";
        document.getElementById("imgWarning").setAttribute("src","./image/pic_gas.png");
    } else if (valueWarning == "High temperature") {
        document.getElementById("txt_warning").innerHTML = "HIGH TEMPERATURE";
        document.getElementById("imgWarning").setAttribute("src","./image/pic_temperature.png");
    } else if (valueWarning == "Suspicious object") {
        document.getElementById("txt_warning").innerHTML = "SUSPICIOUS OBJECT";
        document.getElementById("imgWarning").setAttribute("src","./image/pic_suspicious.png");
    } else if (valueWarning == "Rain") {
        document.getElementById("txt_warning").innerHTML = "IT'S RAINING";
        document.getElementById("imgWarning").setAttribute("src","./image/pic_rain.png");
    }
});

// xử lý hệ thống an của cửa ra vào của ngôi nhà

var doorWarning = firebase.database().ref('Security').child('Door');
doorWarning.on('value', snap =>{
    valueDoorWarning = snap.val();
    if (valueDoorWarning == "Normal"){
        document.getElementById("txt_door_warning").innerHTML = "NORMAL";
        document.getElementById("imgDoorWarning").setAttribute("src","./image/pic_door_normal.png");
    } else if (valueDoorWarning == "Guest") {
        document.getElementById("txt_door_warning").innerHTML = "THERE'S GUEST";
        document.getElementById("imgDoorWarning").setAttribute("src","./image/pic_door_guest.png");
        firebase.database().ref("Security").child('Door_solve').set("Abnormal");
    } else if (valueDoorWarning == "Theft") {
        document.getElementById("txt_door_warning").innerHTML = "THERE'S THEFT";
        document.getElementById("imgDoorWarning").setAttribute("src","./image/pic_door_theft.png");
        firebase.database().ref("Security").child('Door_solve').set("Abnormal");
    } 
});

// điều hướng sang trang reset door password
function ClickResetDoorPassword (){
window.location.href = "reset_door_password.html";
}

function ClickChangeDoorPassword (){
    window.location.href = "change_door_password.html";
    }

// xử lý nhập mật khẩu để mở cửa ra vào
function Open(){
    var door_password = firebase.database().ref('Security').child('Door_password');
    door_password.on('value', snap =>{
    doorPassword = snap.val();
    })
    var doorpassword = $("#door_password").val();
    if (doorPassword == doorpassword) {
        firebase.database().ref("Security").child('Door_status').set("Open");
        firebase.database().ref("Security").child('Door').set("Normal");
        num_ctrl = "1";
        stateDoor = true;
        window.alert("DOOR OPENED!!!");
        window.location.href = "security.html";
        
    } else {
        window.alert("YOU ENTERED WRONG DOOR PASSWORD!!!");
        firebase.database().ref("Security").child('Door').set("Theft");
    }
}

// sigout process button
$("#btn-logout").click(function()
{
  firebase.auth().signOut()
});
