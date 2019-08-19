import { setLocalList } from './../utils/localStorage';

function peopleController() {

    getData('https://swapi.co/api/people');

    var number = 1;

    function getData(url) {
        var request = $.ajax({
            url: url,
            method: 'GET'
        });

        request.done(function getDataNext(data) {
            var peopleResults = data.results;
            var nextData = data.next;

            for (var i = 0; i < peopleResults.length; i++) {
                const element = peopleResults[i];

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

                $('#myTable').append(`<tr id="${element.url}">
                <th scope="row">${number}
                <td>${element.name}</td>
                <td>${spanishGender()}</td>
                <td>${spanishHeight()}</td>
                <td>${spanishMass()}</td>
                <td>${spanishEyes()}</td>
                <td><button type="button" class="btn btn-outline-success  btn-sm">Guardar</button>
                </td></tr>`);

                number++

            }

            if (nextData === null) {
                $('#verMasBtn').attr('disabled', true);
            } else {
                $('#verMasBtn').one('click', function () {
                    getData(nextData);
                });
            }
            console.log(nextData);
        });

        request.fail(function (error) {
            console.log('Error: ', error);
        });
    }
    
    $('#myTable').on('click', '.btn', function () {
        var row = $(this).closest('tr')
        var numberID = $(row).attr("id")
        var name = row.find('td').eq(0).text();
        var gender = row.find('td').eq(1).text();
        var height = row.find('td').eq(2).text();
        var mass = row.find('td').eq(3).text();
        var eyes = row.find('td').eq(4).text();

        setLocalList('listPeople', { name: name, gender: gender, height: height, mass: mass, eyes: eyes, id: numberID })
        $(row).remove();
    })

}

export default peopleController;
