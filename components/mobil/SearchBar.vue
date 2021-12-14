<template>
      <div class="container" id="scontainer" >

             <b-modal
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
        </b-modal>
          <b-modal
            v-model="locationModal"
            has-modal-card
            full-screen
            :can-cancel="false">
            <div class="modal-card" style="width: auto">
                 <header class="modal-card-head">
                     <button class="button mb-bak-button" @click="closeModals">
                         <i class="flaticon-left-arrow"></i>
                     </button>
                    <p class="modal-card-title"> Bölge Seçiniz</p>
                </header>
                <div class="mm-content">
                      <Location   @cBack="(i,j) => getLoc(i,j)"  />
                </div>   
              
             </div>
            
        </b-modal>
          <b-modal
            v-model="guestModal"
            has-modal-card
            full-screen
            :can-cancel="false">
             <div class="modal-card" style="width: auto">
                 <header class="modal-card-head">
                     <button class="button mb-bak-button" @click="closeModals">
                         <i class="flaticon-left-arrow"></i>
                     </button>
                    <p class="modal-card-title"> Misafir Sayısı Seçiniz</p>
                </header>
                <div class="mm-content">
                      <Guests   @cBack="i => getData(i)" />
                </div>   
              
             </div>
             
          </b-modal>
          <div class="columns sb-wrapper is-centered">

         
         

               <div class="column mb-search-row is-3 pr">
                   <div class="search-inputs-mobile  border-bottom  sl-sol pr"  v-on:click="()=> {this.locationModal=true}">
                       <i class="flaticon-pin"></i>
                       <input name="arrive" :value="locPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tatil Noktası">
                   </div>
                   
              </div>
               <div class="column  is-4 mb-search-row pr">
                       <div class="search-inputs-mobile  border-bottom   pr"  v-on:click="()=> {this.calendarModal = true}">
                            <i class="flaticon-calendar"></i>
                             
                            <input name="arrive" :value="date1&&date2?datePlc:''" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tarih Aralığı">
                           
                        </div>
               </div>
             
              <div class="column mb-search-row is-3  pr">
                         <div class="search-inputs-mobile  border-bottom  sl-sol pr"  v-on:click="()=> {this.guestModal = true }">
                            <i class="flaticon-user"></i>
                            <input name="arrive" :value="guestPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Misafir Sayısı">
                        </div>
                        
              </div>
              
               <div class="column mb-search-row  is-2  pr">
                    <div class="mb-buton " >
                        <button type="button" :class="src?'button s-button  bg-primary-normal-gradient text-w  is-loading':'button bg-primary-normal-gradient text-w s-button '" @click="ara">
                            <span class="icon">
                                 <i class="flaticon-search"></i>
                            </span>
                           <span>
                               {{tip=='arama'?'Villa Ara':'Filtrele'}}
                           </span>
                        
                         </button>
                    </div>
                   
               </div>
             
                    
             
      
           </div>
    </div>
</template>

<script>
import Calendar from '../tr/detepicker';
import Guests from '../tr/guestPicker';
import Location from '../tr/locPicker';

export default {
    components: {
        Calendar,
        Guests,
        Location,
    
    },
    props: {
        cBack:null,
        cEsnek:null,
        bolge:{
            type:Object,
            default:null
        },
        tip: {
         type:String,
         default:'arama'   
        }
    },
    data(){
        return {
            calendarModal:false,
            locationModal:false,
            guestModal:false,
            src:false,
            year:null,
            month:null,
            day:null,
            kats:null,
            bols:null,                        
            show:false,
            date1:null,
            date2:null,
            esnek:false,
            Guests:null,
            guestPlc:null,
            locPlc:null,
            datePlc:null,
            slectedLocations: [],
        filtreData: {
           from:null,
           to:null,
           esnek:false,          
           guests:null,
           bolge:null,
           year:null,
            month:null,
            day:null,          
        }
        }
    },
   mounted(){
       if(window.innerWidth>1001){
            $("#scontainer").click(function(){
            $('html, body').animate({
           scrollTop: $("#scontainer").offset().top-20
            }, 700);
            });
       }
    
     if(this.bolge) {
         this.locPlc = this.bolge.name;
         this.slectedLocations.push(this.bolge.id)
     }

      if(process.client){
           const date1 = localStorage.getItem('from')?localStorage.getItem('from'):null;
           const date2 = localStorage.getItem('to')?localStorage.getItem('to'):null;  
            const e = localStorage.getItem('esnek')?localStorage.getItem('esnek'):null;         
           if(date1===null && date2 ===null){ 
                
                } else {
                    this.date1 = date1;
                   this.date2 = date2; 
                   this.filtreData['from']    =  date1;
                    this.filtreData['to']      =  date2;
                   let esnek = e?'+-3 gün':'';
                   this.datePlc = date1+' - '+date2 + esnek;
                   setTimeout(() => {
                  
                   }, 2000);
                }

           let bolgedIds =JSON.parse(localStorage.getItem('selectedBolge'));
           let bolgePlc  =JSON.parse(localStorage.getItem('selectBolgePlc'));
           if(bolgedIds){
                this.locPlc = bolgePlc;
                this.slectedLocations = bolgedIds;
           }     
        }
   },
    // created(){
    //     this.getSearch();
    // },
    methods: {
         closeModals(){
               this.calendarModal = false;
               this.locationModal = false;
               this.guestModal   = false;
         },
        ara(){        
           this.src= true;
         let obj =this.filtreData;
         Object.keys(obj).forEach(key => {
                if (obj[key] === null) {
                    delete obj[key];
                }
                });
         
          if(this.tip=='filtre'){
                this.$emit('cBack',this.filtreData );
          } else {
               this.$router.push({ name: 'arama', query: this.filtreData})
          }
        },
       
        getDates(a,b, e){
              this.date1                 = a;
              this.date2                 = b;
              this.esnek                 = e;
              this.filtreData['year']    = null;
              this.filtreData['month']   = null;
              this.filtreData['day']     = null;
              this.filtreData['from']    = a
              this.filtreData['to']      = b;
              this.filtreData['esnek']   = e;
              this.show                  = false;
              let esnek                  = e?'+-3 gün':'';
              this.datePlc               = a+' - '+b + esnek;
              this.closeModals()
              
        },

        getFlexDates(a,b,c,d){
            this.datePlc                 = a+'-'+d+'-'+c+' gece';
            this.filtreData['from']      = null
            this.filtreData['to']        = null;
            this.filtreData['esnek']     = null;
            this.filtreData['year']      = a;
            this.filtreData['month']     = b;
            this.filtreData['day']       = c;           
            this.show                    = false;
            this.closeModals()
        },
         clearData(){
           this.date1 = null
           this.date2 = null
           this.show = false
           this.closeModals()
        
         },
         getData(i){
         // 
             this.Guests = i;         
             this.guestPlc = i.plc;         
                setTimeout(() => {
                    this.show = false;
             }, 300);

             this.filtreData['guests'] = i.adult+i.child;
             this.closeModals()
            //   
          },
         getLoc(i,j){
             this.locPlc=j;
             this.slectedLocations= i
             this.show =false;
             this.filtreData['bolge'] = i.join(',');
             this.closeModals()
           },
        // getSearch(){
        //     this.$axios.get('/kategoriler', {headers:{'lang':'tr'}}).then(resp => {
        //             this.kats = resp.data;
        //     });
         
        // }
    }
}
</script>

<style scoped>

.columns.search-bar .column {
    padding: 0px;
}
.sb-level {
    margin-top: 5px;
}
.search-bar {
    text-align: left;
}
.sb-buton {
    height: 100%
}
.sb-level-right {
    width: 25%;
}
.form-k {
    color: #607D8B;
    
    font-weight: 600;
}
.hd-search-wrapper {
    margin-top: 25px;
    margin-bottom: 25px;
}
     .bn {
         background :#f5f5f5;
     }

     .search-bar .search-calendar {
         -webkit-transform: translateX(-0%) !important; 
          transform: translateX(-0%) !important;
     }
     .s-button {
    height: 100%;    width: 100%;
   
}

.sb-guest {
    z-index: 19;
    left: auto;
    right: 0;
    position: absolute;  top: 65px;
    width: 100%;border: 1px solid #d8dce1;
     box-shadow: 1px 1px 16px 2px #00000021;
}
.sb-loc {
        left: auto;
    transform: none;
    top: 65px;
    border: 1px solid #d8dce1;
    padding: 30px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
    
    left: 0;
     min-width: 300px;
    position: absolute;
    margin: 0;
    z-index: 99;

    box-shadow: 1px 5px 14px 3px #0000002b;
}
     /* .search-inputs-mobile {
  
  display: flex;
  width: 100%;
  height: 64px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  color: #555555;
  background-color: #fff;
  background-image: none;
      border: 1px solid #b0bec5;
    border-radius: 4px;
 
  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
 
} */

.search-inputs-mobile i::before {
    
    font-size: 18px;
    margin-right: 5px;
   color:#333;

}


.i-cont {
    position: relative;
}

.s-date {
    display: flex;
    position: relative;
}

.s-date label {
   position: absolute;
   left:10px;
   font-size: 12px;
   font-weight: 400;
   transition: 0.3s;
}



.filters-wrap {
    left: auto;
    transform: none;
    top: 90px;
    border: 1px solid #d8dce1;
    padding: 30px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
   
    left: 0;    right: 0;
    
    position: absolute;
    margin: 0;
   z-index: 999;
    z-index: 99;
   
}


@media (max-width: 1000px) {
     .hd-search-wrapper {
    margin-bottom: 20px;
    margin-top: 25px;
    padding: 10px;
}
    .sb-buton {
    width: 100%;
    box-shadow: 0 4px 6px 0 rgba(55,64,77,0.14);
}

.sb-buton .button {
    width: 100%;height: 50px;
}
    .sl-sol {
     margin-right: 0px; 
}
.sb-level-right {
    width: 100%;
    display: flex;
}
.mf-wrap {
    max-height: 100%;
    overflow: hidden;
    overflow-y: auto;
}
.sb-loc {
  left: auto;
  -webkit-transform: none;
  transform: none;
  top: 55px;
  border: 1px solid #d8dce1;
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 4px;
  z-index: 7;
  width: 100%;
  left: 0;
  -webkit-transform: none;
  transform: none;
  position: absolute;
  margin: 0;
  z-index: 99;
}
.filters-wrap{
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
    left: 0;
    right: 0;
    position: absolute;
    margin: 0;
    z-index: 999;
    z-index: 99;
}

 .form-k {
    color: #607D8B;
    font-weight: 600;
}

input.form-k {
    background: #fff;
}

/* .search-inputs-mobile {
   display: flex;
    width: 100%;
    height: 48px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    color: #555555;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid rgba(204,204,204,0.2);
    box-shadow: 0 4px 6px 0 rgb(55 64 77 / 14%);
    border: solid 1px #878c94;
    border: 1px solid #e6e6e6;
    flex: 0 1 auto;
    box-shadow: none;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 8px;
    background-color: #fcf5ee;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #156bc1;
    text-align: left;
    white-space: nowrap;
    box-sizing: border-box;
    height: 46px;
    display: flex;
    min-width: 100px;
    align-items: center;
    overflow: hidden;
} */
.sb-level.pr {
    margin-bottom: 10px;
}
.sb-level.mobil-fix-options.sb-guest {
    padding-top: 70px;
}

}

@media (min-width: 1000px) {
    .sb-wrapper  {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 9px #0003;
    z-index: 5;
    background: 0 0;
    border-radius: 12px;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background-color: rgba(255,255,255,.5);
    padding:  10px!important;
    height: 100%;
}
  .sb-wrapper .column {
      padding: 5px;
  }
    .sb-sol {
    border-radius: 30px 0 0 30px;
       }.sb-sag {
    border-radius: 0 30px 30px 0;
       }

   

.columns.search-bar {
    background: #00000052;
    padding: 10px 15px;
    border-radius: 45px;
    margin: 0px;
}
}



.search-calendar.mobil-fix-options.sb-level {
    padding-top: 60px;
}

.s-button {
      
    color: #fff;
    border:none;
    border-radius:8px;
    height: 54px;
    font-size: 20px;
    font-weight: 600;
}

.search-loc {
    padding: 15px;
}
.sec-buton-cont {
    position: absolute;
    bottom: 70px;
    right: 20px;
}


.sb-modal-content {
    padding: 10px;
}



.search-inputs-mobile{
    display: flex;
    width: 100%;
    height: 54px;
    padding: 6px 12px;
    font-size: 14px;
    
    color: #333;
    background-color: #ffffff;
    background-image: none;
   
    box-shadow: 0 4px 6px 0 rgb(55 64 77 / 14%);
   
    flex: 0 1 auto;
    box-shadow: none;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 0px;
 
   
    line-height: 20px;
    font-weight: 600;    
    text-align: left;
    white-space: nowrap;
    box-sizing: border-box; 
    display: flex;
    min-width: 100px;
    align-items: center;
    overflow: hidden;
}
</style>