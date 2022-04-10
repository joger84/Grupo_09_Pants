window.addEventListener('load', function(e){


const formEditProduct = document.querySelector(".formEdit");
console.log("Estas dentro del Form Edit Product")



const productModelField = document.querySelector(".productName")
const productDescriptionField = document.querySelector(".description"); 
const productQuantityField = document.querySelector(".cantidad"); 
const productimgField = document.querySelector('#image')
const productcategoriaField = document.querySelector("#categoria"); 
const productColorField = document.querySelector("#colores"); 
const productSizeField = document.querySelector("#tall"); 
const productPriceField = document.querySelector(".price"); 
console.log(productModelField, productDescriptionField, productQuantityField, productimgField, productcategoriaField, productColorField, productSizeField, productPriceField)


errorArray=0;
const validationEmptyField = (e) =>{
    const field = e.target //target indica que elemento fue el que disparo el evento
    const productspanTagError = field.nextElementSibling; // capturo a la etiqueta que esta despues del field 
    console.log(productspanTagError)
    if (field.value.trim() === ""){
        field.classList.add("is-invalid")
        productspanTagError.innerText = `El campo ${field.name} es obligatorio`;
        productspanTagError.classList.add("invalid-feedback");
        
        errorArray++;
    } else {
        field.classList.remove("is-invalid")
        field.classList.add("is-valid")
        productspanTagError.innerText = "";
        productspanTagError.classList.remove("invalid-feedback");
    };
    
    }

//pasamos la f(x) validationEmptyField para que ninguno de los campos pueda estar vacio
productModelField.addEventListener('blur', validationEmptyField);
productModelField.addEventListener('input', (e)=>{
    const field = e.target;
    const model = field.value;
    const productspanTagError = field.nextElementSibling;
    if (model.length<5){
        field.classList.add("is-invalid")
        productspanTagError.innerText = `El campo debe contener al menos 5 digitos`;
        productspanTagError.classList.add("invalid-feedback");
    } else {
        field.classList.remove("is-invalid")
        field.classList.add("is-valid")
        productspanTagError.innerText = "";
        productspanTagError.classList.remove("invalid-feedback");
    };
});


productDescriptionField.addEventListener('blur', validationEmptyField);
productDescriptionField.addEventListener('input', (e)=>{
    const field = e.target;
    const description = field.value;
    const productspanTagError = field.nextElementSibling;
    if (description.length < 20){
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


productQuantityField.addEventListener('blur', validationEmptyField);
productimgField.addEventListener('blur', validationEmptyField);
productcategoriaField.addEventListener('blur', validationEmptyField);
productColorField.addEventListener('blur', validationEmptyField);
productSizeField.addEventListener('blur', validationEmptyField);
productPriceField.addEventListener('blur', validationEmptyField);

formEditProduct.addEventListener("submit", function(e){
if (errorArray<0) {
    e.preventDefault();
    
}
})

})