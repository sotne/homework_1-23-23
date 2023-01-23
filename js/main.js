// // console.log('wassup')
// let newHeader = document.createElement('h4');
// newHeader.innerHTML = `${cityName}`;
// newHeader.className = 'text-center text-primary';
// let container = document.querySelector('.container');
// container.append(newHeader);

let form = document.getElementById('cityName');

async function handleFormSubmit(e){
    e.preventDefault();
    let cityName = e.target.cityName.value;

    let cityInfo = await getCityInfo(cityName);
    buildCityTempCard(cityInfo);
    e.target.cityName.value = '';
};

form.addEventListener('submit', handleFormSubmit);

async function getCityInfo(cityName){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIKey}`)
    let data = await response.json();
    return data[0]
};

// cityMain.sys.name
// ℉=((K-273.15)*1.8)+32

function buildCityTempCard(cityMain){
    let card = document.createElement('div');
    card.className = 'card h-100';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cityCurrent = document.createElement('h5');
    cityCurrent.className = 'card-title';
    cityCurrent.innerHTML = `current temp ${cityMain.main.temp}`;

    let cityRealFeel = document.createElement('h5');
    cityRealFeel.className = 'card-title';
    cityRealFeel.innerHTML = `the real feel is  ${cityMain.main.feels_like}`;

    let cityHigh = document.createElement('h5');
    cityHigh.className = 'card-title';
    cityHigh.innerHTML = `todays high will be ${cityMain.main.temp_max}`;

    let cityLow = document.createElement('h5');
    cityLow.className = 'card-title';
    cityLow.innerHTML = `todays low will be ${cityMain.main.temp_min}`;

    cardBody.append(cityCurrent);
    cardBody.append(cityRealFeel);
    cardBody.append(cityHigh);
    cardBody.append(cityLow);

    card.append(cardBody);

    let col = document.createElement('div')
    col.className = 'col-12 col-md-6 col-lg-3 my-3'

    col.append(card);

    let display = document.getElementById('cityDisplay');
    display.append(col)

}