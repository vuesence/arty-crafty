import { computed, reactive, ref } from "vue";

const loaderSet = reactive(new Set<string>());
const loading = computed(() => loaderSet.size > 0);

export function useAppLoader(id) {
  // const _uuid: string = uuid();

  function startLoading() {
    loaderSet.add(id);
  }
  function stopLoading() {
    loaderSet.delete(id);
  }

  return { loading, startLoading, stopLoading };
}
