<template>
    <div pr>
          <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link class="navbar-item" to="/blog" title="blog"> 
      <img style="height: 50px !important;
    max-height: none;" src="https://panel.villaevreni.com/images/site/villa_evreni.png" >
    </nuxt-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
     
     
         <nuxt-link class="navbar-item" v-for="(item, i) in kats " :key="i" :to="'/blog/liste/'+item.bk_slug">
          {{item.bk_name}}
        </nuxt-link>

     
      <div class="navbar-item">
        <div class="buttons">
          <nuxt-link class="button is-primary" to="/">
            <strong>Kiralık Villalar</strong>
          </nuxt-link>
          
        </div>
      </div>
    </div>
  </div>
</nav>
          <transition name="router-anim" mode="out-in" >
                      <nuxt :key="$route.fullPath"  />
          </transition>
          
    </div>
</template>
<script>
export default {
    data(){
        return {
            kats:null,
        }
    },
    mounted(){
      this.getCats();
    },
    methods : {
        getCats(){
            this.$axios.get('/blog-kategori?lang=tr').then(resp => {
                    this.kats = resp.data  
            });
        }
    }
}
</script>

<style scoped> 
body {
    overflow-x:initial;
    position: relative;
    -webkit-font-feature-settings: 'liga','kern';
    -moz-font-feature-settings: 'liga','kern';
    font-feature-settings: 'liga','kern';
    -webkit-font-kerning: normal;
    -moz-font-kerning: normal;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
}
nav.navbar {
    box-shadow: -1px -1px 9px -3px #0000005e;
}
.blog-home {
    position: fixed;
    right: 20px;
    bottom: 20px;
}


/*slide transition*/
.slide-enter-active,
.slide-leave-active
 {
  transition: transform 0.4s ease-out;
}
.slide-enter {
  transform: translateX(-10%) ;
}
.slide-leave-to {
  transform: translateX(10%);
}

.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
  animation: bounce-in .6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.99);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: .1s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
