<template>
               <div class="search-loc">
                       <!-- <div v-if="!locations" style="height:300px;position: relative;">
                            <Spinner />
                        </div> -->
                        <div class="mf-wrap" v-if="this.$store.state.base">
                                <!-- <label class="check-container menu-item"
                                v-for="(item, i) in this.$store.state.bolgeler" 
                                :key="i" 
                                 
                                :checked="selectedBolge.includes(item.id)">
                                    <h4>{{item.bo_adi}}</h4>
                                    <span  >{{item.bo_il}}</span>
                                <input type="checkbox"  @change="checkBolge(item)">
                                
                                
                                </label> -->
                                <div class="dd-item menu-item"
                                 v-for="(item, i) in this.$store.state.base.bolgeler" 
                                :key="i"
                                @click="selectBolge(item)"
                                >      
                                     <span class="lb-icon">
                                           <i class="flaticon-pin"></i>
                                       </span>
                                       <div>
                                           <strong>{{item.bo_adi}}</strong>
                                           <div>
                                               <span>{{item.bo_il}}</span> - <span>
                                           {{item.count}} Villa
                                       </span> 
                                           </div>
                                       </div>
                                       
                                </div>
                        </div>
                                      
                        <!-- <div class="sec-buton-cont" v-if="!mobile">
                            <button class="button button-clear"  v-on:click="clearData">Temizle</button>
                            <button class="button button-small sec-buton"  v-on:click="select">Seç</button>
                       </div> -->
                       <div class="loc-bottom">
                           <nuxt-link :to="$store.state.trUrls.bolge">

                          
                               <div class="loc-bottom-map">
                                   <div class="loc-bottom-wra">
                                       <span class="lb-icon">
                                           <i class="flaticon-pin"></i>
                                       </span>
                                       <div>
                                           <div>
                                               <h4>Birbirinden Seçkin Tatil bölgeleri !</h4>
                                               <p>Tüm Tatil bölgelerini Görün ->  </p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                             </nuxt-link>
                       </div>
       </div>
</template>
<script>
import Spinner from '../tools/Spinner';
export default {
    components: { Spinner },
    data(){
        return  {
            locations:null,
            selectedBolge:[],
            bolgePlc:[],
            ils:[]
            
        }
    },
    props: {
        mobile: {
            type:Boolean,
            default:false
        },
        lang: {
            default:'tr',
            type:String,
        },
        cBack:{
            type:Function
        }
    },
    mounted(){
       // this.getLocations();
    },
    methods: {
        clearData(){
              this.selectedBolge = [];
              this.bolgePlc = [];
               this.$emit('cBack', this.selectedBolge);
        },
        checkBolge(item){
              if(this.selectedBolge.includes(item.id)){
                    var index = this.selectedBolge.indexOf(item.id);
                     var plc = this.bolgePlc.indexOf(item.bo_adi);
                    if (index !== -1){ this.selectedBolge.splice(index, 1);}
                     if (plc !== -1){ this.bolgePlc.splice(plc, 1);}
                } else {
                        this.selectedBolge.push(item.id);
                        this.bolgePlc.push(item.bo_adi)
              }

                if(this.mobile){
                 this.$emit('cBack', this.selectedBolge);
              }
        },
        selectBolge(item){
                       this.selectedBolge = [];
                       this.bolgePlc = [];
                        this.selectedBolge.push(item.id);
                        this.bolgePlc.push(item.bo_adi);
                        this.$emit('cBack', this.selectedBolge, this.bolgePlc);
        },
        select(){
              if(this.selectedBolge.length>0) {
                      localStorage.setItem('selectedBolge', JSON.stringify(this.selectedBolge));
                      localStorage.setItem('selectBolgePlc', JSON.stringify(this.bolgePlc));
                      this.$emit('cBack', this.selectedBolge, this.bolgePlc);
            } else {
                 this.$parent.show =false;
            }
            
        },
       
    }
}
</script>

<style scoped>
.dropdown-item h4 {
    color: #333;
    font-size: 14px;
}
.lb-icon { margin-right: 5px;}

.lb-icon i::before {
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
    color: #333;
}
.dd-item.menu-item {
    display: flex;
    margin-left: 5px;  
    margin-bottom: 5px;
    padding-left: 10
px
;
}
.loc-bottom-wra {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 130px, var(--gray-extra-light,#f8f8f8) 40%), url("https://www.hometogo.com/assets/driving-distance-teaser.jpg");
    background-position: right center;
    background-size: auto 100%;
}

.dd-item {
    text-align: left;
}

.loc-bottom-wra {
    display: flex;
    padding: 5px
;
    text-align: left;
    border: 1px
 solid #b0bec5;
    margin: auto;
    margin-left: 5px
;
    margin-right: 5px
;
    overflow: hidden;
    border-radius: 5px;
    margin-top: 20px;
}
.mf-wrap {
    max-height: 400px;
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
    .search-loc {
        width: 100%
    /* left: auto;
    transform: none;
    top: 55px;
    border: 1px solid #d8dce1;
    padding: 30px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 4px;
    z-index: 7;
    width: 600px;
    left: 0;
    transform: translateX(-50%);
    position: absolute;
    margin: 0;
    z-index: 99; */
}

@media (max-width:1000px) {
    .mf-wrap {
    max-height: none;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
    display: initial;
    position: relative;
}
}
</style>