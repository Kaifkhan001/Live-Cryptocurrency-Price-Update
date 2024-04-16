let bitcPrice = document.querySelector(".bitcoin div h3");
let ethPrice = document.querySelector(".etherium div h3");
let dogPrice = document.querySelector(".dogcoin div h3");

async function getPrices(namee){
   let api = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${namee}&tsyms=USD,JPY,EUR`);
   let price = await api.json();
   return price.USD;
}

async function updatePrices() {
    bitcPrice.innerHTML = "$" + await getPrices("BTC");
    ethPrice.innerHTML = "$" + await getPrices("ETH");
    dogPrice.innerHTML = "$" + await getPrices("DOGE");
}

updatePrices();
