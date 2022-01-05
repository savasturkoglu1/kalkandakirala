<template>
  <div class=" cl-container  bolge-car">
      <b-carousel-list v-model="katsCar" :data="$store.state.base.bolgeler" 
      :items-to-show="perList"
      :arrow="arrow"
      :arrow-hover="arrowHover"
            :autoplay="true"
        :items-to-list="increment"
        :repeat="repeat"
        :has-drag="drag"
        :has-grayscale="gray"
        :has-opacity="opacity"
      >
                            <template   #item="item" >
                                  <nuxt-link class="col-card"                                       
                                        :to="$store.state.trUrls.bolge+item.bo_url">
                                           <div class="hb-wrap">
                                        <img itemprop="image" loading="lazy" :src="item.bo_kapak_resp?item.bo_kapak_resp:item.bo_kapak"  :alt="item.bo_adi" />
                                        <span class="car-data" >
                                         
                                             <div class="car-data-content  ">
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
                            </template>
      </b-carousel-list>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arrow: true,
            arrowHover: false,
            drag: true,
            gray: false,
            opacity: false,
            values: 1,
            perList: 4,
            increment: 1,
            repeat: true,
            katsCar:0,
        }
    },

    mounted() {
        if(window.innerWidth<1024) {
            this.perList=1
        }
    },
}
</script>

<style>
.carousel-slide {
    padding: 10px;
}
.cl-container {
    overflow: hidden;
}
 .bolge-car .hb-wrap {
    height: 420px;
    position: relative;
    overflow: hidden;
    border-radius: 9px;
}

.hb-wrap img {
    height: 100%;
    width: auto;
    min-width: 100%;
    max-width: none;
}

span.car-data {
    position: absolute;
    z-index: 9;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    bottom: 30px;
    left: 4px;
    top: auto;
}

.car-data-content h3 {
    font-size: 24px;
    font-weight: 600;
}
.car-data-content {
    text-align: left;
}
.hb-wrap:before {
    transition: 0.2s;
    content: '';
    opacity: 1;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    z-index: 9;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1 !important;
}

span.hb-data {
    z-index: 9;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.36078);
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

.hb-content{
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
</style>