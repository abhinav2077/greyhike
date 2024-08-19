var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-200%"
},3200)

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var mak = document.getElementById("maker");
var tet = document.getElementById("tether");
var bnb = document.getElementById("binancecoin");
var sol = document.getElementById("solana");
var mon = document.getElementById("monero");
var imu = document.getElementById("immutable");
var dog = document.getElementById("dogecoin");
var ave = document.getElementById("aave");
var chn = document.getElementById("chainlink");


const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Csolana%2Cchainlink%2Cdogecoin%2Cmonero%2Cmaker%2Caave%2Cimmutable&vs_currencies=usd',
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-Bm9Vumw5iHkkQPbkTGrC7YBo'
    }
  };
  
  $.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    mak.innerHTML = response.maker.usd;
    tet.innerHTML = response.tether.usd;
    bnb.innerHTML = response.binancecoin.usd;
    sol.innerHTML = response.solana.usd;
    mon.innerHTML = response.monero.usd;
    imu.innerHTML = response.immutable.usd;
    dog.innerHTML = response.dogecoin.usd;
    ave.innerHTML = response.aave.usd;
    chn.innerHTML = response.chainlink.usd;
  });

