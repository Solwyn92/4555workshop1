import { getLocalList } from './../utils/localStorage';
import { removeLocalStorage } from './../utils/removeLocalStorage';

function favoritesController() {
    console.log('Se cargó favoritos y su controlador');
    getLocalList('listPeople', '#myTable')

    $('#myTable').on('click', '.btn', function () {
        var row = $(this).closest('tr')
        var numberID =  $(this).attr("id")
        removeLocalStorage('listPeople', numberID)
        $(row).remove();
    })
}
export default favoritesController;
