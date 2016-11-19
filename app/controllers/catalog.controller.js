class CatalogCtrl {
  constructor(CatalogService) {
    this.CatalogService = CatalogService;
    this.fishOrder = [];
    this.search = '';
    this.sortBy = 'name';

    // this.fishes = [{
    //     id: 1,
    //     name: 'Halibut',
    //     image: 'http://www.powerandmotoryacht.com/sites/default/files/pictures/1306/GaryGraham_600w.jpg',
    //     rating: 4,
    //     price: 369.99,
    //     on_sale: true
    //   },
    //   {
    //     id: 2,
    //     name: 'Cod',
    //     image: 'http://torbayfishing.com/news/wp-content/uploads/2015/04/fish-cod_3282123b.jpg',
    //     rating: 2,
    //     price: 1099.0,
    //     on_sale: false
    //   },
    //   {
    //     id: 3,
    //     name: 'Bass',
    //     image: 'https://s-media-cache-ak0.pinimg.com/originals/c2/fd/66/c2fd663ea5e275f14109476a700e86e8.jpg',
    //     rating: 3,
    //     price: 3796.95,
    //     on_sale: true
    //   }];

  }

  getFishes() {
    return this.CatalogService.getFishes();
    console.log('added fish');
  }


}

CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
