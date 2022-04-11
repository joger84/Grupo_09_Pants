/*window.addEventListener("load", function (){
    let form = document.querySelector(".formCreate");
    console.log ("conectar")
    form.addEventListener("submit", function(e){
        let errors = [];
        let fullName = document.querySelector(".fullName");
        if (fullName.value == ""){
            errors.push("El campo Nombre no puede estar vacío")
        }else if(fullName.value.length <= 3)
            errors.push("El campo Nombre debe tener mas de 3 caracteres")
            if(errors.length >0){
                e.preventDefault();
                let arrayErrors = document.querySelector("div.arrayErrors");
                for(let i=0; i< errors.length; i++){
                    arrayErrors.innerHTML="<li>"+errors[i]+"</li>"
                }
            }
    })
    }
)*/
const form = document.querySelector(".formCreate");
console.log("Estas en Form Register")
const fullNameField = document.querySelector("[name=fullName]");
const userField = document.querySelector("[name=user]");
const emailField = document.querySelector("[name=eMail]");
const passwordField = document.querySelector("[name=password]");

const validateEmptyField = (e) => {
	const field = e.target;
	const spanTagError = field.nextElementSibling;
	if (field.value.trim() === "") {
		field.classList.add("is-invalid");
		spanTagError.innerHTML = `El campo ${field.name} es obligatorio`;
        spanTagError.classList.add("invalid-feedback");
        field.classList.remove("is-valid");
	} else {
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
		spanTagError.innerHTML = "";
		spanTagError.classList.remove("invalid-feedback");
	}
}

fullNameField.addEventListener("blur", validateEmptyField);
userField.addEventListener("blur", validateEmptyField);
emailField.addEventListener("blur", validateEmptyField);
passwordField.addEventListener("blur", validateEmptyField);

 form.addEventListener("submit", (e)=>{
     e.preventDefault();
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const fullNameValue = fullNameField.value.length
    const spanTagError = field.nextElementSibling;
      console.log(fullNameValue);
      if(fullNameValue <2){
          spanTagError.innerText = `El Nombre debe tener más de 2 caracteres`;
          spanTagError.classList.add("invalid-feedback");
          field.classList.add("is-invalid");
        }
        if(expReg.test(emailField.value)){
            console.log(emailField.value);
            field.classList.add("is-invalid");
            spanTagError.classList.add("invalid-feedback");
            field.classList.remove("is-valid");
        }
    })


