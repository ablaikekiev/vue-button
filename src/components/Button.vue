<template>
  <div class="block">
    <button class="block__button" ref="tooltip" @click="appStore.increaseCount">
      Was clicked: {{ appStore.count }}
    </button>
    <div class="block__tooltip" v-show="isTooltipVisible">
      {{ appStore.tooltipText }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useApp } from "@/store/app.store";

export default {
  name: "ButtonTest",
  setup() {
    const appStore = useApp();

    const tooltip = ref<HTMLDivElement>({} as HTMLDivElement);
    const isTooltipVisible = ref<boolean>(false);

    window.addEventListener("click", (e) => {
      if (tooltip.value) {
        isTooltipVisible.value = tooltip.value.contains(e.target as Node);
      }
    });

    return {
      appStore,
      tooltip,
      isTooltipVisible,
    };
  },
};
</script>
