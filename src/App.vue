<template>
  <nav>
    <router-link to="/peoples">people</router-link>
    |
    <router-link to="/favorites">favorites</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table,
th,
td {
  border: 1px solid;
}

td {
  padding: 10px;
}

li {
  list-style: none;
}
</style>
