import { settings, templates } from './settings.js';

class Products {
  constructor(element, refToApp){
    const thisProducts = this;
    thisProducts.element = element;
    thisProducts.refToApp = refToApp;

    thisProducts.render();
  }
  render(){
    const thisProducts = this;

    const generatedHTML = templates.products(settings.db.products);
    thisProducts.element.innerHTML = generatedHTML;
  }
}

export default Products;



