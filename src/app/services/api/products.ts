import http from "./http";

const SB = "https://boqlriosmtqzqeymncdb.supabase.co/rest/v1";

const products = {

  async categoryProducts(categoryId) {
    // return http.get(`/arty-crafty/api/category-products-${categoryId}.json`);
    const data = await http.get(`${SB}/categories?select=id,title,products(id,title,summary)&id=eq.${categoryId}`);
    return data[0]?.products ?? [];
  },

  async products(ids) {
    const data = await http.get(`${SB}/products?select=id,title,summary&id=in.(${ids.join(",")})`);
    return data ?? [];
  },

  async loadCategories() {
    return await http.get(`${SB}/categories?select=id,title,data`);
  },

};

export default products;
