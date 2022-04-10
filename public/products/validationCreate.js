window.addEventListener('load', function(e){
    const formProductCreate = document.querySelector(".formCreate");
    console.log("Estas dentro del Form Create Product")
    
    
    
    const productCreateModelField = document.querySelector(".productName")
    const productCreateDescriptionField = document.querySelector(".description"); 
    const productCreatreQuantityField = document.querySelector(".cantidad"); 
    const productCreateimgField = document.querySelector('#image')
    const productCreatecategoriaField = document.querySelector("#categoria"); 
    const productCreateColorField = document.querySelector("#colores"); 
    const productCreateSizeField = document.querySelector("#tall"); 
    const productCreatePriceField = document.querySelector(".price"); 
    console.log(productCreateModelField, productCreateDescriptionField, productCreatreQuantityField, productCreateimgField, productCreatecategoriaField, productCreateColorField, productCreateSizeField, productCreatePriceField)

    
    errorCreateArray=0;
    const validationEmptyFieldCreateProd = (e) =>{
        const field = e.target //target indica que elemento fue el que disparo el evento
        const productspanTagError = field.nextElementSibling; // capturo a la etiqueta que esta despues del field 
        console.log(productspanTagError)
        if (field.value.trim() === ""){
            field.classList.add("is-invalid")
            productspanTagError.innerText = `El campo ${field.name} es obligatorio`;
            productspanTagError.classList.add("invalid-feedback");
            
            errorCreateArray++;
        } else {
            field.classList.remove("is-invalid")
            field.classList.add("is-valid")
            productspanTagError.innerText = "";
            productspanTagError.classList.remove("invalid-feedback");
        };
        
        }
    
    //pasamos la f(x) validationEmptyField para que ninguno de los campos pueda estar vacio
    productCreateModelField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreateModelField.addEventListener('input', (e)=>{
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
    
    
    productCreateDescriptionField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreateDescriptionField.addEventListener('input', (e)=>{
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
       
    productCreatreQuantityField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreateimgField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreateimgField.addEventListener('blur', (e) =>{
      const acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
      const field = e.target;
      const image = field.value;
      const productspanTagError = field.nextElementSibling;
      if (image !== acceptedExtensions){
          field.classList.add("is-invalid")
          productspanTagError.innerText = `Debes cargar una extension valida .jpg, .png, .jpeg, .gif`;
          productspanTagError.classList.add("invalid-feedback");
      } else {
          field.classList.remove("is-invalid")
          field.classList.add("is-valid")
          productspanTagError.innerText = "";
          productspanTagError.classList.remove("invalid-feedback");
      };
    
    });
    
    
    productCreatecategoriaField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreateColorField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreateSizeField.addEventListener('blur', validationEmptyFieldCreateProd);
    productCreatePriceField.addEventListener('blur', validationEmptyFieldCreateProd);
    
    formProductCreate.addEventListener("submit", function(e){
    if (errorCreateArray<0) {
        e.preventDefault();
        
    }
    })
    
    })










