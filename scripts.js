const form = document.querySelector (".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")


function cliqueiNoBotao () {
    form.style.left = "40%"
    form.style.transform = "translateX (-40%)"
    mascara.style.visibility = "visible"

}

function cliqueinaMascara (){
mascara.style.visibility = "hidden"
form.style.left = "-300px"

}