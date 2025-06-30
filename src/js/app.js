import { settings, select, classNames } from './settings.js';
import Products from 'Products.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOF.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);
    
    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
      const pageHome = document.querySelector(select.containerOF.homePage);
      const productsPage = document.querySelector(select.containerOF.productsPage);
      if(pageId == 'home'){
        thisApp.home = new Products(pageHome, thisApp);
      }
      if(pageId == 'products'){
        thisApp.products = new Products(productsPage, thisApp);
      }
    }
  },

  initData: function() {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.package = {};
    
    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        thisApp.package.products = response;
      })
      .catch(function(error){
        console.log(error);
      });
  },

  init: function(){
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
  },
};

app.init();