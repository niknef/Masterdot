const nickInput=document.getElementById("nick");
const sizeInput=document.getElementById("size");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");

function comprobarForm(event){
    
    if(nickInput.value.match(/(?<!\s)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo del nick no debe comenzar con un numero";
        return false;
        
    }else if(sizeInput.value=="0"){
        sizeInput.focus();
        event.preventDefault();
        error.innerText="Elije un tamaño por favor";
        return false;
    }
    return true;
    
}

formEntrada.addEventListener('submit',comprobarForm);