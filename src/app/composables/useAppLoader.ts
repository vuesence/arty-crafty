import { computed, reactive, ref } from "vue";
import { uuid } from "@/app/utils/uuid";

const loaderSet = reactive(new Set<string>());
const loading = computed(() => loaderSet.size > 0);

export function useAppLoader() {
  const _uuid: string = uuid();

  function startLoading() {
    loaderSet.add(_uuid);
  }
  function stopLoading() {
    loaderSet.delete(_uuid);
  }

  return { loading, startLoading, stopLoading };
}
