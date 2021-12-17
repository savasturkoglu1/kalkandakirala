<template>
<div class="div">
    <!-- <div class="nav-top">
             <div class="top-item">
                       <nuxt-link class="button" to="/teklif-al">
                        Teklif Al
                     </nuxt-link>
             </div>
            <div class="top-item"  v-if="veri" >
                <div class="button">
                  <span class="icon"><i class="fal fa-phone"></i></span>
                  <span>{{veri.contact.ilt_mobil1}}</span>
                </div>
            </div>
            <div class="top-item w100">
                   
             </div>
          <div class="top-item">
            <div class="buttons">
              <a class="button " @click="()=>{this.$parent.loginModal()}">
              <span class="icon">
                <i class="fal fa-user"></i>
              </span>
            </a>
            <a class="button  app-but   is-hoverable" id="ab-wrap">
                <span class="icon">
                <i class="fal fa-bars"></i>
                </span>
              </a>
              <div class="app-dd navbar-dropdown ">
                <Apps />
              </div>
            </div>
            
            </div>
          

        </div> -->


        <nav class="navbar nav-top" role="navigation" aria-label="main navigation">
  
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
                 

                    <div class="navbar-item top-item" v-if="veri">
                            <div class="button">
                                <span class="icon"><i class="fal fa-phone"></i></span>
                                <span>{{veri.contact.ilt_mobil1}}</span>
                              </div>
                    </div>
                    <div class="navbar-item top-item">
                          <div class="top-search">
                                        <div class="field">
                                        <p class="control has-icons-left">
                                          <input class="input" type="text" placeholder="Rezervasyon Sorgula">
                                          <span class="icon is-small is-left">
                                            <i class="fal fa-search"></i>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                        </div>

     
    </div>

    <div class="navbar-end">
      <div class="navbar-item top-item">
        <div class="top-search">
                      <div class="field">
                      <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Villa adı veya kodu">
                        <span class="icon is-small is-left">
                          <i class="fal fa-search"></i>
                        </span>
                      </p>
                    </div>
                   </div>
      </div>
      <div class="navbar-item top-item">
        <button class="button"  @click="()=>{this.$parent.loginModal()}">
              <span class="icon">
                <i class="fal fa-user"></i>
              </span>
              <span>Hesap</span>
        </button>
      </div>
      <div class="navbar-item top-item">
             <nuxt-link class="button" to="/">
               <span class="icon">
                <i class="fal fa-bookmark"></i>
              </span>
              <span>Kaydedilen villalar</span>
             </nuxt-link>
      </div>
      <div class="navbar-item top-item">
             <nuxt-link class="button" to="/">
               <span class="icon">
                <i class="fal fa-exchange-alt"></i>
              </span>
              <span>Karşılaştırma</span>
             </nuxt-link>
      </div>
       <nuxt-link class=" navbar-item  top-item color-sec" to="/teklif-al">
                        Teklif Al
                     </nuxt-link>
    </div>
  </div>
</nav>


  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation" style=" display:block;   border-bottom: 1px solid #ddd;">

    <div class="mv-brand">
         <nuxt-link class="navbar-item mv-nbrand" to="/">
            <img v-if="data" :src="data.logo" alt="Kaska Villa">
        </nuxt-link>
    </div>
    <div class="mv-menu">
          <nuxt-link to='/satılık-emlak' class="navbar-item">
           Satılık
          </nuxt-link>

       <nuxt-link  class="navbar-item" to="/blog">
       Blog
      </nuxt-link >

      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Bölgeler
        </a>

        <div class="navbar-dropdown custom-dd">
                
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Kategoriler
        </a>

        <div class="navbar-dropdown" v-if="veri">
          <nuxt-link v-for="(item, i)  in veri.kategoriler" :title="item.kat_adi" :key="i" :to="$store.state.trUrls.kats+item.kat_url"  class="dropdown-item">
               {{item.kat_adi}}
          </nuxt-link>
           <nuxt-link  to="/kisa-sureli-kiralama"  class="dropdown-item">
               Kısa süreli kiralamalar
          </nuxt-link>
        </div>
      </div>
       <div class="navbar-item has-dropdown is-hoverable" >
            <a class="navbar-link">
              Sayfalar
            </a>

              <div class="navbar-dropdown custom-dd" v-if="veri">
                <div class="columns">
                      <div class="column">
                            <h4>Bilgilendirme</h4>
                            <hr>
                            <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==2) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"  :title="item.say_adi"   class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                      </div>
                      <div class="column">
                          <h4>Destek</h4>
                          <hr>
                          <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==1) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"   class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                          
                      </div>
                      <div class="column">
                          <h4>Kurumsal</h4>
                          <hr>
                          <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==3) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"    class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                      </div>
                  </div>          
              </div>
           </div>
        <nuxt-link  class="navbar-item" to="/blog">
          İLETİŞİM
      </nuxt-link >
         

    </div>
    
  
  <!-- <div class="navbar-brand">
    <nuxt-link class="navbar-item" to="/">
      <img v-if="data" :src="data.logo" alt="Kaska Villa">
    </nuxt-link>
    <div class="button mb-icn" @click="()=> {this.ara = !this.ara}">
         <span class="icon ">
            <i  class="fal fa-search"></i>
         </span>
    </div>
   
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     
    </div> -->

    <!-- <div class="navbar-end pr">
        
        <div class="nav-bottom">
             <nuxt-link to='/satılık-emlak' class="navbar-item">
                  Satılık
            </nuxt-link>

            <nuxt-link  class="navbar-item" to="/blog">
              Blog
           </nuxt-link >

          <div class="navbar-item has-dropdown is-hoverable" >
            <a class="navbar-link">
              Bölgeler
            </a>

            <div class="navbar-dropdown custom-dd">
                <LocationDd />           
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable" >
            <a class="navbar-link">
              Kategoriler
            </a>

            <div class="navbar-dropdown" v-if="veri">
              <nuxt-link v-for="(item, i)  in veri.kategoriler" :title="item.kat_adi" :key="i" :to="$store.state.trUrls.kats+item.kat_url"  class="dropdown-item">
                  {{item.kat_adi}}
              </nuxt-link>
              <nuxt-link  to="/kisa-sureli-kiralama"  class="dropdown-item">
                  Kısa süreli kiralamalar
              </nuxt-link>
            </div>
          </div>

       

        <div class="navbar-item has-dropdown is-hoverable" >
            <a class="navbar-link">
              Sayfalar
            </a>

              <div class="navbar-dropdown custom-dd" v-if="veri">
                <div class="columns">
                      <div class="column">
                            <h4>Bilgilendirme</h4>
                            <hr>
                            <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==2) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"  :title="item.say_adi"   class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                      </div>
                      <div class="column">
                          <h4>Destek</h4>
                          <hr>
                          <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==1) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"   class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                          
                      </div>
                      <div class="column">
                          <h4>Kurumsal</h4>
                          <hr>
                          <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==3) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"    class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                      </div>
                  </div>          
              </div>
           </div>
       
         </div>
         -->
         
      
      
    <!-- </div>
          </div> 
     -->
 
 <LoginModal />
</nav>
</div>
</template>

<script>
import Apps from '../../components/templates/apps';
import LoginModal from '../tr/accountdd';
import LocationDd from './locationDd';
export default {
 components: { LoginModal, Apps,LocationDd},
  data(){
      return{
          veri:null,
          results:null,
          ara:false,
          showapp:false,
          curr:'TR',
          
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
        this.results = null; this.ara = false;
            }
        },
  methods: {
    setCurrency(i){
        this.curr = i;
        localStorage.setItem('cur',i);
        this.$axios.get('/set-currency/'+i.toString()).then(resp => {
                  location.reload();
        }); 
    },
    findVilla(e){
      let key = e.target.value;
      if(key.length>1){
        this.$axios.get('/find-villa/'+key).then(resp => {
            this.results = resp.data
          })
      } else {
        this.results = null
      }
    },
    closeSearch(){
      this.ara = false;
      this.results = null;
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

<style scoped>
.mv-menu {
      text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase
}

.mv-menu .navbar-item {
    text-transform: uppercase;
}
.mv-brand {
    width: 100%;
    text-align: center;
        background: #fff !important;
    left: 0;
}

.mv-nbrand {
  text-align: center;
    display: block;
}
.mv-nbrand img{
  height: 40px !important;
}


a.navbar-item.ta-item.top-item {
    background: #f0932b;
    color: #fff;
}
.nav-top input.input {
    background: transparent;
    border: none;
    color: #eee !important;
}
nav.navbar.nav-top {
    min-height: auto;
}
.top-item .button {
    border: none;
    background: transparent;
    color: #eee;font-weight: 400;
    font-size: 13px !important;
}
.top-item .buttons {
 flex-wrap: nowrap
}
.top-item.w1000 {
    width: 100%;
}
.top-item {
    padding: 0px 10px ;
    border-left: 1px solid #546E7A80;
    width: auto;
    text-align: center;font-weight: 400;
    font-size: 13px !important;
}
.nav-top {
    padding: 0;
    margin: 0;
    width: 100%;
}
.nav-top {
      background: linear-gradient(to bottom,#014FA3 0,#073A72 100%) !important;;
    border: 0px;

    background: #000 !important;
    
}
.navbar-end.pr {
    display: block;
}
.nav-top,  .nav-bottom {
    display: flex;
}
.mb-icn {
  display: none
}
@media (max-width: 1000px) {
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
   .custom-dd {
    right: 0px;
    width: 600px;
    left: auto;
    padding: 20px;
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

 .nav-bottom .navbar-item {
    text-transform: uppercase;
    border: 1px solid #eee;
    padding: 10px;
    width: 160px;
    text-align: center !important;
    border-radius: 0px !important;
    /* display: block; */
}
</style>


//  <transition name="router-anim" mode="out-in" >
//          <div class="ar-bar mbl" v-if="ara">
//                 <div class="control has-icons-left ar-inp-wrap">
//                   <input name="rez_eposta"  type="email" placeholder="Birşeyler arayın" class="input ar-inp"  @keyup="findVilla($event)"> 
//                   <span class="icon is-left"><i class="fal fa-pen"></i></span>
//                   <div class="ar-result" v-if="results">
                      
//                             <nuxt-link  v-for="(item, h) in results" :key="h" :to="'/kiralik-villa/'+item.vil_url">
//                              <article class="media">
//                               <figure class="media-left">
//                               <p class="image is-96x96">
//                                 <img :src="item.vil_response_img">
//                               </p>
//                             </figure>
//                             <div class="media-content">
//                               <h4> {{item.vil_adi}} </h4>
//                               <p> {{item.vil_baslik}} </p>
//                               <p> {{item.vil_il}} {{item.vil_bolge}} </p>
//                             </div>
                          
//                        </article>
//                          </nuxt-link>
//                   </div>
//                </div>
//                <div class="ar-close color-sec" @click="closeSearch">
                 
//                    <i class="fal fa-times"></i>
                 
//                </div>

//          </div>
//        </transition>


