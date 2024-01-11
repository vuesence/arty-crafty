import { ref } from "vue";

const favourites = ref<Set<number>>(new Set());

export function useFavourites() {
  function addToFavourites(productId: number) {
    favourites.value.add(productId);
  };
  function removeFromFavourites(productId: number) {
    favourites.value.delete(productId);
  }
  function isInFavourites(productId: number): boolean {
    return favourites.value.has(productId);
  }
  function toggleFavourite(productId: number) {
    if (isInFavourites(productId)) {
      removeFromFavourites(productId);
    } else {
      addToFavourites(productId);
    }
  }

  function listFavourites() {
    return Array.from(favourites.value);
  }

  return { toggleFavourite, listFavourites };
}
