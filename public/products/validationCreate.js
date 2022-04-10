window.addEventListener("load", function (){
    let form = document.querySelector(".formCreate");
    console.log ("conectado al formCreate de Products")
        form.addEventListener("submit", function(e){
            let model = document.querySelector(".productName");
            let descrip = document.querySelector(".description");
            let cant = document.querySelector(".cantidad");
            let img = document.querySelector('.image')
            let price = document.querySelector(".price");
            let errors = [];
                
            if (model.value == ""){
                errors.push("Debes completar el campo Modelo")
            } else if(model.value.length <= 5){
                errors.push("El campo Modelo debe tener mas de 5 caracteres");
            }
            
            if (descrip.value == ""){
                errors.push("Debes completar el campo Descripcion")
            } else if(descrip.value.length <= 20){
                errors.push("El campo Descripcion debe tener mas de 20 caracteres");
            }
            
            console.log(cant)
            if (cant.value == ""){
                errors.push("Debes completar una cantidad de productos")
            }

            if(img.value == ''){
                errors.push("Por favor ingrese una imagen");
            } 
            
            if (price.value == ""){
                errors.push("Debes completar un precio de venta")
            }

            //revisamos la cantidad de msj de error y seteamos en la vista
            if(errors.length >0){
                e.preventDefault();
                let productsArrayErrors = document.querySelectorAll(".productsArrayErrors");
                let errorPrueba=[...productsArrayErrors]
                // console.log(errorPrueba)
                for(let i=0; i< errors.length; i++){
                    errorPrueba[i].innerHTML= errors[i];
                }
            }
        })
    }            
)
