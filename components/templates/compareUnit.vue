<template>
    <div class="cop-wrap" v-if="villa">

           <div class="cu-image-wrap">
                <button  class="button is-small is-rounded all-imgs" style="" @click="lightBox">Tüm resimler</button>
                <img class="cu-img" :src="villa.vil_response_img" :alt="villa.vil_adi" />
           </div>
          <div class="cu-title cu-body">
              <h2> {{villa.vil_adi}} </h2>
              <h4> {{villa.vil_baslik}} </h4>
              <div> <i class="iflaticon-pin"></i> {{villa.vil_il}}/ {{villa.vil_bolge}} </div>
                 <Like :id="villa.id" tip="list"  :count="villa.vil_like"  />

         </div>  
         <div class="cu-body">
              <div class="cu-at">
                  <div class="columns is-mobile">
                      <div class="column is-8">
                         <div class="buttons">
                              <div class="button">  <i class="flaticon-bed"></i> <span>{{villa.vil_yodasi}}</span> </div>
                           <div class="button">  <i class="flaticon-user"></i>  <span>{{villa.vil_kapasite}}</span> </div>
                             <div class="button">   <i class="flaticon-shower"></i> <span>{{villa.vil_banyo}}</span> </div>
                         </div>
                      </div>
                      <div class="column is-4">
                          <nuxt-link  :to="$store.state.trUrls.villa+villa.vil_url" target="_blank"  :alt="villa.vil_adi">Detaylar</nuxt-link>
                      </div>
                  </div>
              </div>
         </div>
         <div class="cu-body">
             <div class="columns  is-multiline buttons is-mobile">
                        <div class="button" v-for="(item, d) in villa.features.filter(ii =>{ if(ii.oz_lang=='tr'){return ii} })" :key="d">
                             {{item.oz_name}}
                        </div>
                </div> 
         </div>
         <div class="cu-body">
             <div class="columns">
                <div class="column ">
                        <div class="level price-level pr"  v-for="(fiyat, f) in villa.priceTable" :key="f">
                            <div class="level-left">
                                <span>{{fiyat.period}}</span>
                                <span class="p-note">En kiralama {{fiyat.fiy_enaz}} gün</span>
                            </div>
                            <div class="level-right">
                                    <span class="p-note">  {{fiyat.fiy_tur==2?'Haftalık':'Gecelik'}} </span>
                                    <span class="price-fiyat">  <span v-if="fiyat.fiy_indirim" class="prc-disc">{{fiyat.fiy_fiyat}}  TL  </span> {{fiyat.fiy_indirim?fiyat.fiy_indirimli_tutar:fiyat.fiy_fiyat}}  TL  </span>
                            </div>
                            <span  v-if="fiyat.fiy_indirim" class="pr-discount" > % {{fiyat.fiy_indirim}} <br> indirim </span>
                        </div>
                </div>
           </div>
         </div>
    </div>
</template>
<script>
import Like from './like';
export default {
    components: {Like},
    data() {
      return {
            id:null,
      }
        
    },
    props: {
        villa:null
    },
    mounted(){
      
    },
      methods: {
       lightBox(){
        let imgs = [];
        this.villa.image.map(ii => {
          imgs.push({src:ii.res_url,thumb:ii.res_resp_url, title:ii.res_alt, })
        });
        // $.swipebox(imgs )
        $(this).lightGallery({
        dynamic: true,
        dynamicEl:imgs,
      
    })
      }
    }
}
</script>

<style scoped>

.cu-wrap {
    background: #fff;
    padding: 20px;
    position: relative;
    box-shadow: 1px 0px 8px 3px #0000002e;
    
    border-radius: 6px;
}
.all-imgs {
      position: absolute;
      top: 40px;
      left: 40px;
      z-index: 999;
    }
.cu-body {
    padding: 20px;
   
}
.swiper-slide {
    height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}
  .price-level .level-left {
    display: grid;
}

.level.price-level .level-right {
    display: grid;
}

.cop-wrap {
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #bbb;
    margin-bottom: 20px;
        height: 800px;
    overflow-y: auto;
}

.price-level {
    background: #f9f9f9;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 5px;
}

.mesafeler .button {
    font-size: 16px !important;
    height: 50px;
    border-color: #CFD8DC;
    color: #546E7A;
}
   .cu-image-wrap {
       width: 100%;
       height: 300px;
       position: relative;
       overflow: hidden;
       border-radius: 5px
   }
   .cu-image {
       height: 100%;
       width: auto;
       min-width: 100%;

   }
   .cu-wrap {
    
    background: #fff;
    padding: 20px;
    position: relative;
}

@media (max-widt:1000px) {
    .cu-body {
      padding: 5px;
     }
.columns.is-mobile>.column.p-col {
    flex: none;
     width:  auto;
}
     .price-level {
    background: #f9f9f9;
    padding: 10px;
    font-size: 12px;
    margin-bottom: 5px;
}
}
</style>