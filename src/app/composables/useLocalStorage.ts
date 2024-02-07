import { reactive, watch } from "vue";

// observed reactive data
const data: Record<string, any> = reactive({});

/**
 * Initializes the function by adding an event listener to the window for the "storage" event.
 * When the "arty-crafty-data" key is detected in the event, it parses the new value and updates the data object.
 */
function init() {
  window.addEventListener("storage", (e) => {
    if (e.key === "arty-crafty-data") {
      for (const [key, value] of Object.entries(JSON.parse(e.newValue))) {
        data[key] = (data[key] instanceof Set) ? new Set(value as []) : value;
      }
    }
  });
}

watch(data, () => {
  const decomposedData = {};
  for (const key in data) {
    decomposedData[key] = (data[key] instanceof Set) ? Array.from(data[key]) : data[key];
  }
  localStorage.setItem("ap-data", JSON.stringify(decomposedData));
});

export function useLocalStorage() {
  function observe(key: string, value: any) {
    data[key] = value;
  }

  return { init, observe };
}
