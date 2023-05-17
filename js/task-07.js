const inputChange = document.querySelector('input#font-size-control')
const text = document.querySelector('span#text')

inputChange.addEventListener('change', e => {
    text.style.fontSize = `${e.target.value}px`
})
