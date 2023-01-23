import { defineStore } from "pinia";

interface State {
  count: number;
  tooltipText: string;
}

export const useApp = defineStore("app", {
  state: (): State => ({
    count: 0,
    tooltipText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et fuga laboriosam.",
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
  },
  getters: {},
});
