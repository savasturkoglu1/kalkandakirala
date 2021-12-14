<template>
   <nuxt-link :to="$store.state.trUrls.villa+data.vil_url" :title="data.vil_adi" >
    <div class="columns unit is-mobile " itemscope itemtype="http://schema.org/Product">
       
                      <div class="column is-5 u-image-wrap ">
                          <span v-if="data.vil_etiket" class="u-etiket"> {{data.vil_etiket}} </span>
                           <img loding="lazy" itemprop="image"  class="u-image" :src="data.vil_response_img" :alt="data.vil_adi" />
                          <div class="u-stars">
                                 <div class="list-inline rating hidden-xs item-starts">
                                       
                                       <i  v-for="(item , i) in data.vil_yildiz"  :key="i" class="fas fa-star"></i>
                                                    
                               </div>
                          </div>
                      </div>
                      <div class="column is-7">
                          <div class="columns pr">

                        <span class="badge-offer renk2" v-if="data.discount && data.discount.fiy_indirim !=0">
                               
                               <b>{{data.discount.fiy_indirim}}% <br> </b>
                           </span>
                       <div class="column is-7 u-desc">
                            
                           <div class="item-body">
                               <div class="unit-title">
                                   <h4 class="u-title "  itemprop="name">{{data.vil_adi}}</h4>
                                   <h6 class="u-baslik"  v-if="!data.kisa">{{data.vil_baslik?data.vil_baslik:'Villa Başlığı kısmı buraya gelecek'}}</h6>
                                   <div class="item-address">
                                     {{data.vil_il}} /   <span class="unit-bolge"> {{data.vil_bolge}}</span> / {{data.vil_mevki}}
                                   </div>
                               </div>
                               <nav class="u-level">
                                   <div class="unit-ikons level-item">
                                  <ul>
                                      <li>
                                        <i class="flaticon-bed"></i>
                                          {{data.vil_yodasi}} 
                                      </li>
                                      <li>
                                          <i class="flaticon-user"></i>
                                          {{data.vil_kapasite}} 
                                      </li>
                                      <li>
                                          <i class="flaticon-shower"></i> 
                                          {{data.vil_banyo}}
                                      </li>
                                  </ul>
                                   
                                                  
                               </div>
                                
                               </nav>
                               
                           </div>
                          
                             
                      </div>
                      <div class="column is-5 price-col">
                         
                          <div class="ml-price">
                              <div class="column  unit-price" v-if="data.kisa">
                                            
                                               <div v-for="(item,k) in data.kisa" :key="k">
                                                   {{dateConvert(item.dates.giris).fullDate}} - {{dateConvert(item.dates.cikis).fullDate}} {{item.duration}} Gece 
                                             </div>
                                          
                                       </div>   
                                       <div class="column    unit-price" v-else  itemprop="offers" itemscope itemtype="http://schema.org/Offer" >
                                           <span class="unit-dates" v-if="data.totalPrice">
                                               <span >{{dateConvert(data.dates.from).fullDate}} - {{dateConvert(data.dates.to).fullDate}}</span>
                                           </span>
                                            <span class="unit-dates" v-else>
                                               <span>Gecelik en düşük *</span>
                                           </span>
                                            <h5 itemprop="price">{{data.totalPrice?data.totalPrice.total:data.minPrice}}  <span>{{data.vil_currency}} </span> </h5>
                                       </div>
                          </div>
                           <button class="button button-small sec-buton">Detaylar</button>
                          <Like :id="data.id" tip="list" :count="data.vil_like" />
                      </div>
                         </div>
                      </div>
            
    </div>

    </nuxt-link>
    
</template>
<script>
import Like from '../templates/like';
import moment from 'moment';
export default {
    components: { Like },
    data(){
        return{

        }
    },
    props: {
        data:{
            type: Object,
            default: null
        }
    },
    methods : {
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


<style>
.ml-price .column {
    padding: 0px
}
.ml-price {
    margin-top: 40px;
}

span.unit-dates {
    font-size: 12px;
}
.unit-price i {
    font-size: 16px;
}
.price-col {
    position: relative;
    display: grid;
    text-align: center
}
.badge-offer {
    display: block;
    position: absolute;
    top: 0px;
    right: 15px;
    z-index: 2;
    opacity: 0.6;
}
.badge-offer b {

    padding: 4px;
    font-family: inherit;
    font-weight: normal;
    text-align: center;
    color: #fff;
    font-size: 16px;
    display: inline-block;
    height: 36px;
    width: 50px;
    position: relative;
}

.badge-offer b:after {
    border-top: 7px solid ;
    border-color: initial;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: 36px;
    width: 0;
}
.u-baslik {
    
    font-size: 16px;
    margin-bottom: 10px !important;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3b4249;
    font-weight: normal;

}
.unit-bottom {
     position: absolute; 
    bottom: 0;
    width: 100%;
    right: 0;
    padding: 10px;
}
.u-desc {
    position: relative;
    padding: 0px;
}
.level-right.unit-price {
    display: block;
    text-align: center;
    color: #607D8B;
    font-weight: 500;
    font-size: 16px;
    color: #90A4AE;
}

.columns.unit .level {
    /* margin-bottom: 10px; */
}

.unit-price h5 {
    color: #ce9700;
    font-size: 20px;
    margin-top: 5px;
}
.u-stars {
    position: absolute;
    bottom: 10px;
    left: 5px;
    z-index: 9;
}
.unit-title {
    height: 140px;
}
.u-desc {
    padding-right: 10px;
    border-right: 1px solid #eee;
}
.unit-title {
    margin-bottom: 15px;
}
.unit-ikons {
    font-weight: 500;
    padding-top: 10px;
    font-size: 16px;
    color: #90A4AE;    padding-bottom: 10px;
    border-top: 1px solid #eee;
}
.unit-ikons ul {
    display: flex;
    width: 100%;
}
.unit-ikons li {
    
       margin-right: 20px;
}
.u-title {
       font-size: 18px;
    margin-bottom: 10px !important;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #3b4249;
}
.u-etiket {
    position: absolute;
    top: 15px;
    left: 10px;
    z-index: 99;
    padding: 2px 4px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    background: #8975fa78;
    color: #fff;
}
.u-etiket {
    position: absolute;
    top: 15px;
    left: 10px;
    z-index:9;
}
.item-body {
    background-color: #fff;
    padding: 10px 15px;    overflow: hidden;
}
.u-image-wrap {
    padding: 0;
    margin: 0;
     height: 220px; 
    overflow: hidden;
    position: relative;
    min-height: 100%;
}

.unit {
    border: 1px solid #eee;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
}
    .unit {
    cursor: pointer;
    border-radius: 6px;
  /*  box-shadow: 0 0 8px 0 rgba(0,0,0,.1);*/
    background-color: #fff;
    position: relative;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 20px !important;
    margin-top: 10px;
    overflow-x: hidden;
    padding: 0px !important;
}
.u-image {
    height: auto;
    width: 100%;
    /* width: auto; */
    min-height: 100%;
}
.u-image2 {
    height: 100%;
    min-width: 100%;
    width: auto;
}
.unit-bolge {
    font-weight: 600;
    font-size: 16px;
    color: #3b4249;
}
.item-address {
    color: #949ca5;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.unitd:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 16px 56px -16px rgba(0,0,0,.35);
    opacity: 0;
    transition: all .25s;
}

.badge-date {
        padding: 10px;
    border: 1px solid #00d1b25c;
    color: #00d1b2;
}
.u-bottom.columns {
    padding-top: 5px;
}

@media (max-width:1000px) {
    .u-image {
    height: 100%;
    width: auto;
    max-width: none;
   
    min-height: 100%;
}

.u-baslik {
    display: none
}
.unit-price {
    text-align: center !important;
}

.ml-price {
     margin-top: 0px
}

.u-image-wrap {
    padding: 0;
    margin: 0;
    height: 260px;
    overflow: hidden;
    position: relative;
    min-height: 100%;
}
.u-bottom .column {
    margin-bottom: 0px;
    padding: 5px;
    text-align: center;
}
.unit-title {
    margin-bottom: 5px;
    height: auto;
}

.badge-offer {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: 1;
}

.u-bottom.columns {
    padding-top: 15px;
}



.unit-price h5 {
    color: #ce9700;
    font-size: 18px;
    margin-top: 5px;
}
.u-title {
    font-size: 16px;
    margin-bottom: 5px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3b4249;
}
.u-etiket {
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 9;
    font-size: 10px;
    line-height: 12px;
    width: auto
}
}
</style>