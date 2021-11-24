const formulario = document.querySelector(".formulario");
const result = document.getElementById("result");
const again = document.getElementById("again");
const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");

function updateRateValue(val) {
  let rate = document.getElementById("rate");
  let output = document.getElementById("output_rate");

  output.innerHTML = `${val}%`;
  console.log(rate.value);
}

function compute(event) {
  event.preventDefault();

  if (
    amount.value &&
    amount.value > 0 &&
    rate.value &&
    rate.value <= 100 &&
    years.value &&
    years.value > 0
  ) {
    let date = new Date();

    result.innerHTML = `If you deposit <span class="span_yellow">${
      "$" + amount.value
    }</span>, <br>
                            at an interest rate of <span class="span_yellow">${
                              rate.value
                            }%</span>, <br>
                            You will receive an amount of <span class="span_yellow">${
                              "$" +
                              parseInt(years.value) *
                                parseInt(amount.value) *
                                (parseFloat(rate.value) / 100)
                            }</span>, <br>
                            in the year <span class="span_yellow">${
                              date.getFullYear() + parseInt(years.value)
                            }</span>
                            `;

    document.getElementById("label_amount").style.color = "black";
    document.getElementById("label_years").style.color = "black";
    document.getElementById("label_rate").style.color = "black";
  } else {
    if (!(amount.value && amount.value > 0)) {
      document.getElementById("label_amount").style.color = "red";
      if (amount.value <= 0) {
        alert("You must enter a positive number greater than 0");
      }
      amount.focus();
    } else {
      document.getElementById("label_amount").style.color = "black";
    }

    if (!(years.value && years.value > 0)) {
      document.getElementById("label_years").style.color = "red";
      years.focus();
      if (years.value <= 0) {
        alert("You must enter a positive year");
      }
    } else {
      document.getElementById("label_years").style.color = "black";
    }

    if (!rate.value && rate.value > 100) {
      document.getElementById("label_rate").style.color = "red";
      rate.focus();
    } else {
      document.getElementById("label_rate").style.color = "black";
    }
  }
}

formulario.addEventListener("submit", compute);

again.addEventListener("click", () => {
  amount.value = "";
  rate.value = "";
  years.value = "";
  amount.focus();
  result.innerHTML = "";
  document.getElementById("output_rate").innerHTML = "10%";
});

//updateRateValue(val)
