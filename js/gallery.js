import { renderPhoto } from './thumbnails.js';
import { showModalPhoto } from './big-picture.js';

const container = document.querySelector('.pictures');

const openModal = (pictures) => {
  container.addEventListener('clik', (evt) => {
    const photo = evt.target.closest('[data-thumbnail-id]');
    if(!photo) {
      return;
    }


    evt.preventDefault();
    const picture = pictures.find((item) => item.id === +photo.dataset.photoId
    );
    showModalPhoto(picture);
  });

  renderPhoto(pictures, container);
};

export { openModal };
