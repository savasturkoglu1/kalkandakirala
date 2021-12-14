<template>
               <div class="bolge-ddd">
                       <div v-if="!locations" style="height:300px;position: relative;">
                            <Spinner />
                        </div>
                        <div class="mf-wrap">
                                  <div v-for="(il, j) in ils" :key="j" class="colums  is-multiline">
                               <div class="il-sect"> <h4>{{il}}</h4> </div>
                                 <div class="buttons">
                                     <nuxt-link 
                                     v-for="(item, i) in locations.filter(r => { if(r.bo_il == il){ return r }  })" 
                                     :key="i" class="button is-rounded" 
                                     :to="$store.state.trUrls.bolge+item.bo_url"  
                                    :title="item.bo_adi"  >
                                          {{item.bo_adi}}
                                    </nuxt-link>
                                 </div>
                         </div> 
                        </div>
                                      
                        <div class="sec-buton-cont">
                              <nuxt-link  class="button button-small sec-buton" :to="$store.state.trUrls.bolge">Tüm bölgeler</nuxt-link>
                       </div>
                 </div> 
                 <!-- <div class="dd-map">
                       <div class="bmap" id="bmap"></div>
                 </div> -->
</template>
<script>
import Spinner from '../tools/Spinner';
export default {
    components: { Spinner },
    data(){
        return  {
            locations:null,
            lang:'tr',
            bolgePlc:[],
            ils:[],
            map:null,
            markers:[],
            pins:[],
            
        }
    },
   
    mounted(){
        this.getLocations();
    //    this.initMap();
        

    },
    methods: {
          initMap(){console.log('asd');
           this.map = new google.maps.Map(document.getElementById('bmap'), {
               
           center:{lat:36.26, lng:29.41},
           fullscreenControl: true,
           gestureHandling: 'greedy',
            disableDefaultUI: true,
            zoom:6
        });

        
          const self = this;
         if(this.locations){
              this.locations.map((vl,j)=> { 
                         var marker = new google.maps.Marker({
                             position: {lat:  parseFloat(vl.vil_lat), lng:  parseFloat(vl.vil_lang)}, 
                             map: this.map,
                             label:{ 
                            text:vl.bo_adi,
                            color: '#333',
                            fontSize: '16px',                            
                            cursor: 'pointer',
                            fontWeight:'bold'
                          },
                      
                        icon:'https://panel.kaskavilla.com/images/marker6.png',  });
                     
                        this.markers.push(marker);
                        google.maps.event.addListener(marker, 'click', function() {
                       //  self.$emit('cBack', vl.id);
                        });

           }) ;
         }
        },
        git(item){
            this.$router.push({
                name:'kiralik-villa-bolgeleri',
                 params: {url:item.bo_url}})
        },
        getLocations(){
            this.$axios.get('/bolgeler', {headers:{'lang':this.lang}}).then(resp => {
                let ils = [];
                resp.data.map (i => {
                    ils.push(i.bo_il);
                });
                 this.ils  = new Set(ils);
                 this.locations = resp.data;
               //   this.initMap();

                
            })
        },

      
    }
}
</script>

<style scoped>
.dd-map {
    height: 500px;
}
.bmap {
    position: absolute;
    height: 100%;
    bottom: 0px;
    top: 0;
    width: 100%;
    z-index: 1;
}
.bmap img {
    height: 100%;
}
.mf-wrap {
    max-height: 400px;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px
}
.il-sect {
    text-align: left;
    padding: 5px;
    margin-bottom: 15px;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
}
    .bolge-dd {
    left: auto;
    
    
   
    padding: 30px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
    width: 600px;
    left: 0;
   
    /* position: absolute; */
    margin: 0;
    z-index: 99;
}
</style>