const photoModalElement = document.querySelector('.big-picture');
const commentCountElement = photoModalElement.querySelector('.social__comment-count');
const commentListElement = photoModalElement.querySelector('.social__comments');
const commentsLoaderElement = photoModalElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = photoModalElement.querySelector('.big-picture__cancel');
const commentElement = photoModalElement.querySelector('#comment').content.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('social__picture').src = avatar;
  comment.querySelector('social__picture').alt = name;
  comment.querySelector('social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(fragment);
    fragment.append(comment);
  });

  commentListElement.append(fragment);
};

const hiddenModalPhoto = function () {
  photoModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hiddenModalPhoto();
  }
}

const onCancelButtonClick = () => {
  hiddenModalPhoto();
};

const renderPhotoData = ({url, likes, description}) => {
  photoModalElement.querySelector('.big-picture__img img').src = url;
  photoModalElement.querySelector('.big-picture__img img').alt = description;
  photoModalElement.querySelector('.likes-count').textContent = likes;
  photoModalElement.querySelector('.social__caption').textContent = description;
};

const showModalPhoto = (data) => {
  photoModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  commentCountElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPhotoData(data);
  renderComments(data.comments);
};

cancelButtonElement.addEventListener('clik', onCancelButtonClick);

export {showModalPhoto};
