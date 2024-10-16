let colorText = document.getElementById('ColourId')
let btn = document.getElementById('button')
let spaceArea = document.getElementById('space')

let hexBox = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

spaceArea.addEventListener('click',function(){
    let hex = '#'

    for(let i = 1;i<=6;i++){
        randomHex()
        hex += hexBox[randomHex()]
    }
    spaceArea.style.backgroundColor = hex
    colorText.innerHTML = hex

    function randomHex(){
        return Math.floor(Math.random()*16)
    }
    console.log(randomHex())
})
