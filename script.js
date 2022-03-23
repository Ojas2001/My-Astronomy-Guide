function validateRating() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("d1").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("d1").innerHTML = "Thank You ";
  }
}

function toolTipHoover(){
  const inOb = document.getElementById("id2");
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toogle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerE1)){
    return new bootstrap.Tooltip(tooltipTriggerE1)
  }
}

function toolTipHooverPhoto(){
  const inOb1 = document.getElementById("id3");
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toogle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerE1)){
    return new bootstrap.Tooltip(tooltipTriggerE1)
  }
}
