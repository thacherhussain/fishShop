class CatalogCtrl {
  constructor(CartService, CatalogService) {
    this.CartService = CartService;
    this.CatalogService = CatalogService;
    this.fishOrder = [];
    this.search = '';
    this.sortBy = 'name';
  }

  getFishes() {
    return this.CatalogService.getFishes();
  }
  addItem(item) {
    Materialize.toast('Added to cart', 2000);
    this.CartService.addToCart(item);
    this.fishOrder.push(item);
    // console.log(this.fishOrder);
  }
}

CatalogCtrl.$inject = ['CartService', 'CatalogService'];

export default CatalogCtrl;
