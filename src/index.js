import { common } from './common';
import { createMurkup } from './helpers/helper';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';

const search = document.querySelector('.js_search');
const list = document.querySelector('.js_list');
const favoriteArr = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.BASKET_KEY)) ?? [];

createMurkup(instruments, list);

list.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js_info')) {
    const product = findProduct(evt.target);
    createModal(product);
    console.log(product);
  }
  if (evt.target.classList.contains('js_favorite')) {
    const product = findProduct(evt.target);
    const inFavorite = favoriteArr.some(({ id }) => id === product.id);
    if (inFavorite) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
    console.log(favoriteArr);
  }

  if (evt.target.classList.contains('js_basket')) {
    const product = findProduct(evt.target);
    // const inBasket = basketArr.some(({ id }) => id === product.id);
    // if (inBasket) {
    //   return;
    // }
    basketArr.push(product);
    localStorage.setItem(common.BASKET_KEY, JSON.stringify(basketArr));
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js_card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
