import { getRandomNumder } from "./util";
import { getUniqueNumber } from "./util";

const NAMES = [
  'Влад',
  'Николай',
  'Георгий',
  'Андрей',
  'Валера',
  'Егор',
  'Павел',
  'Роман',
  'Сергей',
  'Степан',
  'Расул',
  'Давид',
  'Джимми',
  'Артем',
  'Эдуард',
  'Максим',
  'Армен',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Генератор комментариев
const getMessage = function () {
  let message = messages[getRandomNumder(0, messages.length - 1)];
  return message;
};

// Аватары
const getAvatar = function () {
  const avatar = `img/avatar-${getRandomNumder(1, 6)}.svg`;
  return avatar;
};

// id
const getId = function () {
  const uniqueId = getUniqueNumber(1, 15570);
  const id = uniqueId();
  return id;
};

// Комментарии
const getComment = function () {
  return {
    id: getId(),
    avatar: getAvatar(),
    message: getMessage(),
    name: NAMES[getRandomNumder(0, NAMES.length - 1)],
  };
};
getComment();

// id фотографии
const getPhotoId = getUniqueNumber(1, 25);
const getUrl = function () {
  return `photos/${getRandomNumder(1, 25)}.jpg`;
};
const getLikes = function () {
  return getRandomNumder(15, 200);
};

let createPhotos = function () {
  return {
    photoId: getPhotoId(),
    url: getUrl(),
    description: getMessage(),
    likes: getLikes(),
    Comment: Array({length: getRandomNumder(0, 25)}, getComment),
  };
};

let photoPages = Array.from({length: 25}, createPhotos);
console.log(photoPages);
