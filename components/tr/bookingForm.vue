<template>
     <div class="u-book-wrap a-box" :style="myStyle">
                            <!-- <div class="u-book-price">
                                <div class="ub-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                     <span class="ub-coast" itemprop="price" :content="vil.minPrice?vil.minPrice:'0'"> {{vil.minPrice?vil.minPrice:'0'}}</span>
                                    <span class="ub-currency"  itemprop="priceCurrency" content="TRY">{{vil.minPrice?vil.priceSets.vil_currency:'TL'}}</span>
                                    <span class="un-den">'den başlayan fiyatlarla</span>
                                </div>
                            </div> -->
                            <div class="u-book-body " > 
                                <div class="u-book-price2">
                                        <div class="ub-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                            <span class="ub-coast" itemprop="price" :content="vil.minPrice?vil.minPrice:'0'"> {{vil.minPrice?vil.minPrice:'0'}}</span>
                                            <span class="ub-currency"  itemprop="priceCurrency" content="TRY">{{vil.minPrice?vil.priceSets.vil_currency:'TL'}}</span>
                                            <div class="un-den">Başlayan fiyatlarla</div>
                                        </div>
                                              <div class="list-inline rating hidden-xs item-stars"  >
                                                   <div class="vl-coms">
                                                        <a @click="$parent.scrollTo('commetns')">
                                                            <span v-if="vil.yorumCount>0" > {{vil.yorumCount || '0' }}  yorum </span>
                                                            <span v-else>ilk yorumu sen yap</span>
                                                            </a> 
                                                   </div>
                                                    <div class="vl-stars">
                                                        
                                                        <span v-for="(item,i) in vil.stars||0" class="flaticon-star-1" :key="i"></span>
                                                        <span v-for="(item,i) in Array(5 - vil.stars ).fill().map((_, idx) => idx)" class="flaticon-star" :key="i"></span>
                                                   </div> 
                                                   
                                                    
                                             </div>
                                    </div>
                                <div class="ub-dates">
                                    <div :class="fromer?'search-feed  pr feed-er  sl-sol':'search-feed  sl-sol  pr'"   v-on:click="()=> {this.showTakvim = true}">
                                         <i class="flaticon-check-in"></i>
                                        <input name="arrive" :value="date1" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Giriş">
                                    </div>
                                    <div :class="toer?'search-feed  pr feed-er  sl-sag':'search-feed  sl-sag  pr'"  v-on:click="()=> {this.showTakvim = true}">
                                        <i class="flaticon-check-out"></i>
                                        <input name="depart" :value="date2" readonly="" type="text" class="form-k check_out_date" autocomplete="off" placeholder="Çıkış">
                                    </div>
                                    <div class="search-calendar mobil-fix-options clearfix"  v-if="showTakvim" >
                                          <Calendar  :vilId="vil.id" @cBack="(a,b) => {this.date1 = a, this.date2 = b,this.showTakvim = false }" />
                                         
                                    </div>
                                </div>
                                     <div :class="userer?'search-feed  pr feed-er':'search-feed  pr'"   v-on:click="()=> {this.showGuest = true}">
                                         <i class="flaticon-user"></i>   
                                                                     
                                       <input name="arrive" :value="guestPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Misafir Sayısı">
                                       <div v-if="showGuest" >
                                           <Guests   @cBack="i => getData(i)" :book="true" />
                                      </div> 
                                    </div>
                                    <div class="alert" v-if="fromer || toer || userer">Lütfen tüm alanları doldurunuz</div>
                                    <div class="alert" v-if="misr">Bu villa {{vil.vil_kapasite}} misafir ağırlamaya uygundur.
                                         Daha fazla sayıda misafir için rezervasyon yapmak istiyorsanız lütfen müşteri
                                          temsilcilerimizle iletişime geçiniz</div>
                                    <div class="price-calcs">
                                       <div v-if="!price" class="price-alert">
                                           Fiyat hesaplamak ve rezervasyon yapmak için lütfen tarih seçin !
                                       </div>
                                       <div v-if="price || spn" class="price-list">
                                           <div v-if="spn" class="h-100">
                                              <Spinner />
                                           </div>
                                           <div v-else>
                                                <nav class="level">
                                                 <div class="level-left"> {{date1}} - {{date2}} </div>
                                                 <div class="level-right"> {{price.duration}} Gece </div>
                                            </nav>
                                            <nav class="level">
                                                 <div class="level-left"> Toplam Tutar </div>
                                                 <div class="level-right"> {{price.discountPrice}} {{price.currency}} </div> 
                                            </nav>
                                            <nav class="level" v-if="price.extra_tem">
                                                 <div class="level-left"> Extra Temizlik Ücreti </div>
                                                 <div class="level-right"> {{price.extra_tem}} {{price.currency}} </div>
                                            </nav>
                                             <nav class="level">
                                                 <div class="level-left"> Ön ödeme </div>
                                                 <div class="level-right"> {{price.kaparo}} {{price.currency}} </div>
                                            </nav>
                                             <nav class="level">
                                                 <div class="level-left"> Depozito </div>
                                                 <div class="level-right"> {{price.data.vil_depozito}} {{price.currency}} </div>
                                            </nav>
                                            <span class="note">Şimdilik hiç bir ödeme yapmayacaksınız !</span>
                                           </div>
                                       </div>
                                       
                                    </div>
                                    <!-- <div class="fd-cont">
                                        <h4>Fiyata dahil olanlar</h4>
                                        <p class="fd-items">
                                            <span class="fd-note">konaklama</span>
                                            <span class="fd-note">Elektrik</span>
                                            <span class="fd-note">Su</span>
                                            <span class="fd-note">Doğalgaz</span>
                                            <span class="fd-note">İnternet</span>
                                            <span class="fd-note">Giriş temizliği</span>
                                            <span class="fd-note">Havuz temizliği</span>

                                        </p>
                                    </div> -->
                                    <div class="button-cont">
                                        <button class="button txt_w bg-primary-normal-gradient g-button is-medium is-fullwidth" @click="makeRez" > Rezervasyon Yap</button>
                                        
                                    </div>
                                    
                                    <!-- <div class="columns is-mobile bk-likes">
                                        <Like :id="vil.id"  :count="vil.vil_like" :title="false" />
                                    </div> -->
                            </div>
                            
                        </div>
</template>

<script>
import Calendar from '../../components/tr/calendar';
import Guests from './guestPicker';
import Like from '../templates/villaLike';
import Spinner from '../tools/Spinner';
export default {
  
    components: { Calendar, Guests, Like, Spinner },
    data(){
        return {
            price:null,
            spn:false,
            showTakvim:false,
            myStyle: {},
            originalTop: 0, 
            userer:false,
            fromer:false,
            toer:false,        
            misr:false,
            showGuest:false,
            Guests:null,
            guestPlc:null,
            date1:null,
            date2:null
        }
      },
    props: {
        vil:Object,
        top:{
            default:null
        },
        scrollY:{
            default:null
        },
    },
  mounted() {
           const date1 = localStorage.getItem('from');
           const date2 = localStorage.getItem('to');
         
               if(date1!='null' && date2 !='null'){  
               console.log(date1,date2); 
              this.date1 = date1;
               this.date2 = date2;
         
           }
     
        this.originalTop = this.$el.getBoundingClientRect().top;
      },
    watch: {        
         date2:function(val) {         
           if(val){
               this.getPrice();   
               this.fromer = false;
               this.toer   = false;           
           } else {
               this.price = null
           }                
        },
      },

      methods: {

          makeRez(){
                 this.misr = false;  
                 if( !this.Guests || this.Guests.adult ==0 ){
                   this.userer = true;
                   return false
                 } if(!this.date1){
                     this.fromer =true;
                     return false
                 }
                 if(!this.date2){
                     this.toer =true;
                     return false
                 }

                 if(parseInt(this.Guests.adult)+ parseInt(this.Guests.child) > this.vil.vil_kapasite){
                       this.misr= true;
                       return false;
                 }

                   this.$router.push({ name: 'rezervasyon', query: {
                       id:this.vil.id,
                       from : this.date1,
                       to: this.date2,
                       adult: this.Guests.adult,
                       child: this.Guests.child,
                       baby : this.Guests.baby
                   }})
          },

          getPrice(){
              this.spn = true;
              this.$axios.post('/price-calculate', {'id':this.vil.id, 'from':this.date1, 'to':this.date2 }).then(resp => {
                  this.price = resp.data;
                  console.log(resp.data)
                  this.spn = false;
              });
          },
          closeModals(){
              setTimeout(() => {
                  this.showTakvim = false;
                  this.showGuest = false;
              },300);
          },
           getData(i){
         // 
             this.Guests = i;
             this.userer = false;         
             this.guestPlc = i.plc;         
                setTimeout(() => {
                    this.showGuest = false;
             }, 300);
          },
      },

   
}
</script>

<style scoped>
        .search-guests-wrap {
    min-width: 260px;
    text-align: left;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #d8dce1;
    padding: 20px;
    position: absolute;border: 1px solid #d8dce1;
    z-index: 9;
    right: 0;
    top: 50px;
}

.search-calendar {    
           -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
         }

       @media (max-width:1000px) {
         .search-calendar{
    transform: none;
}
           .price-list .level {
                    margin-bottom: 10px;
                }

                .level-right {
    margin-top: 0px !important;
}

.search-guests-wrap {
    text-align: left;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #d8dce1;
    padding: 20px;
    position: absolute;border: 1px solid #d8dce1;
    right: 0;
    z-index: 99;
}
       }

         
         .price-list {
    font-weight: 600;
    color: #37474F;
}

span.fd-note {
    font-weight: 400;
    padding: 0px 5px;
    border-right: 1px solid;
    color: #607D8B;
    line-height: 16px;
    margin-right: 5px;
    border-right: solid 1px #878c94;
    padding-right: 5px;
}


.price-calcs {
    margin-bottom: 10px;
    margin-top: 15px;
    padding: 10px;
    border-radius: 0;
    background: #fff  !important;
    
}

.fd-cont {
    padding: 10px;
    margin-bottom: 20px;
}
.ub-price {
    width: 50%;
}
.u-book-price2 {
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    display: flex;
}

.vl-coms span {
    font-size: 12px;
   
    text-align: right;
}
.vl-stars span::before {
    color: #ff9800;
    font-size: 14px;
}

.list-inline.rating.hidden-xs.item-stars {
    width: 50%;
    text-align: revert;
    text-align: right;
}

button.button.txt_w.bck3.confirm-button.is-medium.is-fullwidth {
    background: #156bc1;
    color: #fff;
}

.columns.is-mobile.bk-likes {
    margin-top: 15px;
    text-align: center;
    padding: 10px;
}
</style>