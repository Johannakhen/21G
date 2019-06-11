<template>
  <section>
    <div class="split split__left" :class="{open : leftPanel, close: rightPanel}">
        <div class="centered">
            <h2>Le concept</h2>
            <div v-if="!rightPanel">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button class="button" v-on:click="leftPanel= true, openPage()">Découvrir</button>
            </div>
        </div>
    </div>
    <div class="split split__right" :class="{open : rightPanel, close: leftPanel}">
      <div class="centered">
          <h2>L'histoire</h2>
          <div v-if="!leftPanel">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="button" v-on:click="rightPanel= true, openPage()">Découvrir</button>
          </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      leftPanel : false,
      rightPanel : false
    }
  },
  methods: {
    openPage() {
      setTimeout(() => {
        this.$router.push('/concept')
      }, 1000)
    }
  }
}
</script>
<style scoped>
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.split__left {
  left: 0;
  background-color: #111;
}
.split__right {
  right: 0;
  background-color: red;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.split.open {
  width: 95%;
  transition: 0.5s width ease-in-out;
}
.split.close {
  width: 5%;
  transition: 0.5s width ease-in-out;
}
.close h2 { transform: rotate(90deg); }
</style>
