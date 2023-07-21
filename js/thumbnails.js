
const photoTemplate = document.querySelector("#picture")
  .content.querySelector(".picture");

const container = document.querySelector(".pictures")

const createPhoto = ({url, description, likes, comments}) => {
  const photo = photoTemplate.cloneNode(true);

  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__likes').texstContent = likes;
  photo.querySelector('.picture__comments').texstContent = comments;

  return photo;
}

const renderPhoto = (pictures) => {
  const fragment = document.createDocumentFragment();


  pictures.forEach((picture) => {
    const photo = createPhoto(picture);
    fragment.append(photo);
  });

  container.append(fragment);
}

export {renderPhoto}









