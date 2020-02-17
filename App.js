console.log('INFO: Reading App.js');

console.log('INFO: Getting access to elements');

const inputElementTotalInput = document.getElementById("totalInput")
const inputElementTipAns = document.getElementById("tipAns")
const inputElementTaxAns = document.getElementById("taxAns");
const inputElementRateInput = document.getElementById("rateInput")
const inputElementGTotalAns = document.getElementById("gTotalAns");
const btnElement = document.getElementById("calc");

console.log('INFO: Configuring event handlers');

btnElement.onclick = async function ()
{
  const textTotal = inputElementTotalInput.value;
  const textRate = inputElementRateInput.value;
  var tot = parseInt(textTotal);
  var rate = parseFloat(textRate);

  var tip = tot * rate;  
  var tax = tot * 0.055;
  var gTotal = tot + tax + tip;

  inputElementTipAns.innerHTML = "$" + tip;
  inputElementTaxAns.innerHTML = "$" + tax;
  inputElementGTotalAns.innerHTML = "$" + gTotal;
}

console.log('INFO: Done loading, waiting for an event'); 
