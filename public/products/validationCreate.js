window.addEventListener("load", function (){
    let form = document.querySelector(".formCreate");
    console.log ("conectado al formCreate de Products")
        form.addEventListener("submit", function(e){
                let errors = [];
                let model = document.querySelector(".productName");
                console.log(model)
                if (model.value == ""){
                    errors.push("Debes completar el campo Modelo")
                } else if(model.value.length <= 5)
                    errors.push("El campo Modelo debe tener mas de 5 caracteres");
                    

                let descrip = document.querySelector(".description");
                console.log(descrip)
                if (descrip.value == ""){
                    errors.push("Debes completar el campo Descripcion")
                } else if(descrip.value.length <= 20)
                    errors.push("El campo Descripcion debe tener mas de 20 caracteres");

                let cant = document.querySelector(".cantidad");
                console.log(cant)
                if (cant.value == ""){
                    errors.push("Debes completar una cantidad de productos")
                }

                let price = document.querySelector(".price");
                    console.log(price)
                    if (price.value == ""){
                        errors.push("Debes completar un precio de venta")
                    }


                    if(errors.length >0){
                        e.preventDefault();
                        let productsArrayErrors = document.querySelector("div.productsArrayErrors");
                        for(let i=0; i< errors.length; i++){
                            productsArrayErrors.innerHTML="<li>"+errors[i]+"</li>"
                        }
                    }
            

        })
    }            
)
