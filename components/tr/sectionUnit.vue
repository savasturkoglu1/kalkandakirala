<template>
    <div>
        <nuxt-link :to="$store.state.trUrls.villa+data.vil_url" :title="data.vil_adi">
             <div class="su-wrap"  itemscope itemtype="http://schema.org/Hotel">
                <div class="su-img-wrap">
                    <span class="su-label" v-if="data.vil_etiket"> {{data.vil_etiket}} </span>
                     <v-lazy-image itemprop="image" :contet="data.vil_response_img" :src="data.vil_response_img+'/format:webp'" :alt="data.vil_adi" class="su-img" />
                    <span class="su-price">
                         <div class="columns is-mobil">
                             <div class="column">
                                 <div class="su-begen">
                                        <like :id="data.id"  :count="data.vil_like"  />
                                    </div>
                             </div>
                         
                           
                        </div>
                  
                       
                        
                    </span>
                </div>
                <div class="su-detay-wrap">
                    <div class="su-title">
                        <h3 itemprop="name" > {{data.vil_adi}} </h3>
                       
                        <span class="su-adres" itemprop="address"> {{data.vil_il}} / {{data.vil_bolge}} / {{data.vil_mevki}} </span>
                    </div>
                    <div class="su-onecikan"  itemprop="description" v-if="data.vil_onecikan_ozellik">
                        <span  v-for="(item, d) in data.vil_onecikan_ozellik.split(',')" :key="d">
                            <!-- <i class="fal fa-circle"></i> -->
                              {{item}}
                        </span>
                    </div>
                    <div class="columns su-bottom is-mobile">
                                   
                                    
                                     <div class="column is-6"   >
                                        <div class="su-price-d" >
                                          <div class="unit-dates" v-if="data.totalPrice">
                                               <span >{{dateConvert(data.dates.from).fullDate}} - {{dateConvert(data.dates.to).fullDate}}</span>
                                           </div>
                                           <span v-else>
                                               <p>Gecelik fiyat aralığı</p>
                                           </span>
                                            <span  itemprop="priceRange" v-bind:content="data.minPrice+'-'+data.maxPrice" class="sud-price">{{data.totalPrice?data.totalPrice.total:data.minPrice}} <i class="fal fa-lira-sign"></i> </span>
                                              <span  v-if="!data.totalPrice"   class="sud-price"> ~ {{data.maxPrice}} <i class="fal fa-lira-sign"></i> </span>

                                        </div>
                                    </div>
                         
                              <div class="column is-6">
                                     <div class="su-stars has-text-right">
                                            <div class="list-inline rating hidden-xs item-starts">                                       
                                                <i  v-for="(item , i) in data.vil_yildiz"  :key="i" class="fas fa-star"></i>                                                    
                                        </div>
                                    </div>

                                    <div class="su-icons has-text-right">
                                          <span class="su-icon">
                                               <i class="fal fa-user-friends"></i> <span>{{data.vil_kapasite}}</span>
                                             </span>
                                              <span class="su-icon">
                                               <i class="far fa-bed"></i> <span>{{data.vil_yodasi}}</span>
                                             </span>
                                            <!-- <div class="su-icon">
                                                <i class="fal fa-shower"></i> <span>{{data.vil_banyo}}</span>
                                            </div> -->
                                        </div>

                           </div>
                    </div>
                   
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
import Like from '../templates/like';
import moment from 'moment';
export default {
    components : {  Like },
    props: {
        data:null
    },
    methods: {
         dateConvert(tar){ 
                   moment.locale("tr"); 
               var dayName      = moment(tar, "DD/MM/YYYY").format('dddd');
               var fullDate = moment(tar, "DD/MM/YYYY").format('DD MMMM YYYY');
               var monthName   = moment(tar, "DD/MM/YYYY").format('dddd');
               var day =   tar.split('/')[0];
              return {
                  dayName,
                   fullDate,
                   monthName,
                   day
              }
           },
    }
}
</script>

<style scoped>
.su-onecikan {
    padding-bottom: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 65px;
    overflow: hidden;
    font-weight: 500;
    color: #607D8B;
}
.unit-dates {
    font-size: 12px
}
.su-stars i {
    font-size: 14px;
}

.su-price-d i {
    font-size: 16px;
}
.su-begen i {
    font-size: 16px;
    color: #90A4AE;
    
}
.su-begen .button {
    background: #ffffff66;
    
    border: none !important;
}

.su-title {
    text-align: left;
    margin-bottom: 10px;
}
.su-begen {
   
    left: 5px;
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
    color: #949ca5;
   
}
.su-icons {
    
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0px;
}



.sud-price {
    font-size: 18px;
    font-weight: 600;
    color: #0c55da;
    font-weight: 700;
}

.su-price-d p {
    color: #949ca5;
    font-size: 12px;
}
span.su-adres {
    color: #949ca5;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
}
.su-detay-wrap {
    background-color: #fff;
        padding: 10px 15px;
    overflow: hidden;
    position: relative;
}
.su-title h3 {
    font-size: 18px;
}
.su-wrap {
     font-family: 'Quicksand', sans-serif;
         color: #3b4249;
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
    text-align: right
}
.su-label{
    position: absolute;
    top: 0;
    left: 10px;
    z-index: 1;
    padding: 4px 6px;
    /* border-radius: 5px; */
    font-size: 12px;
    font-weight: 600;
  
    color: #fff;
    /* box-shadow: 1px 1px 1px #2a9283; */
}
.su-img-wrap {
    height: 208px;
    widows: 100%;
    margin: 0 !important;
    position: relative

}
.su-wrap {
    background: #fff;
    padding: 0px;    
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 30px;
    box-shadow: 0 0 20px 0 rgba(62,28,131,0.1);
    -webkit-box-shadow: 0 0 20px 0 rgba(62,28,131,0.1);
    -moz-box-shadow: 0 0 20px 0 rgba(62,28,131,0.1);
}
.su-img {
      height: auto;
    min-width: 100%;
    width: 100%;
    max-width: none
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

}

@media (max-width: 1000px) {
    .su-detay-wrap{
    background-color: #fff;
    padding: 15px;
    overflow: hidden;
    position: relative;
}
.su-bottom .column {
    /* padding: 0 !important */
}
}

.su-begen .l-buttons .button {
    border: none !important;
    color: #ffffff !important;
    background: transparent !important;
}
</style>