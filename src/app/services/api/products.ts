import http from "./http";

const products = {

  async categoryProducts(categoryId) {
    // return http.get(`/arty-crafty/api/category-products-${categoryId}.json`);
    const data = await http.get(`https://boqlriosmtqzqeymncdb.supabase.co/rest/v1/categories?select=id,title,products(id,title,desc)&id=eq.${categoryId}`);
    return data[0]?.products ?? [];
  },

  async loadCategories() {
    return await http.get("https://boqlriosmtqzqeymncdb.supabase.co/rest/v1/categories?select=id,title,data");
  },

};

export default products;
