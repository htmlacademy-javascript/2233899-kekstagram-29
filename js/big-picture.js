const photoModalElement = document.querySelector('.big-picture');
const commentCountElement = document.querySelector('.comments-count');
const commentShownElement = document.querySelector('.comments-shown');
const socialCommentsElement = photoModalElement.querySelector('.social__comments');
const loaderCommentsElement = photoModalElement.querySelector('.comments-loader');
const cancelButtonElement = photoModalElement.querySelector('.big-picture__cancel');
const commentElement = photoModalElement.querySelector('.big-picture__social').querySelector('.social__comment');
const bodyElement = document.querySelector('body');

// Количество комментариев для показа
const commentsForShow = 5;

// Массив и количество отображенных комментариев перед открытием фото
let commentShow = 0;
let comments = [];

// Функция для закрытия полноэкранного фото
const hiddenModalPhoto = function () {
  photoModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentShow = 0;
};

// Функция-обработчик нажатия Escape
function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hiddenModalPhoto();
  }
}

const onCancelButtonClick = () => hiddenModalPhoto();

// Функция для показа деталей фото
const renderPhotoData = ({url, likes, description}) => {

  photoModalElement.querySelector('.big-picture__img img').src = url;
  photoModalElement.querySelector('.big-picture__img img').alt = description;
  photoModalElement.querySelector('.social__caption').textContent = description;
  photoModalElement.querySelector('.likes-count').textContent = likes;
};

// Функция для показа данных комментария
const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('social__picture').src = avatar;
  comment.querySelector('social__picture').alt = name;
  comment.querySelector('social__text').textContent = message;

  return comment;
};

// Функция для показа комментариев
const renderComments = () => {
  commentShow += commentsForShow;

  if(commentShow >= comments.length) {
    loaderCommentsElement.classList.add('hidden');
    commentShow = comments.length;
  } else {
    loaderCommentsElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentShow; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  socialCommentsElement.innerHTML = '';
  socialCommentsElement.append (fragment);
  commentShownElement.textContent = commentShow;
  commentCountElement.textContent = comments.length;
};

// Обработчик кнопки для дозагрузки комментариев
const onCommentsLoaderClick = () => renderComments(comments);

// Функция для показа полноэкранного фото
const showModalPhoto = () => {
  photoModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  loaderCommentsElement.classList.add('hidden');
  commentCountElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPhotoData(data);
  comments = data.comments;

  if (comments.length > 0) {
    renderComments(comments);
  }
};

cancelButtonElement.addEventListener('clik', onCancelButtonClick);
loaderCommentsElement.addEventListener('clik', onCommentsLoaderClick);

export {showModalPhoto};
