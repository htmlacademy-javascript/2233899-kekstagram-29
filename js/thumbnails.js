import { showModalPhoto } from "./big-picture.js";
const photoTemplate = document.querySelector("#picture")
  .content.querySelector(".picture");

const container = document.querySelector(".pictures")

const createPhoto = ({comments, description, likes, url, id,}) => {
  const photo  = photoTemplate.cloneNode(true);

  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__likes').texstContent = likes;
  photo.querySelector('.picture__comments').texstContent = comments;
  photo.dataset.thumbnailId = id;

  return photo;
}

const containersecond = document.querySelector('.pictures')

const openModal = (pictures) => {
  containersecond.addEventListener('clik', (evt) => {
    const photo = evt.target.closest('[data-photo-id]');
    if(!photo) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find((item) => item.photoId === +photo.dataset.photoId);
    showModalPhoto(picture);
  });

  renderPhoto(pictures, container);
}


const renderPhoto = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const photo = createPhoto(picture);
    fragment.append(photo);
  });

  container.append(fragment);
}

export {renderPhoto, openModal}









