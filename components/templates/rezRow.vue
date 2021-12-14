<template>
    <div class=" rr-wrap">
        <div class="column rr-col is-12">
            <div class="level">
                <div class="level-left">
                        {{rez.created_at}}
                </div>
                <div class="level-right">
                    <div class="level-right">
                            <button class="button"> {{rez.rez_status==0?'Onay bekliyor':rez.rez_status==1?'Onaylanmış': rez.rez_status==2?'Opsiyon': 'İptal Edilmiş' }} </button>
                         
                     </div>
                </div>
            </div>
            <div class="rr-img-wrap">
                
                <img :src="rez.rez_villa_img"  alt="rez" class="rr-img">
            </div>
                       <div class="bd-title">
                              <h2>{{rez.rez_villa}}</h2>
                               <nuxt-link :to="'/kiralik-villa/'+rez.rez_villa_url"> <small>Gözat</small> </nuxt-link>
                              <div class="item-address">
                                 {{rez.rez_villa_il}} /   <span class="unit-bolge"> {{rez.rez_villa_bolge}}</span>
                              
                              </div> 
                              
                          </div>
        </div>
        <div class="column rr-col is-12">
             <div class="rr-body">
                          
                            <div class="rr-dates">
                                     <div class="bd-dwrap">
                                         <div class="bd-date">
                                             <span>{{dateConvert(rez.rez_giris).fullDate}}</span><br>
                                             <b>{{dateConvert(rez.rez_giris).dayName}}</b>
                                         </div>
                                         <i class="fal fa-chevron-right"></i>
                                          <div class="bd-date">
                                             <span>{{dateConvert(rez.rez_cikis).fullDate}}</span><br>
                                             <b>{{dateConvert(rez.rez_cikis).dayName}}</b>
                                         </div>
                                    </div>                                  
                              </div>
                              <div class="bd-quests">
                                   <b> {{rez.rez_yetiskin}} Yetişkin {{rez.rez_cocuk ?rez.rez_cocuk+' Çocuk':''}} {{rez.rez_bebek?rez.rez_bebek+' Bebek':''}}</b>
                              </div>
                               <div class="bd-list">
                              
                               <div class="level" v-if="rez.muh.rez_gece <7">
                                  <div class="level-left" style="display: block; text-align:left">
                                      Extra Temizlik Ücreti <br><div class="note">7 geceden kısa kiralamalarda extra temizlik ücreti alınır</div>  
                                  </div>
                                  <div class="level-right" >  {{rez.muh.rez_extra_tem}} {{rez.muh.rez_cur}}  </div>
                              </div>
                               <div class="level">
                                  <div class="level-left"><strong>{{rez.muh.rez_gece}} Gece </strong>Toplam Tutar</div>
                                  <div class="level-right"> {{rez.muh.rez_tutar}} {{rez.muh.rez_cur}} </div>
                              </div>
                              <div class="level">
                                  <div class="level-left">Tahsil Edilen</div>
                                  <div class="level-right">  {{rez.muh.rez_alinan}} {{rez.muh.rez_cur}}  </div>
                              </div>
                               <div class="level">
                                  <div class="level-left">Girişte Ödenecek</div>
                                  <div class="level-right">  {{rez.muh.rez_tutar-rez.muh.rez_alinan}} {{rez.muh.rez_cur}}  </div>
                              </div>
                             
                          </div>

                          <div v-if="rez.muh.rez_kk_odeme">
                              <nuxt-link :to="'/odeme?code='+rez.rez_kod" target="_blank">Kredi Kartı ile ödeme yapmak için tıklayınız</nuxt-link>
                          </div>
                         
                      </div>
                      <div class="note">Rezervasyonda değişiklik yapmak veya rezervasyonu iptal etmek için lütfen bizimle iletişime geçiniz !</div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    props: {
        rez:null
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
           }
    }
}
</script>

<style scoped>
.rr-col {
    padding: 5px
}
..rr-wrap {
    padding: 0px !important;
}

.book-wrap h5 {
    margin-bottom: 10px;
}
.bf-send .button {
    font-size: 18px;
}
.ub-dates .control {
    width: 100%;
}


.bf-wrap input {
    box-shadow: none;
}
.bf-send {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #eee;
}
.bf-pay .button {
    font-size: 18px;
    padding: 30px;
}
.bf-extra {
    margin-bottom: 20px;
    margin-top: 20px;
}
.bk-level p {
    color: #90A4AE;
    font-weight: normal;
}
.bk-level{
        width: 100%;
    display: block;
    margin-top: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
}
.bf-details .level{
    
    margin-bottom: 10px;
}
.book-wrap {
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    padding: 30px;
}
.bd-quests {
    text-align: center;
    margin-top: 10px;
}
.bd-list {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.bd-list .level {
    margin-bottom: 10px;
}
.bd-title h2 {
      font-size: 28px;
    color: #00d1b2;
    margin-bottom: 3px
}
.bd-body {
    padding: 20px;
}
.bd-title {
    text-align: center;
    margin-bottom: 20px;
}
.bd-wrap {
    padding: 0px;
    background: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}
   .rr-dates i {
       font-size: 70px;
    color: #eee;
    padding: 0px;
   }
    .bd-dwrap {
    display: flex;
    width: 100%;
    padding: 0px;
    border: 2px solid #eee;
    border-radius: 5px;
}
.bd-dates {
    margin-bottom: 10px;
    margin-top: 10px
}
.bd-date {
    padding: 10px;
    width: 100%;
    text-align: center;
}
.bf-extra .button {
    font-size: 13px;
    padding: 20px;
}

.bd-imga-wrap {
    height: 250px;
    position: relative;
    overflow: hidden;
}

.bd-img {
   height: auto;
   width: 100%;
}
</style>