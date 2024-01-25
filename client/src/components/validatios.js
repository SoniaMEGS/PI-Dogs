function validation({ name, height, weight, lifeSpan }) {
  const errors = {};
  const regexName = /^[A-Z][a-zA-Z ]*$/;
  const regexParameters = /^\d+\s-\s\d+$/;
  const regexLifeSpan = /^\d+\s-\s\d+\syears$/;
  if (!regexName.test(name)) {
    errors.name =
      "Debe iniciar con mayuscula, no se permiten caracteres especiales o numeros.";
  }
  //--
  if (!regexParameters.test(height)) {
    errors.height = "Debe tener la siguiente estructura: numero - numero.";
  }
  let heightArray = height.split(" ");
  if (heightArray[0] > heightArray[2] || heightArray[0] == heightArray[2]) {
    errors.height =
      "El primer parametro de altura debe ser menor y diferente al segundo.";
  }
  //--
  if (!regexParameters.test(weight)) {
    errors.weight = "Debe tener la siguiente estructura: numero - numero.";
  }
  let weightArray = weight.split(" ");
  //console.log(weightArray);
  if (weightArray[0] > weightArray[2] || weightArray[0] == weightArray[2]) {
    errors.weight =
      "El primer parametro de peso debe ser menor y diferente al segundo.";
  }
  //--
  if (!regexLifeSpan.test(lifeSpan)) {
    errors.lifeSpan =
      "Debe tener la siguiente estructura: numero - numero years.";
  }
  let lifeSpanArray = lifeSpan.split(" ");

  if (
    lifeSpanArray[0] > lifeSpanArray[2] ||
    lifeSpanArray[0] == parseInt(lifeSpanArray[2])
  ) {
    errors.lifeSpan =
      "El primer parametro de esperanza de vida debe ser menor y diferente al segundo.";
  }
  return errors;
}

export default validation;
