<template>
  <div id="app">
    <div class="main-content" role="main">
      <header>
        <img src="./assets/logo.png" alt="" v-on:click="$router.push('/')">
      </header>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Brown', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  position: absolute;
  top: 20px;
  display: flex !important;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 90px !important;
  z-index: 2;
}
header img { cursor: pointer; }
@media screen and (max-width: 920px) {
  header {
    top: 8px;
    margin: 0 20px!important;
  }
}
</style>
