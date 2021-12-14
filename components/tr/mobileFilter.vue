<template>
    <div class="mobil-filter">
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
        <div class="mf-wrap">
            <div class="mf-row">
               <input name="arrive" 
                v-on:click="()=> {this.calendarModal = true}"
               :value="date1&&date2?datePlc:''" 
               readonly="" 
               type="text" 
               class="form-k check_in_date" 
               autocomplete="off" placeholder="Tarih Aralığı">

            </div> 
            <div class="mf-row">
                <Guests  :mobile="true"    @cBack="i => getData(i)" />
            </div> 
            <div class="mf-row">
              <Location   :mobile="true"    @cBack="(i) => getLoc(i)" />
            </div> 
            <div class="mf-row">
              <MoreFilter  :mobile="true"     @cBack="i => getMore(i)" />
            </div>   
        </div>
        <div class="mf-bottom">
                
                    <div class="columns is-mobile">  
                    <div class="column is-2">
                            <button  class="button" @click="()=> {this.$parent.mFilter= false}">
                            <span class="icon">
                                <i class="fal fa-chevron-left"></i>
                            </span>
                        </button>
                      </div>     
                      <div class="column is-4">
                             <button class="button"  @click="clean">
                            <span>Temizle</span>
                        </button>
                        </div> 
                        <div class="column is-6">
                              <button class="button is-primary is-fullwidth" @click="sendFilter">
                               <span class="icon">
                                   <i class="fal fa-search"></i>
                               </span>
                               <span > {{arama?'Ara':'Filtrele'}} </span>
                              </button>     
                        </div>         
                    </div>                    
            
        </div>
    </div>
</template>
<script>
import Calendar from './detepicker';
import Guests from './guestPicker';
import Location from './locPicker';
import MoreFilter from './moreFilter';
export default {
    data(){
        return {
             filtreData: {
                    from:null,
                    to:null,
                    esnek:false,          
                    guests:null,
                    bolge:null,
                    year:null,
                    month:null,
                    day:null,   
                    calendarModal:false       
                }
        }
    },
     components: {
        Calendar,
        Guests,
        Location,
        MoreFilter
    },
    props: {
        cBack:Function,
        arama: false,
    },

    methods: {
           closeModals(){
               this.calendarModal = false;
              
         },
         getMore(i){
            this.filtreData = { ...this.filtreData, ...i }            
           },

         getData(i){
             this.filtreData['guests'] = i.adult+i.child;             
          },
         getLoc(i){             
             this.filtreData['bolge'] = i.join(',');
           },
         getDates(a,b, e){           
              this.filtreData['year'] = null;
              this.filtreData['month'] = null;
              this.filtreData['day'] = null;
              this.filtreData['from'] = a
              this.filtreData['to'] = b;
              this.filtreData['esnek'] = e;
              
              
        },

        getFlexDates(a,b,c,d){
            
              this.filtreData['from'] = null
              this.filtreData['to'] = null;
              this.filtreData['esnek'] = null;
              this.filtreData['year'] = a;
              this.filtreData['month'] = b;
              this.filtreData['day'] = c;           
           
        },
        sendFilter(){
              let obj =this.filtreData;
              Object.keys(obj).forEach(key => {
                           if (obj[key] === null) {
                            delete obj[key];
                          }
                });

                
               if(this.arama){
                    this.$router.push({ name: 'arama', query: this.filtreData})
               } else {
                   this.$emit('cBack',this.filtreData );              
               }
                this.$parent.mFilter= false
        },
        clean(){
               this.$parent.mFilter= false
        }
    }

}
</script>

<style scoped>
.mf-wrap {
    margin-bottom: 50px;
}
  .mf-row {
      margin-bottom: 15px;
      
    padding: 10px;
    border: 1px solid #eee;
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
    bottom: 65px;
    width: 100%;
    text-align: center;
    background: #f5f5f5;
    left: 0;
    padding: 10px;
}
</style>