<template>
  <div v-if="$store.state.base">
       <div class="sv-wrapper">
           <h4 style="margin-bottom: 20px;">Öne Çıkan Villalar</h4>
           <div v-for="(data, i ) in $store.state.base.villas"
            :key=i>

           <nuxt-link :to="$store.state.trUrls.villa+data.vil_url" :title="data.vil_adi">
            <div class="sv-unit columns" >
            
               <div class="sv-image-wrap column">
                    <img itemprop="image" loading="lazy" :src="data.vil_response_img" :alt="data.vil_adi" class="su-img-h" />
               </div>
                
               <div class="sv-detail-wra column">
                     <div class="sv-title">
                         <h4 itemprop="name" > {{data.vil_adi}} </h4> 
                         <!-- <b class="sv-bolge"> {{data.vil_baslik}} </b> -->
                     </div>
                     <div class="sv-loc">
                         <span class="su-adres text2"> <i class="flaticon-pin"></i> {{data.vil_il?data.vil_il+'/':''}} {{data.vil_bolge}}  {{data.vil_mevki?'/'+data.vil_mevki:''}} </span>
                     </div>
                     <div class="sv-icon-wrap">
                                <span class="su-icon">
                                    <i class="flaticon-user"></i> <span>{{data.vil_kapasite}}</span>
                                </span>
                                <span class="su-icon">
                                    <i class="flaticon-bed"></i> <span>{{data.vil_yodasi}}</span>
                                </span>
                                
                     </div>
               </div>
               
            </div>
           </nuxt-link>
            </div>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sv-unit.columns {
    height: 120px;
    margin-bottom: 20px;
    overflow: hidden;
        background: #fff;
    border: 1px solid #ddd;
    position: relative;
    padding: 0px;
    margin-right: 20px;
    border-radius: 6px;
    margin-left: 0px;
}

.sv-image-wrap.column {
    padding: 0px;
    margin: 0;
    overflow: hidden;
    border-radius: 6px 0px 0px 6px;
}

.sv-detail-wra.column {
    color: #607d8b;
}
</style>