<template>
    <div  v-if="images">
              
                

              <div class="pr">
                <button  class="button is-success btn-green is-small  all-imgs" style="" @click="lightBox">{{lang=='tr'?'Tüm resimlere göz atın':'All images'}}</button>
                <ul id="lightSlider">
                  <li  v-for="(item, i) in images" :key="i"  @click="lightBox" :data-thumb="item.res_thumb_url">
                      <img v-if="i<4" :src="item.res_url" :alt="item.res_alt" :class="sclass">
                       <img loading="lazy" v-else :src="item.res_url" :alt="item.res_alt" :class="sclass" />
                  </li>
                
                </ul>
              </div>   

    </div>
</template>
<script>
  // import { Thumbs } from 'swiper';
  // import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    components:{
      //   Swiper,
      // SwiperSlide,
    },
    props: {
        lang : {
          default:'tr'
        },
        images:{
            default:null,
        
        },
        mobile:{
            default:false,
        
        },
        effect: {
          default:'slide'
        },
        per: {
          type: Number,
          default:1
        },
       sclass:null
    },

    mounted(){
      $("#lightSlider").lightSlider({
       gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9,
    currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
      });
        let p = window.innerWidth<1001?1:this.per;
     // if(this.effect == 'fade' || this.per ==1){
        //   p=1
        // }
        const self = this;

         var swiper2 = new Swiper(".mySwiper", {
        spaceBetween: 2,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
      });

        var swiper = new Swiper('.swiper-container', {
      slidesPerView: p,
      spaceBetween:2,
      // effect: 'fade',
      slidesPerGroup: 1,
      loop: true,
      autoplay: {
                delay: 5000,
              },
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
           swiper2:swiper2
        },
    });

     swiper.params.control = swiper2;
    swiper2.params.control = swiper;

    // var swiper2 = new Swiper(".mySwiper", {
    //     spaceBetween: 10,
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //     thumbs: {
    //       swiper: swiper,
    //     },
    //   });


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
        download:false,
      
    })
      }
    }
    
}
</script>

 <style>
.swiper-container {
    width: 100%;
    height: 500px;
    border-radius: 6px;
    overflow: hidden;
}
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

ul.lSPager.lSGallery li.active img {
    height: 80px;
}

 @media (max-width:1000px) {

   ul.lSPager.lSGallery li.active img {
    height: 30px;
}
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


.mySwiper .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }

      .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
       
        object-fit: cover;
      }


      ul.lSPager.lSGallery li {
    opacity: 0.5;
}

ul.lSPager.lSGallery li.active {
    opacity: 1;
}



.lSSlideWrapper {
    max-width: 100%;
    overflow: hidden;
    border-radius: 8px;
}
  </style>