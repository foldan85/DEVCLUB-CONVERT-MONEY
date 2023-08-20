const convertButton = document.querySelector ('.currency-button')

function convertValue() {
    const inputValue = document.querySelector('.currency-input').value
    const currencyValue = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const convertedValue = inputValue / dolarToday

    currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)

    console.log(inputValue)
}


convertButton.addEventListener('click', convertValue)

