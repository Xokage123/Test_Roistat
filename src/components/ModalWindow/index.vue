<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <button @click="closeHandler" class="modal__close">
            <CloseIcon />
          </button>
          <div class="modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CloseIcon from "@/assets/icons/Close.vue";

export default defineComponent({
  name: "ModalComponent",
  components: {
    CloseIcon,
  },
  props: ["isOpen", "closeHandler", "openHandler"],
});
</script>

<style lang="scss" scoped>
.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    position: relative;
    max-width: 400px;
    width: 100%;
    margin: 0px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    font-family: Helvetica, Arial, sans-serif;
  }

  &__close {
    position: absolute;
    top: 0;
    right: -30px;
    border: none;
    background: rgba(0, 0, 0, 0);
  }
}
</style>
