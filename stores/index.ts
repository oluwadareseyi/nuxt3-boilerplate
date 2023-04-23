import { defineStore } from "pinia";

type StateShape = {
  count: number;
};

export const useGlobalStore = defineStore("global", {
  state: (): StateShape => ({
    count: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
