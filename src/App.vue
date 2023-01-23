<template>
  <div class="container">
    <ButtonTest />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonTest from "./components/Button.vue";

export default defineComponent({
  name: "App",
  components: {
    ButtonTest,
  },
});
</script>
