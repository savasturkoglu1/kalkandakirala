<template>
  <transition name="fade" mode="out-in" >
    <div class="search-guests-wrap clearfix" style="display: block;">
          <nav class="level" v-if="book">
             <div class="alert" v-if="guests.adult==0">
                  Rezervasyon yapmak için lütfen misafir sayısı seçiniz !
             </div>
          </nav>  
        
         <div class="columns is-mobile is-multiline">
               <div class="column is-4">
                       <div class=" guest-label">
                         <span class="calculator-label">Yetişkin</span> 
                         <label>12+</label>
                     </div>
               </div>
               <div class="column is-8">
                     <div class="dFlex">
                <button class=" button button-medium is-rounded" type="button" @click="setGuest('adult','-')">-</button>
                  <button style="width:40%"  class=" button button-medium  is-fullwidth is-rounded guest-count " type="button">{{guests.adult}}</button>
			         <button class="button button-medium is-rounded" type="button"  @click="setGuest('adult','+')">+</button>
            </div>
               </div>
         </div>
         <div class="columns is-mobile is-multiline">
           <div class="column is-4">
                    <div class=" guest-label">
                <span class="calculator-label">Çocuk</span> 
                  <label>2-11 yaş</label>
            </div>
           </div>
           <div class="column is-8">
                   <div class="dFlex">
                      <button class=" button button-medium is-rounded" type="button"  @click="setGuest('child','-')">-</button>
                      <button style="width:40%"  class=" button   is-fullwidth  button-medium is-rounded  guest-count   " type="button">{{guests.child}}</button>
			                <button class="button button-medium is-rounded" type="button"  @click="setGuest('child','+')">+</button>
                 </div>
           </div>
         </div>


          <div class="columns" style="display:none">
           <div class="column is-12">
              <div class="guest-label">
                  <span class="calculator-label">Bebek</span> 
                  <label>2 yaş altı</label>
                </div>

           </div>
           <div class="column is-12">
                 <div class="buttons">
                    <button class=" button button-small" type="button"  @click="setGuest('baby','-')"><i class="fa fa-minus" aria-hidden="true"></i></button>
                  <button class=" button button-small  guest-count   " type="button">{{guests.baby}}</button>
			            <button class="button button-small" type="button"  @click="setGuest('baby','+')"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
           </div>
         </div>

         
         
		 <div class="sec-buton-cont"  v-if="!filter">
        <button class="button button-clear"  v-on:click="clearData">Temizle</button>
        <button class="button button-small button-clear" type="button" @click="selectGuest">Kapat</button>
			<button class="button button-small bg-primary-normal-gradient text-white" type="button" @click="selectGuest">Seç</button>
		</div><!-- guest-apply-btn -->
      <div class="sec-buton-cont"  v-if="filter">
            <button class="button button-clear"  v-on:click="clearData">Temizle</button>       
          <button class="button button-small bg-primary-normal-gradient sec-buton text-white" type="button" @click="selectGuest">Filtre</button>
      </div>
	</div>
  </transition>
</template>
<script>
export default {
    data(){
      return {
            
            guests: {
              adult:0,
              child:0,
              baby:0,
              plc:null
            }
      }
    },
    mounted() {
      const g = JSON.parse(localStorage.getItem('guests'));
      if(g){
        this.guests = g
      } 

         
    },
    props :{
        mobile: {
            type:Boolean,
            default:false
        },
       book:{
         type:Boolean,
         default:false,
       },
        filter:{
         type:Boolean,
         default:false,
       },
        cBack: {
            type:Function,
        },
    },
    methods: {
      clearData(){
              this.guests = {
              adult:0,
              child:0,
              baby:0,
              plc:null
            };
            this.selectGuest();
        },
      setGuest(a,b){
        if(b=='+'){
          this.guests[a] = this.guests[a]+1;
        } 
        else if(b=='-'){
             let nd = this.guests[a]-1;
             this.guests[a] = nd>0?nd:0;
           }

           let adult = this.guests.adult == 0?'':this.guests.adult +' Yetişkin ' 
           let child = this.guests.child == 0?'':this.guests.child +' Çocuk '
           let baby = this.guests.baby == 0?'':this.guests.baby +' Bebek ';
          this.guests['plc'] = adult+child+baby;
          if(adult =='' && child == '' && baby == '' ){
              this.guests['plc'] = null
          }

          localStorage.setItem('guests', JSON.stringify(this.guests));

          if(this.mobile){
             this.$emit('cBack', this.guests);
          }
      },
      selectGuest(){
      this.$emit('cBack', this.guests, this.guests.plc);
    }
    },

  
}
</script>
<style  scoped>
.guest-label {
    display: grid;
     font-size: 14px;
    color: #444;
    font-weight: 600;
}
.guest-count {
    width: 100px;
    margin-left: 5px;
    margin-right: 5px;
}

.level-left.guest-label {
    display: grid;
}
.guest-label label {
    font-size: 14px;
    color: #B0BEC5;
    font-weight: 600;
}
      .search-guests-wrap {
    min-width: 260px;
    text-align: left;
    border-radius: 4px;
    background-color: #fff;
    
    padding: 20px;
 
    /* z-index: 7;
    left: auto;
    right: 0;
    position: absolute */
}

.enter { transform: translateX(100%) }
.enter-to { transform: translateX(0) }
.slide-enter-active { position: absolute }

.leave { transform: translateX(0) }
.leave-to { transform: translateX(-100%) }

.slide-enter-active,
.slide-leave-active { transition: all 750ms ease-in-out }

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s;
}


           .search-guests-wrap{
   
    width: 100%;
}
</style>