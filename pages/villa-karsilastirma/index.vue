<template>
    <div class="hero comp ">
              <br>
              <h1>Villa Karşılaştırma</h1>
              <br>
              <!-- <b-carousel
            :indicator="indicator"
            :indicator-background="indicatorBackground"
            :indicator-inside="indicatorInside"
            :indicator-mode="indicatorMode"
            :indicator-position="indicatorPosition"
            :indicator-style="indicatorStyle">
            <b-carousel-item v-for="(data, i) in veri" :key="i">
                
                            <CompareUnit :villa="data" />
            </b-carousel-item>
        </b-carousel> -->
          <b-carousel-list 
          :arrow="true"
           v-model="carousel"
            :data="veri" 
            :arrow-hover="false"
             :items-to-show="showCount">
                            <template #item="data" >
                                 
                                            <CompareUnit :villa="data" />
                                   
                            </template>
               </b-carousel-list>
           
    </div>
</template>
<script>
import CompareUnit from '../../components/templates/compareUnit';
export default {
    components: { CompareUnit },
    data(){
        return {
            showCount:6,
            carousel:3,
            indicator: true,
            indicatorBackground: true,
            indicatorInside: true,
            indicatorMode: 'hover',
            indicatorPosition: 'is-top',
            indicatorStyle: 'is-lines',

        }
    },

     async asyncData({$axios, route}){
            let vils = route.query.villas;
      
            let veri = await $axios.get('/compare-data?villas='+vils).then(resp => {
                return resp.data
            });
            return {veri}
    },
    mounted(){
       let p = 3
       if(window.innerWidth<1001){
            this.showCount=1
            p = 1;
       } 
     
    },
    
    methods :{
       
    }
}
</script>
<style scoped>
       .cu-slide {
        /* height: 600px; */
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        text-align: left !important;
        
   }
   .swiper-slide.cu-slide {
    padding: 10px;
}
img.cu-img {
    width: 100%;
    height: 300px;
}

.comp span.icon.has-icons-left, .comp span.icon.has-icons-right {
    background: #f72f57;
    color: #fff;
}
</style>

