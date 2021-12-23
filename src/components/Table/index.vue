<template>
  <table ce class="table">
    <thead>
      <tr class="table__row">
        <th @click="sortListUsersByName" class="table__cell table__cell-header">
          Имя
        </th>
        <th
          @click="sortListUsersByPhone"
          class="table__cell table__cell-header"
        >
          Телефон
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__row" :key="user.name" v-for="user in listUsers">
        <td class="table__cell">
          <p>{{ user.name }}</p>
          <p v-if="user.chief">Начальник: {{ user.chief }}</p>
        </td>
        <td class="table__cell">{{ user.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableUserComponent",
  props: ["listUsers", "sortListUsersByName", "sortListUsersByPhone"],
});
</script>

<style lang="scss" scoped>
.table {
  outline: 2px solid black;
  border-spacing: 0;
  border-collapse: collapse;

  &__row {
    outline: 1px solid black;
  }

  &__cell {
    padding: 15px;
    outline: 1px solid black;

    &-header {
      cursor: pointer;

      &:hover {
        color: blue;
      }
    }
  }
}
</style>
