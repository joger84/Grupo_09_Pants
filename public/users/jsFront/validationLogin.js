window.addEventListener('load', function(e){
    const formLoginUser = document.querySelector(".formLogin");
    console.log("Estas dentro del Form Login User")
    const emailLoginField = document.querySelector("[name=eMail]");
    const passwordLoginField = document.querySelector("[name=password]");
    console.log(emailLoginField,passwordLoginField);
    errorsLogin = 0;
    
    const validateEmptyFieldLogin = (e) => {
        const field = e.target;
        const spanTagErrorLogin = field.nextElementSibling;
        if (field.value.trim() === "") {
            field.classList.add("is-invalid");
            spanTagErrorLogin.innerText = `El campo ${field.name} es obligatorio`;
            spanTagErrorLogin.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            errorsLogin++;
            
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

    formLoginUser.addEventListener("submit", (e)=>{
        if(errorsLogin.length>0){
            e.preventDefault();
        }
    })
  
})
