<template>
  <section class="history" :class="{loading: !loaded}">
    <div class="loader" v-if="!loaded"></div>
    <div class="banner" v-if="loaded" :class="{open : leftPanel}" v-on:click="leftPanel= true, openPage('concept')"><h2 v-if="!leftPanel">Le Concept</h2></div>
    <h1 v-if="loaded">L'histoire</h1>
    <div class="wrapper" v-if="loaded">
      <div class="plus" v-if="is_mobile" v-on:click="showMore = true">
        <img src="../assets/img/plus.png" alt="">
      </div>
      <div class="timeline">
        <div class="timeline__holder" v-for="(item, index) in timeline" v-bind:key="item.id"  @mouseover.stop="hover = index" @mouseleave="hover = false"  v-on:click="active = index, id= index" >
          <img :src="item.img" alt="" :class="{active : active == index}">
          <p v-if="hover == index || active == index" :class="{active : active == index}">{{item.date}}</p>
        </div>
      </div>
      <div class="content">
        <img class="content__index" v-bind:src="timeline[id].url" alt="">
        <div class="content__header">
          <div>{{timeline[id].excerpt}}</div>
        </div>
        <div class="content__text" v-bind:class="{long : showMore == true}">
          <div v-html="timeline[id].text"></div>
        </div>
      </div>
      <div class="visual" v-bind:class="`visual__${id}`">
        <img v-if="!is_mobile" :src="timeline[id].visual" alt="">
        <img v-if="is_mobile" :src="timeline[id].img" alt="">
      </div>
    </div>
     <div class="arrow">
      <p :class="{inactive : id == 0}" v-on:click="prev(), showMore = false"> &#x2190;</p>
      <p :class="{inactive : inactive == true}" v-on:click="next(), showMore = false">&#x2794;</p>
    </div>
    <div class="newsletter" v-if="loaded">
      <input type="text" placeholder="metstonnez@dansnosaffaires.fr">
      <button>S’inscrire</button>
    </div>
    <div class="pannel"  v-on:click="leftPanel= true, openPage('concept')"> <p>Le concept</p> </div>
  </section>
</template>

<script>
import img1 from '../assets/img/1.png'
import F2 from '../assets/img/F2.png'
import F2J from '../assets/img/F2.jpg'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
export default {
  data() {
    return {
      timeline : [
        {
          id: 0,
          img: F2J,
          visual: F2,
          url: img1,
          date: 'Tome 1',
          excerpt: 'D\'où venons-nous ?',
          text: 'Les principes de  transparence et de responsabilité sont les piliers sur lesquels repose sur notre démarche éthique. </br></br>Notre Maison de création n’utilise que des ingrédients naturels d’exception, dans des compositions simples, référencées parmi les meilleurs « nez » en la matière.</br></br> Nous mettons à votre disposition 30 compositions de haute parfumerie font par nos maîtres parfumeurs uniquement avec des ingrédients naturels de qualité. De centaines de compositions son possible est façonnable par vous, pour vous définir en toutes circonstances et pour correspondre à tous vos désirs.',
        },
        {
          id: 1,
          img: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          visual: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          url: img2,
          date: 'Tome 2',
          excerpt: 'Le saviez-vous ?',
          text: 'Selon les mythes 21 grammes représenterait le poids de notre âme une fois qu’il s’échappe de notre corps. </br></br>Chaque âme étant unique, la fondatrice Johanna Monange à façonner pendant plus de 20 ans le monde de la parfumerie. Au cours de sa carrière elle a appris à designer des fragrances en rapport à l’ADN des plus grandes marques. </br></br>Son but ultime est de partager sa passion et ses connaissances pour aider chaque individu à créer un parfum de qualité en accord avec leur personnalité.'
        },
        {
          id: 2,
          img: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          url: img3,
          date: 'Tome 3',
          excerpt: 'Notre mission',
          text: '21 Grammes veut déverser le pouvoir mystérieux du 5ème sens et transformer nos clients en véritable designer en parfumerie. </br></br>Pour que chacun puisse forger sa propre fragrance qui représente vraiment son identité. 21 Grammes veut guider les individus à découvrir ce qu’il les rends unique, audacieux, attractif, exceptionnel, élégant et sexy. </br></br>21 Grammes donne le pouvoir à une communauté unique de designer en parfum et leur laisser l\'opportunité de créer leurs propres ”essences of life”. En résumé nous repoussons les limites de la créativité dans l’industrie du parfum.'
        },
        {
          id: 3,
          img: F2J,
          visual: F2,
          url: img4,
          date: 'Tome 4',
          excerpt: 'Gage de qualité',
          text: 'Les principes de  transparence et de responsabilité sont les piliers sur lesquels repose sur notre démarche éthique. </br></br>Notre Maison de création n’utilise que des ingrédients naturels d’exception, dans des compositions simples, référencées parmi les meilleurs « nez » en la matière. </br></br>Nous mettons à votre disposition 30 compositions de haute parfumerie fait par nos maître parfumeurs uniquement avec des ingrédients naturels de qualité. De centaines de compositions son possible et tout cela façonnable par vous, pour vous définir en toute circonstances et pour correspondre à tous vos désires.'
        },
      ],
      loaded : false,
      leftPanel : false,
      hover: false,
      active: false,
      inactive: false,
      inactivePrev: false,
      id: 0,
      openPanel: false,
      showMore: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 800);
  },
  computed: {
    is_mobile() {
      const isMobile = window.matchMedia("only screen and (max-width: 760px)")
      return isMobile.matches ? true : false
    }
  },
  methods: {
    next(){
      this.inactive = false
      this.inactivePrev = false
      this.id +=  1
      if(this.id == this.timeline.length -1) {
        return this.inactive = true
      }
    },
    prev(){
      if(this.id == 0) {
        return this.inactivePrev = true
      }
      this.inactivePrev = false
      this.inactive = false
      this.id -=  1
    },
    openPage(el) {
      setTimeout(() => {
        this.$router.push(`/${el}`)
      }, 800)
    },
  }
}
</script>


<style scoped>
.loader { width: 100vw; height: 100vh; }
.loader img { width: 100%; height: 100%; }
.history { min-height: 100vh; background-image:url(../assets/img/waves.jpg); background-size: cover; color: #000; padding-bottom: 100px; overflow-x: hidden; }
.loading { animation: Gradient 15s ease infinite; }
.banner {
  position: fixed;
  right: 0;
  height: 100%;
  width: 5%;
  background-image: url(../assets/img/banner_cream.jpg);
  background-size: cover;
  transition: 0.3s width ease-in-out;
  z-index: 1;
}
.banner.open { width: 100%; background-image:url(../assets/img/waves.jpg); background-size: contain; background-position: -60px 20px; animation: Gradient 15s ease infinite; z-index: 3; }
.banner.open h2 { transform: translateY(-50%) rotate(0deg); }
.banner h2 {font-family:'Athens'; font-size: 35px; cursor: pointer; }
h1 {
  width: 645px;
  border-bottom: 1px solid #000;
  font-size: 50px;
  font-family:'Athens';
  font-style: italic;
  text-align: right;
  padding: 95px 20px 20px 0;
  margin-bottom: 70px;
}
h2 {
  position: relative;
  top: 50%;
  transform: translateY(50%) rotate(-90deg);
  right: 0;
  white-space: nowrap;
}
.wrapper { height: 500px; display: flex; flex-direction: row; margin: 0 auto; margin-right: 5%; margin-bottom: 80px; box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .2); }
.timeline {
  display: flex;
  flex-direction: column;
  left: 0;
  align-items: self-start;
  position: absolute;
  width: 100px;
  height: auto;
  z-index: 1;
}
.timeline img { height: 125px; width: 100px; object-fit: cover; cursor: pointer; transition: 0.3s all ease-in-out; filter: grayscale(1); }
.timeline__holder { position: relative; height: 125px; width: 100px; }
.timeline__holder p {
  top: 50%;
  position: absolute;
  right: -30%;
  transform: translateX(50%);
}
.timeline img.active {
  border-right: 11px solid #01b2b2;
  filter: none;
  width: 120px;
}
.timeline p.active { font-size: 20px; color: #01b2b2; right: -70px; }
.content { position: relative; background-color: #fff; text-align: left; padding: 80px 0 50px 230px; flex: 1; }
.content__header { font-size: 40px; font-family: 'Athens'; margin-bottom: 50px; }
.content__text { max-width: 480px; font-size: 18px; }
.content__text p { margin-bottom: 20px; }
.content__index { position: absolute; top: -30px; right: -100px; width: 250px; z-index: 1; }
.visual { background-color: #fff; width: 30%; }
.visual img { width: 100%; height: 100%; object-fit: cover; }
.visual__3 { position:relative; width: 35%; }
.visual__3 img {
  width: auto;
  top: -35px;
  position: absolute;
  right: -110px;
  height: 535px;
}
.inactive { pointer-events: none; color: grey; }
.arrow {
  display: none;
  flex-direction: row;
}
.arrow p {
  padding: 20px 0;
  flex: 1;
  text-align: center;
}
.pannel {
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  font-family: 'Athens';
  font-size: 32px;
  background-color: #fff;
}
.newsletter input{
  width: 300px;
  text-align: left;
  background: transparent;
  border: transparent;
  border-bottom: 1px solid black;
  padding-bottom: 4px;
}
.newsletter input::placeholder{
  color: #898c8c;
}
.pannel.open {
  height: 90%;
  transition: 0.3s height ease-in-out;
}
.plus {
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, 50%);
}
@keyframes Gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
@media screen and (max-width: 920px) {
  section { position: relative; }

  h1 {
    width: 100%;
    font-size: 32px;
    margin-top: 100px;
    padding: 0;
    border-bottom: 0;
    text-align: center;
  }
  .timeline, .banner { display: none; }
  .content { padding: 10px; }
  .wrapper { position: relative; height: 100%; flex-direction: column-reverse; background-color: #fff; margin: 0 20px 20px; box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, .3); }
  .visual {
    width: 100%;
    height: 230px;
    margin: 0 auto;
    overflow: hidden;
  }
  .content__index { display: none; }
  .content__header { text-align: center; font-size: 30px; }
  .content__text div { max-height: 100px; overflow: hidden; padding: 0 10px 20px; transition: 0.3s max-height ease-in-out; }
  .content__text.long div { max-height: 100%; }
  .arrow { display: flex; margin-bottom: 15px; }
  .arrow p { font-size: 25px; }
  .pannel { display: block; }
  .newsletter input { text-align: center; margin-bottom: 20px; }
}
</style>
