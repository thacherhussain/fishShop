/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('fish').del()
    .then(() => {
      return knex('fish').insert([{
        id: 1,
        name: 'Halibut',
        image: 'http://www.powerandmotoryacht.com/sites/default/files/pictures/1306/GaryGraham_600w.jpg',
        rating: 4,
        price: 369.99,
        on_sale: true
      },
      {
        id: 2,
        name: 'Cod',
        image: 'http://torbayfishing.com/news/wp-content/uploads/2015/04/fish-cod_3282123b.jpg',
        rating: 2,
        price: 1099.0,
        on_sale: false
      },
      {
        id: 3,
        name: 'Bass',
        image: 'http://cdn0.wideopenspaces.com/wp-content/uploads/2015/06/texas-bass-feature.jpg',
        rating: 3,
        price: 3796.95,
        on_sale: true
      },
      {
        id: 4,
        name: 'Cod and Chips',
        image: 'http://citispotter.com/wp-content/uploads/2016/11/17-1.jpg',
        rating: 5,
        price: 8.99,
        on_sale: false
      },
      {
        id: 5,
        name: "Po' boy sandwich",
        image: 'http://1.bp.blogspot.com/-FdRSqaUhRA4/T4geHTphy4I/AAAAAAAAHAY/8E_K0WI21Kc/s1600/Shrimp%2BPo-Boy.jpg',
        rating: 3,
        price: 4.99,
        on_sale: true
      },
      {
        id: 6,
        name: 'Catfish',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/10/b6/f2/10b6f2b88b5f0ba0cc67000aca8a16f8.jpg',
        rating: 2,
        price: 1299.01,
        on_sale: false
      },
      {
        id: 7,
        name: 'Blowfish',
        image: 'http://jpninfo.com/wp-content/uploads/2015/04/puffer-fish-3.jpg',
        rating: 3,
        price: 3019.95,
        on_sale: true
      },
      {
        id: 8,
        name: 'Jaws',
        image: 'http://www.rd.com/wp-content/uploads/2015/06/Jaws-anniversary-shark-pa.jpg',
        rating: 3,
        price: 1005.93,
        on_sale: false
      },
      {
        id: 9,
        name: 'Nemo',
        image: 'http://4.bp.blogspot.com/-CMSsYe-h_Vg/VjWDzd4W91I/AAAAAAAAA_c/NqEOTwreKPI/s1600/Animasi%2BNemo.jpeg',
        rating: 3,
        price: 124.95,
        on_sale: false
      },
      {
        id: 10,
        name: 'Charlie',
        image: 'http://starkist.com/sites/default/files/featuredImages/page/SK_FeatureCard_Blank.jpg',
        rating: 2,
        price: 3.99,
        on_sale: true
      },
      {
        id: 11,
        name: 'Flounder',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/64/0d/07/640d07415163503480f47ac2bf8592e6.png',
        rating: 5,
        price: 1000.87,
        on_sale: false
      },
      {
        id: 12,
        name: 'Swordfish',
        image: 'http://floridakeysswordfishing.com/fishing_catch_photos/2014/11/111415-swordfish.jpg',
        rating: 2,
        price: 34.90,
        on_sale: false
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('fish_id_seq', (SELECT MAX(id) FROM fish));"
      );
    });
};
