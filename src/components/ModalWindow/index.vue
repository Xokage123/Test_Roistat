<template>
  <button @click="openModalHandler">Добавить пользователя</button>

  <teleport to="body">
    <div v-if="isOpenModal" class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <button @click="closeModalHandler" class="modal__close">
            <CloseIcon />
          </button>
          <div class="modal__header">
            <h2>Добавить пользователя</h2>
          </div>

          <div class="modal__body">
            <p>Основной контент</p>
          </div>

          <div class="modal__footer">
            <p>Подвал</p>
            <button class="modal-default-button" @click="closeModalHandler">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import CloseIcon from "@/assets/icons/Close.vue";

export default defineComponent({
  components: {
    CloseIcon,
  },
  setup: () => {
    console.log("Ghbdtn");

    const isOpenModal = ref<boolean>(false);

    const openModalHandler = () => {
      isOpenModal.value = true;
    };

    const closeModalHandler = () => {
      isOpenModal.value = false;
    };

    return {
      isOpenModal,
      openModalHandler,
      closeModalHandler,
    };
  },
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
    max-width: 800px;
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
