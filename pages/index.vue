<template>
  <div>
    <div class="header-section"> 
      
    <Header  :data="head" />
    
    <!-- <b-button size="is-large bg-primary-normal-gradient text-w">Large</b-button> pd10 br30 ovh -->
  </div>

  <!-- <section class="info-sec">
    <info-card />
  </section> -->
 <section class="des2"  v-if="$store.state.base">
   <div class="container">
     <div class="section-tit dFlex">
       <div class=" section-title-cont justify-start text2">
            <h3>Kiralık Villa Kategorilerimiz</h3>
           
         </div>
        <div class="st-link">
           <nuxt-link to="">Tümü -> </nuxt-link>
        </div>
     </div>
         
      <home-category-carouse />
   </div>
    
  </section>

  <section class="des2 bg-dot cat-section"  v-if="$store.state.base">
   <div class="container">
     <div class="section-tit dFlex">
       <div class=" section-title-cont justify-start text2">
            <h3>Popüler Bölgeler</h3>
           
         </div>
        <div class="st-link">
           <nuxt-link to="">Tümü -> </nuxt-link>
        </div>
     </div>
      <home-bolge-carousel />
   </div>
  </section>


 <section class="section desk " >
           <div class="container title-cont">
           <h3>Sizin İçin Seçtiğimiz Villalar</h3>
           
         </div>
            <div class="container pr">
                   <div class="columns is-multiline b-card">
                     <div v-for="(item, j) in homeVillas.slice(0, 8)" :key="j" :class="'column is-'+gridCol">
                          <HomeGridUnit :data="item" />
                     </div>
                   </div>
                   <div class="all-button">
                      <nuxt-link to="/villa" class="button  is-outlined is-danger" title="Tüm Kategoriler">Tüm Villaları Görün</nuxt-link>
                   </div>
            </div>
     </section>

 
<!-- 
  <section class="bt-section desk">
    <div class="container title-cont">
           <h3>Tatil Bölgeleri</h3>
           <p>Türkiye'nin en Güzel Noktalarından En Seçkin Tatil Villaları</p>
         </div>
           <div class="container">
              <bolge-tils :bols="bolgeler" />
            <div class="all-button">
                      <nuxt-link :to="this.$store.state.trUrls.bolge" class="button  is-outlined is-danger " title="Tüm Kategoriler">Tüm Bölgeleri Görün</nuxt-link>
                   </div>
           </div>
  </section> -->
 
   <!-- <section class="mob pd10">
      <div class="container">
                <nuxt-link class="mm-list" to='/kiralik-villa' >
                            <div class="mm-icon">
                               <i class="flaticon-home"></i> 
                            </div>
                            <div class="mm-menu-name">
                                Tüm Vilaları Görün
                            </div>
                            

                        </nuxt-link>
                         <nuxt-link class="mm-list" to='/teklif-al' >
                            <div class="mm-icon">
                               <i class="flaticon-diamond"></i> 
                            </div>
                            <div class="mm-menu-name">
                                Size Özel Teklif Alın
                            </div>
                            

                        </nuxt-link>
            </div>
   </section> -->
    <!-- <div class="mob">
           <MobilHeader  />
              
   </div> -->
   <!-- <section class="section desk">
           <div class="container title-cont">
           <h3>Tatil Bölgeleri</h3>
           <p>Türkiye'nin en Güzel Noktalarından En Seçkin Tatil Villaları</p>
         </div>
            <div class="container pr">
                   <div class="columns is-multiline b-card">
                     <div v-for="(item, j) in bolgeler.slice(0, 4)" :key="j" :class="j==11||j==51?'column is-6':'column is-3'">
                           <nuxt-link class="hb-link" :to="$store.state.trUrls.bolge+item.bo_url" :title="item.bo_adi">
                               <div class="hb-wrap">
                                        <v-lazy-image :src="item.bo_kapak_resp?item.bo_kapak_resp:item.bo_kapak" :alt="item.bo_adi" />
                                        <span class="hb-data" @mouseenter="setDet(item.id)" @mouseleave="setDet(item.id)">
                                         
                                             <div class="hb-content  ">
                                               <h3> {{item.bo_adi}} </h3>  
                                                <transition name="slide-up">    
                                                 <div class="hb-det " >
                                              
                                                   <div> {{item.count}} Villa </div>
                                                  
                                                   
                                               </div>  
                                               </transition>
                                               </div>              
                                          
                                          </span>  
                               </div>
                           </nuxt-link>
                     </div>
                   </div>
                   <div class="all-button">
                      <nuxt-link :to="this.$store.state.trUrls.bolge" class="button  is-outlined is-danger " title="Tüm Kategoriler">Tüm Bölgeleri Görün</nuxt-link>
                   </div>
            </div>
     </section>  -->
    

  <!-- <div class="desc">
    <Carousel  v-if="homeVillas" :villas="homeVillas"  />
  </div> -->
 

     <!-- <section class="section mob">
       <div class="container title-cont">
           <h3>En Popüler Villalarımız</h3>
          
         </div>
            <div class="car-content" v-if="homeVillas" >
                 <b-carousel-list v-model="carousel" :data="homeVillas"  :items-to-show="mVils">
                            <template #item="data" >
                                 
                                           <HomeGridUnit :data="data" /> 
                                   
                            </template>
               </b-carousel-list>
            </div>
           
     </section> 

     
      
      <section class="section desc-section">
       <div class="container title-cont">
           <h3>VillA Evreni vizyonumuz ve VillA Evreni Misyonumuz </h3>
      
         </div>
            <div class="container pr">
              <div class="columns">
                <div class="column">

VillA Evreni vizyonumuz, misafirlerimizin güzel anılar biriktirmesine aracı olarak bölgenin değerinin arttırmak.
VillA Evreni misyonumuz, müşteri memnuniyetini sürekli kılmak adına tatil döneminde evinde gibi rahat hissetmek isteyen misafirlerimize kaliteli villa portföyümüz ile hizmet vermek                </div>
               
              </div>
 </div>
      </section>    -->



  </div>
  
</template>

<script>

// import Header from '../components/tr/header.vue'
// import MobilHeader from '../components/mobil/Header.vue'

import Header from '../components/tr/header';
import SearchBar from '../components/tr/SearchBar';
import Unit from '../components/tr/sectionUnit';
import GridUnit from'../components/tr/GridUnit';
import HomeGridUnit from '../components/tr/HomeGridUnit';
import Spinner from '../components/tools/Spinner';

import Story from '../components/story/stories';

import MobilHeader from '../components/mobil/Header';

import Carousel from '../components/templates/propCarousel';
import HomeCategoryCarouse from '~/components/templates/HomeCategoryCarouse.vue';
import BolgeTils from '~/components/templates/BolgeTils.vue';
import InfoCard from '~/components/templates/InfoCard.vue';
import HomeBolgeCarousel from '~/components/templates/HomeBolgeCarousel.vue';


export default {
   watchQuery:true,
    scrollToTop: true,
    loading: true,
      components: { Header,
       SearchBar,
        Unit,
         Spinner, 
          Story,
           Carousel, 
           MobilHeader,
            GridUnit,
             HomeGridUnit,
             HomeCategoryCarouse, BolgeTils,
            InfoCard,
            HomeBolgeCarousel },
      data(){
          return {
            p_villa:1,
            carousel:0,
            carousel2:0,
            boxspn:false,
            gridCol:3,
            
            box: 1,
            mVils:1,
            bdet:false,
            structuredData: {
                  "@context": "http://schema.org",
                
                 "url" : this.$store.state.baseTr,
                "@type": "Organization",
                "name": "vilalevreni",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kalkan ",
                  "addressLocality": "kaş",
                  "addressRegion": "Antalya",
                  "postalCode": "07960"
                },
                "telephone": "+90 242 4444444"}
          }
      },
        head() {
            return {
                title: this.homeSeo.seo.seo_baslik,
               meta: [
                 { hid: 'description', name: 'description', content: this.homeSeo.seo.seo_aciklama },
                          
                 { property:"og:image" , content:this.homeSeo.kapak },
                 { property:"og:site_name" , content: this.$store.state.siteName },
                 { property:"og:type" , content:"website" },
                 { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                 { property:"og:locale" , content:"tr_TR"},
                 { property:"og:title" , content:this.homeSeo.seo.seo_baslik },
                 { property:"og:description" , content:this.homeSeo.seo.seo_aciklama },
                 { name:"twitter:card" , content:"summary_large_image"},
                 { name:"twitter:site" , content: this.$store.state.siteName },
                 { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                 { name:"twitter:title" , content:this.homeSeo.seo.seo_baslik },
                 { name:"twitter:image" , content:this.homeSeo.kapak },
                 { name:"twitter:creator" , content:this.$store.state.twitter_user},
                 { property:"fb:pages" , content:this.$store.state.facebook_id },
                  { name:"publisher", content:"https://www.vilalevreni.com/" },
                  { name:"author", content:"SavasTurkoglu- LikyaPix" },
                  { name:"ROBOTS", content:"FOLLOW" },
                  { name:"Yandex", content:"index, follow" },
                  { name:"ROBOTS", content:"INDEX" },
                  { name:"distribution", content:"Global" },
                  { name:"rating", content:"General" },
                  { name:"resource-type", content:"document" }
                ],

                link: [
                       {rel: 'canonical',href: 'https://www.vilalevreni.com' },
                       {rel: 'alterne',href:'https://www.vilalevreni.com', hreflang:"x-default"  },
                        {rel: 'alterne',href:'https://www.vilalevreni.com', hreflang:"tr"  },
                                
                    ],

                      bodyAttrs: {        class: 'hm',      
      },

                    __dangerouslyDisableSanitizers: ['script'],
                  script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
            }
        },



    
        
        mounted(){
          if(window.innerWidth>760){
              this.mVils = 2
          }
          if(window.innerWidth>760 && window.innerWidth<1025){
              this.gridCol = 4
          }
        },


     asyncData ({ $axios  }) {
    return $axios.get('/home-sets').then(resp => {
      return {
        homeVillas : resp.data.homeVillas,
        head       : resp.data.head,
        bolgeler   : resp.data.bolgeler,
        kategoriler: resp.data.kategoriler,
        homeSeo    : resp.data.homeSeo,
        balayi     : resp.data.balayi,
        kalkan     :resp.data.kalkan,
        
        story      : resp.data.story,
        story_sets : resp.data.story_sets
      }
    });
    
       },
      async  created() {
           if(!this.kategori_data || !this.bolge_data)  this.getData();      
       }, 
       methods: {

         async getData() {
       
         let kategori_data  = await this.$axios.get('/kategoriler').then(res => { return res.data }); 
         let bolde_data  = await this.$axios.get('/bolgeler').then(res => { return res.data });  
            
           this.kategoriler= kategori_data;
           this.bolgeler  = bolde_data ; 
          this.$store.dispatch('setKat', kategori_data);
          this.$store.dispatch('setBol', bolde_data);
          
      },
  
         renderRels () {
           const rels = [];
           this.kategoriler.map(i => {
             if(i.kat_kapak_resp )  rels.push({rel:'preload', as:"image", href:i.kat_kapak_resp })
             if(i.kat_kapak_resp )  rels.push({rel:'preload',  as:"image", href:i.kat_kapak_thumb })
           });
            this.bolgeler.map(i => {
             if(i.bo_kapak_resp )  rels.push({rel:'preload',   as:"image", href:i.bo_kapak_resp })
             if(i.bo_kapak_resp )  rels.push({rel:'preload',   as:"image", href:i.bo_kapak_thumb })
           });
         
           return rels;
         },
         setDet(j){
            if(this.bdet == j){
              this.bdet = false;
            } else {
               this.bdet = j;
            }
         },
         sectionVillas(){
                this.box = 1;

                this.boxspn = true
                this.$axios.get('/section-villas/1').then(resp => {
                      this.homeVillas = resp.data;
                      this.boxspn = false
                    });
         },
         getBox(a, b){
           if(this.box !== b){
             this.boxspn = true
             this.box = b;
             this.$axios.get('/home-box?type=kat&url='+a).then(resp => {
                this.homeVillas = resp.data;
                this.boxspn = false
             });
           }
         }
       },

    
}
</script>

<style scoped>



section.section.ks-sec.hero {
    background: #f1f3f5;
    padding-bottom: 100px;
    padding-top: 100px;
}
.hbolg-wrap {
    height: 300px;
    padding: 0px;
    position: relative;
    overflow: hidden;
}
.hb-descs {
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: right;
    padding: 10px;
    color: #fff;
}
span.hblog-det {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 99;
    background: #00000029;
    height: 100%;
}
a.box-link {
    color: inherit;
}
.see-all {
    height: 100%;
    border: 1px solid #eee;
    border-radius: 5px;
    height: 320px;
    display: grid;
    text-align: center;
    text-align: center;
}
.slide-up-enter-active {
  transition: all .4s ease;
  animation-delay: 0ms;
}
.slide-up-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-up-enter, .slide-fade-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}

.katswip {
    /* overflow: hidden; */
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
.blogswip {
    overflow: hidden;
}
.hb-det {
   
       
}
span.hb-data h3 {
   font-size: 18px;
    text-transform: capitalize;
    

}
.spn-box {
  height: 340px;
  margin-top: 40px
}

.hb-content {
    width: 100%;
    display: table;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    transition: top .3s ease;
    -webkit-transition: top .3s ease;
    -o-transition: top .3s ease;
    text-align: left;
    padding-left: 30px;
   
}
.mv-box {
    border: 1px solid #fff;
    text-align: center;
    font-size: 18px;
    width: 16.666%;
    padding: 30px 20px 20px 20px;
    background: #f1f3f6;
    cursor: pointer;
    
  }

  .mv-box:hover {
    background: #455A64;
    color: #fff; 
  }

.mv-box i {
  
    font-size: 24px;
    margin-bottom: 10px
}
.hb-link {
  color: inherit
}

.swiper-pagination {
     position: relative; 
    text-align: center;
    -webkit-transition: .3s opacity;
    -o-transition: .3s opacity;
    transition: .3s opacity;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    z-index: 10;
    margin-top: 20px;
    -webkit-box-pack: center;
    justify-content: center;
    text-transform: uppercase;
}
.all-button {
    margin-top: 30px;
    text-align: right;
}



.hb-wrap {
    height: 250px;
    position: relative;
    overflow: hidden;
    border-radius: 9px;
}

.hb-wrap img {
    width: auto;
    height: 100%;
    min-width: 100%;
}

span.hb-data {
   
    z-index: 9;
    top: 0;
    width: 100%;
    height: 100%;
    background: #0000005c;
    bottom: 0;
    position: absolute;
    z-index: 9;
    top: auto;
    left: 0;
    /* width: 50%; */
    /* background: #00d1b2; */
    bottom: 0;
    top: 0;
    padding: 20px;
    /* border-radius: 0px 0px 60%; */
    text-align: center;
    cursor: pointer;
    color: #fff;
    padding-top: 100px;
}

.ks-but{
    width: 100%;
    text-align: center;
    font-size: 26px;
    border-right: 1px solid #00d1b2;
    color: #00d1b2;
}

.ks-links {
    display: flex;
    width: 100%;
    margin-top: 40px;
}
section.info-sec {
    margin-bottom: 40px;
    margin-top: 20px;
}
@media screen and   (max-width:1000px) {


.katswip {
    padding: 10px;
    margin-left: 25px;
    margin-right: 25px;
}


  .swiper-button-next {
    right: -20px;
}

  .swiper-button-prev {
    left: -20px;
}
.ks-but {
  
    text-align: center;
    font-size: 20px;
    border-right: none;
    color: #00d1b2;
    display: initial;
        display: initial;
    margin-bottom: 10px;
    border: 1px solid #eee;padding: 10px;
}
.ks-links {
    display: grid;
    width: 100%;
    margin-top: 20px;line-height: 20px;
    text-align: center;
}
.column {
  padding: 5px
}

.mv-box {
  width: auto;
    height: auto;
    font-size: 12px;
    border-radius: 10px;
    padding: 20px 10px;
   
   }

   .katswip .swiper-button-prev,  .katswip .swiper-button-next {
   display: none;
}
section.info-sec {
    padding: 10px;
    margin-bottom: 10px;
}
}

@media (min-width:1000px) {
  .container.title-cont {
    margin-bottom: 30px;
    text-align: left;
    line-height: 40px;
}

.title-cont p {
    font-size: 24px;
    font-weight: 600;
}
}

.bolgeswip, .kalswip {
    overflow: hidden;
}

.b-card .column {
    padding: 5px !important;
}

.pop-ara {
    margin-top: 20px;
    text-align: center;
    color: #fff;
}

section.section.desc-section {
    padding: 30px;
}


section.bt-section.desc {
    margin-top: 60px;
}

.hm .navbar-item:hover, .hm .navbar-link:hover {
    background-color: transparent !important;
}


</style>
