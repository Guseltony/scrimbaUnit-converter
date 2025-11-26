const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const inputValue = document.querySelectorAll(".input-value");
const feetResult = document.querySelector(".feet-result");
const meterResult = document.querySelector(".meter-result");
const gallonResult = document.querySelector(".gallon-result");
const literResult = document.querySelector(".liter-result");
const poundResult = document.querySelector(".pound-result");
const kiloResult = document.querySelector(".kilo-result");

let value;

function convert() {
  value = input.value.trim();

  if (value === "") return;

  for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].textContent = value;
  }

  // for meter/feet conversion
  let feet = value * 3.281;
  feetResult.textContent = feet.toFixed(3);

  // meter
  let meter = value / 3.281;
  meterResult.textContent = meter.toFixed(3);

  // liter/gallon conversion
  let liter = value / 0.264;
  literResult.textContent = liter.toFixed(3);
  // gallon
  let gallon = value * 0.264;
  gallonResult.textContent = gallon.toFixed(3);

  // kg/pound conversion
  let kg = value / 2.204;
  kiloResult.textContent = kg.toFixed(3);
  // pounds
  let pound = value * 2.204;
  poundResult.textContent = pound.toFixed(3);
}

convertBtn.addEventListener("click", convert);
