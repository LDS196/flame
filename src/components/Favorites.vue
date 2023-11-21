<template>
  <Table :peoples="favorites" />
</template>

<script>
import { mapState } from "vuex";
import Table from "@/components/Table.vue";

export default {
  components: { Table },
  computed: {
    ...mapState({
      favorites: (state) => state.peoples.favorites,
    }),
  },
};
</script>

<style scoped></style>
