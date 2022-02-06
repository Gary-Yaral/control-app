function validate (values) { 
  let errors = {};
  let validateString = /^([a-z ñáéíóú]{2,60})$/i;
  let validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  let validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,200}$/;
  //Name
  if (!values.user_name) {
    errors.user_name = 'Por favor ingrese su nombre';
  }
  
  if(!errors.user_name && !validateString.test(values.user_name)){
    errors.user_name = 'El nombre debe tener 2 a 60 caracteres, solo letras.';      
  }

  // Lastname
  if (!values.user_lastname) {
    errors.user_lastname = 'Por favor ingrese su apellido';
  }
  
  if(!errors.user_lastname && !validateString.test(values.user_lastname)){
    errors.user_lastname = 'El apellido debe tener 2 a 60 caracteres, solo letras.';      
  }

  // Email
  if (!values.user_email) {
    errors.user_email = 'Por favor ingrese su email';
  }
  
  if(!errors.user_email && !validateEmail.test(values.user_email)){
    errors.user_email = 'Ingrese un email válido';      
  }

  // Password
  if (!values.user_password) {
    errors.user_password = 'Por favor ingrese su contraseña';
  }
  
  if(!errors.user_password && !validatePassword.test(values.user_password)){
    errors.user_password = 'Contraseña debe tener al menos 8 caracteres entre mayúsculas, minúsculas, números o caracteres especiales';      
  }

  // Confirm password
  if (!values.confirm_password) {
    errors.confirm_password = 'Por favor ingrese nuevamente su contraseña';
  }
  
  if(!errors.confirm_password && !validatePassword.test(values.confirm_password)){
    errors.confirm_password = 'Contraseña debe tener al menos 8 caracteres entre mayúsculas, minúsculas, números o caracteres especiales';      
  }

  if(!errors.confirm_password && !errors.user_password){
    let areSame = values.confirm_password === values.user_password;
    !areSame ? errors.confirm_password = 'La contraseña ingresada no coincide con la original' : ""
  }

  return errors;
}


export default validate;