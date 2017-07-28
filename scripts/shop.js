var total = document.getElementById("total");

var formatedText = floatToMoneyText(moneyTextToFloat(total.innerText))


// alert(readTotal());

writeTotal(350.23);

function moneyTextToFloat(text) {
  var cleanText = text.replace("R$", "").replace(",", ".");

  return parseFloat(cleanText);
}

// R$ 29,90 / 29,90 / 29.90

// 2 == "2" true // 2 === "2" false

function floatToMoneyText(value) {
  var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
  text = "R$ " + text;

  return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
  var total = document.getElementById("total");

  return moneyTextToFloat(total.innerText);
}

function writeTotal(value) {
  var total = document.getElementById("total");
  total.innerHTML = floatToMoneyText(value);
}



function calculateTotalProd() {

  var produtos = document.getElementsByClassName("produto");
  var soma = 0;

  var totalProd = 0;

  for (var i = 0; i < produtos.length; i++) {

    var produto = produtos[i];
    var price = produto.getElementsByClassName("price")[0];
    var priceText = price.innerText;
    soma = soma + moneyTextToFloat(priceText);

    var qtyElement = produto.getElementsByClassName("quantity");
    var qtyText = qtyElement[0].value;
    var quantity = moneyTextToFloat(qtyText) || 0;

    var subTotal = quantity * moneyTextToFloat(priceText);
    totalProd += subTotal;
  }

  return totalProd;
}

function quantidadeMudou() {

  writeTotal(calculateTotalProd());
}

function onDocumentLoad() {

  var textEdits = document.getElementsByClassName("quantity");
  for (var i = 0; i < textEdits.length; i++) {
    var textEdit = textEdits[i];

    textEdit.onchange = function () {

      writeTotal(calculateTotalProd());
    };
  }
}

window.onload = onDocumentLoad;