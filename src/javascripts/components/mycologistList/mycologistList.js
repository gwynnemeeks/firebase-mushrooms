import mycologistData from '../../helpers/data/mycologistData';
import mycologistComponent from '../mycologists/mycologists';
import utils from '../../helpers/utils';

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
    })
    .catch((err) => console.error('getMycologists failed', err));
};
export default { buildFinders };
