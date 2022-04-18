function validateRating() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("d1").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("d1").innerHTML = "Thank You ";
  }
}
