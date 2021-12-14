<template>
  <div class="container cl-container">
      <b-carousel-list v-model="katsCar" :data="$store.state.base.kategoriler" 
      :items-to-show="perList"
      :arrow="arrow"
      :arrow-hover="arrowHover"
            
        :items-to-list="increment"
        :repeat="repeat"
        :has-drag="drag"
        :has-grayscale="gray"
        :has-opacity="opacity"
      >
                            <template   #item="item" >
                                  <nuxt-link class="col-card"                                       
                                        :to="$store.state.trUrls.kats+item.kat_url">
                                           <div class="hb-wrap">
                                        <img itemprop="image" loading="lazy" :src="item.kat_kapak_resp?item.kat_kapak_resp:item.kat_kapak"  :alt="item.kat_adi" />
                                        <span class="hb-data" >
                                         
                                             <div class="hb-content  ">
                                               <h3> {{item.kat_adi}} </h3>  
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
            perList: 5,
            increment: 1,
            repeat: true,
            kartCar:3,
        }
    }
}
</script>

<style>
.cl-container {
    overflow: hidden;
}
.hb-wrap {
    height: 220px;
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