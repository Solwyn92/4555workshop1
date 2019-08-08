import crossroads from 'crossroads';
import homeController from './controllers/homeController';
import peopleController from './controllers/peopleController';
import favoritesController from './controllers/favoritesController';
import contactController from './controllers/contactController';

function router () {
  crossroads.addRoute('', function () {
    console.log('Home');
    $('#root').load('./partials/home.html', homeController);
  })

  crossroads.addRoute('#/people', function () {
    console.log('People');
    $('#root').load('./partials/people.html', peopleController);
  })

  crossroads.addRoute('#/favorites', function () {
    console.log('Favorites');
    $('#root').load('./partials/favorites.html', favoritesController);
  })

  crossroads.addRoute('#/contact', function () {
    console.log('Contact');
    $('#root').load('./partials/contact.html', contactController);
  })


  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })
 crossroads.parse(window.location.hash)
}
export default router
