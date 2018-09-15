var request = require ('request');
request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=0CZBXPGPXL2CBG2Q", function(error,response,body){
    
    body = JSON.parse(body);
    companySymbol(body);
    newPrice(body);
});
function companySymbol(arr){
    var A = arr["Meta Data"]
    var B = Object.keys(A).map(i => A[i])
    
     var companySymbol = B[1]
     document.getElementById("symbol").innerHTML = companySymbol

     
}
function newPrice(arr){
    // FIRST LAYER OBJECT
    var A = arr["Time Series (1min)"]
    // SECOND LAYER OBJECT
    var B = Object.keys(A).map(i => A[i])
    var newPrice = parseFloat(B[0]["4. close"])
    document.getElementById("price").innerHTML = newPrice

}

