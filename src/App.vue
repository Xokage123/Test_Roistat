<template>
  <ModalComponent />
  <div class="test"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModalComponent from "@/components/ModalWindow/index.vue";

export default defineComponent({
  name: "App",
  components: {
    ModalComponent,
  },
});
</script>

<style lang="scss"></style>
