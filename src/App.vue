<template>
  <div class="container">
    <button class="button__add" @click="openModalHandler">
      Добавить пользователя
    </button>
    <ModalComponent
      :isOpen="isOpenModal"
      :closeHandler="closeModalHandler"
      :openHandler="openModalHandler"
    >
      <FormAddUserComponent
        :closeHandler="closeModalHandler"
        :listUsers="listUsers"
        :getListUsers="getListUsers"
        :addUserInListUsers="addUserInListUsers"
      />
    </ModalComponent>
    <TableUserComponent
      :listUsers="listUsers"
      :sortListUsersByName="sortListUsersByName"
      :sortListUsersByPhone="sortListUsersByPhone"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModalComponent from "@/components/ModalWindow/index.vue";
import FormAddUserComponent from "@/components/Form/index.vue";
import TableUserComponent from "@/components/Table/index.vue";

import hookModal from "@/helpers/modalHook";
import usersListHook from "@/helpers/usersListHook";

export default defineComponent({
  emits: ["saveUser"],
  name: "App",
  components: {
    ModalComponent,
    FormAddUserComponent,
    TableUserComponent,
  },
  setup: () => {
    const { isOpenModal, closeModalHandler, openModalHandler } = hookModal();

    const {
      listUsers,
      getListUsers,
      addUserInListUsers,
      sortListUsersByName,
      sortListUsersByPhone,
    } = usersListHook();

    return {
      isOpenModal,
      openModalHandler,
      closeModalHandler,

      listUsers,
      getListUsers,
      addUserInListUsers,
      sortListUsersByName,
      sortListUsersByPhone,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
}

.button {
  &__add {
    padding: 10px;
    border: none;
    color: white;
    border-radius: 8px;
    background: rgb(92, 196, 92);

    &:hover {
      color: blue;
    }
  }
}
</style>
