
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // Obtiene los inputs 
    const name = document.getElementById("formcontacto__input-nombre");
    const email = document.getElementById("formcontacto__input-email");
    const asunto= document.getElementById("formcontacto__input-asunto");
    const mensaje=document.getElementById("formcontacto__textarea-mensaje");
    const nameError = name.nextElementSibling;
    const emailError = email.nextElementSibling;
    const asuntoError= asunto.nextElementSibling;
    const mensajeError= mensaje.nextElementSibling;
    let formIsValid = true; // variable para verificar si el formulario es valido
  
    //verifica si los campos estan llenos; 

    //valida el nombre
    if (!name.value) {
        name.classList.add("error");
        nameError.textContent = "Nombre es requerido";
        nameError.classList.add("error-message");
        formIsValid = false;
      } else{
        name.classList.remove("error");
        nameError.textContent = "";
        nameError.classList.remove("error-message");
        formIsValid=true;
      }
    
      if (!email.value) {
        email.classList.add("error");
        emailError.textContent = "Email es requerido";
        emailError.classList.add("error-message");
        formIsValid = false;
      } else{
        email.classList.remove("error");
        emailError.textContent = "";
        emailError.classList.remove("error-message");
        formIsValid=true;

      }
    
      // verifica si el email es valido
      if (!email.validity.valid) {
        email.classList.add("error");
        emailError.textContent = "Please enter a valid email";
        emailError.classList.add("error-message");
        formIsValid = false;
      }

      if (!asunto.value) {
        asunto.classList.add("error");
        asuntoError.textContent = "Asunto es requerido";
        asuntoError.classList.add("error-message");
        formIsValid = false;
      } else{
        asunto.classList.remove("error");
        asuntoError.textContent = "";
        asuntoError.classList.remove("error-message");
        formIsValid=true;

      }

      if (!mensaje.value) {
        mensaje.classList.add("error_textarea");
        mensajeError.textContent = "Mensaje es requerido";
        mensajeError.classList.add("error-message");
        formIsValid = false;
      } else{
        mensaje.classList.remove("error_textarea");
        mensajeError.textContent = "";
        mensajeError.classList.remove("error-message");
        formIsValid=true;

      }
      


      // verifica si el formulario es valido para enviarlo 
      if (formIsValid) {
        form.submit();
      }
    });