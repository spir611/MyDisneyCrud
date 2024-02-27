/******************************************************************************************************/
/*                                                                                                    */
/*                                  My Crud Project                                                   */
/*                                    MyDisneyCrud                                                    */ 
/*                                 Lenguaje de Marcas                                                 */
/*                                   1º DAW -  23/24                                                  */
/*                         Author: Sandra Barbara Pirpamer                                            */
/*                                                                                                    */
/******************************************************************************************************/                         //declaracion constantes
const hotelName = document.getElementById('hotelName'); 
const address = document.getElementById('address'); 
const city = document.getElementById('city');
const country = document.getElementById('country');
const postalCode = document.getElementById('postalCode');
const email = document.getElementById('email'); 
const telephone = document.getElementById('telephone');
const roomCap = document.getElementById('roomCap');
const parks = document.getElementById('parks');
const stars = document.getElementByName('stars');



const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

//declaracion variables


function validacion(event){
    let correcto = true;
    
    event.preventDefault(); 

    if(hotelName.value == "" || (/^\s+$/).test(hotelName.value)){
        document.getElementById('hotelNameHelp').style.visibility = "visible";
        hotelName.style.border="1px solid red";
        correcto = false;
    }
   /*  if(hotelName.value == "" || !(/^\s+$/).test(hotelName.value)){
        document.getElementById('hotelNameHelp').style.visibility = "visible" ;
        hotelName.style.border="1px solid red"
        correcto = false
    } */

    if(address.value == "" || (/^\s+$/).test(address.value)){
        document.getElementById('addressHelp').style.visibility = "visible" ;
        address.style.border="1px solid red"
        correcto = false
    }

    if(city.value == "0"){
        document.getElementById('cityHelp').style.visibility = "visible" ;
        city.style.border="1px solid red"
        correcto = false
    }
    
    if(country.value == "0"){
        document.getElementById('countryHelp').style.visibility = "visible" ;
        country.style.border="1px solid red"
        correcto = false
    }

    //no se puede comprobar con expresiones regex porque cada país tiene un formato distinto en tamaño y a veces incluye letras, letrasnumeros mezclado o solo numeros a veces con espacio a veces sin son valido que no hay ningún valor en el campo
    if(postalCode.value == ""){
        document.getElementById('postalCodeHelp').style.visibility = "visible" ;
        postalCode.style.border="1px solid red"
        correcto = false
    }

    if(email.value == "" || !validateEmail(email.value)) {

        document.getElementById('emailHelp').style.visibility = "visible" ;
        email.style.border="1px solid red"
        correcto = false

    } 

    //se comprueba un formato de numeros entre 6 digitos y 13 digitos (mayor numero de China y menor numero de ciertos paises pequenos viables es de 6) para evitar confusiones se permite la entrada sin + ni -
    if(telephone.value == "" || !(/^\d{6,13}$/).test(telephone.value)){
        document.getElementById('telephoneHelp').style.visibility = "visible" ;
        telephone.style.border="1px solid red"
        correcto = false
    }
    
    if(roomCap.value == "" || Number(roomCap.value) < 0){
        document.getElementById('roomCapHelp').style.visibility = "visible" ;
        roomCap.style.border="1px solid red"
        correcto = false
    }
    
    /* if(stars.value == "0"){
        document.getElementById('starsHelp').style.visibility = "visible" ;
        stars.style.border="1px solid red"
        correcto = false
    } */

    if(parks.value == "0"){
        document.getElementById('parksHelp').style.visibility = "visible" ;
        parks.style.border="1px solid red"
        correcto = false
    }

    if(!isStarsSelected(stars)){
        document.getElementById('starsHelp').style.visibility = "visible" ;
        correcto = false
    }



    

    

    return correcto;

    
}

//Funciones

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "green"; // Corrected: borderColor and added unit
}

function validateEmail(email) {
    return emailRegex.test(email);
}


function isStarsSelected(stars){
let isStarSelected = false;

    for(let i = 0; i < stars.length; i++){
        if(stars[i].checked){
            isStarSelected = true;
        
        }
       
    }
    return isStarSelected;

}    




                