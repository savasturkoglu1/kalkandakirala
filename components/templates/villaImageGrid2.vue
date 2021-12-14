<template>
    <div  v-if="images">
              <div class="swiper-container">
                <button  class="button is-success btn-green is-small  all-imgs" style="" @click="lightBox">{{lang=='tr'?'Tüm resimlere göz atın':'All images'}}</button>
                    <div class="swiper-wrapper">
                        
                            <div class="swiper-slide vswp" v-for="(item, i) in images" :key="i"  @click="lightBox">
                                <img v-if="i<4" :src="item.res_resp_url" :alt="item.res_alt" :class="sclass">
                                <v-lazy-image v-else :src="item.res_resp_url" :alt="item.res_alt" :class="sclass" />
                                  
                            </div>
                            
                    </div>

                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next">
                          <span class="sw-ar">
                            <i class="fal fa-chevron-right"></i>
                          </span>
                    </div>
                    <div class="swiper-button-prev">
                          <span class="sw-ar">
                            <i class="fal fa-chevron-left"></i>
                          </span>
                    </div>
                </div>
               

                

    </div>
</template>
<script>

export default {
    
    props: {
        lang : {
          default:'tr'
        },
        images:{
            default:null,
        
        },
        effect: {
          default:'slide'
        },
        per: {
          type: Number,
          default:4
        },
       sclass:null
    },

    mounted(){
        let p = window.innerWidth<1001?1:this.per;
        // if(this.effect == 'fade' || this.per ==1){
        //   p=1
        // }
        const self = this;
        var swiper = new Swiper('.swiper-container', {
      slidesPerView: p,
      spaceBetween:2,
      // effect: 'fade',
      slidesPerGroup: p,
      loop: true,
      autoplay: {
                delay: 5000,
              },
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    },

     methods: {
      lightBox(){
        let imgs = [];
        this.images.map(ii => {
          imgs.push({src:ii.res_url,thumb:ii.res_resp_url, title:ii.res_alt, })
        });
        // $.swipebox(imgs )
        $(this).lightGallery({
        dynamic: true,
        dynamicEl:imgs,
        mode: 'lg-zoom-in'
      
    })
      }
    }
}
</script>

 <style scoped>

 .btn-green {
   background: #3fc380 !important;
 }

.sld-body .swiper-container {
    width: 100%;
    height: 450px !important;
}
.sld-body .swiper-slide img {
    min-height: 100%;
    width: 100% !important;
    height: auto;
    max-height: none !important;
}

    .all-imgs {
      position: absolute;
      top: 40px;
      left: 40px;
      z-index: 999;
    }
    .swiper-container {
      width: 100%;
      height: 400px;
    }
    .swiper-slide.vswp {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
          height: 100% !important;
    overflow: hidden;
    }

    .swiper-slide img {
    height: 100%;
    
    

    width: auto;
    max-width: none !important;
}
.desk {
  display: block
}


    .es-img {
    height: auto !important;
    width: 100% !important;
    min-height: 100%;
}

 @media (max-width:1000px) {
   .all-imgs {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
}
   .swiper-pagination-bullets {
   
    display: flex;
}
  /* .swiper-button-next, .swiper-button-prev {
    display: none
} */
.desk {
  display: none
}
.mob {
    display: block
}

.swiper-container {
    width: 100%;
    height: 300px;  
    z-index: 0;
}

.swiper-slide img {
    height: 100%;
    
    width: auto; max-width: none !important;
}


}

  </style>