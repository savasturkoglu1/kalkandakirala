<template>
      <div class="container"  >
          <div class="columns sb-wrapper is-centered">

         
         
<!-- <b-dropdown aria-role="list">
            <template #trigger="{ active }">
                <b-button
                    label="Click me!"
                    type="is-primary"
                    :icon-right="active ? 'menu-up' : 'menu-down'" />
            </template>


            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>
        v-on:click="()=> {this.show = this.show ==2?false:2}" -->
               <b-dropdown class="column sb-level2 is-3 pr"  aria-role="menu">
                   <template #trigger="{ active }" >
                      <div   class="search-inp sl-sol pr"  ref="location_dd" >
                       <i class="flaticon-pin"></i>
                       <input name="arrive" :value="locPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tatil Bölgesi">
                    <button v-if="locPlc != null" class="input-clear" @click="clearLoc()">X</button>
                   </div>
                   </template>
                    <b-dropdown-item
                        aria-role="menu-item"
                        
                        custom
                        paddingless>
                   <div aria-role="menu-item" class=" sb-level2 mobil-fix-options sb-loc " >
                     <Location   @cBack="(i,j) => getLoc(i,j)"  />
                  </div>   
                    </b-dropdown-item>
              </b-dropdown>
               <b-dropdown class="column  is-4 sb-level2 pr" aria-role="menu" :can-close = "['escape']"   >
                      <template #trigger="{ active }"  >
                       <div class="search-inp  pr"  ref="calendar_dd" >  
                           <!-- v-on:click="()=> {this.show =  this.show ==1?false:1}" -->
                            <i class="flaticon-calendar"></i>
                             
                            <input name="arrive" :value="date1&&date2?datePlc:''" readonly="" type="text" class=" text-large form-k check_in_date" autocomplete="off" placeholder="Tarih Aralığı">
                            <button class="button is-light" v-if="daydif != null "> {{daydif}} gece </button>
                          
                           <!-- <div class="s-date">
                                 <i class="flaticon-check-in"></i>|| isNaN(daydif) == false  
                                <div class="i-cont">
                                    <label v-if="date1">Giriş tarihi</label>
                                     <input name="arrive" :value="date1" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Giriş tarihi">
                                </div>
                           </div>
                           <div class="s-date">
                                 <i class="flaticon-check-out"></i>
                                 <div class="i-cont">
                                    <label v-if="date1">Giriş tarihi</label>
                                     <input name="arrive" :value="date2" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Çıkış tarihi">
                                </div>
                           </div> -->
                        </div>
                       </template>
                       <b-dropdown-item
                        aria-role="menu-item"
                        
                       
                        
                        custom
                        paddingless>
                       <div class="calendar-dd mobil-fix-options sb-level2 "   >
                             <Calendar   @cBack="(a,b,e,d) => { this.getDates(a,b,e,d)}" @flexDates="(a,b,c,d)=>{this.getFlexDates(a,b,c,d)}" @close ="() => { this.$refs.calendar_dd.click(); }" />
                                        
                      </div>
                       </b-dropdown-item>
               </b-dropdown>
             
              <b-dropdown class="column  is-3 sb-level2 pr" aria-role="menu">
                      <template #trigger="{ active }" >
                         <div class="search-inp sl-sol pr" ref="guest_dd" >
                            <i class="flaticon-user"></i>
                            <input name="arrive" :value="guestPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Misafir Sayısı">
                        </div>
                         </template>
                       <b-dropdown-item
                        aria-role="menu-item"
                        
                        custom
                        paddingless>
                        <div class=" sb-level2 mobil-fix-options sb-guest"  >
                                <Guests   @cBack="i => getGuests(i)" />
                        </div> 
                        </b-dropdown-item>   
              </b-dropdown>
              
               <div class="column sb-level2  is-2  pr">
                    <div class="sb-buton " >
                        <button type="button" class="bg-primary-normal-gradient button s-button g-button" @click="ara">
                            <span class="icon">
                                 <i class="flaticon-search"></i>
                            </span>
                           <span>
                               {{tip=='arama'?'Villa Ara':'Filtrele'}}
                           </span>
                        
                         </button>
                    </div>
                   
               </div>
               <div class="filters-wrap" v-if="show==4">
                    <MoreFilter   @cBack="i => getMore(i)"  />
                </div>
                    
             
      
           </div>
           <!-- <div class="dec">
               <strong>Popüler aramalar:</strong>
               <b>Muhafazakar villalar</b>
               <b>Özel hazulu villalar</b>
           </div> -->
    </div>
</template>

<script>
import Calendar from './detepicker';
import Guests from './guestPicker';
import Location from './locPicker';
import MoreFilter from './moreFilter';

export default {
    components: {
        Calendar,
        Guests,
        Location,
        MoreFilter
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
            active:false,
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
            daydif : null,
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
    //    if(window.innerWidth>1001){
    //         $("#scontainer").click(function(){
    //         $('html, body').animate({
    //        scrollTop: $("#scontainer").offset().top-20
    //         }, 700);
    //         });
    //    }
    
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

        //    let bolgedIds =JSON.parse(localStorage.getItem('selectedBolge'));
        //    let bolgePlc  =JSON.parse(localStorage.getItem('selectBolgePlc'));
        //    if(bolgedIds){
        //         this.locPlc = bolgePlc;
        //         this.slectedLocations = bolgedIds;
        //    }     
        }
   }, 
    // created(){
    //     this.getSearch();
    // },
    methods: {
        clearLoc() {
            this.locPlc = null;
            this.slectedLocations= [];
           
            
             this.filtreData['bolge'] = [];

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
        getMore(i){
            this.filtreData = { ...this.filtreData, ...i }
             this.show = false;

             
        },
        getDates(a,b, e,d){
             
              this.date1                 = a;
              this.date2                 = b;
              this.esnek                 = e;
              this.daydif                = d;
              this.filtreData['year']    = null;
              this.filtreData['month']   = null;
              this.filtreData['day']     = null;
              this.filtreData['from']    = a;
              this.filtreData['to']      = b;
              this.filtreData['esnek']   = e;
              this.show                  = false;
              let esnek                  = e?'+-3 gün':'';
              this.datePlc               = a+' - '+b + esnek;
              if(a!=null) {
                  this.$refs.calendar_dd.click();
              this.$refs.guest_dd.click();
              }
              
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
            this.$refs.calendar_dd.click();
            this.$refs.guest_dd.click();
        },
         clearData(){
           this.date1 = null
           this.date2 = null
           this.show = false
        
         },
         getGuests(i){
         // 
             this.Guests = i;         
             this.guestPlc = i.plc;         
                setTimeout(() => {
                    this.show = false;
             }, 300);

             this.filtreData['guests'] = i.adult+i.child;
             this.$refs.guest_dd.click();
            //   
          },
         getLoc(i,j){
             this.locPlc=j;
             this.slectedLocations= i
           
            
             this.filtreData['bolge'] = i.join(',');
             this.$refs.location_dd.click();
             this.$refs.calendar_dd.click();
           },
        // getSearch(){
        //     this.$axios.get('/kategoriler', {headers:{'lang':'tr'}}).then(resp => {
        //             this.kats = resp.data;
        //     });
         
        // }
    }
}
</script>

<style >

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
    height: 100%;

    margin-right: 3px
;
}
.sb-level-right {
    width: 25%;
}
.form-k2 {
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
    
    
   
   
    width: 400px;
  
  
     box-shadow: 1px 1px 16px 2px #00000021;
}
.sb-loc {
        left: auto;
    transform: none;
   
    padding:  10px 0px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
    
    left: 0;
     min-width: 400px;
    position: relative;
    margin: 0;
    z-index: 99;
    
     /* border: 1px solid #d8dce1;
    box-shadow: 1px 5px 14px 3px #0000002b; */
}
     .search-inp {
  
  display: flex;
  width: 100%;
  height: 60px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  color: #555555;
  background-color: #fff;
 
  
    border-radius: 6px;
 
  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  box-shadow: 0 3px 8px 0 rgb(18 5 41 / 20%);
 
}

.search-inp i::before {
    
    font-size: 28px;
    margin-right: 5px;
    color: #455a64;
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
    margin-top: 5px;
    padding: 2px;
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
    background: #fff0;
}

/* .search-inp {
    display: -webkit-box;
    display: flex;
    width: 100%;
    height: 64px;  
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    color: #555555;
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #ccc3;
        box-shadow: 0 4px 6px 0 rgba(55,64,77,0.14);
        border: solid 1px #878c94;
} */
.sb-level.pr {
    margin-bottom: 10px;
}
.sb-level.mobil-fix-options.sb-guest {
    padding-top: 70px;
}

}

.sb-wrapper  {
         background-color: transparent;
    box-shadow: none;
    z-index: 5;
    border-radius: 0;
    padding: 1px!important;
    height: 100%;
    border: none;
   
}

@media (min-width: 1000px) {
    
  .sb-wrapper .column {
      padding: 2px;
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

.form-k {
    border: none;
    width: 100%;
    padding: 10px; 
      height: 100%;
    font-size: 16px;
    /* font-weight: 600 !important; */
    color: #263238;
}
.calendar-dd {
   
    left: auto;
    transform: none;
    top: 100%;
    border: 1px
 solid #d8dce1;
    padding: 30px;  
      background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
    width: 800px;
    left: 0;
    margin: 0;
    margin-left: -100px;
    
    z-index: 99;
    box-shadow: 1px 1px 16px 2px rgb(0 0 0 / 13%);

}


.search-inp::before {
    content: "";
    width: 8px;
    height: 60px;
    position: absolute;
    top: 0;
    left: -3px;
    display: block;
    background-image: linear-gradient( 
186deg, #08aeea, #17cec4);
    background-color: #17cec4;
    -webkit-border-radius: 6px 0 0 6px;
    -moz-border-radius: 6px 0 0 6px;
    -ms-border-radius: 6px 0 0 6px;
    border-radius: 6px 0 0 6px;
}

/* .sb-level2 {
    
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #e1e9ed;
    margin-bottom: 0;
    box-shadow: 0 3px 8px 0 rgb(18 5 41 / 20%);
} */


.sb-wrapper i::before {
    font-size: 20px;
    /* margin-top: 12px; */
    /* padding-top: 10px; */
}

.sb-wrapper i{
    
    margin-top: 10px;
  
}
</style>