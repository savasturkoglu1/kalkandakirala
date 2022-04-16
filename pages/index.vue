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
           <nuxt-link :prefetch="false"   :to="$store.state.trUrls.kats">Tümü <span > <i class="flaticon-next"></i>  </span></nuxt-link>
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
           <nuxt-link :prefetch="false"  :to="$store.state.trUrls.bolge">Tümü <span > <i class="flaticon-next"></i>  </span></nuxt-link>
        </div>
     </div>
      <home-bolge-carousel />
   </div>
  </section>


 <section class="section desk " >
          
          <div class="container">
            <div class="section-tit dFlex">
              <div class=" section-title-cont justify-start text2">
                    <h3>Sizin İçin Seçtiğimiz Villalar</h3>
                  
                </div>
                <div class="st-link">
                  <nuxt-link to="/villa">Tüm villalar <span > <i class="flaticon-next"></i>  </span></nuxt-link>
                </div>
            </div>
            
            <div class="container">
              <div class="columns is-multiline b-card">
                     <div v-for="(item, j) in homeVillas.slice(0, 8)" :key="j" :class="'column is-'+gridCol">
                          <HomeGridUnit :data="item" />
                     </div>
             </div>
            </div>

          </div>

           <!-- <div class="container title-cont">
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
            </div> -->
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
 

     <section class="section mob">
        <div class="section-tit dFlex">
              <div class=" section-title-cont justify-start text2">
                    <h3>Popüler Villalar</h3>
                  
                </div>
                <div class="st-link">
                  <nuxt-link  :to="$store.state.trUrls.villa">Tüm villalar <span > <i class="flaticon-next"></i>  </span></nuxt-link>
                </div>
            </div>
            <div class="car-content" v-if="homeVillas" >
                 <b-carousel-list v-model="carousel" :data="homeVillas"  :items-to-show="mVils">
                            <template #item="data" >
                                 
                                           <HomeGridUnit :data="data" /> 
                                   
                            </template>
               </b-carousel-list>
            </div>
           
     </section> 


<!-- 
     
      
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

    <section class="section manifest">
      <div class="container">
        <div class="man-wrap pr">
          <h2>Likya kuşu size uygun kiralık tatil villasını bulsun!</h2>
          <b><a href="/">Kalkandakirala.com</a> ’da yüzlerce farklı tatil konseptinde villa, apart, bungalov gibi uygun fiyatlı kiralık villa önerileri sizlere sunuluyor. Her sene güncellenen yenilenen kiralık yazlık tatil evi çeşitleri ile binlerce kişiye villa tatili hizmeti sunan markamız günden güne gelişerek <nuxt-link :prefetch="false"  :to="$store.state.trUrls.kats+'balayi-villalari'" target="_blank">balayı tatili </nuxt-link>, geniş aile tatili,<nuxt-link :prefetch="false"  :to="$store.state.trUrls.kats+'muhafazakar-villalar'" target="_blank"> muhafazakar villa tatili </nuxt-link>, balayı tatili gibi kiralık villa konseptleriyle sizlere hayalinizdeki tatili gerçekleştirme fırsatı sunuyor. %15 indirim oranına varan kiralık villa, kiralık yazlık ve <nuxt-link :prefetch="false"  :to="$store.state.trUrls.kats+'kiralik-apartlar'" target="_blank">kiralık apart</nuxt-link> portföyüyle kaliteli hizmeti ilke alan firmamız tüm tatilseverler için çalışıyor.
</b>
<br>
<strong>Villa Tatili</strong>
<p>
  Tatil temanızı belirledikten sonra yapmanız gereken bir sonraki adım en uygun villa tatili için güvenilir bir platformdan seçim yapmanız. En hesaplı konaklama fırsatları için erken rezervasyon tarihlerini tercih edebilirsiniz.
   Bunun için villa tatili planınızı önceden yapmış olmanız ve kiralık villa konseptinizi belirlemiş olmanız gerekir. 
   Eğer arkadaş grubunuzla, eşinizle balayı ya da kalabalık ailenizle tatil planı yapıyorsanız kiralık tatil villaları arasından bütçenize en uygun olanı <a href="/">Kalkandakirala.com</a> 'da bulabilirsiniz.

</p>
<br>
<strong>İndirimli Villalar</strong>
<p>
  Aniden gelişen tatil imkanları için yüksek fiyatlar ödemenize de gerek yok. Kısa süreli kiralık villalar ve <nuxt-link :prefetch="false"  :to="$store.state.trUrls.kats+'indirimli-villalar'" target="_blank">indirimli villalar</nuxt-link> içerisinden dilediğiniz konseptte kiralık tatil villasını tercih edebilirsiniz. Ayrıca sevgililer günü yaklaşırken bu günlere özel kampanyaları takip ederek sevgililer günü kiralık villaları arasından seçim yaparak sevdiğinize sürpriz yapabilirsiniz. Bununla birlikte sosyal medya hesaplarımıza abone olarak en uygun kiralık villa yerleri ve özel indirimli son dakika fırsatlarını yakalayabilirsiniz. Yaşam şeklinize uygun olan muhafazakar villalar arasından tercih ederek bütçe dostu tatilin tadını çıkarabilisiniz.

</p>
<br>
<strong>Kiralık Villa Fiyatları</strong>
<p>
  Kısa bir zaman ayırarak hayalini kurduğunuz kiralık villa tatilini gerçekleştirmek için <a href="/">Kalkandakirala.com</a> ’u tercih edebilirsiniz. Bir kiralık villa için önce nasıl bir villa tatili yapmak istediğiniz hakkında kesin bir karara varmanız gerekir. <nuxt-link :prefetch="false"  :to="$store.state.trUrls.kats+'jakuzili-villalar'" target="_blank"> Jakuzili villalar</nuxt-link> mı, ısıtmalı havuzlu villalar mı, doğayla iç içe bir tatil mi, havuzu görünmeyen villalar mı, kalkan villaları mı, balayı villaları mı gibi konularda iyice düşünüp net bir karar vermeniz atacağınız bir sonraki adımı kolaylaştıracaktır. Tatil temanızı belirledikten sonra <nuxt-link :prefetch="false"  :to="$store.state.trUrls.allVillas" target="_blank">kiralık villalar</nuxt-link> arasından tercih yapabilirsiniz. Likya kuşu size uygun kiralık tatil villasını bulmak için memnuniyetle yardımcı olacaktır. Türkiye'nin en iyi tatil villalarını inceleyip indirimli villalar kampanyalarından yararlanarak uygun fiyatlı rezervasyon yaptırabilirsiniz.
Kiralık yazlık tatili için öncelikle tatil yapacağınız mevsimi belirlemeniz gerekir. Yaz için bir tatil planınız varsa 2022 kiralık villaları, muhafazakar villalar, plaja yakın villalar, deniz manzaralı villalar kış için bir tatil planınız varsa kış tatili villaları, sıcak havuzlu villalar, ısıtmalı havuzlu villalar yada jakuzili villalar ve kapalı havuzlu villalar gibi  rezervasyon seçeneklerini değerlendirmelisiniz. Plansız gelişen tatilleriniz için <a href="/">Kalkandakirala.com</a> ’da sizler için indirimli villalar ve kısa süreli kiralık villalarda bulunuyor. Yılbaşı, sevgililer günü, kurban bayramı, ramazan bayramı, sömestr gibi tatil dönemlerinde kampanyalı villalar için indirimli villaları ziyaret edebilir ya da Likya Kuşu müşteri temsilcileri size en uygun villayı bulabilir. Hafta sonu gezilecek yerler listesinden ise kısa süreli kiralık villalar kategorisinden kendinize yakın destinasyonlarda bir tatil planı yapabilirsiniz.

</p>
 <br>
<strong>Günlük, Haftalık, Aylık Kiralık Daireler</strong>
<p>Türkiye'nin kiralık villa sitesi <a href="/">kalkandakirala.com</a> 'da her an dilediğiniz tatili yapabileceğiniz çeşitli villalar bulunuyor. Erken rezervasyon fırsatı ile büyük indirimler yakalayabilir, son dakika fırsatları ile bir anda gelişen kiralık villa fırsatlarını değerlendirebilirsiniz. 12 ay boyunca hizmet veren tatil evlerimize %30 rezervasyon anında ön ödeme ile rezervasyon yaptırabilir, kalan ödemesini ise kiralık villanıza giriş esnasında yapabilirsiniz. Her zaman devam eden kısa süreli kiralık villa indirimi ile en iyi villalarda uygun fiyatlı tatil yapabilirsiniz.
</p>
<br>

  <p>Eğlence, dinlenme ve tüm yılın stresini atmak amacıyla yapacağınız tatiller için Muğla, Antalya ve <nuxt-link :prefetch="false"  :to="$store.state.trUrls.bolge+'kalkan'" target="_blank">Kalkan villaları</nuxt-link> , kış için en çok tercih edilen sapanca villaları ve <nuxt-link :prefetch="false"  :to="$store.state.trUrls.bolge+'kalkan'" target="_blank">kaş villaları</nuxt-link> muhteşem fırsatlar sunuyor. Tarihi, kültürel faaliyetlerin ve eğlence hayatının renkli kapıları bu şehirlerde aralanıyor. Tatil bölgelerimizdeki kültür, eğlence ve tatil aktiviteleri hakında bilgi almak için <nuxt-link :prefetch="false"  to="/blog" target="_blank">bloğunuzu</nuxt-link> ziyaret edebilirsiniz!. Akdeniz ve Ege'de sıcacık, huzur dolu bir villa tatili için bu noktaları tercih edebilirsiniz.
</p>
<p>
  Tüm bu seçenekler için kararınız ne olursa olsun kalkandakirala.com ekibimizin sizlere severek ve ilgiyle yardımcı olacaklarını unutmayınız, bize yazın Likya kuşu size uygun kiralık tatil villasını bulsun ! Kalkandakirala.com Kiralık Villa Tatil Asistanınız !"
</p>
        </div>
        <img class="mn-icon" src="~/static/icon.png" alt="">
      </div>
      <div class="container">
        <div class="columns pad30">
           <div class="column is-4">
             <div id="ETBIS"><div id="1102685850342485"><a href="https://etbis.eticaret.gov.tr/sitedogrulama/1102685850342485" target="_blank"><img style='width:100px; height:120px' src="data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAIIAAACWCAYAAAASRFBwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAEXoSURBVHhe7Z0HmF1V9fYlIBBCEoqAdBCkCSiEFjqCUgRBipHeBQWREum9IygoHQSkBqUTakQglJTJ1GTSA2mkt0mvsL/1O3PfkzVn9r3nTgro5/99npcwu51zz1l777XWXnufbxnCsuDf/va3kMVTTz0VLRtjfX19Uqd79+7N8tq1axcmTZqU5Ofh1ltvTev17ds3Sfv444/TtIceeihJK4bDDjssLStedtllhdzF+PTTT5uV8zzuuOMKJUM4/PDDk7RNN900LFiwoJC6GD/60Y+S/N13372QshizZ88OG2ywQZJ/7LHHFlJD+PnPf55eayn5kjFBLLPFXFpBqKurS+q899570fyFCxcm+Xm47bbb0jqff/55klZVVZWm3XPPPUlaMey9995pWfF3v/tdIXcxlkQQNt9880JKU2y55ZZJ/vbbb19IaYqNNtooyf9aBGGLLbYIJ598cov4k5/8JG1wSQRhxx13TNv64osvkjqDBg1qcg14+umnh8ceeyxpz3PMmDFJnZkzZ4ann346SbvhhhvSeg888ECS9te//jVNe//995M69Mx//vOfSf5HH32UpIG77rorLSv+4x//KOQuxpIIwne+853wxBNPpPcv/va3v02uc/755zfL47muueaaSf2YILRp0yaceOKJze65FE844YSw2mqr6V6bCsKvf/3rwiXKR2VlpRpbIkGg95aLlVZaqVn9rl27JnlDhw5N0y6//PIkDWy22WZJ2s4771xIWYzp06eHb3/720n+z372s0Jq+VgSQShG7h/069cvmi/GBIHfuCTYeOON1W5TQTj11FMLRcoHvUv1Y4Lw3HPPpfkx3nzzzYWSpcFLozdl66snT5gwIay44opJ2nXXXZekAQ25u+66ayFlMWbMmBHWXXfdJL9Tp06F1PKRJwj0OuGoo46KlhEZBUFtbW00X4wJwiabbBLmz59fSC0Pc+fODRtuuKHaLS4IKEcHH3xwUY4aNSopFxOEWbNmJTdMuQsvvDC88847Tfj444+HFVZYIanDdKQ2R4wYkdRHwVPaW2+9laQVE4QOHTok5fbZZ5+0ze9973tp/Wee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"/></a></div></div>
           </div>
        </div>
      </div>
    </section>

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
                "name": "kalkandakirala",
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
                  { name:"publisher", content:"https://www.kalkandakirala.com/" },
                  { name:"author", content:"SavasTurkoglu- LikyaPix" },
                  { name:"ROBOTS", content:"FOLLOW" },
                  { name:"Yandex", content:"index, follow" },
                  { name:"ROBOTS", content:"INDEX" },
                  { name:"distribution", content:"Global" },
                  { name:"rating", content:"General" },
                  { name:"resource-type", content:"document" }
                ],

                link: [
                       {rel: 'canonical',href: 'https://www.kalkandakirala.com' },
                       {rel: 'alterne',href:'https://www.kalkandakirala.com', hreflang:"x-default"  },
                        {rel: 'alterne',href:'https://www.kalkandakirala.com', hreflang:"tr"  },
                                
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


.carousel-list.has-shadow {
    box-shadow: none;
}
img.mn-icon {
    position: absolute;
    right: -250px;
    top: -50px;
    filter: opacity(0.5);
    opacity: 0.4;
    height: 600px;
    width: 600px;
    z-index: -1;
}

.man-wrap{
  padding: 30px;
}

.man-wrap p {
    font-weight: 500;font-size: 15px;
}

.man-wrap.pr h2 {
    font-size: 24px;
    margin-bottom: 15px;
    text-transform: capitalize;
}

.man-wrap.pr strong {
    font-size: 18px;
    margin-bottom: 10px;
}

.man-wrap.pr b {
    font-size: 16px;
    margin-bottom: 10px;
}

.man-wrap.pr a {
    font-weight: 600;
}

.columns.pad30 {
    padding: 30px;
}
</style>
