<template>
<div>
    <!-- <div class="m-filter" v-if="mFilter">
      <MobilFilter  @cBack="v => this.getFilter(v)"  />
    </div> -->
    <div class="mobil-top"> 
       <div class="mobil-list-top">
         <div class="columns is-mobile">
             <div class="column">
                   <button class="button" @click="()=>{this.mFilter = ! this.mFilter}">
                        <span class="icon">
                          <i class="fal fa-filter"></i>
                        </span>
                        <span>Filtre</span>
                   </button>
             </div>
             <div class="column">                 
                      <button class="button" @click="()=>{this.map = !this.map}">
                           <span v-if="map"><i class="fal fa-list-ul"></i></span>
                           <span v-if="map">
                             Liste görünümü
                          </span>
                          <span v-if="!map"><i class="fal fa-map-marked"></i></span>
                          <span v-if="!map">
                            Harita görünümü
                          </span>
                      </button>
             </div>
         </div>
       </div>
       <ListNav 
                           @sendShow="(i)=>{this.show = i}"
                           @sendOrder="(a,b) => {this.setSort(a,b)}"  
                           ref="mNav"                                                   
                           /> 
    </div>
    <div v-if="map" :class="map?'hero list-wrapper':'list-wrapper' " >
          <!-- <div class="mv-filter">
            <Filtre  @cBack="v => this.getFilter(v)" tip="filtre" :bolge="bolge?{name:bolge.bo_adi, id:bolge.id}:null" />    
         </div>    -->
        
         <div class="mv-map"  v-if="map">
                  <div class="bk-butt">
                         <div  class="button" @click="switchList">
                         
                          <span v-if="map">
                             Liste görünümüne Geç
                          </span>
                         
                         </div>
                      </div>
                       <GMap v-if="map"
                       :pinUrl="pinUrl"
                       @cBack="(i)=>{this.setPinned(i)}"
                       :center="this.bolge?{lat: this.bolge.bo_lat?Number(this.bolge.bo_lat):36, lng: this.bolge.bo_lang?Number(this.bolge.bo_lang):29}:{lat:36.26, lng:29.41}" />
                <div class="mp-list">
                    <div v-if=" selectedProp">
                            <span class="close" @click="()=>{this.selectedProp=null}">x</span>
                           <div class="mob">                      
                             <MapUnit   :data=" selectedProp" /> 
                          </div>
                          <div class="desc">
                             <listUnit   :data=" selectedProp" /> 
                         </div>
                      </div>
                    
                     <div v-else class="mp-sec">
                           Detayları görmek için etikete tıklayın
                     </div>
                </div>
        </div>
        <div class="mv-list">

                        <ListNav 
                           @sendShow="(i)=>{this.show = i}"
                           @sendOrder="(a,b) => {this.setSort(a,b)}" 
                                                    
                           @sendView="(k)=>{this.map =k}"/>                     
                      <div v-if="veri" class="mv-units">              
                           
                                <div class="columns is-multiline">
                                    <div  v-for="(item, i) in veri.data" :key="item.id"  class="column is-12">
                                    <GridUnit :data="item" /> 
                                    </div> 
                                </div>              
                            
                     </div>
                <Paginate v-if="veri" :data="veri" :getPage="setQuery" />
        </div> 
    </div>
    <div class="list-wrapper" v-else>
       
          <div class="desk">
            <!-- <Filtre @cBack="v => this.getFilter(v)" tip="filtre"   :bolge="bolge?{name:bolge.bo_adi, id:bolge.id}:null" /> -->
          </div>
         <div class="container">
           
            <div :class="show==1?'column is-8 is-offset-2':'column is-12'" v-if="veri">
                <div class="desk">  <ListNav 
                   @sendShow="(i)=>{this.show = i}"
                   @sendView="(k)=>{this.map =k}" 
                   @sendOrder="(a,b) => {this.setSort(a,b)}"/>
                </div>
                   <div class="li-anim" v-if="show==1" 
                     v-for="(item, i) in veri.data" :key="item.id"
                      :style="{'animation-delay': 0.1*i+'s'}">
                        <listUnit  :data="item" /> 
                   </div>
                  
                    <div class="columns is-multiline" v-if="show==2"  >
                         <div  v-for="(item, i) in veri.data" :key="item.id"  class="column is-4 pzero-mobile">
                           <GridUnit :data="item" /> 
                           </div> 
                      </div>              
                
           </div>
         
         <Paginate v-if="veri" :data="veri" :getPage="setQuery" />
         

     </div>
    </div>
    </div>
</template>
<script>


import Paginate from '../templates/pagination';
import Filtre from '../tr/SearchBar';
import listUnit from './listUnit';
import GridUnit from './GridUnit';
import ListNav from '../tools/listNav';
import Brd from '../templates/BreadCrum';
import MobilFilter from './mobileFilter';
import MapUnit from './mapUnit';
import GMap from '../../components/tr/GMap';
export default {
    
    watchQuery:true,
    scrollToTop: true,
    loading: true,
    components: { Paginate, Filtre, listUnit, GridUnit, ListNav, Brd, MobilFilter, MapUnit, GMap},
    props: {
        veri: {
            type: Object,
            default:null
        },
        bolge:null,
        pinUrl:null,
    },
    data(){
        return {
          url:this.$route.params.url,         
          lang:'tr',
          type: 'kat',
          page: 1,
          pagi:3,
          orderBy:'id',
          orderCond: 'DESC',         
          show: 1,
          map:false,
          mFilter:false,
          selectedProp:null,
          mp:null,
          markers: [],
        

        }
    },
     mounted(){
        this.show = window.width>1000?1:2;
    //  this.getpinUrl();
        if(process.client){
         if(window.width>1000){
           const a =  parseInt(localStorage.getItem('show')); 
          this.show =a?a:1 ;
         }
         const orderBy = localStorage.getItem('orderBy');
         const orderCond = localStorage.getItem('orderCond');
        
         this.orderBy = orderBy?orderBy:null;
         this.orderCond = orderCond?orderCond:null;
        }
         this.map = JSON.parse(localStorage.getItem('listView')) ;       

        $(window).scroll(function (self) {   if($(window).width()>1000) {
                  if ($(this).scrollTop() > 5) {
                      $(".mv-list, .mv-filter").addClass('mtop');
                }              
                if($(this).scrollTop() <5) {
                          $(".mv-list, .mv-filter").removeClass('mtop');;
                }
            } 
         });
         
        
   
    },

    
    methods: {      

       

     
      switchList(){
        this.map = false;
         localStorage.setItem('listView', JSON.stringify(this.map));
         this.$refs.mNav.map = false;
        },
     setPinned(i){
         this.$axios.get('/single-list?id='+i).then(resp => {
           this.selectedProp = resp.data
         })
     },
      setSort(a,b){
        localStorage.setItem('orderBy',a);
        localStorage.setItem('orderCond',b);
        this.orderBy = a;
        this.orderCond = b;
         this.$router.push({ query: { ...this.$route.query ,orderBy:this.orderBy, orderCond:this.orderCond }, });
      },
        getFilter(i){              

                this.$router.push({ query: { ...this.$route.query ,...i } })
        },
       setQuery(url){
             this.$router.push({ query: { ...this.$route.query ,page: url }, });
       },

       setShow(i){
          this.show = i;
         
      }
       
    }
}
</script>
<style lang="css" scoped>
    .close {
    position: absolute;
    right: 1px;
    background: #fff;
    width: 20px;
    text-align: center;
    border-radius: 50%;
    z-index: 999;
    top: -10px;
    cursor: pointer;
}
.list-wrapper {
  min-height: 650px
}
.mtop {
  top: 0 !important;
}
.mv-filter {
    position: fixed;
    z-index: 2;
    right: 10px;
    width: 70%;
    top: auto;
}
.mv-map {
    position: absolute;
    height: 100%;
    bottom: 0px;
    top: 0;
    width: 100%;
    z-index: 1;
}.n-map {
    position: absolute;
    height: 100%;
    bottom: 0px;
    top: 0;
    width: 100%;
    z-index: 1;
}
.mv-list {
  background: #f5f5f5;
    width: 25%;
    position: fixed;
    top:  auto;;
    padding: 10px 5px;
    z-index: 9;
    left: 0;
    height: 100%;
    overflow-y: auto;
    bottom: 30px;
        top:90px;
}
.map-info-box {
    width: 150px;
    height:60px;
    font-size: 24px
}
.list-wrapper {
  position: relative;
}
/* .map-wrap {
    height: 900px;
} */
.GMap {
   /* position: fixed;
    height: 100%;
    width: 50%;
    left: 0; */
    height: 100%;
}

.pfix {
   position: fixed;
    height: 100%;
    width: 50%;
    left: 0;
    top:0;
    
}
.GMap__Wrapper {
    width: 100%;
   
    height: 100% !important;
}

.selected-style {
  color: #ff3a62 !important
}
.level .button {
    border: none;
}
.list-level {
  margin-bottom: 5px;
    background: #fff;
}
/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}

   ul.pagination-list {
        display: inline-flex !important;
        width: 100%;
    }

     @media (min-width: 1001px) {
        ul.pagination-list {
        display: inline-flex;
        width: 100%;
    }
      .mobil-top, .m-filter {
        display: none
      }
 .bk-butt {
    display: none
}

.mp-list {
    position: absolute;
    bottom: 0;
    left: 25%;
    background: #fff;
    padding: 0;
    border-radius: 5px;
    width: 600px;    z-index: 9;
}
     
   }

      .mp-list .unit {
    margin: 0px;
    margin-bottom: 0px !important;
}
   
   @media (max-width: 1000px) {
 
     .mp-list {z-index: 9;
    position: absolute;
    bottom: 60px;
    left: 0;
    background: #fff;
    padding: 0;
    border-radius: 0;
    width: 100%;
}
     .bk-butt {
    position: absolute;
    top: 60px;
    z-index: 99;
    text-align: center;
    width: 100%;
}
        ul.pagination-list {
        display: inline-flex;
        width: 100%;
    }
      .mobil-top {
        display: block
      }

       .mv-filter, .mv-list,.desk {
        display: none
      }

      .mobil-list-top {
    margin-bottom: 10px;
}

.mobil-list-top .button {
    border: none
}
   }

</style>


