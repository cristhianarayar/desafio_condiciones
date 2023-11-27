
const myborder = document.querySelector(".size-image1")
const mynumber1 = document.querySelector("#number1")
const mynumber2 = document.querySelector("#number2")
const mynumber3 = document.querySelector("#number3")
const mytextwar = document.querySelector(".text1")
const btn = document.querySelector(".btn")
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const pass3 = document.getElementById('pass3')
const txtpass = document.querySelector(".txtpass")

//Requerimiento N°1
function fnimageborder(){
    myborder.classList.toggle('img1')
}

//Requerimiento N°2
function fnstickers(){
    let sum = 0
    sum = parseInt(mynumber1.value) + parseInt(mynumber2.value) + parseInt(mynumber3.value)
    if(sum <= 10){
        mytextwar.classList.remove('txt-warning2')
        mytextwar.classList.add('txt-warning1')
        mytextwar.innerHTML = 'Llevas '+sum+' stickers'
        console.log('Llevas '+sum+' stickers')
    }else{
        mytextwar.classList.remove('txt-warning1')
        mytextwar.classList.add('txt-warning2')
        mytextwar.innerHTML = '* Llevas demasiados stickers'
        console.log('Llevas demasiados stickers')
    }
 }

 //Validaciones Requerimiento N°2
function fnvalidarango1(event){
    let mywarnum1 = document.querySelector(".warning-num1")
    let val = parseInt(event.value)
    if(isNaN(val)){
        mywarnum1.innerHTML = '* El valor debe ser numérico'
        console.log('el valor debe ser numérico')
        btn.style.opacity = '0.5'
        btn.disabled = true
        return false
    }
    
    if(val >= 0 && val <= 10){
        mywarnum1.innerHTML = ''
        console.log('el valor en rango')
        btn.style.opacity = '1'
        btn.disabled = false
        return true
    }else{
        mywarnum1.innerHTML = '* El valor fuera de rango'
        console.log('el valor fuera de rango')
        btn.style.opacity = '0.5'
        btn.disabled = true
        return false
    }
}

function fnvalidarango2(event){
    let mywarnum2 = document.querySelector(".warning-num2")
    let val = parseInt(event.value)
    if(isNaN(val)){
        mywarnum2.innerHTML = '* El valor debe ser numérico'
        console.log('el valor debe ser numérico')
        btn.style.opacity = '0.5'
        btn.disabled = true
        return false
    }
    
    if(val >= 0 && val <= 10){
        mywarnum2.innerHTML = ''
        console.log('el valor en rango')
        btn.style.opacity = '1'
        btn.disabled = false
        return true
    }else{
        mywarnum2.innerHTML = '* El valor fuera de rango'
        console.log('el valor fuera de rango')
        btn.style.opacity = '0.5'
        btn.disabled = true
        return false
    }
}

function fnvalidarango3(event){
    let mywarnum3 = document.querySelector(".warning-num3")
    let val = parseInt(event.value)
    if(isNaN(val)){
        mywarnum3.innerHTML = '* El valor debe ser numérico'
        console.log('el valor debe ser numérico')
        btn.style.opacity = '0.5'
        btn.disabled = true
        return false
    }
    
    if(val >= 0 && val <= 10){
        mywarnum3.innerHTML = ''
        console.log('el valor en rango')
        btn.style.opacity = '1'
        btn.disabled = false
        return true
    }else{
        mywarnum3.innerHTML = '* El valor fuera de rango'
        console.log('el valor fuera de rango')
        btn.style.opacity = '0.5'
        btn.disabled = true
        return false
    }
}

// Requerimiento N°3

function fnpassword(){
    let val1 = parseInt(pass1.options[pass1.selectedIndex].value)
    let val2 = parseInt(pass2.options[pass2.selectedIndex].value)
    let val3 = parseInt(pass3.options[pass3.selectedIndex].value)

    if(val1 == 9 && val2 == 1 && val3 == 1){
        txtpass.classList.remove('txt-warning2')
        txtpass.classList.add('txt-warning1')
        txtpass.innerHTML = 'Password 1 correcto'
        console.log(val1,val2,val3)
    }else if(val1 == 7 && val2 == 1 && val3 == 4){
        txtpass.classList.remove('txt-warning2')
        txtpass.classList.add('txt-warning1')
        txtpass.innerHTML = 'Password 2 correcto'
        console.log(val1,val2,val3)
    }else{
        txtpass.classList.remove('txt-warning1')
        txtpass.classList.add('txt-warning2')
        txtpass.innerHTML = '* Password Incorrecto'
        console.log('* Password Incorrecto')
    }
}

