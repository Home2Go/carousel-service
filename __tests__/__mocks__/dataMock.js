const activityEx = {
  _id: '5fae166e933b5709e66273db',
  rating: 4.5,
  activity_name: 'mock activity',
  price: 50,
  total_ratings: 6,
  url: 'https://loremflickr.com/320/240/house',
};

const placeEx = {
  _id: '5fae166e933b5709e66273db',
  rating: 4.5,
  listing_type: 'mock listing type',
  beds: 6,
  location: 'mock location',
  price: 50,
  liked: false,
  total_ratings: 6,
  url: 'https://loremflickr.com/320/240/house',
};

const placeExOdd = {
  _id: '5fae166e933b5709e66273db',
  rating: 4.55,
  listing_type: 'room in boutique hotel',
  beds: 6,
  location: 'East Gillianfort, New Jersey',
  price: 65,
  liked: false,
  total_ratings: 6,
  url: 'https://loremflickr.com/320/240/house',
};

const placesEx = [
  {
    _id: '5fb6eada5519d6ce3d6b61ee',
    rating: 4.19,
    total_ratings: 50,
    listing_type: 'Mansion',
    beds: 4,
    location: 'Marksstad, New York',
    price: 112,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1190.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61ef',
    rating: 3.54,
    total_ratings: 33,
    listing_type: 'Private room',
    beds: 2,
    location: 'Brennastad, New York',
    price: 101,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1191.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f0',
    rating: 4.63,
    total_ratings: 33,
    listing_type: 'Penthouse',
    beds: 6,
    location: 'South Francisco, New York',
    price: 55,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1192.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f1',
    rating: 4.27,
    total_ratings: 12,
    listing_type: 'Entire home',
    beds: 6,
    location: 'West Caleb, New York',
    price: 117,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1193.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f2',
    rating: 4.42,
    total_ratings: 50,
    listing_type: 'Farm stay',
    beds: 5,
    location: 'Ceciliaville, New York',
    price: 72,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1194.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f3',
    rating: 4.2,
    total_ratings: 43,
    listing_type: 'Room in boutique hotel',
    beds: 4,
    location: 'Lake Ricardomouth, New York',
    price: 112,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1195.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f4',
    rating: 4.79,
    total_ratings: 3,
    listing_type: 'Farm stay',
    beds: 2,
    location: 'Cruickshankside, New York',
    price: 99,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1196.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f5',
    rating: 4.59,
    total_ratings: 5,
    listing_type: 'Hotel room',
    beds: 5,
    location: 'East Lavonneshire, New York',
    price: 113,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1197.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f6',
    rating: 4.06,
    total_ratings: 50,
    listing_type: 'Entire home',
    beds: 4,
    location: 'East Haliestad, New York',
    price: 81,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1198.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f7',
    rating: 4.79,
    total_ratings: 45,
    listing_type: 'Guesthouse',
    beds: 6,
    location: 'Port Weston, New York',
    price: 100,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1199.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f8',
    rating: 4.67,
    total_ratings: 23,
    listing_type: 'Apartment',
    beds: 5,
    location: 'Courtneymouth, New York',
    price: 150,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1200.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b61f9',
    rating: 3.97,
    total_ratings: 31,
    listing_type: 'Mansion',
    beds: 4,
    location: 'Cathryntown, New York',
    price: 164,
    liked: false,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place1201.jpg',
  },
];

const activitiesEx = [
  {
    _id: '5fb6eada5519d6ce3d6b6954',
    rating: 4.3,
    total_ratings: 47,
    activity_name: 'Voluptatibus voluptatem ut voluptate ut aliquid ea voluptatibus.',
    price: 12,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1784.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6955',
    rating: 4.78,
    total_ratings: 19,
    activity_name: 'Non ea dicta nobis nihil.',
    price: 12,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1785.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6956',
    rating: 4.61,
    total_ratings: 41,
    activity_name: 'Distinctio totam nobis velit voluptatibus nobis.',
    price: 17,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1786.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6957',
    rating: 4.67,
    total_ratings: 1,
    activity_name: 'Est laboriosam et nesciunt placeat omnis laudantium magnam numquam.',
    price: 13,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1787.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6958',
    rating: 4.3,
    total_ratings: 5,
    activity_name: 'Tempora non sint ipsa sed quisquam.',
    price: 12,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1788.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6959',
    rating: 4.01,
    total_ratings: 30,
    activity_name: 'Exercitationem reprehenderit corporis voluptatem enim nulla aperiam.',
    price: 17,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1789.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b695a',
    rating: 3.96,
    total_ratings: 19,
    activity_name: 'Fuga quis nemo libero nostrum numquam ducimus.',
    price: 6,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1790.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b695b',
    rating: 4.71,
    total_ratings: 16,
    activity_name: 'Magni et fuga quisquam dolores quia et quasi.',
    price: 8,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1791.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b695c',
    rating: 3.89,
    total_ratings: 11,
    activity_name: 'Voluptates quidem neque voluptatem.',
    price: 30,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1792.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b695d',
    rating: 4.77,
    total_ratings: 44,
    activity_name: 'Quisquam dolorum aliquam.',
    price: 26,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1793.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b695e',
    rating: 4.09,
    total_ratings: 49,
    activity_name: 'Ea vero est repellat ut inventore.',
    price: 7,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1794.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b695f',
    rating: 4.12,
    total_ratings: 30,
    activity_name: 'Et qui delectus ipsa dolores.',
    price: 16,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1795.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6960',
    rating: 4.76,
    total_ratings: 7,
    activity_name: 'Dolor exercitationem quia dolor.',
    price: 29,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1796.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6961',
    rating: 4.78,
    total_ratings: 39,
    activity_name: 'Non est dicta sapiente in vel expedita possimus adipisci magni.',
    price: 11,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1797.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6962',
    rating: 3.77,
    total_ratings: 29,
    activity_name: 'Exercitationem expedita ut.',
    price: 6,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1798.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6963',
    rating: 4.56,
    total_ratings: 4,
    activity_name: 'Et possimus molestiae vitae.',
    price: 21,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1799.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6964',
    rating: 3.79,
    total_ratings: 20,
    activity_name: 'Quas dolores ut omnis.',
    price: 13,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1800.jpg',
  },
  {
    _id: '5fb6eada5519d6ce3d6b6965',
    rating: 4.11,
    total_ratings: 9,
    activity_name: 'Id quas aspernatur id alias ut.',
    price: 21,
    url: 'https://fec-carousel-pics.s3-us-west-2.amazonaws.com/activityPics/activ1801.jpg',
  },
];

module.exports = {
  activityEx,
  placeEx,
  placeExOdd,
  placesEx,
  activitiesEx,
};