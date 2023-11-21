<template>
  <Table :peoples="user ? [user] : []" />
</template>

<script>
import { useRouter } from "vue-router";
import { mapActions } from "vuex";
import Table from "@/components/Table.vue";

export default {
  name: "user",
  components: { Table },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    ...mapActions({
      getPeopleById: "peoples/getPeopleById",
    }),
  },
  mounted() {
    const router = useRouter();
    const id = router.currentRoute.value.params.id;
    this.getPeopleById(id).then((res) => (this.user = res));
  },
};
</script>

<style scoped></style>
