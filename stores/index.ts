import { defineStore } from "pinia";

type StateShape = {
    count: number;
};

export const useGlobalStore = defineStore("global", () => {
    const state = reactive<StateShape>({
        count: 0,
    });

    const increment = () => {
        state.count++;
    };

    const doubleCount = computed(() => state.count * 2);

    return {
        ...toRefs(state),
        increment,
        doubleCount,
    };
});

// other way

// export const useGlobalStore = defineStore("global", {
//   state: (): StateShape => ({
//     count: 0,
//   }),
//   getters: {
//     doubleCount(state) {
//       return state.count * 2;
//     },
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });
