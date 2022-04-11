window.addEventListener('load', function(e){

    const form = document.querySelector(".formCreate");
    console.log("Estas en Form Register")

    const fullNameField = document.querySelector("[name=fullName]");
    const userField = document.querySelector("[name=user]");
    const emailField = document.querySelector("[name=eMail]");
    const passwordField = document.querySelector("[name=password]");
    const imgField = document.querySelector('[name=avatarImage]');
    console.log(fullNameField, userField, emailField, passwordField, imgField)
    
    errorRegisterArray=0;
    
    const validateEmptyField = (e) => {
        const field = e.target;
        const spanTagError = field.nextElementSibling;
        if (field.value.trim() === "") {
            field.classList.add("is-invalid");
            spanTagError.innerHTML = `El campo ${field.name} es obligatorio`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            errorRegisterArray++
            
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
            spanTagError.innerHTML = "";
            spanTagError.classList.remove("invalid-feedback");
        }
    }
    //pasamos la f(x) validationEmptyField para que ninguno de los campos pueda estar vacio
    fullNameField.addEventListener("blur", validateEmptyField);
    fullNameField.addEventListener('input', (e)=>{
        const field = e.target;
        const fullName = field.value;
        const spanTagError = field.nextElementSibling;
        if (fullName.length<2){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 2 digitos`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");

            errorRegisterArray++
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
        };
    });

    userField.addEventListener("blur", validateEmptyField);
    userField.addEventListener("input", (e)=>{
        const field = e.target;
        const userName = field.value;
        const spanTagError = field.nextElementSibling;
          console.log();
          if (userName.length<2){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 5 digitos`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");

            errorRegisterArray++
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
        };
    });
    emailField.addEventListener("blur", validateEmptyField);
    emailField.addEventListener("input", (e)=>{
        const field = e.target;
        const email = field.value;
        const spanTagError = field.nextElementSibling;
          console.log();
          if (email.length<2){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 5 digitos`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");

            errorRegisterArray++
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
        };
        })
    passwordField.addEventListener("blur", validateEmptyField);
    passwordField.addEventListener("input", (e)=>{
        const field = e.target;
        const password = field.value;
        const spanTagError = field.nextElementSibling;
          console.log();
          if (password.length<8){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 5 digitos`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");

            errorRegisterArray++
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
        };
        })
        
     imgField.addEventListener('blur', validateEmptyField);
     imgField.addEventListener('blur', (e) =>{
    const acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
    const field = e.target;
    const image = field.value;
    const spanTagError = field.nextElementSibling;
    if (image !== acceptedExtensions){
        field.classList.add("is-invalid")
      spanTagError.innerText = "Debes cargar una extension valida .jpg, .png, .jpeg, .gif";
      spanTagError.classList.add("invalid-feedback");
      field.classList.add("is-valid")
  } else {
      field.classList.remove("is-invalid")
      field.classList.add("is-valid")
      spanTagError.innerText = "";
      spanTagError.classList.remove("invalid-feedback");
  };

});
console.log(errorRegisterArray)
        form.addEventListener("submit", function(e){
            if (errorRegisterArray>0) {
                e.preventDefault();
            }
            })


    
})
