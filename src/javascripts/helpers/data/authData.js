import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const findersDiv = $('#finders');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      findersDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      mushroomList.buildForest();
      mycologistList.buildFinders();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      findersDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
