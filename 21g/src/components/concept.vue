<template>
  <section class="concept">
    <div class="loader" v-if="!loaded"><img src="https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif" alt=""></div>
    <div class="banner" v-if="loaded" :class="{open : leftPanel}"  v-on:click="leftPanel= true, openPage('history')"><h2>L'histoire</h2></div>
    <div class="wrapper" v-if="loaded">
      <h1>Le concept</h1>
      <div class="row row__1">
        <div class="row__left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae tempore quisquam qui assumenda enim ea blanditiis laudantium, nisi fugit eos minima, totam quaerat sapiente eveniet, voluptates dolor. Sequi, fugit.</p>
        </div>
        <div class="row__right" alt="">
          <img src="https://via.placeholder.com/447/536" loading="lazy" alt="">
        </div>
      </div>
      <div class="row row__2">
        <div class="row__left">
          <img src="https://via.placeholder.com/447/536" loading="lazy" alt="">
        </div>
        <div class="row__right">
          <div class="row__inner">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae tempore quisquam qui assumenda enim ea blanditiis laudantium, nisi fugit eos minima, totam quaerat sapiente eveniet, voluptates dolor. Sequi, fugit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loaded : false,
      leftPanel : false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 1000);
  },
  methods: {
    openPage(el) {
      setTimeout(() => {
        this.$router.push(`/${el}`)
      }, 2000)
    }
  }
}
</script>


<style scoped>
.loader { width: 100vw; height: 100vh; }
.loader img { width: 100%; height: 100%; }
.concept { background-color: #f7f7f7;}
.banner {
  position: fixed;
  left: 0;
  height: 100%;
  width: 5%;
  background-color: #fff;
  transition: 0.3s width ease-in-out;
  z-index: 1;
}
.banner.open {
  width: 100%;
}
.banner.open h2 { transform: translateY(-50%) rotate(0deg); }
h1 { margin-bottom: 50px;}
h2 {
  position: relative;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  right: 0;
}
.wrapper { max-width: 1200px; margin: 0 auto; padding: 100px 0; }
h1 { text-align: left; }
.row { display: flex; flex-direction: row; height: 100%; }
.row > div { flex: 1; }
.row__left { position: relative; text-align: left; }
.row__1 .row__left {  max-width: 440px; margin-top: 85px; }
.row__2 .row__left { width: 447px; height: 536px;}
.row__2 .row__left img { position: absolute; top: -30px; right: -30px; }
.row__2 .row__right { text-align: right; margin-top: 137px; }
.row__2 .row__right p { max-width: 440px; float: right; }
.row__inner {
  display: block;
  max-width: 535px;
  width: 100%;
  height: 100%;
}

</style>
