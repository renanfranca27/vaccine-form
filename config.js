function formulario() {
  var input = document.querySelector('#nome').value
  var input2 = document.querySelector('#sobrenome').value
  var input3 = document.querySelector('#cpf').value
  var input4 = document.querySelector('#usuario').value
  var input5 = document.querySelector('#senha').value
  var input6 = document.querySelector('#repetir-senha').value
  var input7 = document.querySelector('#data').value

  if (String(input).length == "") {
    alert("por favor preencha todo o campo nome ");
    input.focus();
    return false;
  }
  if (String(input2).length == "") {
    alert("por favor preencha o campo sobrenome");
    input.focus();
    return false;
  }
  if (String(input3).length == "") {
    alert("por favor preencha o campo CPF com 11 números corretamente");
    input3.focus();
    return false;
  }
  if (String(input4).length == "") {
    alert('pro favor bote seu nome de usuario');
    input.focus();
    return false;
  }
  if (input5.length == "") {
    alert("preencha o campo senha com, uma senha boa!");
    input.focus();
    return false;
  }
  if (input6.length == "") {
    alert("por gentileza repita a sua senha!");
    input.focus();
    return false;
  }

  if (input7.length == "") {
    alert("preencha o campo data com a data da primeira dose!");
    input.focus();
    return false;
  }
  
}
