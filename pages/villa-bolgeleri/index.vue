<template>
    <div class="container page-cont">
        <div class="columns is-multiline">
            <!-- <div class="column is-4  un-col " v-for="(item, i) in data" :key="i">
                <div class="un-wrap "  :style="{'animation-delay': 0.1*i+'s'}">
                    <img class="un-img" :src="item.bo_kapak" />
                    <div class="un-desc">
                        <h3> {{item.bo_adi}} </h3>
                        
                        <span> {{item.count}} Villa </span>
                         <div class="mt-20">
                              <nuxt-link class="button is-primary is-rounded" :to="$store.state.trUrls.bolge+item.bo_url" :title="item.bo_adi">İncele</nuxt-link>
                         </div>
                    </div>
                </div>
            </div> -->

             <div v-for="(item, j) in data" :key="j" class="column is-4">
                           <nuxt-link class="hb-link" :to="$store.state.trUrls.bolge+item.bo_url" :title="item.bo_adi">
                               <div class="hb-wrap">
                                        <img loding="lazy" :src="item.bo_kapak" :alt="item.bo_adi" />
                                        <span class="hb-data" >
                                         
                                             <div class="hb-content  ">
                                               <h3> {{item.bo_adi}} </h3>  
                                                <transition name="slide-up">    
                                                 <div class="hb-det">
                                                  <div><h5>{{item.bo_baslik}}</h5></div>
                                                   <div> {{item.count}} Villa </div>
                                                  
                                                   <!-- <button class="button color-sec">İncele</button> -->
                                               </div>  
                                               </transition>
                                               </div>              
                                          
                                          </span>  
                               </div>
                           </nuxt-link>
                     </div>
        </div>
         <div class="container">
              <div class="content">
                   <Content :Cont="bolgeSeo.content" />
              </div>
          </div>
    </div>
</template>
<script>
export default {
     head() {
            return {
                title: this.bolgeSeo.seo.seo_baslik,
               meta: [
                 { hid: 'description', name: 'description', content: this.bolgeSeo.seo.seo_aciklama },
                 { hid: 'keywords', name: 'keywords', content: this.bolgeSeo.seo.seo_keywords},
              
                { property:"og:image" , content:this.bolgeSeo.kapak },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.bolgeSeo.seo.seo_baslik },
                { property:"og:description" , content:this.bolgeSeo.seo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.bolgeSeo.seo.seo_baslik },
                { name:"twitter:image" , content:this.bolgeSeo.kapak },
                { name:"twitter:creator" , content:this.$store.state.twitter_user},
                { property:"fb:pages" , content:this.$store.state.facebook_id },
                ],

                link: [
                       {rel: 'canonical',href: this.$store.state.baseTr+  this.$route.path },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"x-default"  },
                        
            
                    ],
            }
        },

    async asyncData({ $axios, route }){
        const data = await $axios.get('/bolgeler').then(resp => { return resp.data } );
         let bolgeSeo = await $axios.get('/static-seo?pos=Bolgeler').then(resp => {
             return resp.data
         }) 
        return {
            data, bolgeSeo
        }
    }

}
</script>
<style scoped >
.un-wrap {
      text-transform: uppercase;
  animation: fadeIn 0.5s linear;
  animation-fill-mode: both;
  padding: 0px;
    position: relative;
    background: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: hidden;
    display: grid;
    height: 240px;
    
    overflow: hidden;
    position: relative;
}

.un-desc {
    position: absolute;
    z-index: 99;
    top: auto;
    left: 0;
    width: 50%;
    background: #00d1b294;
    bottom: 0;
    top: 0;
    padding: 20px;
    border-radius: 0px 0px 60%;
      text-align: center;
    cursor: pointer;
    color: #fff;
    padding-top: 20%
    
}

.un-wrap {
      text-transform: uppercase;
  animation: fadeIn 0.5s linear;
  animation-fill-mode: both;
  padding: 0px;
    position: relative;
    background: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: hidden;
    display: grid;
    height: 240px;
 
    overflow: hidden;
    position: relative;
}

.un-desc {
    position: absolute;
    z-index: 99;
    top: auto;
    left: 0;
    width: 50%;
    background: #00d1b294;
    bottom: 0;
    top: 0;
    padding: 20px;
    border-radius: 0px 0px 60%;
      text-align: center;
    cursor: pointer;
    color: #fff;
    padding-top: 20%
    
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
    text-align: center;
}

.title-cont {
    text-align: center;
}
.title-cont h3 {
    font-size: 32px;
    font-weight: 800;
    color: #f60;
}
.title-cont p {
    font-size: 24px;
    font-weight: 600;
    
}
.hb-wrap {
    height: 250px;
    position: relative;
    overflow: hidden;
    border-radius: 6px
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


/* .un-desc {
    position: absolute;
    z-index: 99;
    top: auto;
    left: auto;
    width: 100%;
    background: #00000026;
    bottom: 0;
    top: 0;
    padding: 20px;
    left: 0;
    right: 0;
    text-align: center;
    cursor: pointer;
    color: #fff;
    padding-top: 20%
} */

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    top: 100px;
  }
  75% {
    opacity: 0.5;
    top: 0px;
  }
  100% {
    opacity: 1;
  }
}

 .un-img{
     
transition: transform .4s; /* Animation */
 }

.un-img:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

    
</style>