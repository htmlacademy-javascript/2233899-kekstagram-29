const photoTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createPhoto = ({comments, description, likes, url, id,}) => {
  const photo = photoTemplate.cloneNode(true);

  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__comments').texstContent = comments.length;
  photo.querySelector('.picture__likes').texstContent = likes;
  photo.dataset.photoId = id;

  return photo;
};

const renderPhoto = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const photo = createPhoto(picture);
    fragment.append(photo);
  });

  container.append(fragment);
};

export {renderPhoto};
