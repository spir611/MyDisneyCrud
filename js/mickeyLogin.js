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
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 

const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
; 




function validacion(){
    let correcto = true;
    /* event.preventDefault(); 
 */
    

    if(email.value == "" || !validateEmail(email.value)) {

        document.getElementById('emailHelp').style.visibility = "visible" ;
        email.style.border="1px solid red"
        correcto = false

    } 

    

    if (password.value == "" || (!validatePassword(password.value))) {

        document.getElementById('passwordHelp').style.visibility="visible";
        password.style.border="1px solid red";
        correcto=false
        
    }

    if (correcto) {
        email.value = "";
        password.value = "";
    }

    return correcto;

    
}

//Funciones

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "green"; 
}

function validateEmail(email) {
    return emailRegex.test(email);
}

function validatePassword(password) {
    return passwordRegex.test(password);
}

