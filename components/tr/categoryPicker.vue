<template>
               <div class="search-loc">
                       
                        <div class="mf-wrap">
                                <label v-for="(item, i) in this.$store.state.kategoriler" :key="i"  class="check-container" :checked="selectedBolge.includes(item.id)">
                                    <span  >{{item.kat_adi}}</span>
                                <input type="checkbox"  @change="checkItem(item)">
                                
                                <span class="checkmark"></span>
                                </label>
                        </div>
                                      
                    <div class="sec-buton-cont" v-if="!mobile">
                         <b-button size="is-small" class="button button-clear"  v-on:click="clearData">Temizle</b-button>
                         <b-button size="is-small" class="button button-small bg-primary-normal-gradient sec-buton text-white"  v-on:click="select">Seç</b-button>
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
        this.getLocations();
    },
    methods: {
        clearData(){
              this.selectedBolge = [];
              this.bolgePlc = [];
               this.$emit('cBack', this.selectedBolge);
        },
        checkItem(item){
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
        select(){
              if(this.selectedBolge.length>0) {
                      localStorage.setItem('selectedBolge', JSON.stringify(this.selectedBolge));
                      localStorage.setItem('selectBolgePlc', JSON.stringify(this.bolgePlc));
                      this.$emit('cBack', this.selectedBolge, this.bolgePlc);
            } else {
                 this.$parent.show =false;
            }
            
        },
        getLocations(){
            this.$axios.get('/bolgeler', {headers:{'lang':this.lang}}).then(resp => {
                let ils = [];
                resp.data.map (i => {
                    ils.push(i.bo_il);
                });
               this.ils  = new Set(ils);
                 this.locations = resp.data;
                resp.data.map(i => {
                if(this.selectedBolge.includes(i.id)){
                    this.bolgePlc.push(i.bo_adi);
                }
            })
            })
        }
    }
}
</script>

<style scoped>
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