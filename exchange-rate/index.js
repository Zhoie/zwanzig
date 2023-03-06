const currenyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');

const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

calculate();

function calculate() {
    const curreny_one = currenyEl_one.value;
    const curreny_two = currencyEl_two.value;
    fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
        // console.log(data.rates);
        const rate = (data.rates[curreny_two] / data.rates[curreny_one]).toFixed(2);
        console.log(rate);
        rateEl.innerText = `1 ${curreny_one} = ${rate} ${curreny_two}`;
        amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    })

    
}

//Event listeners
currenyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currenyEl_one.value;
    currenyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});