{
  const calculateResult = (amountChoice, currencyChoice) => {
    const eur = 4.55;
    const usd = 4.15;
    const gbp = 5.24;

    switch (currencyChoice) {
      case "€":
        return amountChoice / eur;

      case "$":
        return amountChoice / usd;

      case "£":
        return amountChoice / gbp;
    }
  };

  const updateResultText = (amountChoice, result, currencyChoice) => {
    const resultElement = document.querySelector(".js-formResult");
    resultElement.innerText = `${result.toFixed(2)} ${currencyChoice}`;
  };

  const onFormInput = () => {
    const amountElement = document.querySelector(".js-labelAmount");
    const currencyElement = document.querySelector(".js-labelCurrency");
    const amountChoice = amountElement.value;
    const currencyChoice = currencyElement.value;

    const result = calculateResult(amountChoice, currencyChoice);
    updateResultText(amountChoice, result, currencyChoice);
  };

  function init() {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("input", onFormInput);
  }
  init();
}
