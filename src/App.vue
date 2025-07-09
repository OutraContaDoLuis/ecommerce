<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  display: flex;
}

.box-row {
  flex-direction: row;
}

.card-center {
  margin: 0 auto;
  float: none;
}

.span-link {
  color: var(--bs-primary);
  transition: 0.3s;
}

.span-link:hover {
  text-decoration: underline;
  cursor: pointer;
}

</style>
