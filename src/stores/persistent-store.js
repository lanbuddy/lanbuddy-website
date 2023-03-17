import { defineStore } from "pinia";
import { ref } from "vue";

export const usePersistentStore = defineStore(
  "persistentStore",
  () => {
    const userLocale = ref("en-US");
    const drawerMinimized = ref(true);

    return {
      userLocale,
      drawerMinimized,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
