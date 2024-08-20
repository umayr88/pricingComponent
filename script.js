const rangeInput = document.querySelector(".range__input");
const priceText = document.querySelector(".price__text");
const pageviewsText = document.querySelector(".pageviews__text");
const toggleInput = document.querySelector(".toggle__label");
const discount = document.querySelector(".discount__desktop");

let isMonthly = true;

rangeInput.addEventListener("input", function (e) {
  if (isMonthly) {
    priceText.textContent = `$${(+e.target.value).toFixed(2)}`;
  } else {
    priceText.textContent = `$${((+e.target.value / 4) * 3).toFixed(2)}`;
  }

  switch (e.target.value) {
    case "8":
      pageviewsText.innerHTML = "10k PAGEVIEWS";
      break;
    case "12":
      pageviewsText.innerHTML = "25k PAGEVIEWS";
      break;
    case "16":
      pageviewsText.innerHTML = "100k PAGEVIEWS";
      break;
    case "20":
      pageviewsText.innerHTML = "225k PAGEVIEWS";
      break;
    case "24":
      pageviewsText.innerHTML = "300k PAGEVIEWS";
      break;
    case "28":
      pageviewsText.innerHTML = "500k PAGEVIEWS";
      break;
    case "32":
      pageviewsText.innerHTML = "750k PAGEVIEWS";
      break;
    case "36":
      pageviewsText.innerHTML = "1M PAGEVIEWS";
      break;
    default:
      break;
  }
});

toggleInput.addEventListener("click", function (e) {
  if (isMonthly) {
    priceText.textContent = `$${(
      (+priceText.textContent.slice(1) / 4) *
      3
    ).toFixed(2)}`;

    isMonthly = false;
  } else {
    priceText.textContent = `$${(
      (+priceText.textContent.slice(1) / 3) *
      4
    ).toFixed(2)}`;
    isMonthly = true;
  }
});

rangeInput.addEventListener("input", function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, var(--Strong-Cyan) ${value}%, var(--Light-Grayish-Blue--1) ${value}%)`;
});

discount.addEventListener("click", function () {
  discount.classList.add("discount__animation");
  console.log('Hi')
});
