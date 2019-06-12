<template>
  <div id="app">
    <div class="main-content" role="main">
      <header>
        <img src="./assets/logo.png" alt="">
        <div class="lang">
           <span>UK | <strong>FR</strong></span>
        </div>
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
  width: -webkit-fill-available;
  top: 37px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 150px;
  z-index: 2;
}
.lang {
  right: 50px;
  font-size: 20px;
  font-style: italic;
}
.lang strong {
  font-weight: bold;
}
</style>
