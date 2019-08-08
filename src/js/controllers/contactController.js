function contactController() {
    console.log('Se cargó contacto y su controlador');

//validar campo nombre

var campoNombre = $('#Nombre');

function validarNombre(event) {

    var inputNode = $(this);

    if (inputNode.val() != '') {
        $(campoNombre).removeClass('is-invalid');
        $(campoNombre).addClass('is-valid');
    } else {
        $(campoNombre).removeClass('is-valid');
        $(campoNombre).addClass('is-invalid');
    }
}

$( "#Nombre" ).one('blur', validarNombre);

//Email: Deberá contener arroba, punto y contenido.

var campoEmail = $('#Email')

function validarEmail(event) {

    var inputNode = $(this);

    if (inputNode.val().indexOf('@') >= 0 && inputNode.val().indexOf('.') >= 0 && inputNode.val() != '') {
        $(campoEmail).removeClass('is-invalid');
        $(campoEmail).addClass('is-valid');
    } else {
        $(campoEmail).removeClass('is-valid');
        $(campoEmail).addClass('is-invalid');
    }
}

$( "#Email" ).one('blur', validarEmail);

//Comentarios: Deberá tener contenido.

var campoComentario = $('#exampleFormControlTextarea1')

function validarComentario(event) {

    var inputNode = $(this);

    if (inputNode.val() != '') {
        $(campoComentario).removeClass('is-invalid');
        $(campoComentario).addClass('is-valid');
    } else {
        $(campoComentario).removeClass('is-valid');
        $(campoComentario).addClass('is-invalid');
    }
}

$( "#exampleFormControlTextarea1" ).one('blur', validarComentario);

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

