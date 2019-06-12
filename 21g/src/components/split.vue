<template>
  <section>
    <div class="split split__left" :class="{open : leftPanel, close: rightPanel}">
        <img src="../assets/img/bg-l.jpg" alt="">
        <div class="centered">
            <h2>Le concept</h2>
            <div v-if="!rightPanel" class="inner">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button class="button" v-on:click="leftPanel= true, openPage('concept')">Découvrir</button>
            </div>
        </div>
    </div>
    <div class="split split__right" :class="{open : rightPanel, close: leftPanel}">
      <img src="../assets/img/bg-r.jpg" alt="">
      <div class="centered">
          <h2>L'histoire</h2>
          <div v-if="!leftPanel" class="inner">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="button" v-on:click="rightPanel= true, openPage('history')">Découvrir</button>
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
      rightPanel : false,
    }
  },
  methods: {
    getTop(el) {
      el.getBoundingClientRect().top
    },
    openPage(el) {
      setTimeout(() => {
        this.$router.push(`/${el}`)
      }, 1000)
    }
  }
}
</script>
<style scoped>
h2 {
  font-size: 80px;
  font-family: 'Athens', Helvetica;
  font-style: italic;
  margin-bottom: 43px;
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: 0.3s width ease-in-out;
}
.split img { object-fit: cover; transition: 0.6s opacity ease-in-out;}
.split:hover { width: 51%; background-color: #f2efef; }
.split:hover img { opacity: 0; height: 0; width: 0; overflow: hidden; }
.split__left { left: 0; color: #000; }
.split__right { right: 0; color: #fff; }
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.inner { width: 450px; }
.inner p { font-size: 19px; margin-bottom: 34px; }
.split.open {
  width: 95%;
  transition: 0.5s width ease-in-out;
  color: #000;
}
.split.close {
  width: 5%;
  transition: 0.5s width ease-in-out;
}
.split__left.close h2 { transform: rotate(-90deg);  }
.close h2 { transform: rotate(90deg); white-space: nowrap; font-size: 40px; }

@media screen and (max-width: 920px) {
  .split { width: 100%; height: 50%; }
  .split__right { top: auto; bottom: 0; }
  .split:hover { width: 100%; }
  .inner { width: 420px; padding: 0 50px;}
  .inner p { padding: 0 20px; margin-bottom: 10px; }
  h2 { font-size: 60px; }
  .split.close { height: 15%; width: 100%; }
  .split__left.close h2 { transform: rotate(0deg); }
  .split.open { width: 100%; height: 85%; }
  .close h2 { transform: rotate(0deg); }
}
</style>
