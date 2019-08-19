/**
 * La función getLocalList permite obtener una lista en formato
 * JavaScript del localStorage. Si la lista no existe devuelve un
 * array vacío.
 * @param { string } key 
 * @returns { array }
 */
function getLocalList(index, parentNode) {
  var number = 1
  var localList = localStorage.getItem(index)
  var parsedList = JSON.parse(localList)

  if (parsedList == null) {
    console.log("No hay personajes guardados en favoritos");
  } else {
    for (let i = 0; i < parsedList.length; i++) {
      var element = parsedList[i];

      $(parentNode).append(`<tr id="${element.url}">
      <th scope="row">${number}
      <td>${element.name}</td>
      <td>${element.gender}</td>
      <td>${element.height}</td>
      <td>${element.mass}</td>
      <td>${element.eyes}</td>
      <td><button type="button" class="btn btn-outline-danger  btn-sm">Eliminar</button>
      </td></tr>`);

      number++
    }
  }
} 

/**
 * La función setLocalList permite guardar una lista
 * en el localStorage en formato JSON
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList(key, list) {
  var localList = localStorage.getItem(key)
  var parsedList = JSON.parse(localList)

  if (parsedList == null) {
    parsedList = []
  }

  parsedList.push(list)
  var strList = JSON.stringify(parsedList)
  localStorage.setItem(key, strList)
}


export { getLocalList, setLocalList }

