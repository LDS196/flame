<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
      v-model.trim="searchValue"
      @keyup="searchPeople"
      placeholder="Search people..."
    />
    <ul class="list" v-if="people.length > 0">
      <li class="list__item" v-for="user in people" :key="user.url">
        <RouterLink :to="`/peoples/${getIdFromUrl(user.url)}`">
          {{ user.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getIdFromUrl } from "@/utils/getIdFromUrl";

export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      people: [],
    };
  },
  methods: {
    getIdFromUrl,
    ...mapActions({
      search: "peoples/search",
    }),
    searchPeople() {
      if (this.searchValue) {
        this.search(this.searchValue).then((res) => {
          this.people = res.results;
        });
      } else {
        this.people = [];
      }
    },
  },
};
</script>

<style scoped>
.search {
  position: relative;
}
.search__input {
  max-width: 200px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 5px;
}

.search__input:focus {
  border: 3px solid #42b983;
}
.list {
  border-radius: 5px;
  border: 3px solid #42b983;
  background-color: lightgray;
  position: absolute;
  z-index: 10;
}
.list__item {
  padding: 10px;
}
</style>
