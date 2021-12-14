<template>
  <div class="container is-fluid sld-container" >
      
      <div v-if="back_image" class="sld-img-wrap" >
             <span class="hd-owerflow"></span>
           <img :src="back_image" class="sld-img " alt="villa kiralama">
       </div> 
      <div class="content sld-content">
          <div class="sld-wrap">
              <!-- slider card -->
               <div class="sld-card">
                  <div class="columns">
                      <div class="column is-8 is-offset-2">
                          <div class="sld-card-wrap">
                       <div class="columns">
                           <div class="column is-4">
                                     <div class="sld-detail-wrap">
                                         <h3>{{villa.vil_adi}}</h3>
                                     <div class="sld-card-button-wrap">
                                         <button class="button is-success">
                                             İncele
                                         </button>
                                     </div>
                                     </div>
                           </div>
                           <div class="column is-8">
                                  <div class="card-img-wrap">
                                       <img :src="back_image" class="sld-card-img " alt="villa kiralama">
                                  </div>
                           </div>
                       </div>
                  </div>
                      </div>
                  </div>
              </div>
              <!-- slider card end -->
              <!-- slider thumbs -->
                  <div class="sld-thumb-wrapper">
                      <div class="sld-thumbs">
                          <span class="sld-arrow left-arrow">
                              <button class="sld-button">
                                   <i class="flaticon-left-arrow"></i>
                              </button>
                          </span>
                          <span  v-for="(item,i) in villas" class="slid-thum-img" :key="i" @click="setCarousel(item)">
                                 <img :src="item.vil_response_img+'/format:webp'" alt="">
                          </span>
                          <span class="sld-arrow right-arrow">
                          <button class="sld-button">
                                   <i class="flaticon-next"></i>
                              </button>
                          </span>
                      </div>
                  </div>
              <!-- sldier thumbs end -->
          </div>
      </div>
  </div>
</template>

<script> 

export default {
    components: { },
   data (){
       return {
           back_image:null,
           selected_prop:null,
           active:0,
           villa:null
       }
   },
   props: {
       villas:null
   },
   created(){
      
      this.back_image =this.villas[this.active].vil_response_img
      this.villa = this.villas[this.active]
      
   },
   mounted(){
    
     setInterval(() => {
         
     }, 4000);

   },
   methods:{
       setCarousel(item) {
           this.back_image = item.vil_response_img;
           this.villa = item
           
       },
       
   }

}
</script>

<style>
.sld-wrap {
    margin-top: 40px;
    margin-bottom: 20px;
}
.sld-detail-wrap {
    height: 100%;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    position: relative;
}

.sld-card-button-wrap {
    position: absolute;
    width: 100%;
    bottom: 10px;
}
.right-arrow {
    margin-left: 15px;
}
.left-arrow{
    margin-right: 15px;
}
.sld-button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
}
   .sld-container  {
       min-height: 400px;
       background-size: cover;
       background-repeat: no-repeat;
       
    
   }

   span.slid-thum-img img {
    width: 100px;
    margin-left: 10px;
    border-radius: 6px;
}

.card-img-wrap {
    border-radius: 6px;
    overflow: hidden;
    height: 450px;
        -webkit-box-shadow: 0 6px 26px 0 rgb(0 0 0 / 16%);
    box-shadow: 0 6px 26px 0 rgb(0 0 0 / 16%);
}

   .sld-card-wrap {
    padding: 5px;
    background: #fff;
    margin-bottom: 10px;
    border-radius: 8px;
        -webkit-box-shadow: 0 6px 26px 0 rgb(0 0 0 / 16%);
    box-shadow: 0 6px 26px 0 rgb(0 0 0 / 16%);
}


img.sld-card-img {
    width: 100%;
    height: auto;
    min-height: 100%;
        transition: opacity 0.4s ease-in;
    -webkit-transition: opacity 0.4s ease-in;
    -moz-transition: opacity 0.4s ease-in;
    -ms-transition: opacity 0.4s ease-in;
    -o-transition: opacity 0.4s ease-in;
    opacity: 1;
}
   .sld-container {
       overflow: hidden;
   }

   .sld-img {
        filter: blur(8px);
        width: 100%;
    height: auto;
      transform: scale(1.1);
   }

   .sld-content {
    text-align: center;
    padding: 30px;
}

   .sld-img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: -1;
}

.card-img-wrap {
    border-radius: 6px;
    overflow: hidden;
}

.sld-thumb-wrapper {
    display: inline-flex;
    text-align: center;
    margin-top: 20px;
}


.sld-button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    height: 40px;
    
    margin-top: 15px;
    border-radius: 20px;
    width: 70px;
}
.sld-thumbs {
    display: inline-flex;
    /* width: 100%; */
    /* text-align: center; */
}
</style>