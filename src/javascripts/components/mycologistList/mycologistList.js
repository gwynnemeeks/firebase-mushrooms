import mycologistComponent from '../mycologists/mycologists';
import singleMycologist from '../singleMycologist/singleMycologist';
import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

import './mycologistList.scss';

const buildFinders = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
        <div class="finders">
          <h2 class="text-center">Mushroom Finders</h2>
          <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.finderMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#finders', domString);

      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('getMycologists failed', err));
};
export default { buildFinders };
