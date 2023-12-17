var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){

    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    
    )
    this.classList.add('ativo')

}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)


)

var btnExpandir = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var listOpen = document.querySelector('.list')
var loading = document.querySelector(".carregar")
btnExpandir.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    listOpen.classList.toggle('open');


})

/* btnExpandir.addEventListener('mouseover', function(){
    menuSide.classList.toggle('expandir')

}) */
var btnClose = document.querySelector('#btn-close')

btnClose.addEventListener('click',function(){

    menuSide.classList.remove('expandir');

} )