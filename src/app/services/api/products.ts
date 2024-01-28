import http from "./http";

const SB = "https://boqlriosmtqzqeymncdb.supabase.co/rest/v1";

const products = {

  async categoryProducts(categoryId: number) {
    // return http.get(`/arty-crafty/api/category-products-${categoryId}.json`);
    const data = await http.get(`${SB}/categories?select=id,title,products(id,title,summary)&id=eq.${categoryId}`);
    return data[0]?.products ?? [];
  },

  async products(ids: number[]) {
    const data = await http.get(`${SB}/products?select=id,title,summary&id=in.(${ids.join(",")})`);
    return data ?? [];
  },

  async product(id: number) {
    const data = await http.get(`${SB}/products?select=id,title,summary,data&id=eq.${id}`);
    return data[0] ?? null;
  },

  async categories() {
    return http.get(`${SB}/categories?select=id,title,data`);
  },

};

export default products;
