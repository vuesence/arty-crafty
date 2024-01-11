import { ref } from "vue";

const initialSet = new Set(JSON.parse(localStorage.getItem("ac-favourites")));

const favourites = ref<Set<number>>(initialSet);

export function useFavourites() {
  /**
   * Determines if a product is in the favourites list.
   *
   * @param {number} productId - The ID of the product to check.
   * @return {boolean} Returns true if the product is in the favourites list, otherwise false.
   */
  function isInFavourites(productId: number): boolean {
    return favourites.value.has(productId);
  }

  /**
   * Toggles the favourite status of a product.
   *
   * @param {number} productId - The ID of the product to toggle.
   * @return {void}
   */
  function toggleFavourite(productId: number) {
    if (favourites.value.has(productId)) {
      favourites.value.delete(productId);
    } else {
      favourites.value.add(productId);
    }
    localStorage.setItem("ac-favourites", JSON.stringify(listFavourites()));
  }

  /**
   * Returns a list of favorite products.
   *
   * @returns {Array<number>} - The list of favorite product IDs.
   */
  function listFavourites(): Array<number> {
    return Array.from(favourites.value);
  }

  return { isInFavourites, toggleFavourite, listFavourites };
}
