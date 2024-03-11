import { common } from './common';
import { createMurkup } from './helpers/helper';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';

const list = document.querySelector('.js_list');
const favorite = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];

console.log(list);

createMurkup(favorite, list);

list.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js_info')) {
    const product = findProduct(evt.target);
    createModal(product);
    console.log(product);
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js_card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
