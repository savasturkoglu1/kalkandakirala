<template>
    
        <nuxt-link :to="$store.state.trUrls.villa+data.vil_url" :title="data.vil_adi">
             <div class="su-wrap"  itemscope itemtype="http://schema.org/Product">
                <div class="su-img-wrap">
                    <span class="su-label" v-if="data.vil_etiket"> {{data.vil_etiket}} </span>
                     <img itemprop="image" loading="lazy" :src="data.vil_response_img" :alt="data.vil_adi" class="su-img-h" />
                    <span class="su-price">
                        <!-- <div class="columns is-mobile">
                              <div class="column"  itemprop="offers" itemscope itemtype="http://schema.org/Offer" >
                                   
                              </div>
                              <div class="column">
                                     
                              </div>
                        </div> -->
                       
                        
                    </span>
                    <div class="unit-like">
                        <like :id="data.id"  :count="data.vil_like"  />
                    </div>
                </div>
                <div class="su-detay-wrap-d">
                    <div class="columns is-mobile unit-detail-top">
                           <div class="column is-four-fifths">
                                <div class="su-title">
                                    <div class="un-home-dest">
                                        <span class="su-adres text2"> <i class="flaticon-pin"></i> {{data.vil_il?data.vil_il+'/':''}} {{data.vil_bolge}}  {{data.vil_mevki?'/'+data.vil_mevki:''}} </span>
                                    </div>
                                    <b itemprop="name" > {{data.vil_adi}} </b> <br>
                                    <span class="hu-bolge"> {{data.vil_baslik}} </span>
                                
                                     <div class="hu-oc" v-if="data.vil_onecikan_ozellik">
                                         <span class="u-oc"  v-for="(item, d) in data.vil_onecikan_ozellik.split(',')" :key="d">
                                        <!-- <i class="fal fa-circle"></i> -->
                                        {{item}}
                                    </span>
                                     </div>
                                </div>
                           </div>
                           <div class="column">
                                   <div class="su-rate">
                                            <div class="su-stars has-text-right" v-if="data.vil_yildiz">
                                                        <div class="list-inline rating hidden-xs item-starts">                                       
                                                            <i  class="flaticon-star-2"></i> <span>{{data.vil_yildiz}}</span>  
                                                                                                                    
                                                        </div>
                                            </div>
                                    </div>
                           </div>
                    </div>
                    
                    <!-- <div class="su-onecikan"  itemprop="description" v-if="data.vil_onecikan_ozellik">
                         {{data.vil_onecikan_ozellik}}
                    </div> -->
                    <div class="columns is-mobile  su-botom">
                        <div class="column is-half has-text-left">
                               <div class="su-icons-h">
                                <span class="su-icon">
                                    <i class="flaticon-user"></i> <span>{{data.vil_kapasite}}</span>
                                </span>
                                <span class="su-icon">
                                    <i class="flaticon-bed"></i> <span>{{data.vil_yodasi}}</span>
                                </span>
                                
                            </div>
                              

                           </div>    
                           <div class="column is-half has-text-right">
                                <div class="unit-dates" v-if="data.totalPrice">
                                               <span class="t_dates" >{{data.dates.from}} - {{data.dates.to}}</span>
                                                <h5 itemprop="price" class="text2">{{data.totalPrice?data.totalPrice.total:data.minPrice}} {{data.vil_currency}}</h5>
                                </div>
                               <div class="su-price-h " v-else itemprop="price">
                                    <span class="min-prc">Fiyat aralığı</span> <br>
                                     <span class="gr-price text2">
                                         {{data.minPrice}} {{data.vil_currency}} - {{data.maxPrice}} {{data.vil_currency}}
                                     </span>
                                </div>
                          </div>
                                             
                    </div>
                  
                </div>
            </div>
        </nuxt-link>
    
</template>
<script>
import Like from '../templates/like';
export default {
    components : {  Like },
    props: {
        data:null
    }
}
</script>

<style >

span.gr-price {
    font-size: 14px !important;
    font-weight: bold;
    color: #3ae374;
}
.su-title {
    padding-bottom: 5px;
   
}
.su-price-d {
    text-align: right;
}
.buttons.l-buttons .button {
    /* margin-right: 0px !important; */
}
.su-botom .column {
    padding: 5px;
    margin-top: 10px;
}
.su-stars i {
    font-size: 14px;
}
.su-begen i {
    font-size: 16px;
    color: #90A4AE;
    
}
.su-price-d span {
    font-size: 12px;
}
.su-price-d i {
    font-size: 16px;
}
.su-begen {
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index:9;
}
.su-begen .button{
    border: none
}
.su-icon {
    font-size: 18px;
    
    color: #3b4249;
    margin-right: 15px;
  font-weight: 500;
    font-size: 16px;
    
   
}
.su-icons {
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}
span.su-adres {
    color: #949ca5;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 600;
        opacity: 0.6;
}

.su-adres i::before {
    font-size: 12px;
}
.su-detay-wrap-d {
    background-color: #fff;
    padding: 7px 10px;
    overflow: hidden;
    position: relative;
}
.su-title h3 {
    font-size: 18px;
}
.su-wrap {
     
         color: #333;
}
span.hu-bolge {
    
    color: #607d8b;
}
span.su-price {
    position: absolute;
    bottom: 0;
    z-index:9;
    width: 100%;
    color: #fff;
    right: 0px;
    padding: 0 20px 15px 20px;
    font-size: 20px;
    font-weight: 500;
}
.su-label {
    position: absolute;
    top: 10px;
    left: 5px;
    z-index: 1;
    padding: 2px 4px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
   
    color: #fff;
   
}
.is-3 .su-img-wrap {
    height: 220px;
    widows: 100%;
    margin: 0 !important;
    position: relative

}

.is-4 .su-img-wrap {
    height: 260px;
    widows: 100%;
    margin: 0 !important;
    position: relative

}
.su-wrap {
    background: #fff;
    padding: 0px;
    border-radius: 5px;
    overflow: hidden;
        box-shadow: 0 0 20px 0 rgba(62,28,131,.1);
    -webkit-box-shadow: 0 0 20px 0 rgba(62,28,131,.1);
    -moz-box-shadow: 0 0 20px 0 rgba(62,28,131,.1);
}
.su-img {
        height: auto;
    min-width: 100%;
    min-height: 100%;
        max-width: none;
}

.su-img{
     
transition: transform .4s; /* Animation */
 }
 

.su-img:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
 .su-img-wrap:before {
     -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    content: '';
    opacity: 1;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(0%, rgba(0, 0, 0, 0)), color-stop(50%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    z-index: 9;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
z-index: 1 !important;
}

@media (max-width: 1000px) {
    .su-detay-wrap-d{
    background-color: #fff;
    padding: 8px;
    overflow: hidden;
    position: relative;
}
}

.su-price-h {
    line-height: 20px;
}

.su-price-h {
    line-height: 20px;
    padding-bottom: 10px;
}
.min-prc {
    color: #546e7a;
    font-size: 12px;
    font-weight: 500;

}
.su-wrap {
    height: 100%;
}


.columns.is-mobile.su-botom {
    padding: 0px 5px;
}

.su-img-h {
    height: auto;
    width: 100%;
    min-height: 100%;
}
.su-label {
    position: absolute;
    top: 10px;
    left: 5px;
    z-index: 1;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: #ff980087;
}
.g-buttons span.icon {
    margin: 0 !important;
}
.unit-like {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 9;
    pointer-events: all;
    /* background: #00000008;
    padding: 0 4px;
    border-radius: 6px;
    align-items: center; */
}

.rating  {
    color: #e91e63 !important;
}

.unit-detail-top {
    border-bottom: 1px solid hsla(0,0%,74.5%,.4);
}

.su-stars i::before {
    font-size: 14px;
}

.su-img-wrap {
    border-radius: 6px;
    overflow: hidden;
}

.hu-oc {
    margin-top: 10px;
}
</style>