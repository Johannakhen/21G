<template>
  <section class="history" :class="{loading: !loaded}">
    <div class="loader" v-if="!loaded"></div>
    <div class="banner" v-if="loaded" :class="{open : leftPanel}"  v-on:click="leftPanel= true, openPage('history')"><h2>L'histoire</h2></div>
    <div class="title" v-if="loaded" >
      <h1>Le concept</h1>
    </div>
    <div class="wrapper" v-if="loaded">
       <div class="visual">
        <img :src="timeline[id].visual" alt="">
      </div>
      <div class="content">
        <div class="content__header">
          <h3>{{timeline[id].date}}</h3>
          <p>{{timeline[id].excerpt}}</p>
        </div>
        <div class="content__text">
          <p>{{timeline[id].text}}</p>
        </div>
      </div>
      <div class="timeline">
        <div class="timeline__holder" v-for="(item, index) in timeline" v-bind:key="item.id"  @mouseover.stop="hover = index" @mouseleave="hover = false"  v-on:click="active = index, id= index" >
          <img :src="item.img" alt="" :class="{active : active == index}">
          <p v-if="hover == index || active == index" :class="{active : active == index}">{{item.date}}</p>
        </div>
      </div>
    </div>
    <button v-if="loaded">Composez votre parfums</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeline : [
        {
          id: 0,
          img: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          date: '2000',
          excerpt: 'blablabla',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          id: 1,
          img: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          visual: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          date: '2001',
          excerpt: 'blablabla',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum incidunt magni sint doloremque dolor optio repudiandae ratione vel temporibus est officiis exercitationem, explicabo accusantium nisi nihil veritatis esse non!'
        },
        {
          id: 2,
          img: 'https://media.giphy.com/media/l1AsBpiFN5AowkYda/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          date: '2002',
          excerpt: 'blablabla',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum incidunt magni sint doloremque dolor optio repudiandae ratione vel temporibus est officiis exercitationem, explicabo accusantium nisi nihil veritatis esse non!'
        },
        {
          id: 3,
          img: 'https://media.giphy.com/media/qKNfbNbEN5ylW/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          date: '2003',
          excerpt: 'blablabla',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum incidunt magni sint doloremque dolor optio repudiandae ratione vel temporibus est officiis exercitationem, explicabo accusantium nisi nihil veritatis esse non!'
        },
        {
          id: 4,
          img: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          visual: 'https://media.giphy.com/media/qKNfbNbEN5ylW/giphy.gif',
          date: '2004',
          excerpt: 'blablabla',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum incidunt magni sint doloremque dolor optio repudiandae ratione vel temporibus est officiis exercitationem, explicabo accusantium nisi nihil veritatis esse non!'
        },
        {
          id: 5,
          img: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          visual: 'https://media.giphy.com/media/l0MYxqKEmJoL150TC/giphy.gif',
          date: '2005',
          excerpt: 'blablabla',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum incidunt magni sint doloremque dolor optio repudiandae ratione vel temporibus est officiis exercitationem, explicabo accusantium nisi nihil veritatis esse non!'
        },
      ],
      loaded : false,
      leftPanel : false,
      hover: false,
      active: false,
      id: 0,
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
.title:after {
    content: '';
    clear: both;
    display: block;
}
.loader { width: 100vw; height: 100vh; }
.loader img { width: 100%; height: 100%; }
.history { background-image:url(../assets/img/waves.jpg); background-size: cover; color: #000; padding-bottom: 200px; overflow-x: hidden; }
.loading { animation: Gradient 15s ease infinite; }
.banner {
  position: fixed;
  left: 0;
  height: 100%;
  width: 5%;
  background-color: #fff;
  transition: 0.3s width ease-in-out;
  z-index: 1;
}
.banner.open { width: 100%; }
.banner.open h2 { transform: translateY(-50%) rotate(0deg); }
h1 {
  width: 645px;
  border-bottom: 1px solid #000;
  font-size: 100px;
  font-family:'Athens';
  font-style: italic;
  text-align: right;
  padding: 95px 35px 35px 0;
  margin-bottom: 50px;
  float: right;
}
h2 {
  position: relative;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  left: 0;
  white-space: nowrap;
}
.wrapper { height: 600px; display: flex; flex-direction: row; margin: 0 auto; margin-left: 5%; margin-bottom: 80px; box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .2); }
.timeline {
  display: flex;
  flex-direction: column;
  right: 0;
  align-items: self-start;
  position: absolute;
  width: 100px;
  height: auto;
  overflow-x: hidden;
}
.timeline img { height: 100px; width: 100px; object-fit: cover; cursor: pointer; transition: 0.3s all ease-in-out; }
.timeline__holder { position: relative; height: 100px; width: 100px; }
.timeline__holder p {
  top: 50%;
  position: absolute;
  left: -30%;
  transform: translateX(-50%);
}
.timeline img.active {
  border-left: 11px solid #01b2b2;
}
.timeline p.active { font-size: 20px; color: #01b2b2; right: -50px; }
.content { background-color: #fff; text-align: left; padding: 100px 0 100px 150px; flex: 1; }
.content__header { font-size: 70px; font-family: 'Athens'; margin-bottom: 50px; }
.content__header h3 { font-weight: bold; }
.content__text { max-width: 590px; font-size: 19px; }
.visual { background-color: #fff; width: 30%; }
.visual img { width: 100%; height: 100%; object-fit: cover; }
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
</style>
