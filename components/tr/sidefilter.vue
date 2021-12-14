<template>
    <div class="side-filter">
         <!-- <b-modal
            v-model="calendarModal"
            has-modal-card
            full-screen
            :can-cancel="false">
             <div class="modal-card" style="width: auto">
                 <header class="modal-card-head">
                     <button class="button mb-bak-button" @click="closeModals">
                         <i class="flaticon-left-arrow"></i>
                     </button>
                    <p class="modal-card-title"> Tarih Seçiniz </p>
                </header>
                <div class="mm-content sb-modal-content">
                      <Calendar   @cBack="(a,b,e) => { this.getDates(a,b,e)}" @flexDates="(a,b,c,d)=>{this.getFlexDates(a,b,c,d)}" />
                </div>   
              
             </div>
        </b-modal>  -->
        <div class="mf-wrap">
              <!-- filter row -->
            <div class="mf-row">
             <h4>Tarih Aralığı </h4>
                       
               <div class="ub-dates">
                    <div :class="false?'search-feed  pr feed-er  sl-sol':'search-feed  sl-sol  pr'"   v-on:click="()=> {this.showTakvim = !this.showTakvim}">
                            <i class="flaticon-calendar-4"></i>
                        <input name="arrive" :value="datePlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tarih aralığı">
                    </div>
                    <!-- <div :class="false?'search-feed  pr feed-er  sl-sag':'search-feed  sl-sag  pr'"  v-on:click="()=> {this.showTakvim = !this.showTakvim}">
                        <i class="far fa-calendar-alt"></i>
                        <input name="depart" :value="date2" readonly="" type="text" class="form-k check_out_date" autocomplete="off" placeholder="Çıkış">
                    </div> -->
                    <div class="search-calendar mobil-fix-options clearfix"  v-if="showTakvim" >
                            <Calendar   @cBack="(a,b,e) => { this.getDates(a,b,e)}" @flexDates="(a,b,c,d)=>{this.getFlexDates(a,b,c,d)}" />
                            
                    </div>
                   </div>
            </div> 

            
             <!-- filter row end-->

             <!-- filter row -->
            <div class="mf-row">
         
                        <nav class="columns is-mobile is-multiline">
          <!-- Left side -->
                       <div class="column is-12 guest-label">
                            <span class="calculator-label">Misafir Sayısı</span> 
                            
                        </div>

                        <!-- Right side -->
                            <div class="column is-12 ">
                            <button class=" button button-small" type="button"  @click="setGuest('-')">-</button>
                                 <button class=" button button-small   guest-count  w50 " style="width:100px" type="button">{{guests}}</button>
                             <button class="button button-small" type="button"  @click="setGuest('+')">+</button>
                        </div>
                 </nav>

            </div> 
             <!-- filter row end-->

               
            
              <!-- filter row -->
            <div class="mf-row" >
                <h4>Bütçe Aralığınız / TL </h4>
                <div class="field  dFlex">
                
                <div class="control  has-icons-right">
                    <input class="input" type="number" placeholder="Min Fiyat" v-model="minPrice">
                    <span class="icon is-small is-right">
                    <i class="flaticon-turkey-lira-currency-symbol-1"></i>
                    </span>
                    
                </div>
                <div class="control  has-icons-right">
                    
                    <span class="icon is-small is-right">
                    <i class="flaticon-turkey-lira-currency-symbol-1"></i>
                    </span>
                    <input class="input" type="number" placeholder="Max Fiyat" v-model="maxPrice">
                </div>
                </div>              
            </div> 
             <!-- filter row end -->
          

             <!-- filter row -->
            <div class="mf-row" v-if="veri">
                <h4>Bölgeler</h4>
                   <div :class="showBo?'filter-opts filter-open':'filter-opts' ">
                                  
                        <label v-for="(item, i) in veri.bolgeler" :key="i"  class="check-container" :checked="sBolge.includes(item.id)">
                            <span :class="sBolge.includes(item.id)?'text2':' '" >{{item.bo_adi}}</span>
                        <input type="checkbox"  @change="checkBolge(item)">
                        <span class="checkmark"></span>
                        </label>    
                    </div>
                      <div class="has-text-centered mf-more" @click="mouseOverBo">
                         <i class="flaticon-upload" v-if="showBo"></i>
                         <i class="flaticon-arrow-down-sign-to-navigate" v-else></i>
                    </div>
            </div> 
             <!-- filter row end -->
          

             
            <!-- filter row -->
            <div class="mf-row" v-if="veri" >
                <h4>Kategoriler</h4>
                 <div :class="showKat?'filter-opts filter-open':'filter-opts' ">
                                  
                        <label v-for="(item, i) in veri.kategoriler" :key="i"  class="check-container" :checked="sKats.includes(item.id)">
                            <span :class="sKats.includes(item.id)?'text2':' '" >{{item.kat_adi}}</span>
                        <input type="checkbox"  @change="checkKat(item)">
                        <span class="checkmark"></span>
                        </label>    
                    </div>
                     <div class="has-text-centered mf-more" @click="mouseOverKat">
                         <i class="flaticon-upload" v-if="showKat"></i>
                         <i class="flaticon-arrow-down-sign-to-navigate" v-else></i>
                    </div>
            </div> 
             <!-- filter row end -->
              <!-- filter row -->
            <div class="mf-row" v-if="veri" >
                <h4>Özellikler</h4>
                 <div :class="showOz?'filter-opts filter-open':'filter-opts' ">
                                  
                        <label v-for="(item, i) in veri.ozellikler" :key="i"  class="check-container" :checked="sOz.includes(item.id)">
                            <span :class="sOz.includes(item.id)?'text2':' '" >{{item.oz_name}}</span>
                        <input type="checkbox"  @change="checkOz(item)">
                        <span class="checkmark"></span>
                        </label>    
                    </div>
                    <div class="has-text-centered mf-more" @click="mouseOverOz">
                         <i class="flaticon-upload" v-if="showOz"></i>
                         <i class="flaticon-arrow-down-sign-to-navigate" v-else></i>
                    </div>
            </div> 
             <!-- filter row end -->
           

             <!-- filter row -->
           
             <!-- filter row end -->
                <div class="sec-buton-cont desc">
                       <button  class="button mob" @click="()=> {this.$parent.mFilter= false}" >
                            <span class="icon">
                                <i class="flaticon-left-arrow"></i>
                            </span>
                        </button>
                      <button class="button renk3 " @click="sendFilter" style="width: 50%;">
                               <span class="icon">
                                   <i class="flaticon-search"></i>
                               </span>
                               <span > {{arama?'Ara':'Filtrele'}} </span>
                     </button>  
                </div>  
       </div>
      
    </div>
</template>
<script>
import Calendar from './detepicker';
export default {
    components : {  Calendar },
    data(){
        return {
            veri:null,
            sKats:[],
            sOz:[],
            sBolge:[],
            sPrice:[],
            minPrice:null,
            maxPrice:null,
            guests:0,
            date1:null,
            date2:null,
            showKat:false,
            showBo:false,
            showOz:false,
            showTakvim:false,
              year:null,
            month:null,
            day:null,
             from:null, 
           to:null,
            esnek:false,
            datePlc:null
           
        }
    },
    
    props: {
        cBack:Function,
        arama: false,
    },


    mounted(){
     
        this.getDatas();

        let g = localStorage.getItem('f_g')
        this.guests = g?parseInt(g):0
        //this.sKats = this.getLocal('f_kategori')
    },

    methods: {
        setLocal(t,v){
          localStorage.setItem(t,JSON.stringify(v))
        },
        getLocal(t){
          let p = localStorage.getItem(t)
          return p?JSON.parse(p):[]
        },
         getDates(a,b, e){
              this.date1 = a
              this.date2 = b
              this.esnek = e
              this.year = null;
              this.month = null;
              this.day = null;
              this.from = a
              this.to = b;
              this.esnek = e;
              this.show = false;
              let esnek = e?'+-3 gün':'';
              this.datePlc = a+' - '+b + esnek;
              this.showTakvim = false;
        },

        getFlexDates(a,b,c,d){
             this.datePlc = a+'-'+d+'-'+c+' gece';
             this.from = null
              this.to = null;
              this.esnek = null;
              this.year = a;
              this.month = b;
              this.day = c;
              this.showTakvim = false;
           
            this.show = false;
        },
           mouseOverKat(){
               this.showKat = !this.showKat
           },
          
              mouseOverBo(){
               this.showBo = !this.showBo
           },
           
             mouseOverOz(){
              this.showOz = !this.showOz
           },
        
          setGuest(b){
       
                    if(b=='+'){
                        this.guests= this.guests+1;
                    } 
                    else if(b=='-'){
                        if(this.guests>0){
                            this.guests= this.guests-1;
                        }
                }   

                localStorage.setItem('f_g', JSON.stringify(this.guests) )
           },
           checkKat(item){
            if(this.sKats.includes(item.id)){
                        var index = this.sKats.indexOf(item.id);                    
                        if (index !== -1){ this.sKats.splice(index, 1);}                     
                    } else {
                            this.sKats.push(item.id);                       
                }

                this.setLocal('f_kategori', this.sKats )

            },
            checkOz(item){
                   if(this.sOz.includes(item.id)){
                    var index = this.sOz.indexOf(item.id);                    
                    if (index !== -1){ this.sOz.splice(index, 1);}                     
                   } else {
                        this.sOz.push(item.id);                       
                   }
             },
               checkBolge(item){
                 if(this.sBolge.includes(item.id)){
                    var index = this.sBolge.indexOf(item.id);                    
                    if (index !== -1){ this.sBolge.splice(index, 1);}                     
                   } else {
                        this.sBolge.push(item.id);                       
                   }

             
             },
      
        getDatas(){
             this.$axios.get('/teklif-al').then(resp => {
                 this.veri = resp.data;
                 console.log('filtre',resp.data);
            });
        },

       
        sendFilter(){
              
              
                let qSet =  { 
                    guests:this.guests,
                    from:this.date1,
                    to:this.date2
                };     
                //  this.sKats.length>0?qSet['kats'] = this.sKats.join(','):'';
                //   this.sOz.length>0?qSet['ozellikler'] = this.sOz.join(','):'';
                //   this.guests !==0?qSet['guests']:'';
                //  minPrice: this.minPrice;
                //  maxPrice : this.maxPrice;   
                if(this.sKats.length>0)     {
                    qSet['kats'] = this.sKats.join(',')
                } 
                if(this.sOz.length>0)     {
                    qSet['ozellikler'] = this.sOz.join(',')
                } 
                if(this.sBolge.length>0){
                    qSet['bolge'] = this.sBolge.join(',');
                }
                if(this.minPrice) {
                    qSet['minPrice'] = this.minPrice;
                }
                 if(this.maxPrice) {
                    qSet['maxPrice'] = this.maxPrice;
                }
                   
               this.$emit('cBack',qSet );                
        },
        clean(){
               this.$parent.mFilter= false
        }
    }

}
</script>

<style scoped>
.mf-more {
    cursor: pointer;
    background: #edeff7;
    font-size: 20px;
}
/* .mf-more:hover {
    box-shadow: 0px 0px 15px -5px #00000040
} */
.mf-row .field {
    margin-top: 15px;
    margin-bottom: 10px;
}
.filter-opts.filter-open {
    max-height: none;
    height: auto;
    transition: all 300ms;
}
.filter-opts {
    max-height: 250px;
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 5px;
   max-height: 250px;
   overflow: hidden;
     transition:flex 0.3s ease-out; 
}
.mf-wrap {
    margin-bottom: 95px;
}
  .mf-row {
          margin-bottom: 15px;
    padding: 10px;
    border-radius: 2px;
    background: #fcf5ee;
    border: 1px solid #8975fa1f;
        
  }
  
    .mobil-filter {
    position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px;
}

.mf-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: #f5f5f5;
    left: 0;
    padding: 10px;
}

@media (max-width:1000px){
    .columns.is-multiline.mf-wrap .column {
    padding: 8px;
}

.columns.is-multiline.mf-wrap .button {
    font-size: 12px;
}
}

div#slider-range {
    margin-top: 20px;
    margin-bottom: 10px;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 5px;
}


</style>