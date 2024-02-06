import { reactive, watch } from "vue";

const data = reactive({});

function init() {
  window.addEventListener("storage", (e) => {
    if (e.key === "ap-data") {
      const d = JSON.parse(e.newValue);
      for (const [key, value] of Object.entries(d)) {
        data[key] = (data[key] instanceof Set) ? new Set(value as []) : value;
      }
    }
  });
}

watch(data, () => {
  const serializedData = {};
  for (const key in data) {
    serializedData[key] = (data[key] instanceof Set) ? Array.from(data[key]) : data[key];
  }
  localStorage.setItem("ap-data", JSON.stringify(serializedData));
});

export function useLocalStorage() {
  function observe(key: string, value: any) {
    data[key] = value;
  }

  return {
    init,
    observe,
  };
}
