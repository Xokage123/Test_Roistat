<template>
  <form class="form" @submit.prevent="onSubmitHandler">
    <h2 class="form__title">Добавление пользователя</h2>
    <label class="form__label">
      <p class="form__labelText">Имя</p>
      <div class="form__inputContainer">
        <input
          :style="{
            border: nameUser.isError ? '1px solid red' : '1px solid black',
          }"
          class="form__input"
          type="text"
          v-model="nameUser.value"
        />
        <small class="form__error error" v-if="nameUser.isError">{{
          nameUser.errorText
        }}</small>
      </div>
    </label>
    <label class="form__label">
      <p class="form__labelText">Телефон</p>
      <div class="form__inputContainer">
        <input
          :style="{
            border: phoneUser.isError ? '1px solid red' : '1px solid black',
          }"
          class="form__input"
          type="text"
          v-model="phoneUser.value"
        />
        <small class="form__error error" v-if="phoneUser.isError">{{
          phoneUser.errorText
        }}</small>
      </div>
    </label>
    <label class="form__label">
      <p class="form__labelText">Начальник</p>
      <select v-model="chief">
        <option value="" disabled>Выберите начальника</option>
        <option :key="user.name" v-for="user in listUsers" :value="user.name">
          {{ user.name }}
        </option>
      </select>
    </label>
    <button class="form__button-save" type="submit">Сохранить</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

import { checkPhone } from "@/utils/checkPhone";

import { IUserInformation } from "./type";

export default defineComponent({
  name: "FormElement",
  props: ["closeHandler", "listUsers", "getListUsers", "addUserInListUsers"],
  setup: (props) => {
    const nameUser = reactive({
      value: "",
      errorText: "Вы не ввели имя",
      isError: false,
    });

    const phoneUser = reactive({
      value: "",
      errorText: "Вы ввели некорректный номер телефона",
      isError: false,
    });

    const chief = ref<string>("");

    const onSubmitHandler = () => {
      if (!nameUser.value) {
        nameUser.isError = true;
      }
      if (!checkPhone(phoneUser.value)) {
        phoneUser.isError = true;
      }

      setTimeout(() => {
        nameUser.isError = false;
        phoneUser.isError = false;
      }, 2000);

      if (nameUser.value && checkPhone(phoneUser.value)) {
        const newUser: IUserInformation = {
          name: nameUser.value,
          phone: phoneUser.value,
          chief: chief.value,
        };

        props.closeHandler();

        props.addUserInListUsers(newUser);

        nameUser.value = "";
        nameUser.isError = false;
        phoneUser.value = "";
        phoneUser.isError = false;
      }
    };

    return {
      nameUser,
      phoneUser,
      chief,

      onSubmitHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  max-width: 50%;
  flex-direction: column;
  gap: 20px;

  &__label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__input {
    border-radius: 8px;
    padding: 5px;
    &Container {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__button {
    &-save {
      padding: 10px;
      border: none;
      border-radius: 8px;
      background-color: rgb(240, 206, 56);
    }
  }

  &__error {
    position: absolute;
    bottom: -20px;
  }
}
</style>
