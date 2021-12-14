<template>
<div class="div pr">
  

        <nav class="navbar nav-top " role="navigation" aria-label="main navigation">
  
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
                                          <form @submit="sorgula">
                                        <p class="control has-icons-left">
                                          
                                             <input class="input top-inp" type="text" placeholder="Rezervasyon Sorgula" v-model="kod">
                                          <span class="icon is-small is-left">
                                            <i class="fal fa-search"></i>
                                          </span>
                                                                                
                                        </p>
                                        </form>    
                                      </div>
                                    </div>
                        </div>

     
    </div>

    <div class="navbar-end">
      <div class="navbar-item top-item" v-if="veri">
        <div class="buttons">
            <a class="button " :href="veri.contact.sos_instagram" target="_blank">
                              <i class=" fab fa-instagram"></i>
                          </a>
                          <a class="button " :href="veri.contact.sos_twitter" target="_blank">
                              <i class=" fab fa-twitter"></i>
                          </a>
                          <a class="button " :href="veri.contact.sos_face" target="_blank">
                              <i class=" fab fa-facebook"></i>
                          </a>
                          <a class="button " href="https://www.youtube.com/channel/UC7XoYP_pK3QPQqMeVYiHumw" target="_blank">
                              <i class=" fab fa-youtube"></i>
                          </a>
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
        <span class="app-badge" v-if="bookmark">{{bookmark}}</span>
             <button class="button" @click="savedVillas">
               <span class="icon">
                <i class="fal fa-bookmark"></i> 
              </span>
              <span>Kaydedilen villalar</span>
             </button>
      </div>
      <div class="navbar-item top-item">
        <span class="app-badge" v-if="comp">{{comp}}</span>
              <button class="button" @click="goComp">
               <span class="icon">
                <i class="fal fa-exchange-alt"></i>
              </span>
              <span>Karşılaştırma</span>
             </button>
      </div>
       <nuxt-link class=" navbar-item  top-item color-sec" to="/teklif-al">
                        Teklif Al
                     </nuxt-link>
    </div>
  </div>
</nav>


  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation" style=" border-bottom: 1px solid #ddd;">
       <transition name="router-anim" mode="out-in" >
         <div class="ar-bar" v-if="false">
                <div class="control has-icons-left ar-inp-wrap">
                  <input id="ar-inp" type="text" placeholder="Birşeyler arayın" class="input ar-inp"  @keyup="findVilla($event)"> 
                  <span class="icon is-left"><i class="fal fa-pen"></i></span>
                  
               </div>
               <div class="ar-close color-sec" @click="closeSearch">
                 
                   <i class="fal fa-times"></i>
                 
               </div>

         </div>
       </transition>
      
    <div class="mv-brand pr">
        <div class="tb-wtas mob">
                       <div class="button " @click="wht">
                        <span class="icon ">
                         <i class="fab fa-whatsapp"></i>
                        </span>
                    </div>
                     </div>
         <nuxt-link class="mv-nbrand" to="/">
            <img class=" mob-brand" v-if="data" :src="data.logo" alt="villandakal Villa">
        </nuxt-link>
        <span class="mv-search mob">
          <button class="button" @click="aramaOpen">
            <span class="icon">
             <i v-if="ara" class="fal fa-times"></i>
              <i v-else class="fal fa-search"></i>
            </span>
            <span v-if="!ara" class="desc">Arama</span>
          </button>
        </span>
    </div>
    <div class="mv-menu">
      <div class="field s-field"  v-if="ara">
       
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium ar-inp" type="text" placeholder="Villa adı veya ilan numarası"   @keyup="findVilla($event)">
            
            <span class="icon is-small is-left">
              <i class="fal fa-search"></i>
            </span>
            <span class="icon is-small is-right s-close" @click="closeSearch">
              <i class="fal fa-times"></i>
            </span>
          </div>
         
          <div class="ar-result" v-if="results">
                      
                            <nuxt-link  v-for="(item, h) in results" :key="h" :to="'/kiralik-tatil-villasi/'+item.vil_url" class="">
                             <article class="media ar-media">
                              <figure class="media-left">
                              <p class="image res-img-wrap is-96x96">
                                <img :src="item.vil_response_img" class="result-img">
                              </p>
                            </figure>
                            <div class="media-content">
                              <span class="nav-t"> {{item.vil_adi}} </span>
                              <p> {{item.vil_baslik}} </p>
                              <p> {{item.vil_il}} {{item.vil_bolge}} </p>
                            </div>
                          
                       </article>
                         </nuxt-link>
                  </div>
  </div>
          <div class="dFlex desc" v-else>
           

      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Bölgeler
        </a>

        <div class="navbar-dropdown custom-dd">
                <LocationDd/>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable" >
        <a class="navbar-link">
          Kategorİler
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
              Bilgilendirme
            </a>

              <div class="navbar-dropdown custom-dd" v-if="veri">
                <div class="columns">
                      <div class="column">
                            <span class="nav-t">Bilgilendirme</span>
                            <hr>
                            <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==2) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"  :title="item.say_adi"   class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                      </div>
                      
                      <div class="column">
                          <span class="nav-t">Kurumsal</span>
                          <hr>
                          <nuxt-link v-for="(item, i)  in veri.pages.filter(ii =>{if(ii.say_menu ==3 || ii.say_menu ==1) { return ii }})" :key="i" :to="'/sayfa/'+item.say_url"   :title="item.say_adi"    class="dropdown-item">
                              {{item.say_adi}}
                          </nuxt-link>
                           <nuxt-link  to="/iletisim"   title="iletişim"    class="dropdown-item">
                              İletişim
                          </nuxt-link>
                      </div>
                  </div>          
              </div>
           </div>
            <nuxt-link to='/satılık-emlak' class="navbar-item">
           Satılık
          </nuxt-link>

       <nuxt-link  class="navbar-item" to="/blog">
       Blog
      </nuxt-link >
        <nuxt-link  class="navbar-item" to="/iletisim">
          İLETİŞİM
      </nuxt-link >

      <div class="navbar-item">
            <button class="button" @click="aramaOpen">
            <span class="icon">
             <i v-if="ara" class="fal fa-times"></i>
              <i v-else class="fal fa-search"></i>
            </span>
            <span v-if="!ara" class="desc">Arama</span>
          </button>
          </div>
          </div>
         

    </div>

 
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
          kod:null,
           comp:null,
            bookmark:null,
          
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

         let comp =  JSON.parse(localStorage.getItem('compare'));  
         if(comp){
             this.comp = comp.length;
         }
         let bookmark =  JSON.parse(localStorage.getItem('bookmark'));
           if(bookmark){
             this.bookmark = bookmark.length;
         }

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
    aramaOpen(){
        
      this.ara = ! this.ara;
      setTimeout(() => {
        $(".ar-inp").focus();
      }, 200);
    },
       wht(){
            let wh= 'https://api.whatsapp.com/send?phone='+this.veri.contact.ilt_mobil1+'&text=Merhaba';   
             window.open(wh, '_blank');
        },
      goComp(){
              let vll =  JSON.parse(localStorage.getItem('compare'));            
           let url = this.$router.resolve({name:'villa-karsilastirma', query:{villas:vll.join(',')}});
            window.open(url.href, '_blank');
        },
       
        savedVillas() {
             let vll =  JSON.parse(localStorage.getItem('bookmark'));
            
            this.$router.push({name:'villalar', query:{villas:vll.join(','), title: 'Kaydedilen Villalar'}});
         },
    sorgula(e){
      e.preventDefault();
            if(this.kod){
              this.$router.push({name:'rezervasyon-rezervasyon-sorgula', query:{kod:this.kod}});    
            }         
        },
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

<style  scoped>



a.navbar-link, a.navbar-item  {
    font-size: 17px;
}

span.app-badge {
    position: absolute;
    color: #fff;
    top: 0;
    left: auto;
    background: #f60;
    width: 20px;
    text-align: center;
    height: 20px;
    border-radius: 50%;
    z-index: 99;
}
span.mv-search .button {
    border: none;
    background: #eee;
}
span.mv-search {
    position: absolute;
    right: 10px;
}
.mv-menu {
    text-align: right;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: right;
    -webkit-box-pack: center;
    justify-content: flex-end;
    text-transform: uppercase;
    width: 100%;
}

.mv-menu .navbar-item {
    /* text-transform: uppercase; */
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
 height: 30px !important;
    max-height: none;

}
.s-close {
  pointer-events: all !important;
  cursor: pointer
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
    padding: 3px 10px ;
    border-left: 1px solid #546E7A80;
    width: auto;
    text-align: center;font-weight: 400;
    font-size: 14px !important;
}
.nav-top {
    padding: 0;
    margin: 0;
    width: 100%;
}
.nav-top {
      /* background: linear-gradient(to bottom,#014FA3 0,#073A72 100%) !important;; */
    border: 0px;

    background: linear-gradient(90deg,#021048,#1e38a3);

    /* background: #000 !important; */

        background: #013243 !important;
    
}
.navbar-end.pr {
    display: block;
}
.nav-top {
    display: flex;
}
.mb-icn {
  display: none
}
.top-inp::placeholder {
    font-size: 16px;
}
@media (max-width: 1000px) {

  img.result-img {
    height: 100%;
    width: auto;
    min-width: 100%;
    max-width: none;
}

  .res-img-wrap{
    overflow: hidden;
    border-radius: 6px;
    position: relative;
}
    .mv-nbrand img {
    height: 50px !important;
    max-height: none;
}

.navbar {
    background-color: #fff;
     min-height: none; 
    position: relative;
    z-index: 99 !important;
}

  span.mv-search .button {
    border: none;
    background: transparent;
    border-left: 2px solid #eee;
    border-radius: 0;
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

.media.ar-media {
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    align-items: inherit;
}


.ar-result {
    position: absolute;
    background: rgba(0,0,0,.56078);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 2px 15px 2px rgba(0,0,0,.27059);
    left: 0;
    bottom: 0;
    top: 50px;
    height: 100%;
    overflow-y: auto;
    min-height: 450px;
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


a.box-link {
    color: inherit;
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
 .top-item:hover {
   background: #607D8B;
 }
.top-inp::placeholder {
  color: #bbb;
  

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

.mv-brand {
    width: 30%;
    text-align: center;
    background: #fff !important;
    left: 0;
    display: flex;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-transform: uppercase;
}

.s-field {
  width: 50%;
    /* position: absolute; */
    background: #f1f3f6;
        padding: 5px 10px;
    z-index: 99;
    top: auto;
        transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
        position: relative;
}

@media (max-width: 1000px) {

  .ar-result {
    position: fixed;
    background: #0000008f;
    padding: 10px;
    border-radius: 5px;
    overflow-y: auto;
    box-shadow: 1px 2px 15px 2px rgba(0,0,0,0.27059);
    left: 0;
    bottom: 0;
   top: 110px;
    height: 100%;
    overflow-y: auto;
}
   
   .mob-brand {
     height: 30px;
   }

  span.mv-search .button {
    background: transparent;
    border-left: 2px solid #eee;
    border-radius: 0;
}
  .s-field {
    width: 100%;
    /* position: absolute; */
    background: #2a5538;
    padding: 10px 10px;
    z-index: 99;
    top: auto;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
}

.mv-brand {
    width: 100%;
    /* text-align: center; */
    background: #fff !important;
    left: 0;
    display: -webkit-box;
    display: flex;
    display: flex;
    -webkit-box-align: center;
    align-items: auto; 
    -webkit-box-pack: auto;
    justify-content: auto;
    text-transform: uppercase;
}

.media-content {
    text-transform: capitalize;
    font-size: 12px;
    color: #607D8B;
    line-height: 20px;
}

span.nav-t {
    font-size: 18px;
    color: #68c481;
    font-weight: 600;
}
}
@media (min-width: 1000px) {


  .media-content {
    text-transform: capitalize;
    font-size: 16px;
}

span.nav-t {
    font-size: 18px;
    color: #68c481;
    font-weight: 600;
}
  .mv-brand {
    width: 25%;
    text-align: center;
    background: #013243 !important;
    left: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-transform: uppercase;
    height: 100%;
   
    transform: skew(-30deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
    margin-left: -30px;
    padding-top: 15px;
    box-shadow: 2px 3px 5px #00000080;
    position: absolute;
    height: 90px;
}

.mv-nbrand img {
    height: 80px!important;
    max-height: none;
    transform: skew(30deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
}

.mv-nbrand:focus, .mv-nbrand:hover {
    background: transparent;
    box-shadow: none
}
}
.tb-wtas.mob {
    position: absolute;
    left: 10px; 
    z-index: 9;
    color: #eee;
}

.tb-wtas.mob .button {
    border: none;
    border-radius: 0;
    color: #8BC34A;
    font-size: 18px;
    border-right: 2px solid #eee;
}

.custom-dd {
    right: 0;
    width: 700px!important;
    padding: 20px;
    left: -350px!important;
}

.navbar-dropdown.custom-dd h4 {
    text-align: left;
}

.search-calendar.mobil-fix-options.sb-level {
    padding-top: 60px;
}
</style>


