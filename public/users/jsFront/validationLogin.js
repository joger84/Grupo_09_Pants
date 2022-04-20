window.addEventListener('load', function(e){
    const formLoginUser = document.querySelector(".formLogin");
    console.log("Estas dentro del Form Login User")
    const emailLoginField = document.querySelector("[name=eMail]");
    const passwordLoginField = document.querySelector("[name=password]");
    console.log(emailLoginField,passwordLoginField);
    let errorsLogin = 0;
    
    const validateEmptyFieldLogin = (e) => {
        const field = e.target;
        const spanTagErrorLogin = field.nextElementSibling;
        if (field.value.trim() === "") {
            field.classList.add("is-invalid");
            spanTagErrorLogin.innerText = `El campo ${field.id} es obligatorio`;
            spanTagErrorLogin.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            errorsLogin = errorsLogin+1;
            
        }
        else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
            spanTagErrorLogin.innerHTML = "";
            spanTagErrorLogin.classList.remove("invalid-feedback");
        }
        
    }
    emailLoginField.addEventListener("blur", validateEmptyFieldLogin);
    passwordLoginField.addEventListener("blur", validateEmptyFieldLogin);

    ///Aviso de campos incompletos
    emailLoginField.addEventListener("input", (e)=>{
        let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        const field = e.target;
        const email = field.value;
        const spanTagError = field.nextElementSibling;
        
            if (email.length>0 && email.length<2 || !expresion.exec(email)){
                field.classList.add("is-invalid")
                spanTagError.innerText = `Debe ingresar una dirección de correo electrónico`;
                spanTagError.classList.add("invalid-feedback");
                field.classList.remove("is-valid");
                emailLoginField.removeEventListener("blur", validateEmptyFieldLogin);
                
                errorsLogin = errorsLogin+1;
            }else {
                field.classList.remove("is-invalid")
                field.classList.add("is-valid")
                spanTagError.innerText = "";
                spanTagError.classList.remove("invalid-feedback");
                emailLoginField.addEventListener("blur", validateEmptyFieldLogin);
            };
    });
    passwordLoginField.addEventListener("input", (e)=>{
        const field = e.target;
        const password = field.value;
        const spanTagError = field.nextElementSibling;
          
          if (password.length>0 && password.length<8){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 8 caracteres`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            passwordLoginField.removeEventListener("blur", validateEmptyFieldLogin);
            errorsLogin = errorsLogin+1;
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
            passwordLoginField.addEventListener("blur", validateEmptyFieldLogin);
        };
    });
    formLoginUser.addEventListener("submit", (e)=>{
        if(errorsLogin.length>0){
            e.preventDefault();
        }
    })
  
})
