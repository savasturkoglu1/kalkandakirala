<template>
    <nav class="level  filter-wrap ">
        <div class="level-item ">
          <div class="pr filter-item">
               <div class="search-feed sl-sol pr"  v-on:click="()=> {this.showTakvim = true}">
                         <i class="far fa-calendar-alt"></i>
                         <input name="arrive" :value="date1&&date2?date1+'-'+date2:''" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tarih Aralığı">
                </div>
                 <div class="search-calendar clearfix"  v-if="showTakvim" >
                                          <Calendar   @cBack="(a,b) => {this.date1 = a, this.date2 = b}" />
                                          <div class="sec-buton-cont">
                                          <button class="button button-small sec-buton"  v-on:click="()=> {this.showTakvim = false}">Seç</button>
                        </div>
                  </div>
          </div>
        </div>
        <div class="level-item ">
          <div class="pr filter-item">
               <div class="search-feed sl-sol pr"  v-on:click="()=> {this.showLocation = true}">
                         <i class="fas fa-map-marker-alt"></i>
                         <input name="arrive" :value="locPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tatil Noktası">
                </div>
                <div v-if="showLocation">
                     <Location   @cBack="(i,j) => getLoc(i,j)"  />
                  </div>               
          </div>
        </div>
   
        <div class="level-item ">
          <div class="pr filter-item">
               <div class="search-feed sl-sol pr"  v-on:click="()=> {this.showGuest = true}">
                         <i class="far fa-user"></i>
                         <input name="arrive" :value="guestPlc" readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Misafir Sayısı">
                </div>
                 <div v-if="showGuest" >
                         <Guests   @cBack="i => getData(i)" />
                 </div>               
          </div>
        </div>
        
        <div class="level-item ">
          <div class="pr filter-item">
               <div class="search-feed sl-sol pr"  v-on:click="()=> {this.filtersShow = !this.filtersShow}">
                         <i class="fas fa-sliders-h"></i> 
                    <input name="arrive"  readonly="" type="text" class="form-k check_in_date" autocomplete="off" placeholder="Tüm Fltreler">
                </div>               
          </div>
        </div>
        <div class="filters-wrap" v-if="filtersShow">
              <MoreFilter />
        </div>
        <button class="button is-danger is-medium" @click="filtrele()">Filtrele</button>
      </nav>
</template>

<script>
import Calendar from './detepicker';
import Guests from './guestPicker';
import Location from './locPicker';
import MoreFilter from './moreFilter';
export default {
   components : {
     Calendar, Guests, Location,MoreFilter
   },

  data(){
    return {
        showTakvim:false,          
        showGuest:false,
        showLocation:false,
        filtersShow:false,
        date1:null,
        date2:null,
        Guests:null,
        guestPlc:null,
        locPlc:null,
        slectedLocations: [],
        filtreData: {
          from:null,
          to:null,
          guests:null,
          Location:null,          
        }
    }
  },
  props: {
     cBack : {
       type:Function
     }
  },
  methods: {
        getLoc(i,j){
             this.locPlc=j;
             this.slectedLocations= i
             this.showLocation =false;
             this.filtreData['Location'] = i;
           },
      getData(i){
         // 
             this.Guests = i;         
             this.guestPlc = i.plc;         
                setTimeout(() => {
                    this.showGuest = false;
             }, 300);

             this.filtreData['guests'] = i.adult+i.child;
            //   
          },

          filtrele(){
               this.$emit('cBack', this.filtreData);
          }
  },


}
</script>
<style scoped>

.filters-wrap {
    left: auto;
    transform: none;
    top: 100%;
    border: 1px solid #d8dce1;
    padding: 30px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
   
    left: 0;
    
    position: absolute;
    margin: 0;
    height: 200px;
    z-index: 99;
    left:40px;
    right: 40px
}

.filter-item .search-calendar {
   
    left: 300px !important;
   
}
   
  .filter-item {
    width: 100%;
    padding: 5px;
}
.filter-wrap {
  margin-top: 10px;
  background: #fff;
  position: relative;
}
</style>