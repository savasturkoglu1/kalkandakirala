<template>
    <div class="mm-card" style="width: auto" v-if="$store.state.base">
                <header class="modal-card-head mm-header  " >
                        
                     <button class="button justify-start mb-bak-button" @click="backButton">
                         <i class="flaticon-left-arrow"></i>
                     </button>
                      <div class="ne-buttons h100 pr">
                      <button class="button is-medium mob-teklif-but" @click="cModal" >
                        <span class="icon is-medium">
                          <i class="flaticon-search"></i>
                        </span>
                        
                      </button>
                    
                  </div> 
                </header>
                <div class="mm-content">

                    <!-- main menu  -->
                     <transition name="slide">
                    <div v-if="show==1" class="mm-wrap">


                      <!-- <b-menu-item  :active="isActive" expanded>
                          <template #label="props">
                             <div class="drawer-list border-none"  @click="()=> { this.show=2}">
                            <div class="mm-icon">
                               <i class="flaticon-star"></i>
                            </div>
                            <div class="mm-menu-name2 ">
                                Villa Kategoriler
                            </div>
                            
                            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-right'"></b-icon>
                            </div>
                            
                          </template>
                          <b-menu-item icon="account" label="Users"></b-menu-item>
                      </b-menu-item> -->
                      <div class="mm-top">

                         <!-- list item  -->
                        <div class="drawer-list border-none"  @click="()=> { this.show=2}">
                            <div class="mm-icon">
                               <i class="flaticon-star"></i>
                            </div>
                            <div class="mm-menu-name2 multimenu">
                                Villa Kategoriler
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->

                          <!-- list item  -->
                        <div class="drawer-list border-none"  @click="()=> { this.show=3}">
                            <div class="mm-icon">
                               <i class="flaticon-placeholder"></i>
                            </div>
                            <div class="mm-menu-name2 multimenu">
                               Tatil Bölgeleri
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->

                            <!-- list item  -->
                        <div class="drawer-list border-none"  @click="()=> { this.show=4}">
                            <div class="mm-icon">
                               <i class="flaticon-checked"></i>
                            </div>
                            <div class="mm-menu-name2 multimenu">
                               Bilgilendirme Sayfaları
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->
                        <div class="drawer-list pr"  @click="savedVillas">
                            <div class="mm-icon">
                               <i class="flaticon-star"></i>
                            </div>
                             <span
                class="like_badge" v-if="$store.state.saved && $store.state.saved.length > 0">
                {{ $store.state.saved.length }}
            </span>
                            <div class="mm-menu-name2">
                                Kaydedilen Villalar
                            </div>
                            

                </div>
                 <div class="drawer-list"  @click="goComp">
                            <div class="mm-icon">
                               <i class="flaticon-transfer-1"></i>
                            </div>
                            <div class="mm-menu-name2">
                                Karşılaştırma
                            </div>
                            

                </div>
                 <!-- <div class="drawer-list"   @click=" () => { this.$parent.loginModal() }   ">
                            <div class="mm-icon">
                               <i class="flaticon-user"></i>
                            </div>
                            <div class="mm-menu-name2">
                                Hesabım
                            </div>
                            

                </div> -->
                 <nuxt-link class="drawer-list"  to="/kiralik-yazlik-villalar/indirimli-villalar">
                            <div class="mm-icon">
                               <i class="flaticon-tag"></i>
                            </div>
                            <div class="mm-menu-name2">
                                Sana Özel Fırsatlar
                            </div>
                            

                </nuxt-link>
                  <nuxt-link class="drawer-list"  to="/teklif-al">
                            <div class="mm-icon">
                               <i class="flaticon-diamond"></i>
                            </div>
                            <div class="mm-menu-name2">
                                Sana Özel Teklif Al
                            </div>
                            

                </nuxt-link>
                      </div>

                       

                       
                      


                            <!-- list item  -->
                        <div class="drawer-list border-none"  @click="goLink('/iletisim')">
                            <div class="mm-icon">
                               <i class="flaticon-call"></i>
                            </div>
                            <div class="mm-menu-name2">
                               İletişim
                            </div>
                            

                        </div>

                        
                         
                         <!-- list item -end -->




                    </div>
                   
                    </transition>
                     <!-- main menu end -->

                     <!-- category menu -->
                     <transition name="bounce">
                            <div v-if="show==2" class="mm-wrap">

                              <div class="drawer-list" v-for="(item, i) in $store.state.base.kategoriler"  
                                        :key="i" @click="goLink($store.state.trUrls.kats+item.kat_url)" >
                                          <div class="mm-icon">
                                            <i class="flaticon-tag"></i>
                                          </div>
                                          <div class="mm-menu-name2">
                                             {{item.kat_adi}}
                                          </div>
                                          

                              </div>
                                   <!-- <div class="columns is-multiline is-mobile">
                                       <div class="column is-6"
                                        v-for="(item, i) in $store.state.base.kategoriler" 
                                        :key="i" 
                                        @click="goLink($store.state.trUrls.kats+item.kat_url)">
                                           <KategoriCar :data="item" />
                                       </div>
                                   </div> -->
                                 </div>
                     </transition>

                     <!-- category menu end  -->

                     <!-- bolge menu  -->
                           <transition name="bounce">
                            <div v-if="show==3" class="mm-wrap">

                              <div class="drawer-list" v-for="(item, i) in $store.state.base.bolgeler"  
                                        :key="i" @click="goLink($store.state.trUrls.bolge+item.bo_url)" >
                                          <div class="mm-icon">
                                            <i class="flaticon-pin"></i>
                                          </div>
                                          <div class="mm-menu-name2">
                                             {{item.bo_adi}}
                                          </div>
                                          

                              </div>

                                   <!-- <div class="columns is-multiline is-mobile">
                                       <div class="column is-6"
                                        v-for="(item, i) in $store.state.base.bolgeler" 
                                        :key="i" 
                                        @click="goLink($store.state.trUrls.bolge+item.bo_url)">
                                           <BolgeCard :data="item" />
                                       </div>
                                   </div> -->
                            </div>
                     </transition>
                     <!-- bolge menu end  -->
                      
                     <!-- info page menu  -->
                       <transition name="bounce">
                            <div v-if="show==4" class="mm-wrap">
                                    <div class="drawer-list border-none" v-for="(item,i) in $store.state.base.pages" :key="i" @click="goLink( $store.state.trUrls.sayfa+ item.say_url)">
                                        <div class="mm-icon">
                                            <i class="flaticon-checked"></i> 
                                        </div>
                                        <div class="mm-menu-name2">
                                           {{item.say_adi}}
                                        </div>                           
                                    </div>
                            </div>
                       </transition>
                     <!-- info page -menu end  -->



                      <div class="mm-bottom">
                         <div class="drawer-list">
                             <div class="top-search">
                                        <div class="ms-field">
                                          <form @submit="sorgula">
                                        <p class="control ">
                                          
                                             <input class="input top-inp" type="text" placeholder="Rezervasyon Sorgula" v-model="kod">
                                         
                                                                                
                                        </p>

                                        </form>    
                                      </div>
                                      <div class="button" @click="sorgula">
                                        <i class="flaticon-search"></i>
                                      </div>

                                    </div>
                            

                        </div>
                            <div class="buttons soc-buttons">
                                
                                <a class="button is-mediu btn-insta " :href="$store.state.base.contact.sos_instagram" target="_blank">
                                    <i class=" flaticon-instagram"></i>
                                </a>
                                <!-- <a class="button is-mediu btn-tiwtter" :href="$store.state.base.contact.sos_twitter" target="_blank">
                                    <i class=" flaticon-twitter"></i>
                                </a> -->
                                <a class="button is-mediu btn-face" :href="$store.state.base.contact.sos_face" target="_blank">
                                    <i class=" flaticon-facebook"></i>
                                </a>
                                <a class="button is-mediu btn-youtube" href="https://www.youtube.com/" target="_blank">
                                    <i class=" flaticon-youtube"></i>
                                </a>
                                
                            </div>
                      </div>

                    
                </div>
                
             
            </div>
</template>

<script>
import KategoriCar from './CatgoryCard';
import BolgeCard  from './BolgeCard';
import bimg from "../../static/images/sh.webp";
export default {
    components : {KategoriCar, BolgeCard},
    data(){
        return {
            title:'Menu',
            show:1,
            bimg,
            kod:null
        }
    },
    mounted(){
         //  console.log(this.$store.state.bolgeler)
    },
    methods:{
       cModal(){
      this.$store.dispatch('searchModal', true);
      this.$parent.close()
    },
        backButton(){
          if(this.show==1) {
            this.$parent.close()
          } else {
              this.show=1
          }
        },
        goLink(url) {
            
            
            this.$router.push({path:url});
            this.$parent.close();
            this.show = 1
        },
         goComp() {
      let vll = JSON.parse(localStorage.getItem('compare'))
      let url = this.$router.resolve({
        name: 'villa-karsilastirma',
        query: { villas: vll.join(',') },
      })
      window.open(url.href, '_blank')
    },

        sorgula(e){
          e.preventDefault();
                if(this.kod){
                  this.$router.push({name:'rezervasyon-rezervasyon-sorgula', query:{kod:this.kod}});    
                }         
        },
        backButton(){
          if(this.show==1) {
            this.$parent.close()  
          } else {
              this.show=1
          }
        },

        savedVillas() {
             this.$parent.close();
      let vll = JSON.parse(localStorage.getItem('like'))
     
      this.$router.push({
        name: 'villalar',
        query: { villas: vll.join(','), title: 'Kaydedilen Villalar' },
      })
    },
       
  
    }
}
</script>

<style>
.mm-bottom {
    text-align: center;
    align-items: baseline;
    padding: 10px;
}
img.mob-logo {
    width: 120px;
}
.mm-logo {
    text-align: center;
    width: 70%;
}
.mm-header {
 
    /* background-size: cover;
    height: 120px;
    background-position: center; */
}

.drawer-list {
    width: 100%;
    display: inline-flex;
    padding: 5px ;
    margin-bottom: 5px;
        margin-top: 3px;
}
.mm-menu-name2 {
        position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    
    margin-left: 16px;
    padding-right: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.mm-icon i {
    margin-left: 15px;
}
.mm-icon i::before {
    font-size: 28px;
}
.multimenu:after {
    content: "";
    position: absolute;
    top: 0;
    right: 11px;
    width: 8px;
    height: 100%;
}
.multimenu:after {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 12' fill='%23919191'%3E%3Cpath d='M7.75 6c0 .33-.142.646-.39.864L1.784 11.77a.924.924 0 01-1.22-1.386l4.877-4.29a.125.125 0 000-.188L.564 1.616A.924.924 0 011.784.23l5.574 4.904c.249.219.392.534.392.866z'/%3E%3C/svg%3E");
}
span.mm-phone {
    color: #fff;
}


.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}
.slide-enter {
   transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.mm-content {
    
    overflow-y: auto;
    margin-bottom: 10px !important;
    padding-bottom: 20px;
    overflow-x: hidden;
}

.mm-wrap {
    padding: 10px;
}
.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}


.mm-wrap .mb-card-info {
    color: #333;
}

.btn-insta {
    background: #e91e63 !important;
    color: #fff !important;
}

.btn-insta i::before {
   font-size: 20px;
}

.soc-buttons i::before {
    font-size: 24px;
}

.btn-tiwtter {
    background-color: #03a9f4 !important;
    color: #fff !important;
}

.btn-face {
    background-color: #1565c0 !important;
    color: #fff !important;
}

.btn-youtube {
    background-color: #d32f2f !important;
    color: #fff !important;
}

.drawer-list .mm-icon i::before {
    font-size: 14px;
    color: #78909c;
    font-weight: 600 !important;
}
.mm-card {
    background: #fff;
}

a.drawer-list {
    color: #333;
}

.mm-header {
    padding: 5px;
}

.mm-menu-name2 {
    font-size: 15px;
    color: #607d8b;
    font-weight: 600;
}
</style>