<template>
  <button @click="openModalHandler">Добавить пользователя</button>

  <teleport to="body">
    <div v-if="isOpenModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>Добавить пользователя</h2>
          </div>

          <div class="modal-body">
            <p>Основной контент</p>
          </div>

          <div class="modal-footer">
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
export default defineComponent({
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
