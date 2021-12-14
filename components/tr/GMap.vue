<template>
    <div class="n-map" id="mapn"> </div>
</template>
<script>
export default {
    props: {
        pinUrl:null,
        cBack: {
            type:Function,
        },
        center:{
            type:Object
        }
    },
    data(){
        return {
            map:null,
            markers:[],
            pins:[],
          
        }
    },
    mounted(){             
              this.getPins();
              this.initMap();             
     
    },
    methods: {
        calcDistance(propC,mapC){
          const x = Math.pow(propC.lat-mapC.lat,2);
          const y = Math.pow(propC.lng- mapC.lng,2);
          const dis = Math.sqrt(x+y);
          return dis;
        },
        getPins(){
            this.$axios.get(this.pinUrl).then(resp => {
                 this.pins = resp.data;
                   this.initMap();
                
            });
        },
        initMap() {
        this.map = new google.maps.Map(document.getElementById('mapn'), {
        center:this.center,
           fullscreenControl: true,
           gestureHandling: 'greedy',
            zoom: 8
        });

        
          const self = this;
           this.pins.map((vl,j)=> { 
              var marker = new google.maps.Marker({
                             position: {lat:  parseFloat(vl.vil_lat), lng:  parseFloat(vl.vil_lang)}, 
                             map: this.map,
                             label:{ 
                            text:vl.minPrice?vl.minPrice +' '+vl.vil_currency:'0 TL',//vl.vil_lat+'-'+vl.vil_lang, //
                            color: '#333',
                            fontSize: '12px',                            
                            cursor: 'pointer',
                            fontWeight:'bold'
                          },
                        level:j%10,
                         visible:j%10==0?true:false,
                        icon:'https://panel.kaskavilla.com/images/marker6.png',  });
                     
                        this.markers.push(marker);
                        google.maps.event.addListener(marker, 'click', function() {
                         self.$emit('cBack', vl.id);
                        });

           }) ;
         
          google.maps.event.addListener(this.map, 'zoom_changed', function() {
             var zoom = this.getZoom();
             var mapC  = {lat:this.getCenter().lat(), lng:this.getCenter().lng()};
             
             self.markers.map(ii => {
                 if(ii.level == zoom%10 ){
                     ii.setVisible(true);
                 } else {
                     ii.setVisible(false);
                 }
                 
                 const propC =  {lat:ii.position.lat(), lng:ii.position.lng()};
                 const dist = self.calcDistance(propC,mapC) 
                if(dist<0.005){
                    ii.setVisible(true);
                }
             })

      });

       google.maps.event.addListener(this.map, 'dragend', function() {
                 var mapC  = {lat:this.getCenter().lat(), lng:this.getCenter().lng()};
                    self.markers.map(ii => {                 
                        const propC =  {lat:ii.position.lat(), lng:ii.position.lng()};
                        const dist = self.calcDistance(propC,mapC) 
                        if(dist<0.005){
                            ii.setVisible(true);
                        }
             })
      });
           
      },
    }
}
</script>
<style scoped>
    .n-map {
    position: absolute;
    height: 100%;
    bottom: 0px;
    top: 0;
    width: 100%;
    z-index: 1;
}
</style>

 