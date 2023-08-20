const convertButton = document.querySelector ('.currency-button')
const currencySelect = document.querySelector('.currency-select')

function convertValue() {
    const inputValue = document.querySelector('.currency-input').value
    const currencyValueConverted = document.querySelector('.currency-value-to-converted')
    const currencyValue = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const euroTody = 6.2

    if(currencySelect.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency:'USD'
        }).format(inputValue / dolarToday)
    }

    if(currencySelect.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency:'EUR'
        }).format(inputValue / euroTody)
    }

    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar amaricano'
        currencyImage.src = './assets/img/dolar.png'
    }

    if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/euro.png'
    }

    convertValue()
}


convertButton.addEventListener('click', convertValue)
currencySelect.addEventListener('change', changeCurrency)
