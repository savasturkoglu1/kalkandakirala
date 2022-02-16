<template>
    <div v-if="data" class="hd-wrapper pr hd-bg" :style="{backgroundImage: 'url(' + data.header.hd_image + ')'}">
     
       <div v-if="data.header.hd_tur ==0" class="hd-img-section desk" >
             <!-- <span class="hd-owerflow2"></span> -->
           <!-- <img :src="data.header.hd_image" class="hd-img " alt="villa kiralama"> -->
       </div> 
      <div class="hd-items">
            <div class="container">
                   
                <div class="hd-titles">
               <h1 class="test-headline title-large title-small-xs mt0 mb24-xs txt-inverted txt-nub w490-sm mha-sm maw858 mb48">{{data.header.hd_hbir}}</h1>
              <!-- <h2> {{data.header.hd_hiki}} </h2> -->
          </div>
            </div>
          <div class="hd-search-wrapper">
              <div class="desk">
                  <client-only>
             <SearchBar />
            </client-only>
                
              </div>
              <div class="mob">
                  <client-only>
                <MobilSearch /> 
                </client-only>
                
              </div>
               
               <!-- <div class="all-button mob">
                   <button class="button   is-info " style="display: inline;" @click="()=> { this.mFilter = !this.mFilter}">
                       <span class="icon mb-font1"> <i class="fas fa-sliders-h"></i> </span>
                       <span class="mb-font1">Detaylı Arama</span>
                   </button>
                   <nuxt-link class="button   is-info" to="/teklif-al">
                      <span class="icon mb-font1"> <i class="fal fa-tags"></i> </span>
                       <span class="mb-font1"> Teklif al</span>
                   </nuxt-link>
               </div> -->
          </div>
      </div>
    
     <span class="shapedividers_com-658"></span>
    </div>
</template>
<script>
import MobilFilter from '../tr/mobileFilter';
import SearchBar from './SearchBar.vue';
import MobilSearch from '../mobil/SearchBar.vue'

export default {
    data(){
        return {
         mFilter: false,
        }
    },
    components: { MobilFilter,SearchBar,MobilSearch },
    props: {
        data: {
            type:Object
        }
    }
}
</script>
<style >
img.f_year {
    height: 200px;
    position: absolute;
    left: 10px;
    top: -200px;
}
.hd-owerflow3 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #000;
    background: linear-gradient(to right, rgb(137 117 250) 0%, rgb(71 42 234) 50%, rgb(140 131 218) 100%) !important;
    opacity: 0.75;
    z-index: 9;
}

.hd-owerflow4 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    /* background: #000; */
    background: linear-gradient(to right, rgb(230 73 84) 0%, rgb(71 42 234) 50%, rgb(221 74 99) 100%) !important;
    opacity: 0.65;
    z-index: 9;
}

.hd-owerflow2 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #000;
   
    opacity: 0.35;
    z-index: 9;
        overflow: hidden;
}
.level.search-bar {
    padding: 10px;
    background: #ffffff59;
}

* { box-sizing: border-box; }
.video-background {
  background: #000;
  position: absolute;
  top: -70px; right: 0; bottom: 0; left: 0;
 
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
#vidtop-content {
	top: 0;
	color: #fff;
}
.vid-info { position: absolute; top: 0; right: 0; width: 33%; background: rgba(0,0,0,0.3); color: #fff; padding: 1rem; font-family: Avenir, Helvetica, sans-serif; }
.vid-info h1 { font-size: 2rem; font-weight: 700; margin-top: 0; line-height: 1.2; }
.vid-info a { display: block; color: #fff; text-decoration: none; background: rgba(0,0,0,0.5); transition: .6s background; border-bottom: none; margin: 1rem auto; text-align: center; }
/* @media (min-aspect-ratio: 16/9) {
  .video-foreground { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
  .video-foreground { width: 300%; left: -100%; }
} */
@media all and (max-width: 600px) {
.vid-info { width: 50%; padding: .5rem; }
.vid-info h1 { margin-bottom: .2rem; }
}
@media all and (max-width: 500px) {
.vid-info .acronym { display: none; }
}

.vb {
    position: absolute;
    z-index: 9;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
}

.all-button.mob .button {
  
   border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 0;
    height: 40px;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 6px;
}
.hd-search-wrapper {
    margin-bottom: 20px;
    margin-top: 25px;
}
.hd-titles h1 {
    font-size: 38px;
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 15px;
    font-weight:600
}

.hd-titles h1 {
    /* font-size: 36px;
    color: #fff;
   
    font-size: 40px;
    font-weight: 700;
     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    letter-spacing: 2px;
    
    margin-bottom: 30px;
    display: inline;
    */
}

.hd-titles {
    margin-bottom: 40px;
    line-height: 40px;
    text-align: left;
        margin-left: 10px;
}
.hd-titles h2 {
    font-size: 30px;
    color: #ffffff;
    letter-spacing: 1px;
}
.hd-items {
    position: absolute;
    top: 120px;
    width: 100%;
    text-align: center;
    z-index: 19;
}
.hd-wrapper {
    /* position:relative;
    background: linear-gradient(90deg,#021048,#1e38a3);
        background: #013243 !important; */
}
.hd-owerflow {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    width:100%;
    background:#000;
    opacity: 0.35;
    z-index: 9;
}
img.hd-img {
    width: 100%;
    height: auto;
    min-height: 100%;
}
    /* .hd-img-section {
    height: 600px;
    overflow: hidden;
    position: relative;
} */

@media (max-width: 1000px) {

   
.all-button {
    margin-top: 30px;
    display: flex
}
.all-button {
    display: flex !important;
}
    img.hd-img {
    width: auto;
    height: 100%;
    min-height: 100%;
    max-width: none;
}
/* .hd-img-section {
    height: 150px;
    overflow: hidden;

} */
  .hd-items {
    position: relative !important;
    top: 5px;
    width: 100%;
    text-align: center;
    z-index: 3;
    
}

.hd-wrapper {
    position: relative;
    background: #ffffff ;
    background-size: 100% 40%;
    background-repeat: no-repeat !important;
        padding-top: 50px; 
        
   
}
/* .hd-wrapper::after {
    position: absolute;
    content: "";
    background: #182b54;
    width: 100%;
    
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    opacity: .35;
    border-radius: 8px;
} */
/* .hd-titles h1 {
    font-size: 26px;
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 15px;
} */
.hd-titles h2 {
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 1px;
}

.search-bar {
    text-align: left;
    display: block;
        padding: 20px;
}


}

.button.mh-buton {
    color: #BDBDBD;
}

.shape-bottom {
    position: absolute;
    top: auto;
    bottom: -10px;
    left: -30px;
    right: 0;
    z-index: 9;
}

/* .hd-wrapper {
    margin-top: 10px !important;
    border-radius: 8px;
   
} */



.hd-bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.overlyabs {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    right: 0;
    pointer-events: none;
   
}
@media (min-width:1250px) {
            .hd-img-section {
            height: 550px;
            overflow: hidden;
            position: relative;
           
        }
}

@media (max-width:1025px) {
            .hd-img-section {
            height: 600px;
            overflow: hidden;
            position: relative;
        }

         .hd-wrapper {
   
    height: 500px;
}
}



/* 
.hd-wrapper::after {
    position: absolute;
    content: "";
    background: #182b54;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    opacity: .35;
  
} */

.wave svg {
    margin-bottom: -1px;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}

</style>