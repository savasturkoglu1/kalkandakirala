<template>
     <div class="u-book-wrap a-box" :style="myStyle">
                            <div class="u-book-price">
                                <div class="ub-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                     <span class="ub-coast" itemprop="price" :content="vil.minPrice?vil.minPrice:'0'"> {{vil.minPrice?vil.minPrice:'0'}}</span>
                                    <span class="ub-currency"  itemprop="priceCurrency" content="TRY"><i class="fal fa-lira-sign"></i></span>
                                    <span class="un-den">'den başlayan fiyatlarla</span>
                                </div>
                            </div>
                            <div class="u-book-body " >
                                <div class="columns is-multiline">
                                    <div class="column is-6 pr">
                                        <div :class="fromer?'search-feed  pr feed-er  ':'search-feed    pr'"   v-on:click="()=> {this.showTakvim = true}">
                                         <i class="far fa-calendar-alt"></i>
                                        <input name="arrive" :value="date1" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Giriş">
                                      </div>
                                      <div class="search-calendar clearfix"  v-if="showTakvim" >
                                          <Calendar  :vilId="vil.id" @cBack="(a,b) => {this.date1 = a, this.date2 = b,this.showTakvim = false }" />
                                         
                                    </div>
                                    </div>
                                     <div class="column is-6">
                                         <div :class="toer?'search-feed  pr feed-er ':'search-feed    pr'"  v-on:click="()=> {this.showTakvim = true}">
                                        <i class="far fa-calendar-alt"></i>
                                        <input name="depart" :value="date2" readonly="" type="text" class="form-k check_out_date" autocomplete="off" placeholder="Çıkış">
                                       </div>
                                     </div>
                                      <div class="column is-12 ">
                                           <div :class="userer?'search-feed column  is-12 pr feed-er':'search-feed   column  is-12  pr'"   v-on:click="()=> {this.showGuest = true}">
                                         <i class="far fa-user"></i>   
                                                                     
                                       <input name="arrive" :value="guestPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Misafir Sayısı">
                                       <div v-if="showGuest" >
                                           <Guests   @cBack="i => getData(i)" :book="true" />
                                      </div> 
                                    </div>
                                      </div>

                                     </div>
                                    <div class="alert" v-if="fromer || toer || userer">Lütfen tüm alanları doldurunuz</div>
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
                                             <nav class="level">
                                                 <div class="level-left"> Ön ödeme </div>
                                                 <div class="level-right"> {{price.kaparo}} {{price.currency}} </div>
                                            </nav>
                                             <nav class="level">
                                                 <div class="level-left"> Depozito </div>
                                                 <div class="level-right"> {{price.data.vil_depozito}} {{price.currency}} </div>
                                            </nav>
                                           </div>
                                              <span class="icon"><i class="fas fa-star"></i></span>
                                             <span >Şimdilik hiç bir ödeme yapmayacaksınız !</span>

                                              <span v-if="price && price.is_free == false" class="text-red">
                                                  Bu villa seçili taihlerde uygun değildir lütfen rezervayon yapmak için farklı bir periyot seçiniz
                                             </span>
                                       </div>
                                       
                                    </div>
                                    <div class="button-cont">
                                        <button class="button is-primary confirm-button is-medium is-fullwidth"  @click="makeRez" > Rezervasyon Yap</button>
                                      
                                    </div>
                                    
                                    <div class="columns is-mobile">
                                        <div class="column">
                                               <Like :id="vil.id"  :count="vil.vil_like"  />
                                        </div>
                                        <div class="column has-text-right">
                                                   <Sosyal
                                                      :conf="{
                                                       url:this.$route.fullPath,
                                                       title: vil.vil_adi
                                                
                                                    }" />   
                                        </div>
                                    </div>
                            </div>
                        </div>
</template>

<script>
import Calendar from '../../components/tr/calendar';
import Guests from './guestPicker';
import ClickOutside from 'vue-click-outside';
import Sosyal from '../templates/SocialSharing';
import Like from '../templates/like';
import Spinner from '../tools/Spinner';
export default {
     directives: {
        ClickOutside,
       
    },
    components: { Calendar, Guests, Sosyal,Like, Spinner },
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
            //    console.log(date1,date2); 
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
             if(this.date1 && this.date2) {
                  this.spn = true;
                this.$axios.post('/price-calculate', {'id':this.vil.id, 'from':this.date1, 'to':this.date2 }).then(resp => {
                    this.price = resp.data;
                    this.spn = false;
                    if(!this.price.is_free) {
                        this.date1 = null;
                        this.date2 = null;
                    }
                });
             }
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
.text-red {
    color: red;
}
.u-book-body .column {
    padding: 5px;
}
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
       @media (max-width:1000px) {

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

       .u-book-wrap {
    padding: 0;
    background: #fff;
    margin-bottom: 30px;
    border: 3px solid #607d8b2e;
    border-radius: 5px;
}

.u-book-price {
    padding: 20px 30px 15px;
    background-color: #fff;
    color: #E91E63;
    
    font-weight: 600;
}
</style>