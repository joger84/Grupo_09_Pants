window.addEventListener('load', function(e){

    const form = document.querySelector(".formCreate");

    console.log("Estas en Form Register")

    const fullNameField = document.querySelector("[name=fullName]");
    const userField = document.querySelector("[name=user]");
    const emailField = document.querySelector("[name=eMail]");
    const passwordField = document.querySelector("[name=password]");
    const imgField = document.querySelector('[name=avatarImage]');
    console.log(fullNameField, userField, emailField, passwordField, imgField)
    
    let errorArray=0;
//Aviso de campos vacíos
    const validateEmptyField = (e) => {
        const field = e.target;
        console.log(field);
        const spanTagError = field.nextElementSibling;
        if (field.value.trim() === "") {
            console.log(1);
            field.classList.add("is-invalid");
            spanTagError.innerHTML = `El campo ${field.id} es obligatorio`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            errorArray=errorArray+1
                        
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
            spanTagError.innerHTML = "";
            spanTagError.classList.remove("invalid-feedback"); 
        }
    }
    fullNameField.addEventListener("blur", validateEmptyField);

//Aviso de campos incompletos
    fullNameField.addEventListener('input', (e)=>{
        const field = e.target;
        const fullName = field.value;
        const spanTagError = field.nextElementSibling;
        if (fullName.length>0 && fullName.length<2){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 2 digitos`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            fullNameField.removeEventListener("blur", validateEmptyField); // anula el EventListener
            errorArray=errorArray+1
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
            fullNameField.addEventListener("blur", validateEmptyField);
        };
    });

    userField.addEventListener("blur", validateEmptyField);

    userField.addEventListener("input", (e)=>{
        const field = e.target;
        const userName = field.value;
        const spanTagError = field.nextElementSibling;
          
          if (userName.length>0 && userName.length<2){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 2 digitos`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            userField.removeEventListener("blur", validateEmptyField);
            errorArray=errorArray+1
        }else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
            userField.addEventListener("blur", validateEmptyField);

        };
    });
    emailField.addEventListener("blur", validateEmptyField);
    emailField.addEventListener("input", (e)=>{
        let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        const field = e.target;
        const email = field.value;
        const spanTagError = field.nextElementSibling;
        
            if (email.length>0 && email.length<2 || !expresion.exec(email)){
                field.classList.add("is-invalid")
                spanTagError.innerText = `Debe ingresar una dirección de correo electrónico`;
                spanTagError.classList.add("invalid-feedback");
                field.classList.remove("is-valid");
                emailField.removeEventListener("blur", validateEmptyField);
                
                errorArray=errorArray+1
            }else {
                field.classList.remove("is-invalid")
                field.classList.add("is-valid")
                spanTagError.innerText = "";
                spanTagError.classList.remove("invalid-feedback");
                emailField.addEventListener("blur", validateEmptyField);
            };
    })
    passwordField.addEventListener("blur", validateEmptyField);
    passwordField.addEventListener("input", (e)=>{
        const field = e.target;
        const password = field.value;
        const spanTagError = field.nextElementSibling;
          
          if (password.length>0 && password.length<8){
            field.classList.add("is-invalid")
            spanTagError.innerText = `El campo debe contener al menos 8 caracteres`;
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
            passwordField.removeEventListener("blur", validateEmptyField);
            errorArray=errorArray+1
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            spanTagError.innerText = "";
            spanTagError.classList.remove("invalid-feedback");
            passwordField.addEventListener("blur", validateEmptyField);
        };
        })
     //validar extension para que sea una imagen
     imgField.addEventListener('change', (e) => {
        const field = e.target;
        const img = field.value;
        const spanTagError = field.nextElementSibling;
        // console.log(productCreateimgField.value='')
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        
    if(!allowedExtensions.exec(img)){
        field.classList.add("is-invalid")
        spanTagError.innerHTML = "Debes cargar una extension valida .jpg, .png, .jpeg, .gif";
        spanTagError.classList.add("invalid-feedback");
        field.classList.remove("is-valid")
        errorArray=errorArray+1
    } else {
        field.classList.remove("is-invalid")
        field.classList.add("is-valid")
        spanTagError.innerText = "";
        spanTagError.classList.remove("invalid-feedback");
    };
    });

});
form.addEventListener("submit", function(e){
    if (errorArray>0) {
        e.preventDefault();
        console.log(errorArray)
    }
});
