const electron = require('electron');
const {ipcRenderer} = electron;
const remote = require('electron').remote;
var success = document.getElementById("success");
    success.style.display = "none";
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
function submitForm(){
    a = document.getElementById("s1").value;
    b = document.getElementById("s2").value;
    c = document.getElementById("s3").value;
    d = document.getElementById("s4").value;
    
    q = document.getElementById("p1").value;
    w = document.getElementById("p2").value;
    e = document.getElementById("p3").value;
    r = document.getElementById("p4").value;
    ChangeRow(a,b,c,d,q,w,e,r);
    var form = document.getElementById("form");
    form.style.display = "none";
    var success = document.getElementById("success");
    success.style.display = "block";
}

var fs = require('fs');
var data = fs.readFileSync('symbol.json');
var symbolJson = JSON.parse(data);
var S1 = symbolJson[0][0];
var S2 = symbolJson[1][0];
var S3 = symbolJson[2][0];
var S4 = symbolJson[3][0];
var P1 = symbolJson[0][1];
var P2 = symbolJson[1][1];
var P3 = symbolJson[2][1];
var P4 = symbolJson[3][1];
document.getElementById("s1").value = S1;
document.getElementById("s2").value = S2;
document.getElementById("s3").value = S3;
document.getElementById("s4").value = S4;
document.getElementById("p1").value = P1;
document.getElementById("p2").value = P2;
document.getElementById("p3").value = P3;
document.getElementById("p4").value = P4;

function ChangeRow(a,b,c,d,q,w,e,r){
    var writeData = [[a,q],[b,w],[c,e],[d,r]]
    var data = JSON.stringify(writeData);
    fs.writeFile('symbol.json',data);
}; 
function closeWindow(){
    var window = remote.getCurrentWindow();
    window.close();
}