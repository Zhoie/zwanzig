
//buttons 
const addUserBtn = document.getElementById('add-user');
const douleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

//contain
const main = document.getElementById('main');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log(data.results[0]);

    const newUser = {
        name: `${data.results[0].name.first} ${data.results[0].name.last}`, 
        money: Math.floor(Math.random() * 1000000)
    };
    console.log(newUser);

    addData(newUser);

};

function addData(obj) {
    data.push(obj);
    updateDOM();
}

function doubleMoney() {
    data = data.map(user => {
        return {...user, money: user.money * 2}
    })

    updateDOM();
}

function showMillionaires() {
    data = data.filter(user => user.money > 1000000);
    updateDOM();
}


function sortByRichest() {
    data.sort((a,b) => b.money - a.money);
    updateDOM();
}

function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
        wealth
      )}</strong></h3>`;
    main.appendChild(wealthEl);
  }


// Update DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  
    providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
        item.money
      )}`;
      main.appendChild(element);
    });
  }


function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

//event listeners
addUserBtn.addEventListener('click',getRandomUser)
douleBtn.addEventListener('click',doubleMoney)
showMillionairesBtn.addEventListener('click',showMillionaires)
sortBtn.addEventListener('click',sortByRichest)
calculateWealthBtn.addEventListener('click',calculateWealth)