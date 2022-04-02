window.addEventListener("load", function (){
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
)



