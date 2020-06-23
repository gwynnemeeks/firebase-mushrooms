import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';
import mycologistComponent from '../mycologists/mycologists';

const buildFinders = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
        <div class="hut">
          <h2 class="text-center">Mycologist Hut</h2>
          <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div></div>';

      utils.printToDom('#finders', domString);
    })
    .catch((err) => console.error('getMycologists failed', err));
};
export default { buildFinders };
