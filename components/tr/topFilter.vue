<template>
    <div class="container">
        <div class="tf-title">
            <h6>Filtreler</h6>
        </div>
        <div class="tofilter-wrapper" v-if="this.$store.state.base">
            

            
            <div class="buttons">
                <!-- kategoti filter  -->
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger >
                        <b-button  ref="filter_cat"  class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Villa Tipi</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                           <div aria-role="menu-item" class="filter-dd">
                                  <div class="fiter-items-wrap" >
                                <div class="filter-items">
                                    <label v-for="(item, i) in this.$store.state.base.kategoriler" :key="i"  class="check-container" >
                                    <span >{{item.kat_adi}}</span>
                                    <input :checked="sKats.includes(item.id)" type="checkbox"  @change="checkKat(item)">
                                    <span class="checkmark"></span>
                                   </label>
                                </div> 
                                  </div>
                                <div class="filter-buton-cont" >
                                    <b-button size="is-small" class="button button-clear"  v-on:click="clearCategory">Temizle</b-button>
                                    <b-button size="is-small" class="button button-small bg-primary-normal-gradient sec-buton text-white"  v-on:click="sendFilter">Filtrele</b-button>
                                </div>
                            </div>
                    </b-dropdown-item>
                </b-dropdown>
                 <!-- kategory filter end -->


                  <!-- bolge filter  -->
                <!-- <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger>
                        <b-button class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Villa Tipi</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                           <strong>Villa Seçenekleri</strong>
                    </b-dropdown-item>
                </b-dropdown> -->
                 <!-- bolge filter end -->



                  <!-- bolge filter  -->
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger >
                        <b-button ref="filter_bol" class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Bölgeler</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                        <div aria-role="menu-item" class="filter-dd">
                            <div class="fiter-items-wrap">
                               <div class="filter-items">
                                    <label v-for="(item, i) in this.$store.state.base.bolgeler" :key="i"  class="check-container" >
                                    <span >{{item.bo_adi}}</span>
                                    <input :checked="sBolge.includes(item.id)" type="checkbox"  @change="checkBolge(item)">
                                    <span class="checkmark"></span>
                                   </label>
                                </div> 
                            </div>
                                <div class="filter-buton-cont" >
                                    <b-button size="is-small" class="button button-clear"  v-on:click="clearBolge">Temizle</b-button>
                                    <b-button size="is-small" class="button button-small bg-primary-normal-gradient sec-buton text-white"  v-on:click="sendFilter">Filtrele</b-button>
                                </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
                 <!-- bolge filter end -->
 <!-- kişi filter  -->
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger >
                        <b-button ref="filter_guest" class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Misafir</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                        <div aria-role="menu-item" class="filter-dd guest_filter_ddd">
                           <Guests   @cBack="i => getGuests(i)" :filter="true" />
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
                 <!-- kişi filter end -->


                  <!-- Fiyat filter  -->
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger>
                        <b-button ref="filter_price" class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Fiyat Aralığı</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                           <div class="price-dd">
                               <div class="price-slider">
                                   <b-field label="Gecelik fiyat aralığı">
                                        <b-slider type="is-info" v-model="priceRange" size="is-small"  :tooltip="false" :step="100"   :min="200" :max="20000"  ></b-slider>
                                    </b-field>
                               </div>
                               <div class="price-inp is-flex-direction-column">
                                   
                                   <b-field>
                                    <b-input placeholder="En az"
                                      :value="priceRange[0].toString() +'TL'"
                                        >
                                    </b-input>
                                    <span>&nbsp; &nbsp;</span>
                                    <b-input placeholder="En Çok"
                                     :value="priceRange[1].toString()+'TL'"
                                        >
                                    </b-input>
                                </b-field>
                               </div>
                               <div class="filter-buton-cont" >
                                    <b-button size="is-small" class="button button-clear"  v-on:click="clearPrice">Temizle</b-button>
                                    <b-button size="is-small" class="button button-small bg-primary-normal-gradient sec-buton text-white"  v-on:click="sendPriceFilter">Filtrele</b-button>
                                </div>
                           </div>
                    </b-dropdown-item>
                </b-dropdown>
                 <!-- hiyat filter end -->



                  <!-- kategoti filter  -->
                <!-- <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger>
                        <b-button class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Tarih</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                           <strong>Villa Tipi</strong>
                    </b-dropdown-item>
                </b-dropdown> -->
                 <!-- kategory filter end -->



                 

                  <!-- özellik filter  -->
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger >
                        <b-button ref="filter_feature" class=" button is-rounded is-light is-bordered  filter-button " >
                            <span>Özellik</span>                            
                        </b-button>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                        <div aria-role="menu-item" class="filter-dd">
                               <div class="fiter-items-wrap">
                                   <div class="filter-items">
                                    <label v-for="(item, i) in this.$store.state.base.features" :key="i"  class="check-container" >
                                    <span >{{item.oz_name}}</span>
                                    <input type="checkbox" :checked="sOz.includes(item.id)"  @change="checkFeature(item)">
                                    <span class="checkmark"></span>
                                   </label>
                                </div> 
                               </div>
                                
                                <div class="filter-buton-cont" >
                                    <b-button size="is-small" class="button button-clear"  v-on:click="clearFeature">Temizle</b-button>
                                    <b-button size="is-small" class="button button-small bg-primary-normal-gradient sec-buton text-white"  v-on:click="sendFilter">Filtrele</b-button>
                                </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
               
                 <!-- özellik filter end -->
            </div>
          
            
        </div>
        <div class="top-filer-tag-wrapper buttons" v-if="$store.state.base">
             <button class="button is-rounded is-small filter-item" v-for="(item,i) in this.$store.state.base.bolgeler.filter(function(el) {  return sBolge.includes(el.id) })" :key="i" @click="removeItem('bolge', item.id)">
                 {{item.bo_adi}}  <span class="flt-close">x</span>
             </button>
             <button class="button is-rounded is-small  filter-item" v-for="(item,i) in this.$store.state.base.kategoriler.filter(function(el) {  return sKats.includes(el.id) })" :key="i" @click="removeItem('kategori', item.id)">
                 {{item.kat_adi}} <span class="flt-close">x</span>
             </button>
             <button class="button is-rounded is-small  filter-item" v-for="(item,i) in this.$store.state.base.features.filter(function(el) {  return sOz.includes(el.id) })" :key="i" @click="removeItem('ozellik', item.id)">
                 {{item.oz_name}} <span class="flt-close">x</span>
             </button>
            <button v-if="maxPrice" class="button is-rounded is-small  filter-item"  @click="removeItem('price', 1)">
                 {{minPrice}} TL - {{maxPrice}} TL <span class="flt-close">x</span>
             </button>
             <button v-if="guests !=0" class="button is-rounded is-small  filter-item"  @click="removeItem('guest', 1)">
                 {{guests}} Kişi <span class="flt-close">x</span>
             </button>
              <b-button size="is-small" v-if="sKats.length !=0 || sOz.length !=0 || sBolge.length !=0" class="button button-clear"  v-on:click="clearFilter">Filtreleri temizle</b-button>
        </div>
    </div>
</template>

<script>
import CategoryPicker from './categoryPicker.vue'
import Guests from './guestPicker.vue'
export default {
    components: {CategoryPicker, Guests},

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
            datePlc:null,
            priceRange : [200, 3000]
           
        }
    },
    
    props: {
        cBack:Function,
        arama: false,
        
    },


   

    beforeMount(){
     
        //this.getDatas();
       
        // let g = localStorage.getItem('f_g')
        // this.guests = g?parseInt(g):0
        //this.sKats = this.getLocal('f_kategori')
        var filterparams = this.$route.query
        if(filterparams.kats) {
          //  console.log(filterparams.kats.split(",").map(Number))
            this.sKats = filterparams.kats.split(",").map(Number);
            console.log('kats', this.sKats)
        }
        if(filterparams.bolge) {
           // console.log(filterparams.bolge.split(",").map(Number))
            this.sBolge = filterparams.bolge.split(",").map(Number);
        }
         if(filterparams.ozellikler) {
           // console.log(filterparams.ozellikler.split(",").map(Number))
            this.sOz = filterparams.ozellikler.split(",").map(Number);
        }
        if(filterparams.maxPrice) {
           // console.log(filterparams.ozellikler.split(",").map(Number))
            this.maxPrice = parseInt(filterparams.maxPrice);
            this.priceRange[1] = parseInt(filterparams.maxPrice);
        }

        if(filterparams.minPrice) {
           // console.log(filterparams.ozellikler.split(",").map(Number))
            this.minPrice = parseInt(filterparams.minPrice);
            this.priceRange[0] = parseInt(filterparams.minPrice);
        }

         if(filterparams.from) {
           // console.log(filterparams.ozellikler.split(",").map(Number))
            this.from = filterparams.from
            this.date1 = filterparams.date1
        }
         if(filterparams.to) {
           // console.log(filterparams.ozellikler.split(",").map(Number))
            this.to = filterparams.to
            this.date2 = filterparams.date2
            
        }
         if(filterparams.guests) {
           // console.log(filterparams.ozellikler.split(",").map(Number))
            this.guests = filterparams.guests
            
            
        }
       
    },

    methods: {
        removeItem(type,id) {
            if(type=='bolge') {
              var index = this.sBolge.indexOf(id);                    
              if (index !== -1){ this.sBolge.splice(index, 1);} 
            }
            if(type=='kategori') {
              var index = this.sKats.indexOf(id);                    
              if (index !== -1){ this.sKats.splice(index, 1);} 
            }
            if(type=='ozellik') {
              var index = this.sOz.indexOf(id);                    
              if (index !== -1){ this.sOz.splice(index, 1);} 
            }

            if(type=='price') {
              this.maxPrice = null
              this.minPrice = null
              this.priceRange = [200, 3000]

            }
            if(type=='guest') {
              this.guests  = 0 
            }
            
            this.sendFilter()
            
        },
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
        //    mouseOverKat(){
        //        this.showKat = !this.showKat
        //    },
          
        //       mouseOverBo(){
        //        this.showBo = !this.showBo
        //    },
           
        //      mouseOverOz(){
        //       this.showOz = !this.showOz
        //    },
        
          getGuests(b){
       
                 
                this.guests=  b.adult+b.child;
                this.sendFilter()
                // localStorage.setItem('f_g', JSON.stringify(this.guests) )
           },
           clearCategory(){
                 this.sKats = []
                 //this.setLocal('f_kategori', this.sKats )
                 this.sendFilter()
                 //this.$refs.filter_cat.click();
           },
           clearBolge(){
                 this.sBolge = []
                 this.setLocal('f_bolge', this.sBolge )
                 this.sendFilter()
                
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
            checkFeature(item){
            if(this.sOz.includes(item.id)){
                        var index = this.sOz.indexOf(item.id);                    
                        if (index !== -1){ this.sOz.splice(index, 1);}                     
                    } else {
                            this.sOz.push(item.id);                       
                }

                this.setLocal('f_feature', this.sOz )

            },
            clearFeature(){
                 this.sOz = []                
                 this.sendFilter()
                
           },
           clearFilter() {
                this.sKats=[],
                this.sOz=[],
                this.sBolge=[],
                this.sPrice=[],
                this.minPrice=null,
                this.maxPrice=null,
                this.guests=0,
                this.date1=null,
                this.date2=null,
                
                this.year=null,
                this.month=null,
                this.day=null,
                this.from=null, 
                this.to=null,
                this.esnek=false,
                
              this.sendFilter()
           },
           clearPrice() {
               this.maxPrice = null
               this.minPrice = null
               this.sendFilter()
               
           },
           sendPriceFilter(){
               this.maxPrice = this.priceRange[1]
               this.minPrice = this.priceRange[0]
               this.sendFilter()
           },
            checkBolge(item){
            if(this.sBolge.includes(item.id)){
                        var index = this.sBolge.indexOf(item.id);                    
                        if (index !== -1){ this.sBolge.splice(index, 1);}                     
                    } else {
                            this.sBolge.push(item.id);                       
                }

                this.setLocal('f_bolge', this.sBolge )

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
      
        // getDatas(){
        //      this.$axios.get('/teklif-al').then(resp => {
        //          this.veri = resp.data;
        //          console.log('filtre',resp.data);
        //     });
       // },

       
        sendFilter(){
              
              
                let qSet =  { 
                    guests:this.guests,
                    from:this.date1,
                    to:this.date2,
                    minPrice :this.minPrice,
                    maxPrice :this.maxPrice
                };     
                //  this.sKats.length>0?qSet['kats'] = this.sKats.join(','):'';
                //   this.sOz.length>0?qSet['ozellikler'] = this.sOz.join(','):'';
                //   this.guests !==0?qSet['guests']:'';
                //  minPrice: this.minPrice;
                //  maxPrice : this.maxPrice;   
                if(this.sKats.length>0)     {
                    qSet['kats'] = this.sKats.join(',')
                } else {
                    qSet['kats'] = null
                    
                }
                if(this.sOz.length>0)     {
                    qSet['ozellikler'] = this.sOz.join(',')
                } 
                 else {
                    qSet['ozellikler'] = null
                    
                }
                if(this.sBolge.length>0){
                    qSet['bolge'] = this.sBolge.join(',');
                }
                else {
                    qSet['bolge'] = null
                    
                }
                
                // if(this.minPrice) {
                //     qSet['minPrice'] = this.minPrice;
                // }
                //  if(this.maxPrice) {
                //     qSet['maxPrice'] = this.maxPrice;
                // }
                   
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


.filter-dd {
    padding: 5px;
    width: 250px;
}

.filter-dd.guest_filter_ddd {
    padding: 5px;
    width: 350px;
}

.filter-buton-cont {
    margin-top: 10px;
    border-top: 1px solid #eee;
    padding-top: 10px;
    margin-top: 10px;
    text-align: right;
} 
 .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
}
.check-container input:checked~.checkmark {
    background-color: #78909c;
}

.check-container:hover input~.checkmark {
    background-color: #ccc;
}

.price-dd {
    width: 360px;
    padding: 10px;
}

.fiter-items-wrap {
    max-height: 350px;
    overflow: auto;
}

@media screen and (max-width: 1024px) {
   .filter-dd {
    padding: 5px;
    width: auto;
}
.filter-dd.guest_filter_ddd {
    padding: 5px;
    width: auto;
}
.price-dd {
   width: auto; 
    padding: 10px;
}
.fiter-items-wrap {
    height: 400px;
    overflow: auto;
}

.tofilter-wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.tofilter-wrapper {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.tofilter-wrapper {
    overflow-x: auto;
}
.tofilter-wrapper .buttons {
    flex-wrap: nowrap;
}
}

.tf-title {
    margin-left: 10PX;
    color: #607d8b;
}

span.flt-close {
    margin-left: 10px;
}
.top-filer-tag-wrapper.buttons {
    margin-top: 15px;
}

.top-filer-tag-wrapper.buttons .button {
    color: #607d8b;
}
</style>