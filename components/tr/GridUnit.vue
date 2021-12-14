<template>
    <div>
        <nuxt-link :to="$store.state.trUrls.villa+data.vil_url" :title="data.vil_adi">
             <div class="su-wrap"  itemscope itemtype="http://schema.org/Product">
                <div class="su-img-wrap">
                    <span class="su-label" v-if="data.vil_etiket"> {{data.vil_etiket}} </span>
                     <img itemprop="image" loading="lazy"  :src="data.vil_response_img" :alt="data.vil_adi" class="su-img" />
                    <span class="su-price">
                        <div class="columns is-mobile">
                              <div class="column"  itemprop="offers" itemscope itemtype="http://schema.org/Offer" >
                                   <like :id="data.id"  :count="data.vil_like"  />
                              </div>
                              <div class="column">
                                     <div class="su-stars has-text-right">
                                            <div class="list-inline rating hidden-xs item-starts">                                       
                                                <i  v-for="(item , i) in data.vil_yildiz"  :key="i" class="flaticon-star-2"></i>                                                    
                                              </div>
                                    </div>
                              </div>
                        </div>
                       
                        
                    </span>
                </div>
                <div class="su-detay-wrap">
                    <div class="su-title">
                        <h3 itemprop="name" > {{data.vil_adi}}  s</h3>
                       
                        <span class="su-adres"> <i class="flaticon-pin"></i> {{data.vil_il}} / {{data.vil_bolge}} / {{data.vil_mevki}} </span>
                    </div>
                    <!-- <div class="su-onecikan"  itemprop="description" v-if="data.vil_onecikan_ozellik">
                         {{data.vil_onecikan_ozellik}}
                    </div> -->
                    <div class="columns is-mobile  su-botom">
                           <div class="column is-half">
                               <div class="su-icons">
                                <div class="su-icon">
                                    <i class="flaticon-user"></i> <span>{{data.vil_kapasite}}</span>
                                </div>
                                <div class="su-icon">
                                    <i class="flaticon-bed"></i> <span>{{data.vil_yodasi}}</span>
                                </div>
                                
                            </div>
                          </div>
                           <div class="column is-half">
                              

                               <div class="su-price-d "  itemprop="price">
                                    <span>En düşük *</span> <br>
                                     <span class="gr-price text2">
                                         {{data.minPrice}} {{data.vil_currency}}
                                     </span>
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
export default {
    components : {  Like },
    props: {
        data:null
    }
}
</script>

<style >

span.gr-price {
    font-size: 18px !important;
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
    margin-top: 20px;
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
    color: #90A4AE;
   
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
    font-size: 14px;
    font-weight: 600;
}
.su-detay-wrap {
    background-color: #fff;
    padding: 20px 25px;
    overflow: hidden;
    position: relative;
}
.su-title h3 {
    font-size: 18px;
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
.su-img-wrap {
    height: 270px;
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
}
</style>