<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.height }}</td>
    <td>{{ user.mass }}</td>
    <td>{{ user.hair_color }}</td>
    <td>
      <button v-if="!favorites.find((u) => u.url === user.url)" @click="setFavorite(user)">
        add to favorites
      </button>
      <button v-if="favorites.find((u) => u.url === user.url)" @click="removeFavorite(user.url)">
        delete from favorites
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { PropType } from "vue";
import { mapMutations, mapState } from "vuex";
import { IUser } from "@/store/types";

export default {
  name: "TableRowBody",
  props: {
    user: { required: true, type: Object as PropType<IUser> },
  },
  methods: {
    ...mapMutations({
      setFavorite: "peoples/setFavorite",
      removeFavorite: "peoples/removeFavorite",
    }),
  },
  computed: {
    ...mapState({
      favorites: (state: any) => state.peoples.favorites,
    }),
  },
};
</script>

<style scoped></style>
