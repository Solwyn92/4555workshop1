function contactController() {
    console.log('Se cargó contacto y su controlador');


var campoNombre = $('#Nombre');

function validarNombre(event) {

    var inputNode = $(this);

    if (inputNode.val() != '') {
        $(campoNombre).removeClass('is-invalid');
        $(campoNombre).addClass('is-valid');
    } else {
        $(campoNombre).removeClass('is-valid');
        $(campoNombre).addClass('is-invalid');
    } activateButton();
}

$( "#Nombre" ).one('blur', validarNombre);


var campoEmail = $('#Email')

function validarEmail(event) {

    var inputNode = $(this);

    if (inputNode.val().indexOf('@') >= 0 && inputNode.val().indexOf('.') >= 0 && inputNode.val() != '') {
        $(campoEmail).removeClass('is-invalid');
        $(campoEmail).addClass('is-valid');
    } else {
        $(campoEmail).removeClass('is-valid');
        $(campoEmail).addClass('is-invalid');
    } activateButton();
}

$( "#Email" ).one('blur', validarEmail);


var campoComentario = $('#exampleFormControlTextarea1')

function validarComentario(event) {

    var inputNode = $(this);

    if (inputNode.val() != '') {
        $(campoComentario).removeClass('is-invalid');
        $(campoComentario).addClass('is-valid');
    } else {
        $(campoComentario).removeClass('is-valid');
        $(campoComentario).addClass('is-invalid');
    } activateButton();
}

$( "#exampleFormControlTextarea1" ).one('blur', validarComentario);


$("#Nombre").change(function(){
  var inputNode = $(this);

  if (inputNode.val() != '') {
      $(campoNombre).removeClass('is-invalid');
      $(campoNombre).addClass('is-valid');
  } else {
      $(campoNombre).removeClass('is-valid');
      $(campoNombre).addClass('is-invalid');
  }
});

$("#Email").change(function(){
  var inputNode = $(this);

  if (inputNode.val().indexOf('@') >= 0 && inputNode.val().indexOf('.') >= 0 && inputNode.val() != '') {
      $(campoEmail).removeClass('is-invalid');
      $(campoEmail).addClass('is-valid');
  } else {
      $(campoEmail).removeClass('is-valid');
      $(campoEmail).addClass('is-invalid');
  }
});

$("#exampleFormControlTextarea1").change(function(){
  var inputNode = $(this);

  if (inputNode.val() != '') {
      $(campoComentario).removeClass('is-invalid');
      $(campoComentario).addClass('is-valid');
  } else {
      $(campoComentario).removeClass('is-valid');
      $(campoComentario).addClass('is-invalid');
  }
});

function activateButton() {
  var enviarInfoNode = document.getElementById('Enviar');
  var inputFields = document.getElementsByClassName('is-valid');
  if (inputFields.length >= 3) {
      enviarInfoNode.disabled = false;
  } else {
      enviarInfoNode.disabled = true;           
  }
}

function postData (url, data, cbk) {
    $.ajax({
      url: url,
      method: 'POST',
      data: data
    })
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }
var submitButtonNode = $('#Enviar');
  submitButtonNode.click(function () {
    var firstName = campoNombre.val()
    var email = campoEmail.val()
    var comments = campoComentario.val()

    var data = {
      firstName: firstName, //se declaran con los nombres de las variables definidas en el php
      email: email,
      comments: comments
    }

    postData('./simpleEmail.php', data, function (error, data) {
      if (!error) {
        window.location.hash = '#/contact/greetings' //podemos hacer esta sección para devolverle un msj al usuario
      }
    })
  })




}
export default contactController;

