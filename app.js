// const button = document.querySelector('.btn')
// const colorCode = document.querySelector('.colorcode')
// const hexCode = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

// button.addEventListener('click', () => {
//     let hexColor = generateHex()
//     document.body.style.backgroundColor = hexColor
//     colorCode.textContent = hexColor
// })

// function generateHex() {
//     let hexColor = '#'
//     for(let i = 0; i < 6; i++) {
//         hexColor= hexColor + hexCode[getRandomNumber()]
//     }
//     return hexColor
// }

// function getRandomNumber() {
//      return Math.floor(Math.random() * hexCode.length) // 11
// }







const button = document.querySelector('.btn')
const colorCode = document.querySelector('.colorcode')
const hexCode = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

button.addEventListener('click', function() {
    let color = hexGenerateColors() // #AA00BB
    document.body.style.backgroundColor = color
    colorCode.textContent = color
})

function hexGenerateColors() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color = color + hexCode[getRandomNumber()]
    }
    return color // #AA00BB
}

function getRandomNumber() {
    return Math.floor(Math.random() * hexCode.length);
}
