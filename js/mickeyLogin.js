/******************************************************************************************************/
/*                                                                                                    */
/*                                  My Crud Project                                                   */
/*                                    MyDisneyCrud                                                    */ 
/*                                 Lenguaje de Marcas                                                 */
/*                                   1º DAW -  23/24                                                  */
/*                         Author: Sandra Barbara Pirpamer                                            */
/*                                                                                                    */
/*                                                                                                    */
/*******************************************************************************************************/            
//declaracion constantes
const email = document.getElementById('email'); //getter
const password = document.getElementById('password'); //getter

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //password
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/; // password

//declaracion variables


function validacion(){
    let correcto = true;
    /* event.preventDefault(); 
 */
    

    if(email.value == "" || !validateEmail(email.value)) {

        document.getElementById('emailHelp').style.visibility = "visible" ;
        email.style.border="1px solid red"
        correcto = false

    } 

    

    if (password.value == "" || (!validatePassword(password.value) && !(password.length>=8 && password.length<=15))) {

        document.getElementById('passwordHelp').style.visibility="visible";
        password.style.border="1px solid red";
        correcto=false
        
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

function validatePassword(password) {
    return passwordRegex.test(password);
}

