<template>
  <section class="concept">
    <div class="banner"><h2>L'histoire</h2></div>
    <div class="wrapper">
      <h1>Le concept</h1>
      <div class="row row__1">
        <div class="row__left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae tempore quisquam qui assumenda enim ea blanditiis laudantium, nisi fugit eos minima, totam quaerat sapiente eveniet, voluptates dolor. Sequi, fugit.</p>
        </div>
        <div class="row__right" alt="">
        </div>
      </div>
      <div class="row row__2">
        <div class="row__left">
          <img src="https://via.placeholder.com/447/536" alt="">
        </div>
        <div class="row__right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae tempore quisquam qui assumenda enim ea blanditiis laudantium, nisi fugit eos minima, totam quaerat sapiente eveniet, voluptates dolor. Sequi, fugit.</p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.concept { background-color: #f7f7f7;}
.banner {
  position: fixed;
  right: 0;
  height: 100%;
  width: 5%;
  background-color: #fff;
}
h1 { margin: 50px 0;}
h2 {
  position: relative;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  right: 0;
}
.wrapper { max-width: 1200px; margin: 0 auto; }
h1 { text-align: left; }
.row { display: flex; flex-direction: row;}
.row > div { flex: 1; }
.row__left { position: relative; text-align: left; }
.row__1 .row__left {  max-width: 440px; margin: 85px 137px 0 0; }
.row__2 .row__left { width: 447px; height: 536px;}
.row__2 .row__left img { position: absolute; top: -30px; right: -30px; }
.row__2 .row__right { text-align: right; margin-top: 137px; }
.row__2 .row__right p { max-width: 440px; float: right; }

</style>
