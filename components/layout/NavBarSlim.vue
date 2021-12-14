<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link class="navbar-item" to="/">
      <img v-if="data" :src="data.logo" alt="villandakal Villa kiralama">
    </nuxt-link>
     <div class="mb-right buttons mob">
     
    <div class="button mb-s-icn" @click="()=> {this.ara = !this.ara}">
        
         <span class="icon ">
            <i  class="fal fa-search"></i>
         </span>
    </div>
     </div>
    <transition name="router-anim" mode="out-in" >
         <div class="ar-bar mbl" v-if="ara">
                <div class="control has-icons-left ar-inp-wrap">
                  <input id="sinput"  type="email" placeholder="Birşeyler arayın" class="input sinput ar-inp"  @keyup="findVilla($event)"> 
                  <span class="icon is-left"><i class="fal fa-pen"></i></span>
                  <div class="ar-result" v-if="results">
                      
                            <nuxt-link  v-for="(item, h) in results" :key="h" :to="'/kiralik-villa/'+item.vil_url">
                             <article class="media">
                               <figure class="media-left">
                                  <p class="image is-108x108">
                                    <img :src="item.vil_response_img">
                                  </p>
                                </figure>
                                <div class="media-content">
                                  <span class="nav-title"> {{item.vil_adi}} </span>
                                  <p> {{item.vil_baslik}} </p>
                                  <p> {{item.vil_il}} {{item.vil_bolge}} </p>
                                </div>
                            </article>
                         </nuxt-link>
                  </div>
               </div>
               <div class="ar-close color-sec" @click="closeSearch">
                 
                   <i class="fal fa-times"></i>
                 
               </div>

         </div>
       </transition>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     
    </div>

    <div class="navbar-end pr">
       <transition name="router-anim" mode="out-in" >
         <div class="ar-bar" v-if="ara">
                <div class="control has-icons-left ar-inp-wrap">
                  <input name="rez_eposta"  type="email" placeholder="Birşeyler arayın" class="input sinput ar-inp"  @keyup="findVilla($event)"> 
                  <span class="icon is-left"><i class="fal fa-pen"></i></span>
                  <div class="ar-result" v-if="searching">
                            <Spinner v-if="spn" />
                            <div v-if="results" >
                                <nuxt-link  v-for="(item, h) in results" :key="h" :to="'/kiralik-villa/'+item.vil_url">
                                <article class="media">
                                  <figure class="media-left">
                                  <p class="image is-96x96">
                                    <img :src="item.vil_response_img">
                                  </p>
                                </figure>
                                <div class="media-content">
                                  <span class="nav-title"> {{item.vil_adi}} </span>
                                  <p> {{item.vil_baslik}} </p>
                                  <p> {{item.vil_il}} {{item.vil_bolge}} </p>
                                </div>
                              
                          </article>
                            </nuxt-link>
                            </div>
                            <div v-if="results">
                                  <div v-if="!spn & results.length<0">
                                  <h5>Villa bulunamadı</h5>
                            </div>
                            </div>
                            
                            
                  </div>
               </div>
               <div class="ar-close color-sec" @click="closeSearch">
                 
                   <i class="fal fa-times"></i>
                 
               </div>

         </div>
       </transition>
        
    

      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Kategoriler
        </a>

        <div class="navbar-dropdown" v-if="veri">
          <nuxt-link v-for="(item, i)  in veri.kategoriler" :title="item.kat_adi" :key="i" :to="$store.state.trUrls.kats+item.kat_url"  class="dropdown-item">
               {{item.kat_adi}}
          </nuxt-link>
           <nuxt-link  to="/kisa-sureli-kiralama"  class="dropdown-item">
               Kısa Süreli Kiralamalar
          </nuxt-link>
        </div>
      </div>

          
     

      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Bölgeler
        </a>

        <div class="navbar-dropdown custom-dd">
            <LocationDd />           
        </div>
      </div>

        
       <nuxt-link  class="navbar-item" to="/blog">
       Blog
      </nuxt-link >
       

        <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Bilgilendirme
        </a>

        <div class="navbar-dropdown custom-dd" v-if="veri">
           <div class="columns">
                <div class="column">
                      <span class="nav-title">Bilgilendirme</span>
                      <hr>
                      <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==2) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"  :title="item.say_adi"   class="dropdown-item">
                        {{item.say_adi}}
                    </nuxt-link>
                </div>
                 <div class="column">
                     <span class="nav-title">Destek</span>
                     <hr>
                     <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==1) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"   class="dropdown-item">
                        {{item.say_adi}}
                    </nuxt-link>
                      <nuxt-link  to="/iletisim"  title="İletişim"   class="dropdown-item">
                        İletişim
                    </nuxt-link>
                </div>
                 <div class="column">
                     <span class="nav-title">Kurumsal</span>
                     <hr>
                     <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==3) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"    class="dropdown-item">
                        {{item.say_adi}}
                    </nuxt-link>
                </div>
             </div>          
        </div>
      </div>
        <nuxt-link class="navbar-item color-sec" to="/teklif-al">
             Teklif Al
         </nuxt-link>
      <div class="navbar-item" v-if="veri">
        <div class="buttons">
          <a class="button is-primary">
            <strong>{{veri.contact.ilt_mobil1}}</strong>
          </a>
          <a class="button  color-sec" id="ar-open" @click="searchOpen">
           <i  class="fal fa-search"></i>
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          TR
        </a>

        <div class="navbar-dropdown">
           <a class="navbar-item" @click="getLang">ENG</a>    
        </div>
      </div>
      <div class="navbar-item ac-item">
        <a class="button ac-buton " @click="()=>{this.$parent.loginModal()}">
          <span class="icon">
            <i class="fal fa-user"></i>
          </span>
        </a>
        
      </div>
       <div class="navbar-item ac-item ab-wrap pr  is-hoverable" id="ab-wrap">
        <a class="button ac-buton app-but ">
          <span class="icon">
           <i class="fal fa-bars"></i>
          </span>
        </a>
        <div class="app-dd navbar-dropdown ">
          <Apps />
        </div>
        
      </div>
    </div>
  </div>

</nav>

</template>

<script>
import Apps from '../templates/apps';

import LocationDd from '../tr/locationDd';
import Spinner from '../tools/Spinner';
export default {
  
 components: {  Apps,LocationDd, Spinner },
  data(){
      return{
          veri:null,
          results:null,
          ara:false,
          showapp:false,
          curr:'TR',
          searching:false,
          spn:false,
          
      }
  },

  props: {
       data:null,
  }, 
 
  mounted(){
       this.getDatas();
      //  let self =this;
      //  $('.app-but').click(function(event){ 
      //       event.stopPropagation();            
      //   });
        
      //  $(window).click(function() {
      //   self.showapp= false;
      //   });

      const vr = localStorage.getItem('cur');
      if(vr){
        this.curr = vr;
      }

  },
    watch:{
        $route (to, from){
            this.results = null;
            this.ara = false;                  
                },

          '$route' (to, from){
              this.results = null;
            this.ara = false;     
            // $(".f-phone").trigger('click');
             // $(".navbar-dropdown").css('opacity',0);
            //  $(".navbar-dropdown").toggle('is-active');
           
        }
        },
  methods: {
    searchOpen(){
    this.ara = !this.ara
    setTimeout(() => {
      $(".sinput").focus();
    }, 500);
    },
    getLang(){
           var m = $("link[hreflang=en]").attr('href'); 
           if(m){
             window.location = m;            
           } else {
              window.location = this.$store.state.baseEng;
           }

         //   window.location = this.$store.state.baseEng;
    },
    setCurrency(i){
        this.curr = i;
        localStorage.setItem('cur',i);
        this.$axios.get('/set-currency/'+i.toString()).then(resp => {
                  location.reload();
        }); 
    },
    findVilla(e){
      this.searching = true;
      this.spn = true;
      let key = e.target.value;
      if(key.length>1){
        this.$axios.get('/find-villa/'+key).then(resp => {
            this.results = resp.data;
            this.spn = false;
          })
      } else {
        this.results = null;
      
        
      }
    },
    closeSearch(){
      this.ara = false;
      this.results = null;
      this.searching = false;
      this.spn = false;
    
    },
  
     async getDatas(){
         await this.$axios.get('/nav-set').then(resp => {
            this.veri = resp.data,
            this.$store.dispatch('setKat', resp.data);
          })
      }
  }
}
</script>

<style>

 .custom-dd {
    right: 0px;
    width: 800px !important;
   
    padding: 20px;
    left: -250px !important;
}

article.media {
    /* padding-bottom: 5px; */
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}
.mb-icn {
  display: none
}
@media (max-width: 1000px) {
        figure.media-left img {
    height: 60px;
    width: 60px;
}
      .navbar-item img {
        max-height:30px;
    }
    .control.has-icons-left .icon {
      height: 100%;
    }
    .mb-icn {
      display: block;
    position: absolute;
    right: 0;
    height: 100%;
    width: 50px;
    font-size: 20px;
    border: 0;
}
}
.app-dd {
    position: absolute;
    top: 110%;
    left: auto !important;
    right: 0;
    background: #fff;
    padding: 30px;
    width: 400px;
    box-shadow: 0 8px 8px rgba(10,10,10,.1);
    display: block;
    border-radius: 6px;
    pointer-events: none;
}
.ar-result {
    position: absolute;
    background: #fff;
    width: 100%;
    left: 0;
    right: 0;
    padding: 30px;
    border-radius: 5px;
    max-height: 400px;
    overflow-y: auto;
}
.ar-bar {
  position: absolute;
    width: 100%;
    display: flex;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 99;
}
.ar-inp {
    height: 100%;
    width: 100%;
}
.ar-close {
    width: 100px;
    text-align: center;
    cursor: pointer;
}
.ar-close i  {
    font-size: 36px;
    margin-top: 20%;
    color: #fff;
}
.ar-bar .control.has-icons-left .input, .control.has-icons-left .select select {
    padding-left: 4.25em;
}
.ar-bar .icon {
  height: 100%;
    font-size: 32px;
}
.ar-inp-wrap {
    width: 100%;
    position: relative;
}
.user-dd {
      right: 0px;
    width: 300px;
    left: auto;
    padding: 20px;
}
.button.ac-buton {
    border: navajowhite;
    font-size: 20px;
}
.navbar-item.ac-item {
    border-left: 1px solid #ddd;
}
     .navbar {
    background-color: #ffffff;
   }
   @media screen and (min-width: 1024px){
     .navbar.is-spaced {
    padding: 0.03rem 0.5rem;
}

.mbl {
  display: none
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

 @media screen and (min-width: 1000px){
 
    .mbl {
      display: none
    }

 }
</style>