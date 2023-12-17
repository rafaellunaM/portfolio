const input = document.querySelector('#telefone')

input.addEventListener('keypress',(e)=>{


if(!check(e)){

e.preventDefault();
}
let inputlength = input.value.length

if( inputlength ===0){

input.value +='('
}else if( inputlength==4){


    input.value  += ')'
}else if(inputlength === 4){
    
input.value += ' '

}


else if( inputlength === 9){
input.value += '-'
}

})


function check(e){
    const char = String.fromCharCode(e.keyCode)
    
    const pattern = '[0-9]';
    
    
    
    if(char.match(pattern)){
    
    console.log(char);
    return true;
    
    }
    }

    document.getElementById('#validation').addEventListener('submit', function(event) {

        event.preventDefault();

 
        document.getElementById('confirmationMessage').style.display = 'block';
    });