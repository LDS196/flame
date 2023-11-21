<template>
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>height</th>
        <th>mass</th>
        <th>hair_color</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <table-row-body v-for="user in peoples" :user="user" :key="user.url" />
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IUser } from "@/store/types";
import TableRowBody from "@/components/TableRowBody.vue";

export default {
  components: { TableRowBody },
  props: {
    peoples: { required: true, type: Array as PropType<IUser[]> },
  },
};
</script>

<style scoped></style>
