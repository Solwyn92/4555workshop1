import { setLocalList } from './../utils/localStorage';
function peopleController() {
    console.log('Se cargó personajes y su controlador');




    function getData(url, cbk) {
        $.ajax(url).done(function (data) {
            cbk(null, data)
        }).fail(function (error) {
            cbk(error);
        });
    }

    getData("https://swapi.co/api/people", showData);

    var number = 1;
    var verMasBtn = $('#verMasBtn');


    function showData(error, data) {
        if (!error) {
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];

                function spanishGender() {
                    var spanishGender = `${element.gender}`;
                    switch (spanishGender) {
                        case 'male':
                            spanishGender = 'masculino';
                            break;
                        case 'female':
                            spanishGender = 'femenino';
                            break;
                        case 'hermaphrodite':
                            spanishGender = 'hermafrodita';
                            break;
                        default:
                            spanishGender = 'indefinido';
                            break;
                    }
                    return spanishGender;
                }

                function spanishHeight() {
                    var spanishHeight = `${element.height}`;
                    if (spanishHeight === 'unknown') {
                        spanishHeight = 'desconocida';
                    } else {
                        spanishHeight = `${element.height}` + ' cm';
                    }
                    return spanishHeight;
                }

                function spanishMass() {
                    var spanishMass = `${element.mass}`;
                    if (spanishMass === 'unknown') {
                        spanishMass = 'desconocido';
                    } else {
                        spanishMass = `${element.mass}` + ' kg';
                    }
                    return spanishMass;
                }

                function spanishEyes() {
                    var spanishEyes = `${element.eye_color}`;
                    switch (spanishEyes) {
                        case 'blue':
                            spanishEyes = 'azul';
                            break;
                        case 'yellow':
                            spanishEyes = 'amarillo';
                            break;
                        case 'red':
                            spanishEyes = 'rojos';
                            break;
                        case 'brown':
                            spanishEyes = 'marrón';
                            break;
                        case 'blue-gray':
                            spanishEyes = 'gris azulado';
                            break;
                        case 'black':
                            spanishEyes = 'negro';
                            break;
                        case 'orange':
                            spanishEyes = 'naranja';
                            break;
                        case 'hazel':
                            spanishEyes = 'avellana';
                            break;
                        case 'unknown':
                            spanishEyes = 'desconocido';
                            break;
                        case 'gold':
                            spanishEyes = 'dorado';
                            break;
                        case 'white':
                            spanishEyes = 'blanco';
                            break;
                        default:
                            spanishEyes = 'otro';
                            break;
                    }
                    return spanishEyes;
                }

                $('#myTable').append(` "<tr>" + "<td>${number}</td>" + 
            "<td>${element.name}</td>" +
            "<td>${spanishGender()}</td>" +
            "<td>${spanishHeight()}</td>" +
            "<td>${spanishMass()}</td>" +
            "<td>${spanishEyes()}</td>" +
            "<td><button type="button" class="btn btn-outline-success  btn-sm">Guardar</button></td>"
                      "</tr>"`);


                number++
            }
            var next = console.log(data.next)
            verMasBtn.click(function () {
                if (data.next) {
                    
                        (getData(data.next, showData));
                }
            })

        }



        // setLocalList();
        // function showData(error, data) {
        //     if (!error) {
        //         console.log(data);
        //     }
        // }

    }




}
export default peopleController;
