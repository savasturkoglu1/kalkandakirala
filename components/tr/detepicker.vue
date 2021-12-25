
<template>
    <div class="container pr">
         <span v-if="!inline" class="close-button-abs" @click="closeDatePicker"> <i class="fal fa-times"></i> </span>
        <div class="col-md-12">   
            
            <div class="tabs"  v-if="!vilId">
                    <ul>
                        <li :class="show==1?'is-active  bg-primary-normal-gradient':''" @click="showOne"><a>Tarih Aralığı</a></li>
                        <li  :class="show==2?'is-active bg-primary-normal-gradient':''" @click="()=>{ this.show = 2 }"><a>Esnek Tatil Periyodu</a></li>                        
                    </ul>
            </div>
             
            <div v-if="vilId && !periods" style="height:300px;position: relative;">
                 <Spinner />
            </div>
            <div  v-if="show==1">
                  <div class="takvim"></div> 
            </div>
            <div class="" v-if="show==2">
                <div class="columns is-multiline">
                       <!-- <div class="field column is-4">
                        <div class="control">
                            <div class="select is-medium">
                            <select @change="eDates('year', $event)">
                                <option>Hangi yıl</option>
                                <option>{{yil}}</option>
                                <option>{{parseInt(yil)+1}}</option>
                            </select>
                            </div>
                        </div>
                        </div> -->
                         <div class="field column is-4 esnek-dates">
                        <div class="control">
                            <div class="select is-medium">
                            <select @change="eDates('month', $event)">
                                <option>Hangi ay</option>
                                <option v-for="(item, t) in aylar" :key="t" :value="t+1" :labeldata="item" >
                                    {{item}}
                                </option>
                               
                            </select>
                            </div>
                        </div>
                        </div>
                         <div class="field column is-4 esnek-dates">
                        <div class="control">
                            <div class="select is-medium">
                            <select @change="eDates('day', $event)">
                                <option>Kaç gece</option>
                                <option v-for="gg in (1,30)"> {{gg}} </option>
                            </select>
                            </div>
                        </div>
                        </div>
                </div>
                
                <div class="border-top has-text-left">
                <p> Tatil planlaması konusunda karasız mı kaldınız?</p>
                <p> <nuxt-link to="/teklif-al"> <strong>Tıklayın </strong> </nuxt-link> anında size en uyfun villaları önerelim !  </p>
            </div>
            </div>

            
            
           
            
              <div class="sec-buton-cont" v-if="!mobile"> 
                    <button :class="esnek?'button button-small is-primary clear-buton':'button button-small clear-buton'" style="float: left;" v-if="!vilId" @click="()=>{this.esnek = ! this.esnek}"> +-3 gün </button>   
                     <button class="button button-small is-text" v-if="date2 && !inline" @click="clean">Temizle</button>  
                     <button class="button button-small is-text" v-if="month && !inline" @click="clean">Temizle</button> 
                         <button class="button button-small is-bordered is-outlined " v-if="!inline" type="button" @click="closeDatepicker">Kapat</button>                    
                     <button class="button button-small bg-primary-normal-gradient sec-buton text-white" v-if="!inline"  v-on:click="sendDates">Seç</button>
             </div>
        </div>
    </div>
</template>
<script>
//import Axios from 'axios';
import moment from 'moment';
import Spinner from '../tools/Spinner';

export default {   
    components: { Spinner},
    data(){
        return {
            year:null,
            month:null,
            day:null,
            mlabel:null,
            esnek:false,
            periods:null,
            date1:null,
            date2:null,
            spn:false,
            selected:[],
            aylar: [ "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Agustos","Eylül","Ekim","Kasım","Aralık" ],
            show:1,
            yil: moment().format('YYYY').toString(),
            t_size: [1,2]
        
            
        }
    },

    props: {
            size:{ 
            type:Array,
            default: () => ([
            1,
            2,
           
        ]),
        },
        select:{
            type:Boolean,
            default:true,
        },
        vilId:{
            type:Number,
            default:null,
        },
        inline: {
            type:Boolean,
            default:false
        },
         mobile: {
            type:Boolean,
            default:false
        },
        cBack: {
            type:Function,
        },
        close: {
            type:Function,
        },

        flexDates:null,
        
        refresh:{
            default:0,
        }
    },    
    watch: {
        date2:function(val) {         
           if(val){            
               
                  this.call();   
                  this.sendMobile();
                  
              
           }                
        },
        date1:function(val) {         
            this.call();            
        },
        vilId:function(val){
         
           this.yenile();
            },
        refresh:function(val){
           this.yenile();
            },
            year:function(val){ this.sendMobile();},   
            month:function(val){ this.sendMobile();},    
            day:function(val){ this.sendMobile();},     
    },
    created(){
        
    },
    mounted(){
                 
        if(window.innerWidth<1000){
            this.t_size=[1,1];
             }
          if(process.client){
            if(!this.vilId){
                const date1 = localStorage.getItem('from')=='null'?0:localStorage.getItem('from');
              const date2 = localStorage.getItem('to')=='null'?0:localStorage.getItem('to');
         
           if(date1!=0 && date2 !=0){  
              
                this.date1 = date1;
               this.date2 = date2;
           }
            }
          }

          if(this.mobile)  {
              this.t_size = [1,1]
          }
          
       this.call();
          
          
          },
    
    methods: {

        checkDates(dt1,dt2){
            var fromDate = moment(dt1, "DD/MM/YYYY"); 
            var toDate   = moment(dt2, "DD/MM/YYYY"); 
             var now = fromDate.clone(), dates = [];

                    while (now.isSameOrBefore(toDate)) {
                        dates.push(now.format('DD/MM/YYYY'));
                        now.add(1, 'days');
                    }
               

                
                 let dd=   dates.filter(value =>-1 !== this.periods.kapali.indexOf(value));
                   if(dd.length>0){
                      return 1
                   } else {
                       return 0
                   }
              
        },
      eDates(a,e){
          // localStorage.setItem(a, e.target.value);     
           let val  = e.target.value; 
           a=='year'?this.year=val:a=='month'?this.month=val:this.day=val ;
           this.year = '2022'
          if(a=='month'){
             // localStorage.setItem('mlabel', e.target.labeldata);
             
              this.mlabel = this.aylar[val-1];
          } 
      },
        showOne(){
          this.show = 1;
          setTimeout(() => {
                        this.call();

          }, 50);
         },
        yenile(){
             this.getPeriods();            
            $('.takvim').datepicker("destroy");
            setTimeout(() => {  this.call();  }, 600);                  
            $('.takvim').datepicker("refresh");
              this.date1=null;
              this.date2 = null;
        },
        clean(){
            this.date1 = null;
            this.date2 = null;
              localStorage.removeItem('from');
              localStorage.removeItem('to');
                   this.sendDates();
              $('.takvim').datepicker("destroy");
            setTimeout(() => {  this.call();  }, 600);                  
         
        },
        closeDatePicker(){
            this.sendDates();
        },
        dayDiff(dt1,dt2){
            var d = null
            if(this.date1 && this.date2){
            var fromDate = moment(dt1, "DD/MM/YYYY"); 
            var toDate   = moment(dt2, "DD/MM/YYYY"); 
            var  d = toDate.diff(fromDate, 'days')
            }
            
           return  isNaN(d)?null:d
        },
        sendDates(){
              if(this.date1 && this.date2){
                  localStorage.setItem('from', this.date1);
                  localStorage.setItem('to', this.date2);
              }
              var d  = this.dayDiff(this.date1, this.date2)
              
              if(!this.vilId){
                      if(this.year && this.month){
                          this.$emit('flexDates', this.year, this.month, this.day,this.mlabel );
                      } else {
                          this.$emit('cBack', this.date1, this.date2, this.esnek, d );
                      }
              } else {
                    this.$emit('cBack', this.date1, this.date2,dif);
              }
            
        },
        closeDatepicker(){
           this.$emit('close');
        },

        sendMobile(){
            if(this.mobile){
                  if(this.year && this.month){
                    this.$emit('flexDates', this.year, this.month, this.day,this.mlabel );
                  } else if(this.date2 && this.date1) {
                    this.$emit('cBack', this.date1, this.date2, this.esnek );
                 }
            }               
        },
      
      

          dateHightLight(theday){
            
              if(this.vilId && this.periods){                 

              return    ($.inArray(theday, this.periods.ortakKapali)>=0?"ortak-kapali":
                    ($.inArray(theday, this.periods.ortakOpsiyon)>=0?"ortak-opsiyon":
                    ($.inArray(theday, this.periods.ortakKapaliOpsiyon)>=0?"ortak-kapali-opsiyon": 
                     ($.inArray(theday, this.periods.ortakOpsiyonKapali)>=0?"ortak-opsiyon-kapali":             
                    ($.inArray(theday, this.periods.kapaliGiris)>=0 && theday !==this.date2?"takvimgir":
                    ($.inArray(theday, this.periods.kapaliCikis)>=0 && theday !==this.date1?"takvimcik":
                    $.inArray(theday, this.periods.kapali) >=0?"takvimkapali ui-datepicker-unselectable ui-state-disabled":   
                    ($.inArray(theday, this.periods.opsiyonCikis)>=0 && theday !==this.date1? "opcikis":
                    ($.inArray(theday, this.periods.opsiyonGiris)>=0 && theday !==this.date2? "opgiris":
                    ($.inArray(theday, this.periods.opsiyon)>=0?"takvimop  ui-datepicker-unselectable ui-state-disabled":                 
                   // ($.inArray(theday, self.selected)>=0?"dp-highlight":  
                     
                   null)))))))))
              } else {
                  return null
              }
        },

        call(){            
           var self = this;
      
           $('.takvim').datepicker({
               
            inline:!0,minDate: 0,
            dateFormat:"dd/mm/yy",
            numberOfMonths:this.t_size,

             beforeShowDay: function (date) {
                var theday = ("0" + date.getDate()).slice(-2)  +'/'+("0" + (date.getMonth() + 1)).slice(-2)+ '/' +date.getFullYear();
                
                if(self.select && (self.date1 || self.date2)){   
                    var date1 = $.datepicker.parseDate("dd/mm/yy", self.date1);
                  var date2 = $.datepicker.parseDate("dd/mm/yy", self.date2?self.date2:self.date1);   
                       
                    var arrr =  date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : "";
                } else {
                    var arrr = [];
                }
                
                return [true, 
                  self.dateHightLight(theday) || arrr                   
                   ];
            }  ,  onSelect: function (e) {
               if((!self.date1 && !self.date2)   || (self.date1 && self.date2) ){
                   self.date1=e;
                   self.date2=null
               } else if( self.date1 && !self.date2 ) {
                   
                   if(moment(e, "DD/MM/YYYY").isBefore(moment(self.date1, "DD/MM/YYYY"))){
                       self.date1=e;
                      self.date2=null
                   } else {

                       if(self.periods){
                              let ii = self.checkDates(self.date1,e);
                              if(ii==1){
                                  self.date1=e;
                      self.date2=null
                              } else {
                                   self.date2 = e;
                              }
                          } else {
                             self.date2 = e;
                          }                                           
                                   
                      } 
               }
             
            }
            
        });

       

        }        
    }
}
</script>



<style>
@import '~/assets/ui/jquery-ui.min.css';
.field.column.is-4 {
    padding: 0px;
}
span.ui-state {
 
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 50%;
    opacity: 0.4;
}

.ui-red { background: red }
.ui-yellow { background: #FDD835 }
.ui-green { background: #00d1b2 }
.ui-gray{ background: #666 }
/*** takvim **/

.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
    border: 1px solid transparent;
    font-weight: normal;
    color: #333;
}

.ui-widget-header {
    border: 1px solid transparent;

}
.ui-widget-header {
    border-bottom: 2px solid #ddd;
    color: #444;
    font-weight: 500;
    background: #f5f5f563;
    border-radius: 0px;
}

.ui-datepicker-group {
    width: 100%;
}


.ui-datepicker .takvimop a{ background: #ffc10770 !important; }
.ui-datepicker .takvimkapali a { background: #fd5a5f9e !important; }
.ui-datepicker .takvimcik  a { background: linear-gradient(-45deg, #ffffff 0%,#ffffff 50%,#fd5a5f9e 51%,#fd5a5f9e 100%) !important; }
.ui-datepicker .takvimgir a {  background:linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #fd5a5f9e 51%, #fd5a5f9e 100%) !important;  }
.ui-datepicker .takvimopsiyon a { background: #fc0 !important; }
.ui-datepicker .opgiris a { background: linear-gradient(135deg, #ffffff 0%,#ffffff 50%,#ffc10790 51%,#ffc10790 100%) !important;}
.ui-datepicker .opcikis a {background: linear-gradient(-45deg, #ffffff 0%,#ffffff 50%,#ffc10790 51%,#ffc10790 100%) !important;}
.ui-datepicker .ortak-opsiyon-kapali a  { background: linear-gradient(135deg, #ffc10790 0%,#ffc10790 50%,#fd5a5f9e 51%,#fd5a5f9e 100%) !important; }
.ui-datepicker .ortak-kapali-opsiyon  a { background: linear-gradient(-45deg, #ffc10790 0%,#ffc10790 50%,#fd5a5f9e 51%,#fd5a5f9e 100%) !important; }

.ui-datepicker .ortak-kapali a { background: linear-gradient(-45deg, #fd5a5f9e 46%, #fff 50%, #fff 1%, #fd5a5f9e 46%) !important;}
.ui-datepicker  .ortak-opsiyon a { background: linear-gradient(-45deg, #ffc10790 46%, #fff 50%, #fff 1%, #ffc10790 46%) !important;}
.ui-datepicker td {
    border: 0 !important;
    padding: 8px;
    border: 1px solid #ececec;
    text-align: center;
    overflow: hidden;
}
.ui-widget.ui-widget-content {
    border: 1px solid #eee;
    width: 100% !important;
    border-radius: 0px !important;
}
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
    border: none;
    background: #ffffff;
    font-weight: normal;
    text-align: center;
    color: #454545;
}
.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled {
    opacity: .85;
    filter: Alpha(Opacity=35);
    background-image: none;
}

.dp-highlight a  {
       background:rgb(11 179 227 / 31%)!important;
    color: #263238!important;
}

.takvimkapali .ui-state-default, .takvimop  .ui-state-default {
    border: none;
    background: #ffffff00;
    font-weight: normal;
    text-align: center;
    color: #263238;
}
.ui-datepicker .ui-datepicker-header {
    position: relative;
    padding: .42em 0;
}

.ui-widget-header {
    border-bottom: 1px solid #eee;
    color: #444;
    font-weight: 500;
    background: #fff;
    border-radius: 0px;
}

.ui-state-default {
    border: none;
    background: #ffffff00 !important;
    font-weight: normal;
    text-align: center;
    color: #454545;
}

@media (min-width:1000px){
    #addModal .modal-content{
        width: 600px
    }
}
/*** takvim end **/
.ui-widget.ui-widget-content {
    border: none;
    width: 100% !important;
    border-radius: 6px !important;
}
span.ui-datepicker-month {
    font-weight: 700;
    font-size: 16px;
}

.ui-datepicker td {
    /* border: 0;
    padding: 8px;
    border: 1px solid #ececec87;
    text-align: center;
    overflow: hidden; */

    border: 0;
    padding: 0px;
    text-align: center;
    overflow: hidden;
        padding-bottom: 2px;
}

.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
    border: none;
    background: #ffffff;
    font-weight: 500;
    text-align: center;
    color: #454545;
}

.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
    /* border: none;
    background: #ffffff;
    font-weight: 500;
    text-align: center;
    color: #454545;
    background-color: #fff;
    color: #626973;
    border: solid 1px #ebedef;
    cursor: pointer;
    border: 1px solid transparent;
    margin-right: 2px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: 500;
    padding: 11px 0 15px;
    background-color: transparent;
    width: 46px;
    height: 46px;
    -webkit-flex: 7;
    -ms-flex: 7;
    flex: 7;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-basis: 0;
    -ms-flex-basis: 0;
    flex-basis: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px; */
border: 1px solid transparent;
    margin-right: 2px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: 500;
    padding: 11px 0 15px;
    background-color: transparent;
    width: 46px;
    height: 46px;
    -webkit-flex: 7;
    -ms-flex: 7;
    flex: 7;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-basis: 0;
    -ms-flex-basis: 0;
    flex-basis: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #fff;
    color: #626973;
    border: solid 1px #ebedef;
    cursor: pointer;
}

@media (max-width:1000px) {
    .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
    border: 1px solid transparent;
    margin-right: 2px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-weight: 500;
    padding: 11px 0 15px;
    background-color: transparent;
    width: auto; 
     height: auto;
    flex: 7;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -ms-flex-basis: 0;
    flex-basis: 0;
    border-radius: 4px;
    background-color: #fff;
    color: #626973;
    border: solid 1px #ebedef;
    cursor: pointer;
}
}
    
</style>