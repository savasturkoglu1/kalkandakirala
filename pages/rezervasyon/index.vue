<template>
    <div class="container  page-body">
          <div class="columns">
              <div class="column is-7">
                   <div class="book-wrap pr">
                       <Spinner v-if="spn" />
                       <h1>Rezervasyon Formu</h1>
                       <br>
                       <form action="" id="confirmForm" ref="confirmForm" v-on:submit="sendRez">
                       <div class="bf-wrap">
                                
                                <input type="hidden"  name="rez_extra_tem" :value="veri.totalPrice.duration <7?veri.totalPrice.data.vil_extra_tem:''">
                                 <input type="hidden"    name="rez_depozito" :value="veri.totalPrice.data.vil_depozito">
                                <input type="hidden" name="rez_yetiskin" :value="guests.adult">
                                <input type="hidden" name="rez_cocuk" :value="guests.child">
                                <input type="hidden" name="rez_bebek" :value="guests.baby">
                                <input type="hidden" name="rez_currency" :value="veri.totalPrice.currency">
                                <input type="hidden" name="rez_transfer" :value="rez_transfer?0:null">
                                <input type="hidden" name="rez_rent"  :value="rez_rent?0:null">
                                 <input type="hidden" name="rez_uye_id" v-if="user" :value="user.id">
                                <input type="hidden" name="rez_yemek"  :value="rez_yemek?0:null">
                                <input type="hidden" name="rez_kahvalti"  :value="rez_kahvalti?0:null">
                                <input type="hidden" name="rez_odeme_tur" :value="method">
                                <input type="hidden" name="rez_villa" :value="veri.vil_adi">
                                <input type="hidden" name="rez_villa_id" :value="veri.id">
                                <!-- <input type="hidden" name="rez_tel" id="rez-tel" :value="tel"> -->
                                <input type="hidden" name="rez_giris"  :value="veri.dates.from">
                                  <input type="hidden" name="rez_cikis"  :value="veri.dates.to">
                                 <input type="hidden" name="rez_gece" :value="veri.totalPrice.duration">
                                   <input type="hidden" name="rez_kayit" :value="0">
                                  <input type="hidden" name="rez_dil" value="tr">
                                  <div class="columns">
                                      <div class="column">
                                          <div class="control has-icons-left has-icons-right">
                                    <input class="input is-medium"  name="rez_ad" required="true"  type="text"   placeholder="Adınız Soyadınız">
                                    <span class="icon is-left">
                                        <i class="flaticon-user"></i>
                                    </span>
                                    
                                    </div>
                                      </div>
                                  </div>
                                   <div class="columns">
                                       <div class="column">
                                             <div class="control has-icons-left  has-icons-right">
                                                <input class="input is-medium"  name="rez_eposta" required   type="email"  placeholder="Email Adresiniz">
                                                <span class="icon is-left">
                                                    <i class="flaticon-envelope"></i>
                                                </span>                                               
                                              </div>
                                       </div>
                                       <div class="column">
                                              <div class="alert" id="telal" v-if="telalert">{{telalert}}</div>
                                            <div class="control has-icons-left   has-icons-right">
                                                <input class="input is-medium"  id="phone" name="rez_tel"  type="phone"  placeholder="(5xx) xxx xx xx " >
                                                <span class="icon is-left">
                                                     <i class="flaticon-phone"></i>  
                                                </span>   

                                        </div>
                                        
                                       </div>
                                   </div>
                                   
                                 
                                     <div class="control has-icons-left has-icons-right">
                                                <input class="input is-medium"  name="rez_note"   type="tezt"  placeholder="Notunuz">
                                                <span class="icon is-left">
                                                       <i class="flaticon-checked"></i>   
                                                </span>                                               
                                        </div>

                                    
                            
                       </div>
                       
                       <div class="bf-details">
                             <div class="level">
                                 <div class="bk-level">
                                      <h5>Depozito {{veri.totalPrice.data.vil_depozito}} {{veri.totalPrice.currency}}</h5>
                                      <p>Villaya girişte ödenecek olan depozito, villada herhangi bir hasar veya kayıp 
                                          olmaması halinde çıkışta iade edilecektir.</p>
                                 </div>
                                 
                             </div>
                             <div class="level">
                                 <div class="bk-level">
                                     <h5>Ücrete dahil olanlar</h5>
                                     <p> <strong> {{veri.totalPrice.duration}} Gece </strong>  Konaklama Elektrik , Su ve Tüpgaz Kullanımı - Wi-Fi - Günlük Havuz ve Bahçe Bakımı
</p>
                                 </div>
                             </div>
                             <div class="level">
                                 <div class="bk-level">
                                     <h5>Giriş</h5>
                                     <p>16:00</p>
                                 </div>
                                 <div class="bk-level">
                                     <h5>Çıkış</h5>
                                     <p>10:00</p>
                                 </div>
                             </div>
                       </div>
                       <div class="bf-confirm">
                             <div class="bf-pay">
                                 <h5>Ödeme yöntemi</h5>
                                    <div class="level">
                                        <div class="buttons">
                                            <div :class="method==1?'button is-me selected-button':'button is-me'" @click="() => {this.method=1}">
                                                  
                                                <span>Kredi Kartı</span>
                                            </div>
                                                <div :class="method==2?'button is-me selected-button':'button is-me'"  @click="() => {this.method=2}">
                                                
                                                       <span> Banka Havalesi</span> 
                                            </div>
                                                <div :class="method==3?'button is-me selected-button':'button is-me'" @click="() => {this.method=3}">
                                               
                                               <span>Western Union</span> 
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                       </div>
                       <div class="bf-send">
                              <div style="margin-bottom:25px">
                                   <label class="check-cont"><a href="/bilgilendirme/villa-apart-kiramala-sozlesmesi-ve-sartlari" target="_blank">Kiralama Sözleşmesini</a> Kabul Ediyorum
                                        <input type="checkbox"  @change="sozlesmeAccept($event)" >
                                        <span class="checkmark"></span>
                                    </label>
                                   <span>
                              
                               </span>
                               <div class="alert" v-if="salert">Lütfen rezervasyon yapmak için kiralama koşullarını okuyup kabul ediniz</div>
                       
                                 <button :class="robot?'button  selected-button':'button'" type="button" style=" opacity:0.6" v-on:click="() => {this.robot=true}">
                                     <span class="icon">
                                         <i v-if="!robot" class="fal fa-robot"></i>
                                         <i v-if="robot" class="fal fa-check-double"></i>
                                     </span>
                                     <span>
                                        Robot değilim
                                     </span>
                                 </button>
                              </div>
                                                   
                               <div class="button-cont">
                                  <button :disabled="!robot" :class="spn?'button is-primary is-medium is-loading':'button is-primary is-medium'" @click="()=>{this.target = 'rezervasyon-onayi'}">Rezervasyon Talebi Gönder</button>
                                <button  :disabled="!robot"  v-if="veri.totalPrice.data.vil_ccard==1" 
                                :class="spn?'button is-danger is-medium is-loading':'button is-danger is-medium'"
                                 @click="()=>{this.target = 'odeme'}">Kredi Kartı İle Hemen Rezervasyon Yap</button>
                               
                             </div>
                              <div class="alert" v-if="ralert">Rezervasyon alınamadı lütfen bilgileri kontrol edip tekrar deneyiniz</div>
                       </div>
                       
                       </div>
                       </form>
                   </div>
              </div>
              <div class="column is-5">
                  <div class="bd-wrap">
                      <div class="bd-imga-wrap">
                          <img :src="veri.vil_response_img" class="bd-img" :alt="veri.vil_adi">
                      </div>
                      <div class="bd-body">
                          <div class="bd-title">
                              <h2>{{veri.vil_adi}}</h2>
                              <div class="item-address">
                                 {{veri.vil_il}} /   <span class="unit-bolge"> {{veri.vil_bolge}}</span> / {{veri.vil_mevki}} 
                              </div> 
                              
                          </div>
                            <div class="bd-dates">
                                     <div class="bd-dwrap">
                                         <div class="bd-date">
                                             <span>{{dateConvert(dates.from).fullDate}}</span><br>
                                             <b>{{dateConvert(dates.from).dayName}}</b>
                                         </div>
                                         <i class="flaticon-next"></i>
                                          <div class="bd-date">
                                             <span>{{dateConvert(dates.to).fullDate}}</span><br>
                                             <b>{{dateConvert(dates.to).dayName}}</b>
                                         </div>
                                    </div>                                  
                              </div>
                              <div class="bd-quests">
                                   <b> {{guests.adult}} Yetişkin {{guests.child !=='0'?guests.child+' Çocuk':''}} {{guests.baby!=='0'?guests.baby+' Bebek':''}}</b>
                              </div>
                          <div class="bd-list">
                              
                               <div class="level" v-if="veri.totalPrice.duration <veri.totalPrice.min">
                                  <div class="level-left" style="display: block;">
                                      Extra Temizlik Ücreti <br><div class="note">{{veri.totalPrice.min}} geceden kısa kiralamalarda extra temizlik ücreti alınır</div>  
                                  </div>
                                  <div class="level-right" >  {{veri.totalPrice.data.vil_extra_tem}} {{veri.totalPrice.currency}}  </div>
                              </div>
                               <div class="level">
                                  <div class="level-left"><strong>{{veri.totalPrice.duration}} Gece </strong>Toplam Tutar</div>
                                  <div class="level-right"> {{veri.totalPrice.discountPrice}} {{veri.totalPrice.currency}} </div>
                              </div>
                              <div class="level">
                                  <div class="level-left">Ön Ödeme</div>
                                  <div class="level-right">  {{veri.totalPrice.kaparo}} {{veri.totalPrice.currency}}  </div>
                              </div>
                               <div class="level">
                                  <div class="level-left">Girişte Ödenecek</div>
                                  <div class="level-right">  {{veri.totalPrice.giriste}} {{veri.totalPrice.currency}}  </div>
                              </div>
                             
                          </div>
                      </div>
                  </div>
                    <br>
                    <Help />
              </div>
              
          </div>
    </div>
</template>
<script>
import moment from 'moment';
import Spinner from '../../components/tools/Spinner';
import Help from '~/components/templates/help.vue'
export default {
     components: { Spinner, Help},
     data(){
         return {
             robot:false,
             salert:false,
             ralert:false,
             sozlesme:false,
             spn:false,
             method:2,
             tel:null,
             telalert:null,
             rez_transfer:false,
             rez_rent:false,
             rez_yemek:false,
             user:null,
             rez_kahvalti:false,
             target:'/rezervasyon/rezervasyon-onayi',

         }
     },
        head () {
            return {
            meta: [
                { hid: 'robots', name: 'robots', content: 'noindex' }
            ]
            }
        },

    async asyncData ({$axios, params, route}) { 
     
              
         const prms = route.fullPath.split('?')[1];        
         let url = '/prop-details?'+prms;
         let guests = {
             adult: route.query.adult,
             child: route.query.child,
             baby: route.query.baby
         }
         let dates = {
             from:route.query.from,
             to: route.query.to
         }
        
         let data  = await $axios.get(url).then(res => { 
              return res.data;
             
              });
         
         return {
             veri:data,
             guests,
             dates
         }
       },

       mounted(){
        
            if(process.client){
               
                 }
              let usr = localStorage.getItem('user');
              if(usr){
                  this.user = JSON.parse(usr);
                  console.log(this.user)
              }
       },
      
       methods: {
            sozlesmeAccept(e){
                let checked = e.target.checked;
               if(checked){
                   this.sozlesme = true;
                   this.salert   = false;
               } else {
                   this.sozlesme = false;
                   this.salert   = true;
               }
            },
            sendRez(e){
                
               e.preventDefault();
               
            //    let tl = $("#phone").val(); 
            //   let telsp = tl.split('')
            
            //    if(telsp[0]=='0' || telsp[0]=='9' || telsp[0] =='+'){
            //        this.telalert= 'telefon numrasını hatalı girdiniz !';
            //        $(window).scrollTop($('#telal').offset().top);
            //        return false;
            //    }
            //    let sontel = '90';
            //    telsp.map(i => { if(i!=' '){ sontel = sontel+i } })
            //    this.telalert=null;
            //    this.tel = sontel; 
            //    $("#rez-tel").val(sontel);
                        
              
               if(!this.sozlesme){
                  this.salert = true;
                  return false;
               }
               this.spn = true;
               this.$axios.post('/rezervasyon-talebi', $("#confirmForm").serialize()).then(resp => {
                   this.spn = false;
                  if(resp.data.status ==1){
                       this.$router.push({ path: '/rezervasyon/rezervasyon-onayi', query: { code:resp.data.value.rez_kod }});
                  } else {
                      this.ralert = true;
                  }
               });
               },
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
    /* font-size: 18px;
    padding: 30px; */
}
.bd-dates i::before {
    font-size: 40px;
    color: #bd1f5917;
    padding: 0px;
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
    background: #f3f5fa;
    border-radius: 5px;
    overflow: hidden;
    padding: 30px;
    border: none;
}
.bd-quests {
    text-align: center;
    margin-top: 20px;
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
    background: #f3f5fa;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}
   .bd-dates i {
       
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