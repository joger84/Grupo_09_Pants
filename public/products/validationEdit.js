console.log("Estas dentro del Form Edit Product")

const formEditProduct = document.querySelector(".formEdit");
const productimgField = document.querySelector('#image');



const productDescriptionField = document.querySelector("#Descripcion"); 
const productQuantityField = document.querySelector("#Cantidad"); 
const productcategoriaField = document.querySelector("#categoria"); 
const productColorField = document.querySelector("#colores"); 
const productSizeField = document.querySelector("#Talle"); 
const productPriceField = document.querySelector(".price"); 

//traigo todos los inputs del form
const inputsForm = [...formEditProduct.querySelectorAll('.formItem')]
console.log(inputsForm)
//recorro el array 
for (let i=0; i < inputsForm.length; i++){
    const itmeForm = inputsForm[i].querySelector(".productEdit");
    itmeForm.addEventListener('blur', (e) => {
            if (itmeForm.value.trim() === ""){
                //itmeForm.classList.add("is-invalid")
                itmeForm.nextElementSibling.innerHTML = `El campo ${itmeForm.id} es obligatorio`;
                itmeForm.nextElementSibling.classList.add("invalid-feedback")
                itmeForm.classList.add('is-invalid')
                itmeForm.classList.remove('is-valid')
            } else {
                itmeForm.nextElementSibling.innerHTML = ""
                itmeForm.nextElementSibling.classList.remove("invalid-feedback")
                itmeForm.classList.remove("is-invalid")
                itmeForm.classList.add("is-valid")
                
            }
        
    })
    //Selecciono el input Modelo 
    const productModelField = inputsForm[0].querySelector(".productEdit");
    productModelField.addEventListener('input', (e) => {
        if (productModelField.value.length < 5){
            productModelField.nextElementSibling.innerHTML = 'El campo debe contener al menos 5 digitos'
            productModelField.nextElementSibling.classList.add("invalid-feedback")
            productModelField.classList.add('is-invalid')
            productModelField.classList.remove('is-valid')
            
            
        } else {
            productModelField.nextElementSibling.innerHTML = ""
            productModelField.nextElementSibling.classList.remove("invalid-feedback")
            productModelField.classList.add('is-valid')
            productModelField.classList.remove('is-invalid')
            productModelField.classList.add('is-valid')
            
        }
    })
    //Selecciono el input Descripcion
    const productDescriptionField = inputsForm[1].querySelector(".productEdit");
    productDescriptionField.addEventListener('input', (e) => {
        if (productDescriptionField.value.length < 20){
            productDescriptionField.nextElementSibling.innerHTML = 'El campo debe contener al menos 20 digitos'
            productDescriptionField.nextElementSibling.classList.add("invalid-feedback")
            productDescriptionField.classList.add('is-invalid')
            
        } else {
            productDescriptionField.nextElementSibling.innerHTML = ""
            productDescriptionField.nextElementSibling.classList.remove("invalid-feedback")
            productDescriptionField.classList.add('is-valid')
        }
    })
}
            
    
//Validacion de la imagen
productimgField.addEventListener('change', (e) =>{
    const pathField = e.target.value;
    //console.log(productimgField.value="")
    const acceptedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    if (!acceptedExtensions.exec(pathField)){
        productimgField.nextElementSibling.innerHTML = `Debes cargar una extension valida .jpg, .png, .jpeg, .gif`;
        productimgField.nextElementSibling.classList.add("invalid-feedback");
        productimgField.value='';
        return false;
    } 
});



















/*productDescriptionField.addEventListener('input', (e) => {
    const field = e.target;
    const description = field.value;
    const productspanTagError = field.nextElementSibling;
    if (description.length < 20 ){
        field.classList.add("is-invalid")
        productspanTagError.innerText = `El campo debe contener al menos 20 digitos`;
        productspanTagError.classList.add("invalid-feedback");
    } else {
        field.classList.remove("is-invalid")
        field.classList.add("is-valid")
        productspanTagError.innerText = "";
        productspanTagError.classList.remove("invalid-feedback");
    };
});
*/
/*formEditProduct.addEventListener("submit", function(e){
    if (errorArray>0) {
        e.preventDefault();
        
    }
})*/

//const validationEmptyField = (e) =>{
    //const field = e.target //target indica que elemento fue el que disparo el evento
    //const productspanTagError = field.nextElementSibling; // capturo a la etiqueta que esta despues del field 
    //console.log(productspanTagError)
    
    //}
    
    //pasamos la f(x) validationEmptyField para que ninguno de los campos pueda estar vacio
    //productModelField.addEventListener('blur', validationEmptyField);
    //productDescriptionField.addEventListener('blur', validationEmptyField);
    //productQuantityField.addEventListener('blur', validationEmptyField);
    //productimgField.addEventListener('blur', validationEmptyField);
    //productcategoriaField.addEventListener('blur', validationEmptyField);
    //productColorField.addEventListener('blur', validationEmptyField);
    //productSizeField.addEventListener('blur', validationEmptyField);
    //productPriceField.addEventListener('blur', validationEmptyField);
    /*else {
        pathField.classList.remove("is-invalid")
        pathField.classList.add("is-valid")
        productspanTagError.innerText = "";
        productspanTagError.classList.remove("invalid-feedback");
    };*/