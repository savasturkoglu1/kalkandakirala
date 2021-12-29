<template>
  <div class=" cl-container kat-cars">
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
                                         <span class="car-data" >
                                         
                                             <div class="car-data-content  ">
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
    },

    mounted() {
        if(window.innerWidth<1024) {
            this.perList=2
        }
    },
}
</script>

<style>
.cl-container {
    overflow: hidden;
}

</style>