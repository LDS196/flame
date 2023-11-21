<template>
  <Search />
  <Table :peoples="peoples" />
</template>

<script>
import TableRowBody from "@/components/TableRowBody.vue";
import { mapActions } from "vuex";
import Search from "@/components/Search.vue";
import Table from "@/components/Table.vue";

export default {
  components: { Table, Search, TableRowBody },
  data() {
    return {
      peoples: [],
    };
  },
  methods: {
    ...mapActions({
      getPeoples: "peoples/getPeoples",
    }),
  },
  mounted() {
    this.getPeoples().then((res) => (this.peoples = res.results));
  },
};
</script>

<style scoped></style>
