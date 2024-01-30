function validation({ name, height, weight, lifeSpan }) {
  const errors = {};
  const regexName = /^[A-Z][a-zA-Z ]*$/;
  const regexParameters = /^\d+\s-\s\d+$/;
  const regexLifeSpan = /^\d+\s-\s\d+\syears$/;
  if (!regexName.test(name)) {
    errors.name =
      "It must start with a capital letter, no special characters or numbers are allowed.";
  }
  //--
  if (!regexParameters.test(height)) {
    errors.height = "It must have the following structure: number - number.";
  }
  let heightArray = height.split(" ");
  if (heightArray[0] > heightArray[2] || heightArray[0] == heightArray[2]) {
    errors.height =
      "The first height parameter must be smaller and different than the second.";
  }
  //--
  if (!regexParameters.test(weight)) {
    errors.weight = "It must have the following structure: number - number.";
  }
  let weightArray = weight.split(" ");
  //console.log(weightArray);
  if (weightArray[0] > weightArray[2] || weightArray[0] == weightArray[2]) {
    errors.weight =
      "The first weight parameter must be smaller and different than the second.";
  }
  //--
  if (!regexLifeSpan.test(lifeSpan)) {
    errors.lifeSpan =
      "It must have the following structure: number - number years.";
  }
  let lifeSpanArray = lifeSpan.split(" ");

  if (
    lifeSpanArray[0] > lifeSpanArray[2] ||
    lifeSpanArray[0] == parseInt(lifeSpanArray[2])
  ) {
    errors.lifeSpan =
      "The first life span parameter must be lower and different from the second.";
  }
  return errors;
}

export default validation;
