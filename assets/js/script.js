const convertButton = document.querySelector ('.currency-button')
const currencySelect = document.querySelector('.currency-select')
const  currencyConvert = document.querySelector('.currency-convert-from')

/** Converter Real para outras moedas */

function convertValue() {
    const inputValue = document.querySelector('.currency-input').value
    const currencyValueConverted = document.querySelector('.currency-value-to-converted')
    const currencyValue = document.querySelector('.currency-value')

    const dolarToday = 4.98
    const dolarLibraTody = 0.79
    const dolarCriptoToday = 25.935
    const euroTody = 5.43
    const euroDolarToday = 1.08
    const euroLibraToday = 0.85570
    const libraToday = 6.22907
    const libraDolartoday = 1.26
    const criptoToday = 129.500
    const criptoDolarToday = 26466.63
    const criptoEuroToday = 24367.56
    const criptoLibraToday =20808.2
    

    if(currencySelect.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency:'USD'
        }).format(inputValue / dolarToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)
    }

    if(currencySelect.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency:'EUR'
        }).format(inputValue / euroTody)
    }

    if(currencySelect.value == 'libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraToday)
    }

    if(currencySelect.value == 'bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue * criptoToday)
    }

    if(currencyConvert.value == 'dolar' && currencySelect.value == 'real') {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue * dolarToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue)
    }
//Reafazer calculo
    if(currencyConvert.value == 'dolar' && currencySelect.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euroDolarToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'dolar' && currencySelect.value == 'libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraDolartoday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'dolar' && currencySelect.value == 'bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue * criptoDolarToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'euro' && currencySelect.value == 'real') {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:'BRL'
        }).format(inputValue * euroTody)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'EUR'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'euro' && currencySelect.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'
        }).format(inputValue * euroDolarToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'EUR'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'euro' && currencySelect.value == 'libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'GBP'
        }).format(inputValue * euroLibraToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'EUR'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'euro' && currencySelect.value == 'bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'BTC'
        }).format(inputValue * criptoEuroToday)
        
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-Uk', {
            style:'currency',
            currency:'EUR'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'libra' && currencySelect.value == 'real') {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:"BRL"
        }).format(inputValue * libraToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'GPB'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'libra' && currencySelect.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'USD'
        }).format(inputValue * libraDolartoday)
    }

    if(currencyConvert.value == 'libra' && currencySelect.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'EUR'
        }).format(inputValue / euroLibraToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-Uk', {
            style:'currency',
            currency:'GBP'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'libra' && currencySelect.value == 'bitcoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'BTC'
        }).format(inputValue * criptoLibraToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'GBP'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'bitcoin' && currencySelect.value == 'real') {
        currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:'BRL'
        }).format(inputValue / criptoToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-Uk', {
            style:'currenccy',
            currency:'BTC'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'bitcoin' && currencySelect.value == 'dolar') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'
        }).format(inputValue / criptoDolarToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style:'currency',
            currency:'BTC'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'bitcoin' && currencySelect.value == 'euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'EUR'
        }).format(inputValue / criptoEuroToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UL', {
            style:'currency',
            currency:'BTC'
        }).format(inputValue)
    }

    if(currencyConvert.value == 'bitcoin' && currencySelect.value == 'libra') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'GBP'
        }).format(inputValue / criptoLibraToday)

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style:'currency',
            currency:'BTC'
        }).format(inputValue)
    }
    
}
//Fim da função

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')
    const currencyToName = document.querySelector('.main-currency')
    const currencyToImage = document.querySelector('img-main-currency')

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar amaricano'
        currencyImage.src = './assets/img/dolar.png'
    }
    
    if(currencySelect.value == 'real') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = './assets/img/brasil 2.png'
    }

    if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/euro.png'
    }

    if(currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra esterlina'
        currencyImage.src = './assets/img/libra 1.png'
    }

    if(currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/img/bitcoin 1.png'
    }

    convertValue()
}

function changeConvertCurrencyFrom() {
    const currencyName = document.querySelector('.main-currency')
    const currencyImage = document.querySelector('.img-main-currency')

    if(currencyConvert.value == 'real') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = './assets/img/brasil 2.png'
    }

    if(currencyConvert.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/img/dolar.png'
    }

    if(currencyConvert.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/euro.png'
    }

    if(currencyConvert.value == 'libra') {
        currencyName.innerHTML = 'Libra esternina'
        currencyImage.src = './assets/img/libra 1.png'
    }

    if(currencyConvert.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/img/bitcoin 1.png'
    }

   // currencyValueDolar() 
}

convertButton.addEventListener('click', convertValue)
currencySelect.addEventListener('change', changeCurrency)
currencyConvert.addEventListener('change', changeConvertCurrencyFrom)
