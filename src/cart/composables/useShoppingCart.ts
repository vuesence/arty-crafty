import { ref } from "vue";

const serializedCart = JSON.parse(localStorage.getItem("ac-shopping-cart")) as CartItem[] ?? [];
const shoppingCart = ref<Set<CartItem>>(new Set(serializedCart));

export function useShoppingCart() {
  /**
   * Returns a list of products in the shopping cart.
   *
   * @returns {Array<CartItem>} - The list of product IDs in the shopping cart.
   */
  function list(): Array<CartItem> {
    return Array.from(shoppingCart.value);
  }
  function size(): number {
    return shoppingCart.value.size;
  }

  function add(product: Product) {
    const cartItem = findById(product.id);
    if (cartItem) {
      cartItem.amount++;
    } else {
      shoppingCart.value.add({
        id: product.id,
        product,
        amount: 1,
      });
    }
    localStorage.setItem("ac-shopping-cart", JSON.stringify(Array.from(shoppingCart.value)));
  }

  function findById(productId: number): CartItem {
    for (const cartItem of shoppingCart.value) {
      if (cartItem.id === productId) {
        return cartItem;
      }
    }
    return null;
  }

  return { list, add, size };
}
