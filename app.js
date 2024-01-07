let searchKeywords = [
    'What is a good car ',
    'How is emil hajric doing',
    'HTML',
    'CSS',
    'Beginner Tutorial',
    'JavaScript',
    'Where to learn coding online',
    'Where to learn web design',
    'How to create a website'
]

const resultBox = document.querySelector('.result-cont')
const inputBox = document.getElementById('search-box')

inputBox.onkeyup = () => {
    let result = []
    let input = inputBox.value
    if(input.length) {
        result = searchKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
    }

    display(result)

    if(!result.length) {
        resultBox.innerHTML = ''
    }
}

const display = (result) => {
    const content = result.map((list) => {
        return '<li onclick=selectInput(this)>' + list + '</li>'
    })

    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>'
}

const selectInput = (list) => {
    inputBox.value = list.innerHTML
    resultBox.innerHTML = ''
}