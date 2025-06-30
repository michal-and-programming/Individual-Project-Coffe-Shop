export const settings = {
  db:{
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
  templateOF:{
    products: '#template-products',
  }
};

export const select = {
  containerOF:{
    pages: '#pages',
    homePage: '.home-page',
    productsPage: '.products-page',
    contactPage: '.contact-page',
  },
  nav:{
    links: 'header-nav a',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};
