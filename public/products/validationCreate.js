        
    console.log("Estas dentro del Form Create Product")
    const formProductCreate = document.querySelector(".formCreate");
    const productCreateimgField = document.querySelector('#image')
    
    const productCreateModelField = document.querySelector(".productName")
    const productCreateDescriptionField = document.querySelector(".description"); 
    const productCreatreQuantityField = document.querySelector(".cantidad"); 
    const productCreatecategoriaField = document.querySelector("#categoria"); 
    const productCreateColorField = document.querySelector("#colores"); 
    const productCreateSizeField = document.querySelector("#tall"); 
    const productCreatePriceField = document.querySelector(".price"); 
    
    //Se seleccionan todos los inputs del formulario y pasamos NodeList a un arreglo
    const arrayDiv = [...formProductCreate.querySelectorAll('.formItem')]
    
    //Recorremos el arreglo y vamos a capturando cada input y le aplicamos los eventos para la validación
    for (let index = 0; index < arrayDiv.length; index++) {
        const formItem = arrayDiv[index].querySelector('.createProduct');
        formItem.addEventListener('blur', (e) => {
            if(formItem.value.trim() === ''){
                formItem.nextElementSibling.innerHTML = 'Campo obligatorio'
                formItem.nextElementSibling.classList.add('msjRed')
            } else {
                formItem.nextElementSibling.innerHTML = ''
                formItem.nextElementSibling.classList.remove('msjRed')
                formItem.classList.remove('is-invalid')
                
            } 
        })
        //seleccionamos el primer input
        const firtsImput = arrayDiv[0].querySelector('.createProduct');
        firtsImput.addEventListener('input', () => {
            if(firtsImput.value.length < 5){
                firtsImput.nextElementSibling.innerHTML = 'El campo debe terner mas de 5 caracteres'
                firtsImput.nextElementSibling.classList.add('msjRed')
                firtsImput.classList.add('is-invalid')
            }else{
                firtsImput.nextElementSibling.innerHTML = ''
                firtsImput.nextElementSibling.classList.remove('msjRed')
                firtsImput.classList.add('is-valid')
            }
        })
        //seleccionamos el segundo input
        const secondImput = arrayDiv[1].querySelector('.createProduct');
        secondImput.addEventListener('input', () => {
            if(secondImput.value.length < 20){
                secondImput.nextElementSibling.innerHTML = 'El campo debe terner mas de 20 caracteres'
                secondImput.nextElementSibling.classList.add('msjRed')
                secondImput.classList.add('is-invalid')
            }else{
                secondImput.nextElementSibling.innerHTML = ''
                secondImput.nextElementSibling.classList.remove('msjRed')
                secondImput.classList.add('is-valid')
            }
        })
    }
    
    //validar extension para que sea una imagen
    productCreateimgField.addEventListener('change', (e) => {
        let filePath = e.target.value;
        // console.log(productCreateimgField.value='')
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        
        if(!allowedExtensions.exec(filePath)){
            productCreateimgField.nextElementSibling.innerHTML = 'Por favor subir solo archivos: .jpeg/.jpg/.png/.gif'
            productCreateimgField.nextElementSibling.classList.add('msjRed')
            productCreateimgField.value='';
            return false;
        }
    });























































    
    // errorCreateArray=0;
    // const validationEmptyFieldCreateProd = (e) =>{
    //     const field = e.target //target indica que elemento fue el que disparo el evento
    //     const productspanTagError = field.nextElementSibling; // capturo a la etiqueta que esta despues del field 
    //     console.log(productspanTagError)
    //     if (field.value.trim() === ""){
    //         field.classList.add("is-invalid")
    //         productspanTagError.innerText = `El campo ${field.name} es obligatorio`;
    //         productspanTagError.classList.add("invalid-feedback");
            
    //         errorCreateArray++;
    //     } else {
    //         field.classList.remove("is-invalid")
    //         field.classList.add("is-valid")
    //         productspanTagError.innerText = "";
    //         productspanTagError.classList.remove("invalid-feedback");
    //     };
        
    //     }
    
    // //pasamos la f(x) validationEmptyField para que ninguno de los campos pueda estar vacio
    // productCreateModelField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreateModelField.addEventListener('input', (e)=>{
    //     const field = e.target;
    //     const model = field.value;
    //     const productspanTagError = field.nextElementSibling;
    //     if (model.length<5){
    //         field.classList.add("is-invalid")
    //         productspanTagError.innerText = `El campo debe contener al menos 5 digitos`;
    //         productspanTagError.classList.add("invalid-feedback");
    //     } else {
    //         field.classList.remove("is-invalid")
    //         field.classList.add("is-valid")
    //         productspanTagError.innerText = "";
    //         productspanTagError.classList.remove("invalid-feedback");
    //     };
    // });
    
    
    // productCreateDescriptionField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreateDescriptionField.addEventListener('input', (e)=>{
    //     const field = e.target;
    //     const description = field.value;
    //     const productspanTagError = field.nextElementSibling;
    //     if (description.length < 20){
    //         field.classList.add("is-invalid")
    //         productspanTagError.innerText = `El campo debe contener al menos 20 digitos`;
    //         productspanTagError.classList.add("invalid-feedback");
    //     } else {
    //         field.classList.remove("is-invalid")
    //         field.classList.add("is-valid")
    //         productspanTagError.innerText = "";
    //         productspanTagError.classList.remove("invalid-feedback");
    //     };
    // });
       
    // productCreatreQuantityField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreateimgField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreateimgField.addEventListener('blur', (e) =>{
    //   const acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
    //   const field = e.target;
    //   const image = field.value;
    //   const productspanTagError = field.nextElementSibling;
    //   if (image !== acceptedExtensions){
    //       field.classList.add("is-invalid")
    //       productspanTagError.innerText = `Debes cargar una extension valida .jpg, .png, .jpeg, .gif`;
    //       productspanTagError.classList.add("invalid-feedback");
    //   } else {
    //       field.classList.remove("is-invalid")
    //       field.classList.add("is-valid")
    //       productspanTagError.innerText = "";
    //       productspanTagError.classList.remove("invalid-feedback");
    //   };
    
    // });
    
    
    // productCreatecategoriaField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreateColorField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreateSizeField.addEventListener('blur', validationEmptyFieldCreateProd);
    // productCreatePriceField.addEventListener('blur', validationEmptyFieldCreateProd);
    
    // formProductCreate.addEventListener("submit", function(e){
    //     if (errorCreateArray<0) {
    //         e.preventDefault();
            
    //     }
    // })
    











