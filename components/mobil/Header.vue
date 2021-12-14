<template>
  <div class="mb-header">
      <div class="mb-hedaer-wrap">        
          
          <div class="mb-collet-wrap">
              <div class="mb-title">
                  <h2></h2>
              </div>
              <div class="content title-cont">
           <h3>Kiralık Villa Tiplerine Gözatın !</h3>
           <p>Her Zevke Uygun Kiralık Villalar</p>
         </div>
              
              <div class="mb-collections" v-if="$store.state.base">
                   
                      

                       <b-carousel-list
                        v-model="katsCar" :data="$store.state.base.kategoriler" :items-to-show="p_cat"
                        
            :has-drag="true"
                        >
                            <template   #item="list" >
                                  <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.kats+list.kat_url">
                                           <KategoriCar :data="list" />
                                   </nuxt-link>
                            </template>
                        </b-carousel-list>



              </div>
               <div class="s-sketelon" v-else>
                               

                                <b-skeleton width="80%"  height="80px" :animated="animated"></b-skeleton>
                                 <b-skeleton width="40%" :animated="animated"></b-skeleton>

                                 
                      </div>
          </div>
          <div class="mb-collet-wrap">
              <div class="content title-cont">
                <h3>Villa Bölgeleri</h3>
                <p>En Güzel Bölgelerde Kiralık Villalar</p>
                </div>
                <div class="mb-collections"  v-if="$store.state.base">
                     <b-carousel-list v-model="bolCar" :data="$store.state.base.bolgeler" :items-to-show="p_bol">
                            <template   #item="list" >
                                  <nuxt-link class="col-card"
                                        
                                        :to="$store.state.trUrls.bolge+list.bo_url">
                                           <BolgeCard :data="list" />
                                   </nuxt-link>
                            </template>
                        </b-carousel-list>
                  </div>

                   <div class="s-sketelon" v-else>
                               

                                <b-skeleton width="80%"  height="50px" :animated="animated"></b-skeleton>
                                 <b-skeleton width="40%" :animated="animated"></b-skeleton>

                      </div>
          </div>
      </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import KategoriCar from './CatgoryCard';
import BolgeCard from './BolgeCard';
export default {
    components:{ SearchBar, KategoriCar, BolgeCard},
    data(){
        return {
            katsCar:0,
            bolCar:0,
            animated:true,
            p_cat:2,
            p_bol:3,
            indicator: true,
            indicatorBackground: false,
            indicatorInside: false,
            indicatorMode: 'hover',
            indicatorPosition: 'is-bottom',
            indicatorStyle: 'is-lines',
        }
    },
    mounted () {
          if(window.innerWidth>700) {
                  this.p_cat = 4;
                  this.p_bol =5
                }
    }
}
</script>

<style>
.mb-hedaer-wrap {
    padding: 10px;
    margin: auto;
}

.mb-title h1 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #fff;
    margin-bottom: 0;
}

.mb-collet-wrap {
    margin-top: 15px;
    margin-bottom: 15px;
}

.mb-title h2 {
    margin-bottom: 10px;
    color: whitesmoke;
}
a.col-card {
    color: initial;
    cursor: pointer;
    text-decoration: none;
}
.mb-title {
    line-height: 10px;
    margin-bottom: 20px;
}
.mb-header {
    background: #fdfdfd!important;
}
.mb-header .title-cont h3 {
    color: #5035a0 !important;
    font-size: 28px;
}
.mb-header .content.title-cont p {
    color: #90a4ae;
}

.mb-card-info {
    color: #fff !important;
    position: absolute;
    bottom: 0;
    left: 5;
    left: 5px;
    z-index: 2;
}

.mb-card-wrap {
    position: relative;
}

.mb-card-wrap::after {
    position: absolute;
    content: "";
    background: #182b54;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    opacity: .25;
    border-radius: 8px;
}
</style>