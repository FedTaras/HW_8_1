import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { closeModal } from './/closeModal';

function createModal(product) {
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <img src="${product.img}" alt="${product.name}" width = "100">
    <h2>${product.name}</h2>
    <h3>${product.price} грн</h3>
    <p>${product.description}</p>
    <div>
      <button class="js_favorite">Add to favorite</button>
      <button class="js_basket">Add to basket</button>
  </div>
`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
