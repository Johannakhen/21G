<template>
  <section class="concept" :class="{loading: !loaded}">
    <div class="loader" v-if="!loaded"></div>
    <div class="banner" v-if="loaded" :class="{open : leftPanel}" v-on:click="leftPanel= true, openPage('history')"><h2 v-if="!leftPanel">L'histoire</h2></div>
    <div class="title" v-if="loaded" >
      <h1 v-if="loaded">Le concept</h1>
    </div>
    <div class="wrapper" v-if="loaded">
      <div class="visual" v-bind:class="`visual__${id}`">
        <img v-if="!is_mobile" :src="timeline[id].visual" alt="">
        <img v-if="is_mobile" :src="timeline[id].img" alt="">
      </div>
      <div class="content">
        <img class="content__index" v-bind:src="timeline[id].url" alt="">
        <div class="content__header">
          <p>{{timeline[id].excerpt}}</p>
        </div>
        <div class="content__text" v-bind:class="{long : showMore == true}">
          <div v-html="timeline[id].text"></div>
        </div>
      </div>
      <div class="timeline">
        <div class="timeline__holder" v-for="(item, index) in timeline" v-bind:key="item.id"  @mouseover.stop="hover = index" @mouseleave="hover = false"  v-on:click="active = index, id= index" >
          <img :src="item.img" alt="" :class="{active : active == index}">
          <p v-if="hover == index || active == index" :class="{active : active == index}">{{item.date}}</p>
        </div>
      </div>
      <div class="plus" v-if="is_mobile" v-on:click="showMore = true">
        <img src="../assets/img/plus.png" alt="">
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
    <div class="pannel" :class="{open : openPanel}" v-on:click="openPanel= true, openPage('history')"> <p>L'histoire</p> </div>
  </section>
</template>

<script>
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
import img5 from '../assets/img/5.png'
export default {
  data() {
    return {
      timeline : [
        {
          id: 0,
          img: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          url: img1,
          date: 'Phase 1',
          excerpt: 'Effectuez le test de personnalité et sélectionnez votre scénario',
          text: 'Après avoir passé notre test de personnalité élaboré et validé par des psychologues, trois scénarios vous seront proposés.</br></br> Vous devrez choisir l’un d’entre eux, dans lequel vous allez devoir réaliser des missions. Chaque scénario à sa thématique, il y aura une sélection d’image pour déterminer vos goûts personnels, des prises de photos sur votre environnement.</br></br>Choisissez la thématique sur laquelle vous êtes le plus à l’aise et laissez vous guider !</br></br>'
        },
        {
          id: 1,
          img: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          visual: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          url: img2,
          date: 'Phase 2',
          excerpt: 'Découvrez les essences qui vous correspondent !',
          text: 'Répondez aux différentes étapes de notre analyse de manière spontanée, de la sélection de couleur à l’importation d’une photo d’un intérieur qui vous plaît (le vôtre ou un de votre choix), les questions sont diverses et variées ! </br></br>L’analyse de vos réponses se basera sur nos algorithmes et en découle une composition personnalisée à votre image.'
        },
        {
          id: 2,
          img: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          url: img3,
          date: 'Phase 3',
          excerpt: 'Révélez les arômes cachées !',
          text: 'Le résultat de cette analyse a pour but de définir une combinaison d’essences la plus sur mesure possible, dès lors qu’un des scénario sera complété, vous serez dirigé vers le fruit de cette exploration et pourrez découvrir les 2 arômes choisi pour vous parmi une gamme de 30 fragrances disponibles et inter-combinables.</br></br> Une fois vos deux senteurs révélées, mariez les une à une dans votre base alcoolisée 21 grammes, qui est l’embase de votre essence. De là votre ultime fragrance éclos et vous pouvez choisir de personnaliser votre flacon en ligne. Vous pouvez alors passer commande et recevoir votre précieux coffret d’assemblage chez vous.'
        },
        {
          id: 3,
          img: 'https://media.giphy.com/media/qKNfbNbEN5ylW/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          url: img4,
          date: 'Phase 4',
          excerpt: 'Recevez votre kit 21 grammes',
          text: 'Une fois l’ensemble 21 grammes réceptionné, vous pourrez alors faire l’expérience du parfumeur en unissant le couple d’arômes choisis dans votre flacon épuré.</br></br> Pulvérisez ensuite votre parfum sur votre peau, vos cheveux, vos vêtements ou encore votre intérieur. Inspirez, profitez, évadez vous !'
        },
        {
          id: 4,
          img: 'https://media.giphy.com/media/qKNfbNbEN5ylW/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          url: img5,
          date: 'Phase 5',
          excerpt: 'Participez au phénomène 21 grammes et partagez votre expérience au monde entier.',
          text: 'Faites découvrir à tout le monde qu’il est maintenant possible de confectionner soi-même son parfum, la brume adéquate à chaque situation de votre histoire !</br></br> Gagnez des points grâce à vos achats, convertissez les en réductions, bons plans... </br></br>Partagez votre aventure sur les réseaux sociaux tels de Facebook, Instagram… Profitez en pour devenir garant de notre marque !'
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
    }
  }
}
</script>


<style scoped>
.title:after {
  content: '';
  clear: both;
  display: block;
}
.loader { width: 100vw; height: 100vh; }
.loader img { width: 100%; height: 100%; }
.concept { min-height: 100vh; background-image:url(../assets/img/waves-light.jpg); background-size: contain; background-position: -60px 20px; color: #000; padding-bottom: 100px; overflow-x: hidden; }
.loading { animation: Gradient 15s ease infinite; }
.banner {
  position: fixed;
  left: 0;
  height: 100%;
  width: 5%;
  background-color: #fff;
  background-image: url(../assets/img/banner_green.jpg);
  background-size: cover;
  transition: 0.3s width ease-in-out;
  z-index: 1;
}
.banner.open { width: 100%; background-image:url(../assets/img/waves.jpg); background-size: cover; animation: Gradient 15s ease infinite; z-index: 3; }
.banner.open h2 { transform: translateY(-50%) rotate(0deg); }
.banner h2 {font-family:'Athens'; font-size: 35px; cursor: pointer; }
h1 {
  width: 645px;
  border-bottom: 1px solid #000;
  font-size: 50px;
  font-family:'Athens';
  font-style: italic;
  text-align: left;
  padding: 95px 20px 20px 0;
  margin-bottom: 70px;
  float: right;
}
h2 {
  position: relative;
  top: 50%;
  transform: translateY(50%) rotate(-90deg);
  left: 0;
  white-space: nowrap;
}
.wrapper { height: 500px; display: flex; flex-direction: row; margin: 0 auto; margin-left: 5%; margin-bottom: 80px; box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .2); }
.timeline {
  display: flex;
  flex-direction: column;
  right: 0;
  align-items: self-start;
  position: absolute;
  width: 100px;
  height: auto;
}
.timeline img { height: 100px; width: 100px; object-fit: cover; cursor: pointer; transition: 0.3s all ease-in-out; filter: grayscale(1); }
.timeline__holder { position: relative; height: 100px; width: 100px; }
.timeline__holder p {
  top: 50%;
  position: absolute;
  left: -30%;
  transform: translateX(-50%);
}
.timeline img.active {
  border-left: 11px solid #01b2b2;
  filter: none;
  width: 120px;
  transform: translateX(-20px);
}
.timeline p.active { font-size: 20px; color: #01b2b2; right: -25px; text-align: left; }
.content { position: relative; background-color: #f2ffff; text-align: left; padding: 80px 200px 0 50px; flex: 1; }
.content__header { font-size: 40px; font-family: 'Athens'; margin-bottom: 50px; }
.content__text { max-width: 590px; font-size: 19px; }
.content__index { position: absolute; top: -30px; left: -150px; width: 250px; }
.visual { background-color: #fff; width: 30%; }
.visual img { width: 100%; height: 100%; object-fit: cover; }
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
  background-color: #f2ffff;
}
.pannel.open {
  height: 90%;
  transition: 0.3s height ease-in-out;
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
  .wrapper { position: relative; height: 100%; flex-direction: column; background-color: #f2ffff; margin: 0 20px 20px; box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, .3); }
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
