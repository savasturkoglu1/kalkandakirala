<template>
    <div class="map-unit">
        <nuxt-link :to="$store.state.trUrls.villa+data.vil_url" :title="data.vil_adi" >
         <div class="columns is-mobile">
                <div class="column mu-img  is-5">
                      <img   class="u-image" :src="data.vil_response_img" :alt="data.vil_adi"  >   
                </div>
                <div class="column mu-desc is-7">
                       <div class="nu-title">
                           <h3> {{data.vil_adi}} </h3>
                       </div>
                       <div class="nu-detail">
                            <div class="unit-ikons level-item">
                                  <ul>
                                      <li>
                                        <i class="fal fa-bed"></i>
                                          {{data.vil_yodasi}} 
                                      </li>
                                      <li>
                                          <i class="fal fa-user"></i>
                                          {{data.vil_kapasite}} 
                                      </li>
                                      <li>
                                          <i class="fa fa-shower"></i>
                                          {{data.vil_banyo}}
                                      </li>
                                  </ul>
                                   
                                                  
                               </div>
                       </div>
                       <div class="nu-botom">
                            <div class="column has-text-right unit-price" v-if="data.kisa">
                                            
                                               <div v-for="(item,k) in data.kisa" :key="k">
                                                   {{dateConvert(item.dates.giris).fullDate}} - {{dateConvert(item.dates.cikis).fullDate}} {{item.duration}} Gece 
                                             </div>
                                          
                                       </div>   
                                       <div class="column  has-text-right  unit-price" v-else  itemprop="offers" itemscope itemtype="http://schema.org/Offer" >
                                           <span class="unit-dates" v-if="data.totalPrice">
                                               <span >{{dateConvert(data.dates.from).fullDate}} - {{dateConvert(data.dates.to).fullDate}}</span>
                                           </span>
                                            <span class="unit-dates" v-else>
                                               <span>En düşük *</span>
                                           </span>
                                            <h5 itemprop="price">{{data.totalPrice?data.totalPrice.total:data.minPrice}} {{data.vil_currency}}</h5>
                                       </div>
                       </div>
                </div>
         </div>
         </nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
          data:null
    }
}
</script>
<style scoped>
    .mu-img {
    height: 140px;
    position: relative;
    overflow: hidden;
}
.unit-price {
    padding: 0px
}
</style>