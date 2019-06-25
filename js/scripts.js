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
        fullName = nombre +' '+ apellido;
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
      if(this.name !== undefined || this.lastName !== undefined) { //Si el nombre es distinto a undefined o el apellido es distinto a undefined, que devuelva nombre+apellido. Sino que devuelva 'Datos incompletos'
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