var leftArrow = window.document.getElementById('leftArrow')
var Leonardo = window.document.getElementById('leonardo')
var Samantha = window.document.getElementById('samantha')
var Bruna = window.document.getElementById('bruna')
var rightArrow = window.document.getElementById('rightArrow')

function ScrollRight() {
    Leonardo.style = "display : none"
    Bruna.style = "display : flex"
    rightArrow.style = "display : none"
    leftArrow.style = "display : flex"
}

function ScrollLeft() {
    Leonardo.style = "display : flex"
    Bruna.style = "display : none"
    rightArrow.style = "display : flex"
    leftArrow.style = "display : none"
}