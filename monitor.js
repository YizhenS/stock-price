const urlP1 = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";
const urlP2 = "&interval=1min&apikey=0CZBXPGPXL2CBG2Q";



var request = require ('request');
request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=0CZBXPGPXL2CBG2Q", function(error,response,body){
    
    body = JSON.parse(body);
    companySymbol(body);
    newPrice(body);
});

var R1 = require ('request');
var R2 = require ('request');
var R3 = require ('request');
var R4 = require ('request');

R1(urlP1+"AAPL"+urlP2, function(error,response,body){
    
    body = JSON.parse(body);
    companySymbol(body,1);
    newPrice(body,1);

});

R2(urlP1+"GOOG"+urlP2, function(error,response,body){
    
   body = JSON.parse(body);

    companySymbol(body,2);
    newPrice(body,2);

});

R3(urlP1+"SNAP"+urlP2, function(error,response,body){
    
    body = JSON.parse(body);
 
     companySymbol(body,3);
     newPrice(body,3);
 
 });
 R4(urlP1+"F"+urlP2, function(error,response,body){
    
    body = JSON.parse(body);
 
     companySymbol(body,4);
     newPrice(body,4);
 
 });
 




function companySymbol(arr,int){
    var A = arr["Meta Data"]
    var B = Object.keys(A).map(i => A[i])
    var row = int;
     var companySymbol = B[1]
     document.getElementById("symbol"+row).innerHTML = "Symbol: "+companySymbol 
     

     
}
function newPrice(arr,int){
    // FIRST LAYER OBJECT
    var A = arr["Time Series (1min)"]
    // SECOND LAYER OBJECT
    var B = Object.keys(A).map(i => A[i])
    var row = int;
    var newPrice = parseFloat(B[0]["4. close"])
    document.getElementById("price"+row).innerHTML = newPrice


}

