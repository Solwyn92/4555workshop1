/*
//Clase 4 - Funciones
var studentsList = [{
  firstName: 'Juan',
  lastName: 'Pérez',
  dni: 45678987
},
{
  firstName: 'Ana',
  lastName: 'Fernandez',
  dni: 45678989
},
{
  firstName: 'Pedro',
  lastName: 'Mármol',
  dni: 45678956
},
{
  firstName: 'Pablo',
  lastName: 'Picapiedras',
  dni: 45678983
}
];
function buscarAlumno(input, data) {
  var posicion = -1;
  for (i = 0; i < data.length; i++) {
    var nombre = data[i].firstName;
    var apellido = data[i].lastName;
    switch (input) {
      case nombre:
      case apellido:
        posicion = i;
        fullName = nombre + ' ' + apellido;
        break;
    }
  }
  if (posicion !== -1) {
    resultado = console.log('Se encontró el estudiante ' + fullName + ' en la posición ' + posicion);
  }
  else {
    resultado = console.log('No se pudo encontrar el estudiante');
  }
  return resultado;
}
var inputAlumno = prompt('Ingrese el nombre o apellido del alumno a buscar');
buscarAlumno(inputAlumno, studentsList);

//Clase 5 - Objetos
var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
];

function Alumno(_firstName, _lastName, _dni, _email) {
  this.name = _firstName;
  this.lastName = _lastName;
  this.dni = _dni;
  this.email = _email; //prop publicas

  var _id = Math.random(); //prop privada //cuando llamamos a una función, siempre tiene que tener ()

  this.getId = function () {
    return _id;
  }
  this.getFullName = function () {
    if (this.name !== undefined || this.lastName !== undefined) { //Si el nombre es distinto a undefined o el apellido es distinto a undefined, que devuelva nombre+apellido. Sino que devuelva 'Datos incompletos'
      return this.name + '' + this.lastName; //el '' es para dejar el espacio físico
    } else {
      return 'Datos incompletos';
    }
  }
}
var oldStudent;

var newStudent;
var newStudents = [];

//Lleno un nuevo Array con los objetos credos con la función Alumno
for (var i = 0; i < students.length; i++) {
  oldStudent = new Alumno(
    oldStudent.firstname,
    oldStudent.lastName,
    oldStudent.dni,
    oldStudent.email
  )
  newStudent.push(newStudent);
}
console.log(students);
console.log(newStudent);
for (var i = 0; i < newStudent.length; i++) {
  console.log(newStudent[i].getFullName());
}

//Clase 6 - Métodos de String y Array

function includesText(str1, str2) {

  // Llevo a uppercase los dos parametros, los convierto a string y los guardo en una variable:

  const primerPalabra = str1.toString().toUpperCase()
  const segundaPalabra = str2.toString().toUpperCase()

  // Si el segundo parametro coincide con el indexOf del primer parametro se devuelve true
  // caso contrario, se devuelve false:

  var palabraEncontrada = segundaPalabra.indexOf(primerPalabra)
  if (palabraEncontrada >= 0) {
      return true
  } else {
      return false
  }
}

console.log(includesText('Pa', 'Patricia'))
console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Patricia'))

//Clase 8 - DOM

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode(arr) {
  // esta variable define la ubicacion de donde se van a crear los elementos hijos
  var centralParentNode = document.getElementById('mainList')

  // Todas estas variables crean nodos nuevos
  var liNodeCreator = document.createElement('li')
  var h1NodeCreator = document.createElement('h1')
  var h3NodeCreator = document.createElement('h3')
  var pNodeCreator = document.createElement('p')

  // Con estos 2 metodos se define la clase y el ID del nodo LI
  liNodeCreator.className = 'list-group-item'
  liNodeCreator.id = student.dni                   
  
  // se crea un nodo li debajo del nodopadre ul
 centralParentNode.appendChild(liNodeCreator)

  // se crean los nodos que van a contener los datos del alumno
 liNodeCreator.appendChild(h1NodeCreator).innerHTML = arr.firstName + ' ' + arr.lastName
 liNodeCreator.appendChild(h3NodeCreator).innerHTML = 'DNI: ' + arr.dni          
 liNodeCreator.appendChild(pNodeCreator).innerHTML = 'Email: ' + arr.email

}

createStudentNode(student)
*/

////////////////////////////////////////////////////// WORKSHOP 1

////// Primera parte

// 1) Deberá tener un formulario que incluya los siguientes campos y los valide,
// en caso de que alguno no cumpla deberá mostrar un error y no permitir agregar el alumno hasta que se corrija:

//a) Nombre es un campo obligatorio:

var nombre = document.getElementById('Nombre');

function validarNombre(event) {
    var inputNode = event.target;
    console.log(inputNode.value);
    if (inputNode.value != '') {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
    } else {
        nombre.classList.remove('is-valid');
        nombre.classList.add('is-invalid');
    }
    activateButton();
}

nombre.onblur = validarNombre;

// b) DNI tiene que ser un número positivo y ser único (Que no coincida con ninguno ya agregado en la lista).

var dni = document.getElementById('DNI');

function validarDNI(event) {
    var inputNode = event.target;
    console.log(inputNode.value);
    if (inputNode.value != '' && inputNode.value > 0) {
        dni.classList.remove('is-invalid');
        dni.classList.add('is-valid');
    } else {
        dni.classList.remove('is-valid');
        dni.classList.add('is-invalid');
    }
    activateButton();
}

dni.onblur = validarDNI;

// y no permitir agregar el alumno hasta que se corrija:

function activateButton() {
  var addStudentButtonNode = document.getElementById('Agregar');
  var inputFields = document.getElementsByClassName('is-valid');
  if (inputFields.length > 2) {
      addStudentButtonNode.disabled = false;
  } else {
      addStudentButtonNode.disabled = true;
  }
}

// 2) Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no borra nada.

// 3) Todos los cambios tienen que quedar guardados en el LocalStorage, en el caso de que ya existan alumnos guardados los tiene que mostrar al inicio del programa.

// 4) Deberá mostrar siempre una lista en pantalla con los alumnos cargados en el sistema que tendrá que ser actualizada en cada cambio.


//////Segunda parte

// 1) El formulario deberá también incluir los siguientes campos y validarlos:

// a) Apellido es un campo opcional.

var apellido = document.getElementById('Apellido');

function validarApellido(event) {
    var inputNode = event.target;
    console.log(inputNode.value);
    if (inputNode.value != '') {
        apellido.classList.add('is-valid');
    } else {
        apellido.classList.add('is-valid');
    }
    activateButton();
}

apellido.onblur = validarApellido;

// b) Email es un campo obligatorio y tiene que tener al menos un @ y un .

var email = document.getElementById('Email');

function validarEmail(event) {
  var inputNode = event.target;
  console.log(inputNode.value);
  if (inputNode.value.indexOf('@') >= 0 && inputNode.value.indexOf('.') >= 0){
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
  } else {
      email.classList.remove('is-valid');
      email.classList.add('is-invalid');
  }
  activateButton();
}

email.onblur = validarEmail;

// 2) Deberá permitir buscar un alumno ingresando un texto encontrando coincidencias parciales
//en nombre y apellido, sin importar mayúsculas o minúsculas.