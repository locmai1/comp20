var HOTDOG_PRICE = 3.75;
var HOTDOG_NUM;
var HOTDOG_TOTAL;
var FRIES_PRICE = 3.0;
var FRIES_NUM;
var FRIES_TOTAL;
var DRINKS_PRICE = 2.5;
var DRINKS_NUM;
var DRINKS_TOTAL;
var TAX_RATE = 0.0625;
var TAX_PRICE;
var DISCOUNT_MIN = 25.0;
var DISCOUNT_RATE = 0.1;
var DISCOUNT_PRICE;
var SUBTOTAL_PRICE;
var SUBTOTAL_FINAL;
var TOTAL_PRICE;

function order() {
  HOTDOG_NUM = parseInt(prompt("How many hotdogs would you like?")) || 0;
  FRIES_NUM = parseInt(prompt("How many fries would you like?")) || 0;
  DRINKS_NUM = parseInt(prompt("How many drinks would you like?")) || 0;

  calculateOrder();
}

function calculateOrder() {
  // calculate individual prices
  HOTDOG_TOTAL = HOTDOG_NUM * HOTDOG_PRICE;
  FRIES_TOTAL = FRIES_NUM * FRIES_PRICE;
  DRINKS_TOTAL = DRINKS_NUM * DRINKS_PRICE;

  // calculate subtotal
  SUBTOTAL_PRICE = HOTDOG_TOTAL + FRIES_TOTAL + DRINKS_TOTAL;

  // calculate discount
  if (SUBTOTAL_PRICE > 25) {
    DISCOUNT_PRICE = SUBTOTAL_PRICE * DISCOUNT_RATE;
    SUBTOTAL_FINAL = SUBTOTAL_PRICE - DISCOUNT_PRICE;
  } else {
    DISCOUNT_PRICE = 0;
    SUBTOTAL_FINAL = SUBTOTAL_PRICE;
  }

  // calculate tax
  TAX_PRICE = SUBTOTAL_FINAL * TAX_RATE;

  // calculate total
  TOTAL_PRICE = SUBTOTAL_FINAL + TAX_PRICE;

  displayOrder();
}

function displayOrder() {
  // format and write
  document.getElementById("hotdogsInfo").innerHTML =
    HOTDOG_NUM + " Hotdogs: $" + convertNumber(HOTDOG_TOTAL);
  document.getElementById("friesInfo").innerHTML =
    FRIES_NUM + " Fries: $" + convertNumber(FRIES_TOTAL);
  document.getElementById("drinksInfo").innerHTML =
    DRINKS_NUM + " Drinks: $" + convertNumber(DRINKS_TOTAL);
  document.getElementById("subtotalBeforeInfo").innerHTML =
    "Subtotal (Before Discount): $" + convertNumber(SUBTOTAL_PRICE);
  document.getElementById("discountInfo").innerHTML =
    "Discount: $" + convertNumber(DISCOUNT_PRICE);
  document.getElementById("subtotalAfterInfo").innerHTML =
    "Subtotal (After Discount): $" + convertNumber(SUBTOTAL_FINAL);
  document.getElementById("taxInfo").innerHTML =
    "Taxes (6.25%): $" + convertNumber(TAX_PRICE);
  document.getElementById("totalInfo").innerHTML =
    "Total: $" + convertNumber(TOTAL_PRICE);

  // remove the hidden class to display
  document.getElementById("orderInfo").classList.remove("hidden");
}

function convertNumber(number) {
  // round to hundredth
  const roundedNumber = Math.round(number * 100) / 100;

  // check for . in number and its index
  const stringNumber = roundedNumber.toString();
  const decimalIndex = stringNumber.indexOf(".");

  // add .00 if . doesn't exist
  // add 0 if determines only 1 digit after .
  if (decimalIndex === -1) {
    return stringNumber + ".00";
  } else if (stringNumber.length - decimalIndex === 2) {
    return stringNumber + "0";
  } else {
    return stringNumber;
  }
}
