<template>
    <div  >
              <div class="grid-container swipebox " v-if="images.length>0">
                

                <div class="columns ig-wrap">
                     <div class="ig-col ig-col-lagrge column is-7">
                     <img  class="ig-img ig-img-l" loading="lazy"  :src="images.filter(i=>{return i.res_oncelik=='1'})[0].res_url" alt="villago" @click="lightBox">
                </div>
                <div class="column ig-col is-5">
                    <div class="columns is-multiline">
                        <div class="column pr  ig-col-s is-6" v-for="(item,j) in images.slice(1,5)" :key="j" @click="lightBox" >
                            <img class="ig-img ig-img-s" loading="lazy" :src="item.res_resp_url" :alt="item.res_alt">
                            <span v-if="j==3" class="all-img">
                                  <div  class="all-img-owerlay" style="" @click="lightBox">
                                    <span class="icon">
                                      <i class="flaticon-menu-4"></i>
                                    </span>
                                    <span>
                                      Tüm resimleri gör <br> {{images.length}} 
                                    </span>
                                  </div>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
                   
                </div>

    </div>
</template>
<script>

export default {
    data() {
          return{
                 pr:4
          }
    }, 
    props: {
        lang : {
          default:'tr'
        },
        images:{
            default:null,
        
        },
        per: {
          type: Number,
          default:3
        },
       sclass:null
    },

    mounted(){
    //     let p = window.innerWidth<1001?1:this.per;
    //     this.pr=p;
    //     var swiper = new Swiper('.swiper-container', {
    //   slidesPerView: 1,
    //   spaceBetween:2,
    //   slidesPerGroup: 1,
    //    grabCursor: true,
    //    centeredSlides: true,
    //   loop: true,
    //   autoplay: {
    //             delay: 5000,
    //           },
    //   loopFillGroupWithBlank: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });


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
        download:false
       // mode: 'lg-zoom-in'
      
    })
      }

      // lightBox(){
      //   //$( '.swipebox' ).swipebox();
      //   let imgs = [];
      //   this.images.map(ii => {
          
      //     imgs.push({href:ii.res_url, thumb:ii.res_resp_url,src:ii.res_url, thumb:ii.res_resp_url,  onerror:ii.res_resp_url, title:ii.res_alt, })
      //   });

      //   $.swipebox( imgs );
      //   // $.swipebox(imgs )
      //   // $(this).lightGallery({
      //   // dynamic: true,
      //   // dynamicEl:imgs,
      //   // download	: false      
      //   //     })
      // }
    }
}
</script>

 <style>

.grid-container {
    margin-top: 20px;
    margin-bottom: 10px;
    height: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
}


.column.ig-col-s {
    height: 200px;
    padding: 1px;
}

.ig-img {
        object-fit: cover;
    vertical-align: bottom;
    height: 100%;
    width: auto;
    min-width: 100%
    
}

.ig-col {
    height: 400px;
    width: 100%;
}
span.all-img {
    position: absolute;
    left: auto;
    left: 0;
    right: 0;
    height: 100%;
    background: #00000042;
    color: #fff;
    cursor: pointer;
}
.all-img-owerlay {
margin-top: calc(30% - 5px);
    margin-left: 10%;
    text-align: center;
}
.ig-wrap{
    max-height: -webkit-calc(60vh - 64px) !important;
    max-height: -moz-calc(60vh - 64px) !important;
    max-height: calc(60vh - 64px) !important;
    max-height: -webkit-calc(60vh - 64px) !important;
    max-height: -moz-calc(60vh - 64px) !important;
    max-height: calc(60vh - 64px) !important;
    overflow-y: hidden !important;
    position: relative !important;
    max-height: -webkit-calc(100vh - 144px) !important;
    max-height: -moz-calc(100vh - 144px) !important;
    max-height: calc(100vh - 144px) !important;
    min-height: 300px !important;
     overflow: hidden;
    border-radius: 12px;
   
}

    .all-imgs2 {
    /* position: absolute; */
    top: 40px;
    left: 20px;
    z-index: 2;
    /* background-color: #1976d2 !important; */
    z-index: 2;
    z-index: 2;
    background-image: linear-gradient(to left, #08aeea, #17cec4);
    border: none;
    color: #fff !important;
}
    .swiper-container {
      width: 100%;
      height: 500px;
    }
    .swiper-slide {
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
    min-height: 100%;
    height: auto;
        transform: translateX(0);
    width: 100%;
   max-height: none
}.mob {
    display: none
}
.desk {
  display: block
}


    .es-img {
    height: auto !important;
    width: 100% !important;
    min-height: 100%;
}

/* .swiper-slide::before {
    position: absolute;
    content: "";
    background: #182b54;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: .2;
} */

 @media (max-width:1000px) {
   .swiper-slide::before {
    position: absolute;
   
    background: #182b54;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
}
   .all-imgs2 {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9;
    background-color: #00000080 !important;
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
}

.swiper-slide img {
    height: 100%;
    
    width: auto; max-width: none !important;
}


}


.swiper-slide:hover:before {
   opacity: 0;
}

.swiper-slide:hover img {
  transform: scale(1.1); 
 
}

.swiper-slide img {
  
  transition: transform .5s ease-in-out; /* Animation */
}


.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }

    .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 0;
}
.ig-col-lagrge {
  padding: 0;
}

.columns.ig-wrap {
    margin: auto;
}
  </style>