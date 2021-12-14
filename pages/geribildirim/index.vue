<template>
    <div class="container page-body">
        <div class="columns">
              <div class="column is-5">
                  <div class="bd-wrap">
                      <div class="bd-imga-wrap">
                          <img :src="data.villa.vil_response_img" class="bd-img" :alt="data.villa.vil_adi">
                      </div>
                      <div class="bd-body">
                          <div class="bd-title">
                              <h2>{{data.villa.vil_adi}}</h2>
                              <div class="item-address">
                                 {{data.villa.vil_il}} /   <span class="unit-bolge"> {{data.villa.vil_bolge}}</span> / {{data.villa.vil_mevki}} 
                              </div> 
                              
                          </div>
                            <div class="bd-dates">
                                     <div class="bd-dwrap">
                                         <div class="bd-date">
                                             <span>{{dateConvert(data.rez_giris).fullDate}}</span><br>
                                             <b>{{dateConvert(data.rez_giris).dayName}}</b>
                                         </div>
                                         <i class="fal fa-chevron-right"></i>
                                          <div class="bd-date">
                                             <span>{{dateConvert(data.rez_cikis).fullDate}}</span><br>
                                             <b>{{dateConvert(data.rez_cikis).dayName}}</b>
                                         </div>
                                    </div>                                  
                              </div>
                      </div>
                  </div>
                  
                    
              </div>
              <div class="column is-7">
                     <div class="coomet-wrap">
                              <h1> Sn <span style="color:red">{{data.rez_ad}}</span> Lütfen Tatil Deneyiminiz İle İlgili Görüşlerinizi Bizimle Paylaşın !!</h1>
                              <div class="puan-wrap">
                                  <p>Villa Sahibi için değerlendirmeniz</p>
                                  <div class="puans">
                                      <i :class="yor_owner_puan==1?'icon-selected fal fa-angry':' fal fa-angry'"  @click="()=> {this.yor_owner_puan =1}"></i>
                                      <i :class="yor_owner_puan==2?'icon-selected fal fa-frown':' fal fa-frown'"  @click="()=> {this.yor_owner_puan =2}"></i>
                                      <i :class="yor_owner_puan==3?'icon-selected fal fa-meh':' fal fa-meh'"      @click="()=> {this.yor_owner_puan =3}"></i>
                                      <i :class="yor_owner_puan==4?'icon-selected fal fa-smile':' fal fa-smile'"  @click="()=> {this.yor_owner_puan =4}"></i>
                                      <i :class="yor_owner_puan==5?'icon-selected fal fa-laugh':' fal fa-laugh'"  @click="()=> {this.yor_owner_puan =5}"></i>

                                  </div>
                              </div>
                              <div class="puan-wrap">
                                  <p>Acentemiz için değerlendirmeniz</p>
                                  <div class="puans">
                                      <i :class="yor_acente_puan==1?'icon-selected fal fa-angry':' fal fa-angry'"  @click="()=> {this.yor_acente_puan =1}"></i>
                                      <i :class="yor_acente_puan==2?'icon-selected fal fa-frown':' fal fa-frown'"  @click="()=> {this.yor_acente_puan =2}"></i>
                                      <i :class="yor_acente_puan==3?'icon-selected fal fa-meh':' fal fa-meh'"      @click="()=> {this.yor_acente_puan =3}"></i>
                                      <i :class="yor_acente_puan==4?'icon-selected fal fa-smile':' fal fa-smile'"  @click="()=> {this.yor_acente_puan =4}"></i>
                                      <i :class="yor_acente_puan==5?'icon-selected fal fa-laugh':' fal fa-laugh'"  @click="()=> {this.yor_acente_puan =5}"></i>

                                  </div>
                              </div>
                              <div class="puan-wrap">
                                  <p>Villa için değerlendirmeniz</p>
                                  <div class="puans">
                                      <i :class="yor_villa_puan==1?'icon-selected fal fa-angry':' fal fa-angry'"  @click="()=> {this.yor_villa_puan =1}"></i>
                                      <i :class="yor_villa_puan==2?'icon-selected fal fa-frown':' fal fa-frown'"  @click="()=> {this.yor_villa_puan =2}"></i>
                                      <i :class="yor_villa_puan==3?'icon-selected fal fa-meh':' fal fa-meh'"      @click="()=> {this.yor_villa_puan =3}"></i>
                                      <i :class="yor_villa_puan==4?'icon-selected fal fa-smile':' fal fa-smile'"  @click="()=> {this.yor_villa_puan =4}"></i>
                                      <i :class="yor_villa_puan==5?'icon-selected fal fa-laugh':' fal fa-laugh'"  @click="()=> {this.yor_villa_puan =5}"></i>

                                  </div>
                              </div>
                               <div class="field">
                                    <p>Genel olarak Tatilinize kaç puan veririsiniz</p>
                                    <div class="control has-icons-left has-icons-right">
                                        <span v-bind:class="yor_yildiz>0?'fas fa-star seleted-star':'far fa-star'"    @click="()=>{this.yor_yildiz=1}"></span> 
                                        <span  v-bind:class="yor_yildiz>1?'fas fa-star seleted-star':'far fa-star'"   @click="()=>{this.yor_yildiz=2}" ></span> 
                                        <span  v-bind:class="yor_yildiz>2?'fas fa-star seleted-star':'far fa-star'"   @click="()=>{this.yor_yildiz=3}"></span> 
                                        <span  v-bind:class="yor_yildiz>3?'fas fa-star seleted-star':'far fa-star'"   @click="()=>{this.yor_yildiz=4}"></span> 
                                        <span  v-bind:class="yor_yildiz>4?'fas fa-star seleted-star':'far fa-star'"   @click="()=>{this.yor_yildiz=5}"></span>                     
                                    </div>                    
                                </div>
                                <form id="yorForm" @submit="sendComment">
                                    <input type="hidden" name="yor_villa_puan" :value="yor_villa_puan">
                                     <input type="hidden" name="yor_ad" :value="data.rez_ad">
                                      <input type="hidden" name="yor_eposta" :value="data.rez_eposta">
                                       <input type="hidden" name="yor_villa" :value="data.rez_villa">
                                      <input type="hidden" name="yor_villa_puan" :value="yor_villa_puan">
                                    <input type="hidden" name="yor_owner_puan" :value="yor_owner_puan">
                                    <input type="hidden" name="yor_acente_puan" :value="yor_acente_puan">
                                    <input type="hidden" name="yor_yildiz" :value="yor_yildiz">
                                    <input type="hidden" name="yor_villa_id" :value="data.villa.id">
                                <div class="field">
                                    <label class="label">Yorumunuz</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <textarea class="textarea" placeholder="Çok güzel bir tatildi" name="yor_yorum"></textarea>
                                    </div>                    
                                </div>
                                <div class="field">
                                    <div class="button-cont">
                                        <button :class="spn?'is-loading button is-danger':'button is-danger'">Yorum Yap</button>
                                    </div>
                                    <div>{{alert}}</div>
                                
                                </div>
                                </form>
                                </div>
              </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {

    data(){
        return {
            yor_owner_puan:0,
            yor_acente_puan:0,
            yor_villa_puan:0,
            yor_yildiz:0,
            spn:false,
            alert:null
        }
    },
    

    async asyncData({$axios, route}){
        const rezKod = route.query.code;
        const rezData = await $axios.get('/rez-feedback-data?code='+rezKod).then(resp => {
            return resp.data
        });

        return {
            data:rezData
        }
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
            sendComment(e){
              e.preventDefault();
              this.spn=true;
              this.$axios.post('/add-comment', $("#yorForm").serialize()).then(resp => {
                  this.spn = false;
                //   console.log(resp.data)
                  if(resp.data.status==1){
                      this.alert= 'Yorum gönderildi'
                  } else {
                      this.alert= 'Yorum gönderilemedi !!'
                      
                  }
              });
        }
    }
}
</script>
<style scoped>

.puans i {
    font-size: 26px;
    margin-top: 10px;
    margin-right: 5px;
    color: #90A4AE;
}
.icon-selected  {
  color: #fc0 !important;
  font-weight: 600;
   font-size: 36px !important;
}
 .seleted-star {
        color: #fc0
    }
.puan-wrap {
    margin-bottom: 10px;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.coomet-wrap {
    padding: 30px;
    background: #fff;
    border-radius: 5px;
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
   .bd-dates i {
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