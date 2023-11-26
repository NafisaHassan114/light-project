const btnOn = document.querySelector(".btn1")
const btnOff = document.querySelector(".btn2")
const lightbox = document.querySelector(".light-box")

btnOn.addEventListener("click", function(){
    lightbox.style.backgroundColor = "yellow"
    btnOn.style.color = "red"
    btnOff.style.color = "black"
})
btnOff.addEventListener("click", function(){
    lightbox.style.backgroundColor = "transparent"
    btnOff.style.color = "red"
    btnOn.style.color = "black"
})