
<template>
    <section>
        
       <div class="teklif-body container bg-dot" v-if="$store.state.base">
               <div class="columns is-centered">
                   <div class="column is-8">
                       <div class="teklif-wrap">
                           <div class="t-head">
                               <h1>Teklif Alın</h1>
                           <div class="note2">teklif formunu doldurun size en uygun villaları önerelim</div>
                        </div>
            <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">
            <b-step-item step="1" label="Tarih " :clickable="isStepsClickable">
                <h3 class="title has-text-centered">Tarih aralığınız Seçiniz</h3>
                <div class="t-wrap" >
                                <div class="t-columns">
                                    <div class="t-col pr">
                                        <div class="t-title">
                                            <h3>Tarihinizi girin</h3>
                                        </div>
                                        <div class="control has-icons-left t-body">
                                            <input  type="text" placeholder="Tatil tarihleriniz" :value="datePlc" class="input is-medium" @click="() =>{this.show=1}">
                                             <span class="icon is-left">
                                                 <i class="flaticon-calendar" aria-hidden="true"></i>
                                            </span>
                                         </div>
                                          <div class="search-calendar sb-level "  v-if="show ==1" >
                                            <Calendar   @cBack="(a,b,e) => { this.getDates(a,b,e)}"  @flexDates="(a,b,c,d)=>{this.getFlexDates(a,b,c,d)}"  />                                                        
                                          </div>
                                    </div>
                                   
                                   
                                </div>
                           </div>
            </b-step-item>

            <b-step-item step="2" label="Bütçe" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
                <h3 class="title has-text-centered">Bütçe Aralığınız seçiniz</h3>
                <div class="buttons t-body">
                                             <!-- <button :class="fiyat=='ekonomik'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'" @click="setPrice('ekonomik')">Ekonomik</button>
                                             <button  :class="fiyat=='orta düzey'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setPrice('orta düzey')">Orta Düzey</button>
                                             <button  :class="fiyat=='lüks'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setPrice('7000-10000')">Lüks</button> -->
                                             <!-- <button  :class="fiyat=='10000-13000'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setPrice('10000-13000')">10.000 TL - 13.000 TL</button>
                                             <button  :class="fiyat=='13000+'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setPrice('13000+')">13.000 TL +</button> -->
                                             
                                             <div class="control has-icons-left  has-icons-right">
                                                <input class="input is-medium"  name="rez_eposta" required v-model="fiyat"  type="email"  placeholder="Maximum tatil bütçeniz">
                                                <span class="icon is-right">
                                                    TL
                                                </span>                                               
                                              </div>
                                         </div>
            </b-step-item>

            <b-step-item step="3" :visible="showSocial" label="Villa Tipi" :clickable="isStepsClickable">
                <h3 class="title has-text-centered">Nasıl bir villadatatil yapmak istiyorsunuz</h3>
                <div class="buttons t-body">

                                             <button
                                              v-for="(item, i) in $store.state.base.kats" 
                                              :class="selectedCats.includes(item.kat_adi)?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'" :key="i" 
                                              @click="seKaa(item.kat_adi)">{{item.kat_adi}}</button>                                       
                                          </div>
            </b-step-item>

            <b-step-item :step="4" label="Bölge" :clickable="isStepsClickable" disabled>
                <h3 class="title has-text-centered">Hangi bölgede tatil yapmak sitiyorsunuz</h3>
                 <div class="buttons t-body">

                                             <button
                                              v-for="(item, i) in  $store.state.base.bolgeler" 
                                              :class="selectedBolge.includes(item.bo_adi)?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'" :key="i" 
                                              @click="seBoo(item.bo_adi)">{{item.bo_adi}}</button>                                       
                        </div>
            </b-step-item>

            <b-step-item :step="5" label="Misafir Sayısı" :clickable="isStepsClickable" disabled>
                <h3 class="title has-text-centered">Kaç kişilik tatil planlıyorsunuz</h3>
                <div class="buttons t-body">
                                             <!-- <button :class="misafir=='1-3'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'" @click="setMis('1-3')">1 - 3 Kişi</button>
                                             <button  :class="misafir=='4-7'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setMis('4-7')">4 - 7 Kişi</button>
                                             <button  :class="misafir=='8-10'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setMis('8-10')">8 - 10 Kişi</button>
                                             <button  :class="misafir=='11-13'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setMis('11-13')">11 - 13 Kişi</button>
                                             <button  :class="misafir=='13+'?'button t-buton is-medium is-rounded is-outlined  is-primary':'button t-buton is-medium is-rounded is-outlined'"  @click="setMis('13+')">13+ Kişi</button> -->
                                             
                                             <div class="control has-icons-left  has-icons-right">
                                                <input class="input is-medium"  v-model="misafir" required   type="email"  placeholder="Kaç kişilik bir tatil ?">
                                                <span class="icon is-left">
                                                    <i class="flaticon-user"></i>
                                                </span>                                               
                                              </div>
                                         </div>
            </b-step-item>

            <b-step-item :step="6" label="Kişsel bilgiler" :clickable="isStepsClickable" disabled>
                <h3 class="title has-text-centered">Lütfen formu doldurunuz</h3>
                <form @submit="sendTeklif" >
                                          <div class="control has-icons-left ">
                                            <input class="input is-medium"  name="rez_ad" required="true"  type="text"   placeholder="Adınız Soyadınız" v-model="name">
                                            <span class="icon is-left">
                                                <i class="flaticon-user"></i>
                                            </span>                                            
                                      </div>
                                      <div class="control has-icons-left   has-icons-right">
                                                <input class="input is-medium"  name="rez_eposta" required   type="email"  placeholder="Email Adresiniz" v-model="email">
                                                <span class="icon is-left">
                                                    <i class="flaticon-envelope"></i>
                                                </span>                                               
                                        </div>
                                        <div class="control has-icons-left   has-icons-right">
                                                <input class="input is-medium"  name="rez_tel" required   type="phone"  placeholder="Telefon Numaranız" v-model="telefon">
                                                <span class="icon is-left">
                                                     <i class="flaticon-phone"></i>  
                                                </span>                                               
                                         </div>
                                         <div class="control has-icons-left   has-icons-right">
                                               <textarea class="textarea"  name="rez_note"   placeholder="Notunuz" v-model="note" rows="3" />
                                                                                            
                                         </div>
                                             <div class="button-cont">
                                                   <button :class="spn?'button is-danger is-medium is-loading':'button is-danger is-medium'">Taklif İste</button>
                                                   <div> {{alert}} </div>
                                             </div>
                                      
                                     </form>
            </b-step-item>
             
             <b-step-item :step="7"  :visible="onay" label="Onay" :clickable="false" >
               
                 <div class="t-succeess">
                                          <h2>Teklif Talebiniz Tarafımıza Ulaşmıştır</h2>
                                      <h3>Bizi Tercih Ettiğniz İçin Teşekkür Ederiz</h3>
                                      <b>Müşteri temsilcilerimiz en kısa sürede size teklif sunacaktır</b>
                                      </div>
            </b-step-item>

            <template
                v-if="customNavigation"
                #navigation="{previous, next}">
                <b-button
                    outlined
                    type="is-danger"
                   
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    <i class="flaticon-left-arrow"></i>
                </b-button>
                <b-button
                    outlined
                    type="is-success"
                    
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    <i class="flaticon-next"></i>
                </b-button>
            </template>
        </b-steps>
        </div>
                   </div>
               </div>
       </div>
    </section>
</template>

<script>
import Calendar from '../../components/tr/detepicker';
export default {
    components: { Calendar },
        data() {
            return {
                activeStep: 0,

                showSocial: false,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: true,

                hasNavigation: true,
                customNavigation: false,
                isProfileSuccess: false,

                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'minimalist',
                 alert:null,
             show :false,
             datePlc:null,
             ay:null,
             tab:1,
             fiyat:null,
             selectedCats:[],
             selectedBolge:[],
             selectedOz:[],
             misafir:null,
             spn:false,
             name:null,
             email:null,
             telefon:null,
             note:null,
             onay:false
            }
        },
         methods: {
        sendTeklif(e){
            e.preventDefault();
            this.spn = true;
            this.$axios.post('/send-teklif', {
               'bid_isim':this.name,
               'bid_note':this.note,
               'bid_telefon':this.email,
               'bid_eposta':this.telefon,
               'bid_guests':this.misafir,
               'bid_locations':this.selectedBolge.join(','),
               'bid_categories': this.selectedCats.join(','),
               'bid_features': this.selectedOz.join(','),
               'bid_dates': this.datePlc,
               'bid_month': this.ay,
               'bid_price': this.fiyat
                   }).then(resp => {
                if(resp.data.status==1){
                     this.spn = false, 
                     this.onay = true,
                     this.activeStep =7
                } else {
                    this.spn = false, 
                      this.alert= 'Teklif gönderirken hata oluştu llütfen tekrar deneyiniz'
                }
            })

        },
        setMis(i){
            this.misafir = i;
            
        },
        seKaa(i){
             if(this.selectedCats.includes(i)){
                    var index = this.selectedCats.indexOf(i);                    
                    if (index !== -1){ this.selectedCats.splice(index, 1);}                    
                } else {
                        this.selectedCats.push(i);                        
              }
        },
        seBoo(i){
             if(this.selectedBolge.includes(i)){
                    var index = this.selectedBolge.indexOf(i);                    
                    if (index !== -1){ this.selectedBolge.splice(index, 1);}                    
                } else {
                        this.selectedBolge.push(i);                        
              }
        },
        setOz(i){
             if(this.selectedOz.includes(i)){
                    var index = this.selectedOz.indexOf(i);                    
                    if (index !== -1){ this.selectedOz.splice(index, 1);}                    
                } else {
                        this.selectedOz.push(i);                        
              }
        },
        setPrice(i){
            this.fiyat = i;
            
        },
        setAy(i){
            this.ay =i;
            this.datePlc = null;
          
        },
         getDates(a,b, e){
              this.show = false;
              let esnek = e?'+-3 gün':'';
              this.ay = null;
              this.datePlc = a+' - '+b + esnek;
        },
         getFlexDates(a,b,c,d){ 
            this.datePlc                 = a+'-'+d+'-'+c+' gece';
            this.show = false;
        },
    }
    }
</script>
<style >
    .teklif-wrap {
    margin-bottom: 50px;
    margin-top: 100px;
    box-shadow: 1px 1px 19px 3px #0000001f;
}
.t-succeess h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #ff3860;
}

.t-succeess {
    padding: 20px;
}
.t-succeess h3 {
    font-size: 34px;
    margin-bottom: 20px;
    color: #00d1b2;
    margin-top: 15px;
    margin-bottom: 10px;
}
.t-wrap .control {
    margin-bottom: 15px;
}
.t-buton {
    color: #607D8B;
}
.t-footer {
    margin-top: 30px;
    margin-bottom: 30px
}
.search-calendar {
    left: auto;
    -webkit-transform: none;
    transform: none;
    top: auto;
    border: 1px solid #d8dce1;
    padding: 30px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
    /* width: 600px; */
    left: 0;
    -webkit-transform: auto;
    transform: auto;
    position: absolute;
    margin: 0;
    z-index: 99;
}
.t-title {
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    color: #00d1b2;
    font-size: 20px;
}
.t-head {
    margin-bottom: 10px;
    padding-bottom: 10px;
    
}
.teklif-wrap h1 {
    font-size: 40px;
    margin-bottom: 10px;
    color: #ff3860;
    font-family: sans-serif;
}
.teklif-wrap {
    text-align: center;
}
.teklif-wrap {
    padding: 40px 30px;
    background: #fff;
    border-radius: 5px;
}
.teklif-body {
    margin-bottom: 40px;
    margin-top: 50px
}
.t-ara {
    width: 100%;
    padding-top:30px;
    padding-bottom: 30px;
    text-align: center;
    font-size: 30px
}
.t-columns {
    
    position: relative;
}
.t-col {
    width:100%
}

@media (max-width:1000px) {
    /* .buttons .button {
  
    width: 100%;
} */

.search-calendar.sb-level {
    width: auto;
    padding: 10px;
}
.tabs li {
    font-size: 14px !important;
}

  .teklif-wrap {
    margin-bottom: 5px;
    margin-top: 10px;
    box-shadow: 1px 1px 19px 3px #0000001f;
}
.teklif-wrap {
    padding: 10PX;
    background: #fff;
    border-radius: 5px;
}
}
    .teklif-wrap .title {
    margin-bottom: 20px;
    margin-top: 30px;
    font-size: 20px;
}

.teklif-wrap .control {
    margin-bottom: 15PX;
}
</style>