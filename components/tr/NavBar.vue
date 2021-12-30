<template>
  <div class="nav-wrapper">
    <nav
      class="navbar nav-alt nav-desk "
      role="navigation"
      aria-label="main navigation"
    >
    <div class="container">

    
      <div class="navbar-start">
        <nuxt-link class="mv-nbrand" to="/">
          <img
            class="mob-brand desktop-only"
            v-if="$store.state.base"
            :src="$store.state.base.settings.set_logo"
            alt="kalkadna kirala Villa kiralama"
          />
            <!-- <img
            class="mob-brand mobile tablet-only"
            v-if="data"
            src="/images/mlogo.png"
            alt="villandakal Villa kiralama"
          /> -->
        </nuxt-link>
        </div>
      <div class="navbar-end">
        <!-- <b-dropdown class="column sb-level2 is-3 pr"  aria-role="menu">
                   <template #trigger="{ active }" >
                      <div   class="mm-men-ir"   >
                       Kiralık Villalar                      
                  
                   </div>
                   </template>
                    <b-dropdown-item
                        aria-role="menu-item"
                        
                        custom
                        paddingless>
                   <div aria-role="menu-item" >
                       <mega-menu />
                  </div>   
                    </b-dropdown-item>
              </b-dropdown> -->
        <b-navbar-dropdown class="mega-button" v-if="$store.state.base" label="Kiralık Villalar" :hoverable="true">
          
                <b-navbar-item class="mega-dropdown" >
                  <mega-menu />
                    
                </b-navbar-item>
               
            </b-navbar-dropdown>
         <!-- <b-navbar-dropdown  v-if="$store.state.base" label="Villa Tipleri" :hoverable="true">
          
                <b-navbar-item v-for="(item, i) in $store.state.base.kategoriler" :key="i" >
                    <nuxt-link 
                    :title="item.kat_adi"             
                  :to="$store.state.trUrls.kats + item.kat_url"
                  class="dd-item">
                        {{ item.kat_adi }}
                    </nuxt-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                     <nuxt-link :to="$store.state.trUrls.villa" class="dd-item">
                      Tüm Villalar
                    </nuxt-link>
                </b-navbar-item>
            </b-navbar-dropdown>
          <b-navbar-dropdown  v-if="$store.state.base" label="Tatil Bölgeleri" :hoverable="true">
          
                <b-navbar-item v-for="(item, i) in  $store.state.base.bolgeler" :key="i" >
                    <nuxt-link 
                   
                :title="item.bo_adi"
                
                :to="$store.state.trUrls.bolge + item.bo_url"
                  class="dd-item">
                         {{ item.bo_adi }}
                    </nuxt-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                     <nuxt-link :to="$store.state.trUrls.bolge" class="dd-item">
                      Tüm bölgelere gözatın
                    </nuxt-link>
                </b-navbar-item>
            </b-navbar-dropdown> -->

         <b-navbar-dropdown v-if="$store.state.base" label="Kurumsal" :hoverable="true">
                <b-navbar-item
                v-for="(item, i) in $store.state.base.pages"
                  :key="i"
                  
                 >
                    <nuxt-link 
                    :to="'/bilgilendirme/' + item.say_url"
                    :prefetch="false"
                    :title="item.say_adi">
                         {{ item.say_adi }}
                    </nuxt-link>
                </b-navbar-item>

      

                <b-navbar-item >
                    <nuxt-link to="/iletisim">
                        iletisim
                    </nuxt-link>
                </b-navbar-item>
               
            </b-navbar-dropdown>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Bölgeler </a>

          <div class="navbar-dropdown" v-if="$store.state.base">
            <nuxt-link
              v-for="(item, i) in veri.bolgeler"
              :title="item.bo_adi"
              :key="i"
              :to="$store.state.trUrls.bolge + item.bo_url"
              class="dropdown-item"
            >
              {{ item.bo_adi }}
            </nuxt-link>
          </div>
        </div> -->
       
        <!-- <nuxt-link to='/satılık-emlak' class="navbar-item">
           Satılık
          </nuxt-link> -->

        <!-- <div class="navbar-item ip-none">
          <a class="navbar-link" href="/blog" target="_blank"> Blog </a>
        </div> -->
       
      
        <div class="navbar-s-item">
           <Search />
        </div>
        

        <div class="navbar-item ip-none contact-item" v-if="$store.state.base">
          <button class="button nav-phone " @click="() => { this.contdd = !this.contdd}">
            <span>
              <i class="flaticon-call"></i>
            </span>
            <span class="tel-label">
              {{ $store.state.base.contact.ilt_mobil1 }} <br>
              <span class="note">
                Bize Ulaşın !
              </span>
              
            </span>
             <b-icon class="is-pulled-right" icon="menu-down"></b-icon>
          </button>
          <div class="cont-dd" v-if="contdd">
            <div class="cont-dd-wrap">
                <contact-card />
            </div>
             <span class="dd-owerlay" @click="() => { this.contdd = false}"></span>
          </div>
         
        </div>


        
        <div class="navbar-item">
          <div class="user-button button is-medium" @click="() => { this.pdd = !this.pdd}">
            <i class="flaticon-user"></i>
            <span>Sana Özel</span>
            <span
              class="like_badge"
              v-if="$store.state.saved && $store.state.saved.length > 0"
            >
              {{ $store.state.saved.length }}
            </span>
          </div>
          <div class="priv-dd" v-if="pdd">
            <div class="pdd-items">
               <a class="mm-list pr"  @click="savedVillas">
                  <span
              class="like_badge"
              v-if="$store.state.saved && $store.state.saved.length > 0"
            >
              {{ $store.state.saved.length }}
            </span>
                            <div class="mm-icon">
                               <i class="flaticon-star"></i>
                            </div>
                            <div class="mm-menu-name">
                                Kaydedilen Villalar
                            </div>
                            

                </a>
                 <a class="mm-list"  @click="goComp">
                            <div class="mm-icon">
                               <i class="flaticon-transfer-1"></i>
                            </div>
                            <div class="mm-menu-name">
                                Karşılaştırma
                            </div>
                            

                </a>
                 <!-- <div class="mm-list"   @click=" () => { this.$parent.loginModal() }   ">
                            <div class="mm-icon">
                               <i class="flaticon-user"></i>
                            </div>
                            <div class="mm-menu-name">
                                Hesabım
                            </div>
                            

                </div> -->
                 <nuxt-link class="mm-list"  to="/kiralik-yazlik-villalar/indirimli-villalar">
                            <div class="mm-icon">
                               <i class="flaticon-tag"></i>
                            </div>
                            <div class="mm-menu-name">
                                Sana Özel Fırsatlar
                            </div>
                            

                </nuxt-link>
                  <nuxt-link class="mm-list"  to="/teklif-al">
                            <div class="mm-icon">
                               <i class="flaticon-diamond"></i>
                            </div>
                            <div class="mm-menu-name">
                                Sana Özel Teklif Al
                            </div>
                            

                </nuxt-link>
              

              <hr class="dropdown-divider" />
              <div class="dropdown-item">
                <div class="field">
                  <form @submit="sorgula">
                    <p class="control has-icons-left">
                      <input
                        class="input top-inp"
                        type="text"
                        placeholder="Rezervasyon Sorgula"
                        v-model="kod"
                      />
                      <span class="icon is-small is-left">
                        <i class="flaticon-search"></i>
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <span class="dd-owerlay" @click="() => { this.pdd = false}"></span>
          </div>
        </div>

        
      </div>
      </div>
    </nav>
    <nav
      class="navbar nav-mobil pr bg-light"
      role="navigation"
      aria-label="main navigation"
    >
     <button class="mobil-menu-button"  @click="()=>{this.menuModal= !this.menuModal}">
       <i class="flaticon-menu"></i>
     </button>
      <nuxt-link class="mv-nbrand" to="/">
        <!-- <img
          class="mob-nav-brand"
          v-if="data"
          :src="data.logo"
          alt="villandakal Villa kiralama"
        /> -->

          <img
            class="mob-brand mobile table"
            v-if="$store.state.base"
            :src="$store.state.base.settings.set_logo"
            alt="villandakal Villa kiralama"
          />
      </nuxt-link>
       <div class="mob-navbar-end">
           
        <div class="ne-buttons h100 pr">
            
           <button class="button  is-rounded is-light is-bordered is-medium ph-button"  @click="() => { this.$store.dispatch('mobilContact', true);}">
               <i class="flaticon-call"></i>
           </button>
            
        </div> 
        <!-- <div class="ne-buttons h100 pr">
             <button class="button is-medium mob-teklif-but" @click="cModal" >
               <span class="icon is-medium">
                <i class="flaticon-search"></i>
              </span>
              
            </button>
           
        </div>   -->

    
      </div>

      <!-- mobil-arama-end -->
    </nav>

<div class="after-header"></div>
<b-sidebar
          type="is-light"
          :fullheight="fullheight"
          :fullwidth="fullwidth"
          :overlay="overlay"
          :right="right"
          v-model="menuModal"
        >
    <MobilMenu />
         </b-sidebar>
  </div>
  
</template>

<script>
import MobilSearch from '../../components/mobil/Search';
import Apps from '../../components/templates/apps'
import LoginModal from '../tr/accountdd'
import LocationDd from './locationDd';
import Search from '../templates/search';
import MegaMenu from '../templates/MegaMenu.vue';
import MobilMenu from '~/components/mobil/MobilMenu.vue';
import ContactCard from '../templates/contactCard.vue';

export default {
  components: { LoginModal, Apps, LocationDd, Search,MobilSearch,MegaMenu,MobilMenu, ContactCard, },
  data() {
    return {
      veri: null,  //this.$store.state.base,
      results: null,
      ara: false,
      showapp: false,
      curr: 'TR',
      kod: null,
      comp: null,
      bookmark: null,
      pdd:false,
      menuModal:false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
      contdd:false,
      mcontdd:false
    }
  },

  props: {
    data: null,
  },

  mounted() {
   // this.getDatas()
    //  let self =this;
    //  $('.app-but').click(function(event){
    //       event.stopPropagation();
    //   });

    //  $(window).click(function() {
    //   self.showapp= false;
    //   });

    let comp = JSON.parse(localStorage.getItem('compare'))
    if (comp) {
      this.comp = comp.length
    }
    let bookmark = JSON.parse(localStorage.getItem('like'))
    if (bookmark) {
      this.bookmark = bookmark.length
       this.$store.dispatch('setSaved', bookmark);
    }

    const vr = localStorage.getItem('cur')
    if (vr) {
      this.curr = vr
    }
  },
  watch: {
    $route(to, from) {
      this.results = null
      this.ara = false
    },
  },
  methods: {
    cModal(){
      this.$store.dispatch('searchModal', true);
    },
     sideBar(){
      this.$store.dispatch('sideBar', true);
    },
    aramaOpen() {
      this.ara = !this.ara
      setTimeout(() => {
        $('.ar-inp').focus()
      }, 200)
    },
    wht() {
      let wh =
        'https://api.whatsapp.com/send?phone=' +
        this.$store.state.base.contact.ilt_mobil1 +
        '&text=Merhaba'
      window.open(wh, '_blank')
    },
    phone(){
            location.href = "tel:"+this.$store.state.base.contact.ilt_mobil1
    },
    goComp() {
      let vll = JSON.parse(localStorage.getItem('compare'))
      let url = this.$router.resolve({
        name: 'villa-karsilastirma',
        query: { villas: vll.join(',') },
      })
      window.open(url.href, '_blank')
    },

    savedVillas() {
      let vll = JSON.parse(localStorage.getItem('like'))
     console.log('like villas ', vll.join(','))
      this.$router.push({  
        name: 'villalar',   
        query: { villas: vll.join(','), title: 'Kaydedilen Villalar' },
      })
    },
    sorgula(e) {
      e.preventDefault()
      if (this.kod) { 
        this.$router.push({
          name: 'rezervasyon-rezervasyon-sorgula',
          query: { kod: this.kod },
        })
      }
    },
    setCurrency(i) {
      this.curr = i 
      localStorage.setItem('cur', i)
      this.$axios.get('/set-currency/' + i.toString()).then((resp) => {
        location.reload()
      })
    },
    findVilla(e) {
      let key = e.target.value
      if (key.length > 1) {
        this.$axios.get('/find-villa/' + key).then((resp) => {
          this.results = resp.data
        })
      } else {
        this.results = null
      }
    },
    closeSearch() {
      this.ara = false
      this.results = null
      $('.nav-ar-inp').val('')
    },

    async getDatas() {
      await this.$axios.get('/nav-set').then((resp) => {
        ;(this.veri = resp.data), this.$store.dispatch('setKat', resp.data)
      })
    },
  },
}
</script>

<style>
.mm-list {
    width: 100%;
    display: inline-flex;
    padding: 8px ;
    margin-bottom: 8px;
        margin-top: 5px;
        border-radius: 6px;
    background: #f8f8f8;

}
a.navbar-link,
a.navbar-item {
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
 
  display: block;
}
.mv-nbrand img {
  height: 30px !important;
  max-height: none;
}
.s-close {
  pointer-events: all !important;
  cursor: pointer;
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
  color: #eee;
  font-weight: 400;
  font-size: 13px !important;
}
.top-item .buttons {
  flex-wrap: nowrap;
}
.top-item.w1000 {
  width: 100%;
}
.top-item {
  padding: 3px 10px;
  border-left: 1px solid #546e7a80;
  width: auto;
  text-align: center;
  font-weight: 400;
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

  background: linear-gradient(90deg, #021048, #1e38a3);

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
  display: none;
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

  .res-img-wrap {
    overflow: hidden;
    border-radius: 6px;
    position: relative;
  }
  .mv-nbrand img {
    height: 35px !important;
    max-height: none;
    background: transparent;
  }

  .navbar {
    min-height: none;
    position: relative;
    z-index: 39 !important;
  }

  span.mv-search .button {
    border: none;
    background: transparent;
    border-left: 2px solid #eee;
    border-radius: 0;
  }
  .navbar-item img {
    max-height: 30px;
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
  box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
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
  background: rgba(0, 0, 0, 0.56078);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 2px 15px 2px rgba(0, 0, 0, 0.27059);
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
.ar-close i {
  font-size: 36px;
  margin-top: 20%;
  color: #fff;
}
.ar-bar .control.has-icons-left .input,
.control.has-icons-left .select select {
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
}
@media screen and (min-width: 1024px) {
  .navbar.is-spaced {
    padding: 0.03rem 0.5rem;
  }

  .mbl {
    display: none;
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
  animation-delay: 0.1s;
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

@media screen and (min-width: 1000px) {
  .mbl {
    display: none;
  }
}
.top-item:hover {
  background: #607d8b;
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
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  position: relative;
}

@media (max-width: 1000px) {
  .mv-nbrand {
    text-align: center;
    display: block;
    width: 100%;
  }
  .ar-result {
    position: fixed;
    background: #0000008f;
    padding: 10px;
    border-radius: 5px;
    overflow-y: auto;
    box-shadow: 1px 2px 15px 2px rgba(0, 0, 0, 0.27059);
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
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
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
    color: #607d8b;
    line-height: 20px;
  }

  span.nav-t {
    font-size: 18px;
    color: #68c481;
    font-weight: 600;
  }
  .nav-desk {
    display: none;
  }

  nav.navbar.nav-mobil {
    display: flex;
    width: 100%;
    padding: 5px;
  }

  .mv-nbran {
    width: 100%;
    text-align: left;
  }

  .mob-teklif-but {
    border: none;
    height: 100%;
  }
  .h100 {
    height: 100%;
  }

  .s-field-m {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: #000;
    padding: 10px;
  }
}
@media (min-width: 1000px) {
  .nav-mobil {
    display: none;
  }

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
    height: 50px !important;
    max-height: none;
    /* transform: skew(30deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg); */
  }

  .mv-nbrand:focus,
  .mv-nbrand:hover {
    background: transparent;
    box-shadow: none;
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
  color: #8bc34a;
  font-size: 18px;
  border-right: 2px solid #eee;
}

.custom-dd {
  right: 0;
  width: 700px !important;
  padding: 20px;
  left: -150px !important;
}

.navbar-dropdown.custom-dd h4 {
  text-align: left;
}

.search-calendar.mobil-fix-options.sb-level {
  padding-top: 60px;
}

/** new navbar */

span.nav-tel-num {
  display: inline-grid;
  line-height: 18px;
  text-align: left;
}
span.nac-tel-ac {
  font-size: 12px;
  color: #ec632b;
}

.nav-teklif-but {
  background: #ec632b;
  border-color: #f34a06;
  color: #fff;
}
.nav-ust {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.tel-ic {
  font-size: 25px;
  color: #ec632b;
}

.nav-alt {
  padding: 10px 30px;
}

.field {
  position: relative;
}

.menu-hesap {
  margin-left: 10px;
}

.dd-hesap {
  width: 300px;
}
.t-s-field {
  width: 350px;
}
span.dd-owerlay {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    background: #0000004a;
    z-index: 9;
    position: fixed;
}

.priv-dd {
    position: relative;
}

.pdd-items {
        position: absolute;
    background: #fff;
    padding: 10px;
    top: 30px;
    width: 300px;
    left: -300px;
    z-index: 999;
    border-radius: 6px;
    box-shadow: 0px 5px 11px 0px #00000059;
}

.pdd-items .mm-menu-name {
    position: relative;
    flex: 1;
    font-size: 14px;
    margin-left: 16px; 
    padding-right: 20px;
    display: flex;
    line-height: 34px;
}
.pdd-items .mm-list {
    margin-bottom: 0px !important;
    cursor: pointer;
}

.pdd-items .mm-list:hover {
    background: #eee;
}

.navbar-s-item {
    padding-top: 7px;
        margin-right: 10px;
            margin-left: 10px;
}
.mv-nbrand {
  text-align: left;
      margin-right: 10px;
}
.mob-teklif-but {
  background: transparent;
}

.mm-list {
    color: #333;
}

.mob-navbar-end {
    display: flex;
}

button.button.ph-button {
    background: transparent;
    border: none;
    border-radius: 0;
    
}

.navbar-item a {
    color: #333;
    width: 100%;
    font-weight: 600;
}

.navbar-item:hover {
   
    /* background-color: #61656e !important; */
    background-color: #f1f3fa !important;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.hm .nav-mobil {
    background: transparent !important;
    margin-top: 3px;
}

.hm .custom-nav .navbar-item, .hm .custom-nav a.navbar-link {
    color: #fff!important;
}

@media screen and (max-width: 1024px) {
 .hm .nav-mobil {
    min-height: none;
    position: relative;
    z-index: 3!important;
}
}

.mega-dropdown {
    width: 640px;
    padding: 0px;
    overflow: hidden;
    top: 30px;
}

.mega-button .navbar-dropdown {
      right: -100px;
    left: auto;
    /* top: 70px; */
    border-radius: 8px;
    border-top: none;
    /* background: #61656e; */
    background: #f1f3fa;
}

a.navbar-item.mega-dropdown {
    margin-top: 0px;
}

.navbar-item.ip-none.contact-item {
    border-left: 2px solid #09b0e833;
    border-right: 2px solid #fcb50045;
    padding-left: 5px;
    padding-right: 5px;
}
.navbar-item.ip-none.contact-item:hover {
    background: transparent !important;
    border-radius: 0px;
}

span.tel-label {
    line-height: 15px;
    margin-left: 5px;
}

button.button.nav-phone i::before {
    font-size: 24px;
    color: #09b0e8;
}

button.mobil-menu-button {
    border: none;
    background: transparent;
    margin-right: 10px;
    color: #9ca1ae;
}

span.like_badge {
    position: absolute;
    top: -2px;
    right: 3px;
    color: red;
    font-size: 13px;
    font-weight: 600;
}
.cont-dd-wrap {
    z-index: 999;
    position: absolute;
    
    top: 75px;
    left: -10px;
   
}

button.mobil-menu-button i::before {
    font-size: 24px;
}
</style>
