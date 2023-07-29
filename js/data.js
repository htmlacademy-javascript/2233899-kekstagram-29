import { getRandomInteger, getRandomArreyElement, createIdGenerator } from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const DESCRIPTIONS = [
  'Гуляем с друзьями. ',
  'Отмечаем день рождение.',
  'Приехали на пикник с друзьями.',
  'Закат на берегу черного моря в Сочи.',
  'Фото дома после ремонта.',
  'Фото моего сына, ему 1 год.',
  'Вот так тут кормят.',
  'Что можно сделать своими руками!',
  'Жизнь хороша, когда пьешь не спеша',
  'Когда для счастья, нужно...',
  'Отлично!',
];


const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Степан', 'Вася', 'Гоша', 'Артур', 'Кирил', 'Евгений'];

const generateCommentsId = createIdGenerator();

const createMessage = () => Array.from({
  length: getRandomInteger(1, 2) },
() => getRandomArreyElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArreyElement(NAMES),
});

const createPicture = () => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArreyElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment,
  )
});

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export { getPictures };
