import http from "./http";

const SB = "https://boqlriosmtqzqeymncdb.supabase.co/rest/v1";

const products = {

  async categoryProducts(categoryId: number): Promise<Product[]> {
    const data = await http.get(`${SB}/categories?select=id,title,products(id,title,summary)&id=eq.${categoryId}`);
    return data[0]?.products ?? [];
  },

  async products(ids: number[]): Promise<Product[]> {
    const data = await http.get(`${SB}/products?select=id,title,summary&id=in.(${ids.join(",")})`);
    return data ?? [];
  },

  async product(id: number): Promise<Product> {
    const data = await http.get(`${SB}/products?select=id,title,summary,data&id=eq.${id}`);
    return data[0] ?? null;
  },

  async categories(): Promise<ProductCategory[]> {
    return http.get(`${SB}/categories?select=id,title,data`);
  },

};

export default products;
