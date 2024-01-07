import http from "./http";

const products = {

  async categoryProducts(categoryId) {
    return http.get(`/arty-crafty/api/category-products-${categoryId}.json`);
  },

};

export default products;
