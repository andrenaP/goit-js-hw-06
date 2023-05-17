let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonMin = document.querySelector('button[data-action="decrement"]')
const buttonMax = document.querySelector('button[data-action="increment"]')

buttonMin.addEventListener('click', () => {
    counterValue--;
    displayCounter.textContent = counterValue;
})

buttonMax.addEventListener('click', () => {
    counterValue++;
    displayCounter.textContent = counterValue;
})
