<template>
    <div>
         <div v-if="!veri" style="height:300px;position: relative;">
                 <Spinner />
            </div>
            <div v-else class="columns is-multiline mf-wrap">
                  <div class="column is-2">
                       <div class="il-sect"> <h4>Fiyat</h4> </div>
                       <div class="level">
                           <div class="">
                               <div class="note">Gecelik ücret</div>
                                <div class="ub-dates">
                                    <!-- <div class="search-feed sl-sol pr">
                                         <i class="far fa-lira-sign"></i>
                                        <input name="arrive" v-model="minPrice" type="number" class="form-k check_in_date" autocomplete="off" placeholder="Min Fiyat">
                                    </div> -->
                                    <div class="search-feed  pr">
                                        <i class="far fa-lira-sign"></i>
                                        <input name="depart" :value="maxPrice" type="number" readonly class="form-k check_out_date" autocomplete="off" placeholder="Max Fiyat">
                                    </div>                                    
                                </div>
                                 <div class="slidecontainer">
                                        <input type="range" min="0" max="10000" step="50"  class="slider" id="myRange" v-on:change="getSld($event)"  >
                                  </div>
                           </div>
                       </div>
                 </div>
            
                 <div class="column is-4">
                       <div class="il-sect"> <h4>Kategoriler</h4> </div>
                     <div class="buttons">
                              <button v-for="(item, i) in veri.kategoriler" :key="i" :class="sKats.includes(item.id)?'button  is-primary  is-rounded':'button  is-rounded'" @click="checkKat(item)">{{item.kat_adi}}</button>
                    </div>
                 </div>
                  <div class="column is-6">
                    <div class="il-sect"> <h4>Özellikler</h4> </div>
                     <div class="columns is-multiline is-mobile">
                       <div v-for="(item, i) in veri.ozellikler" :key="i"  class="column is-one-third-desktop is-half-mobile">
                                   <button :class="sOz.includes(item.id)?'button  is-fullwidth   is-primary  is-rounded':'button  is-fullwidth  is-rounded'" @click="checkOz(item)">{{item.oz_name}}</button>
                         </div>
                    </div>
                 </div>
                 
                                 
              </div>
              <div class="sec-buton-cont" v-if="!mobile">
                                      <button class="button button-clear"  v-on:click="clearFilter">Temizle</button>
                                     <button class="button button-small sec-buton"  v-on:click="selectFilter">Seç</button>
                 </div>    
    </div>
    
</template>

<script>
// import RangeSlider from 'vue-range-slider'
// // you probably need to import built-in style
// import 'vue-range-slider/dist/vue-range-slider.css'
import Spinner from '../tools/Spinner';
import RangeSlider from '../tools/rangeSlider';
export default {
    components : { Spinner,RangeSlider},
    props :{
        cBack:null,
        mobile: {
            type:Boolean,
            default:false
        },
    },
    data(){
        return {
            veri:null,
            sKats:[],
            sOz:[],
            minPrice:null,
            maxPrice:null
            
        }
    },
    mounted(){
        this.getData(); 
             
    },
    watch: {
          minPrice:function(val){ this.selectFilter();},  
          maxPrice:function(val){ 
              if(this.mobile){
                  this.selectFilter();
              }
          },  
    },   
    methods: {
       getSld(e){ this.maxPrice = e.target.value },
        selectFilter(){
            let data =  {
                 kats:this.sKats.length>0?this.sKats.join(','):null,
                 ozellikler : this.sOz.length>0?this.sOz.join(','):null,
                 minPrice: this.minPrice,
                 maxPrice : this.maxPrice
             };             
             Object.keys(data).forEach(key => {
                if (data[key] == null ) {
                    delete data[key];
                }
                });          
             this.$emit('cBack',data)
        },
        clearFilter(){
            this.sKats = [];
            this.sOz   = [];
            this.minPrice = null,
            this.maxPrice = null
        },
        
        checkKat(item){
           if(this.sKats.includes(item.id)){
                    var index = this.sKats.indexOf(item.id);                    
                    if (index !== -1){ this.sKats.splice(index, 1);}                     
                } else {
                        this.sKats.push(item.id);                       
              }

              if(this.mobile){
                  this.selectFilter();
              }
        },
        checkOz(item){
           if(this.sOz.includes(item.id)){
                    var index = this.sOz.indexOf(item.id);                    
                    if (index !== -1){ this.sOz.splice(index, 1);}                     
                } else {
                        this.sOz.push(item.id);                       
              }
              
              if(this.mobile){
                  this.selectFilter();
              }
        },
        getData(){
            this.$axios.get('/teklif-al').then(resp => {
                 this.veri = resp.data
            });
        }
    }
}
</script>
<style scoped>
.pslider {
    width: 100%;
}

.range-slider-fill {
    background-color: #ff3860;
}
.range-slider-rail, .range-slider-fill {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    height: 6px;
    border-radius: 2px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
span {
    font-style: inherit;
    font-weight: inherit;
}
*, ::after, ::before {
    box-sizing: inherit;
}
.search-bar[data-v-77b5b895] {
    text-align: left;
}
.mf-wrap {
    height: auto;
    overflow: hidden;
    overflow-y: auto;
}
    .il-sect {
    text-align: left;
    padding: 5px;
    margin-bottom: 15px;
    margin-top: 10px;
    border-bottom: 1px solid #eee;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
</style>