import { reactive, watch } from "vue";

/**
 * Custom `useLocalStorage` implementation
 * It can observe any reactive variable with a two-way mapping of its value to window.localStorage
 *
 * Usage:
 *
 * import { useLocalStorage } from "@/app/composables/useLocalStorage";
 * const ls = useLocalStorage();
 *
 * ls.init();
 * ls.observe("isDarkTheme", isDarkTheme);
 * ls.observe("favourites", favourites);
 * ls.observe("shoppingCart", shoppingCart);
 *
 */

const LS_KEY = "arty-crafty-data";

// observed reactive data
const data: Record<string, any> = reactive({});

/**
 * Initializes the function by adding an event listener to the window for the "storage" event.
 * When the "arty-crafty-data" key is detected in the event, it parses the new value and updates the data object.
 */
function init() {
  readFromStorage();
  window.addEventListener("storage", (e) => {
    if (e.key === LS_KEY) {
      readFromStorage();
    }
  });
}

function readFromStorage() {
  const lsData = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  for (const [key, value] of Object.entries(lsData)) {
    data[key] = (data[key] instanceof Set) ? new Set(value as []) : value;
  }
}

// store data to localStoradge
watch(data, () => {
  const decomposedData = {};
  for (const key in data) {
    decomposedData[key] = (data[key] instanceof Set) ? Array.from(data[key]) : data[key];
  }
  localStorage.setItem(LS_KEY, JSON.stringify(decomposedData));
});

export function useLocalStorage() {
  function observe(key: string, observable: any) {
    // setting initial value to reactive observable from localStorage
    observable.value = (observable.value instanceof Set) ? new Set(data[key]) : data[key];
    data[key] = observable;
  }

  return { init, observe };
}
