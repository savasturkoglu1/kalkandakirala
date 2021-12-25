<template>
  <div>
        <NavBar    />
     
          <transition name="router-anim" mode="out-in" >
              <nuxt    /> 
              <!-- :key="$route.fullPath" -->
          </transition>
          <span class="s-top desc" @click="scroll"><i class="flaticon-upload"></i></span>
           <!-- <span class="menu-button bg-primary-normal-gradient" @click="()=>{this.menuModal= !this.menuModal}"><i class="mb-icon flaticon-menu-4"></i></span> -->
           <!-- <b-modal
            v-model="menuModal"
            has-modal-card
            full-screen
            :can-cancel="false">
              
        </b-modal> -->
         
          <!-- <Social v-if="$store.state.base" :data="$store.state.base.contact" /> 
         
         <div class="wht-fix-d desc">
             <button class="wht-button-d button" @click="wht" >                
                <i class="flaticon-whatsapp wht-big "></i>
               
             </button>
         </div> -->
         <MobilSearch />
        <Footer  />
          

  </div>
</template>
<script>
import NavBar from '../components/tr/NavBar';
import Footer from '../components/tr/Footer'; 
import MobilMenu from '~/components/mobil/MobilMenu.vue';
import Social from '../components/templates/Socialbuttons';
import MobilSearch from '../components/mobil/Search';
export default {
  data(){
       return {
          overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
         f_data:null,
         cont:false,
         popup:false,
         Model : null,
         Tensor: null,
         kategori_data:null,
         bolge_data:null,
         menuModal:false
       }
  }, 
  components: {
     NavBar,Social,
     Footer,
    MobilMenu,
    MobilSearch
   },
   created(){
     
      this.getData();
   },  

  mounted(){
         
      //   this.Tensor =  new Tensor();
        $(window).scroll(function (self) { 
            
                  if ($(this).scrollTop() > 700) {
                      $(".s-top").show('300');
                }              
                if($(this).scrollTop() <700) {
                          $(".s-top").hide('300');;
                }

                if ($(this).scrollTop() > 100) {
                      $(".mcont-wrap").show('300');
                }              
                if($(this).scrollTop() <100) {
                          $(".mcont-wrap").hide('300');;
                }
           
         });

         setTimeout(() => {
           this.popupOpen()
         }, 2000);

       
  },
  methods: { 
    
    wht(){
            let wh= 'https://api.whatsapp.com/send?phone='+this.$store.state.base.contact.ilt_mobil1;   
             window.open(wh, '_blank');
        },
     
    scroll(){
         $('html, body').animate({
        scrollTop: $('body').offset().top-20
      }, 500);
    },

   async getData() {
        //  let f_data  = await this.$axios.get('/footerdata?lang=tr').then(res => { return res.data });  
        //  let kategori_data  = await this.$axios.get('/kategoriler').then(res => { return res.data }); 
        //  let bolde_data  = await this.$axios.get('/bolgeler').then(res => { return res.data });  

        // this.f_data = baseData;  
        // this.kategori_data = kategori_data;
        // this.bolde_data = bolde_data; 

         let baseData  = await this.$axios.get('/basedata?lang=tr').then(res => { return res.data }); 
            
              

          this.f_data = baseData; 
          // this.$store.dispatch('setKat', baseData.kategoriler);
          // this.$store.dispatch('setBol', baseData.bolgeler);
          // this.$store.dispatch('setPages', baseData.pages);
          // this.$store.dispatch('setContact', baseData.contact);
          this.$store.dispatch('setBase', baseData);
      },
  

    
  
 },
   
}
</script>
<style scoped>
.l10 {
  margin-left: 10px;
}
.wht-fix-d.desc {
    position: fixed;
    right: 0;
    bottom: 50px;
    z-index: 99;
}

button.wht-button-d.button {
    border-radius: 8px 0 0 8px;
    border: none;
    background: #8bc34a;
    color: #fff;
    
    height: 50px;
}
.pop-desc {
    position: absolute;
    top: 0;
    background: rgba(76, 175, 80, 0.18);
    padding: 20px 15px;
    height: 100%;
    color: #fff;
    text-align: right;
    bottom: 0;
}

img.pop-imge {
    width: 100%;
    height: auto;
    min-height: 100%;
}
.pop-desc h3 {
    font-size: 32px;
    margin-top: 10%;
    margin-bottom: 30px;
    font-weight: 700;
    line-height: 40px;
}

.pop-desc h4 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 30px;
}


.pop-content-wrap {
    position: relative;
    overflow: hidden;
    height: 100%
}

@media (max-width:1000px) {
  .pop-desc h4 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
}

.pop-desc h3 {
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 40px;
}
}
.wht-button.button {
    background: #3fc380;
    border-radius: 0px 50% 50% 0px;
    position: relative;
    border: none;
    font-size: 26px;
    color: #fff;
    /* text-shadow: 1px 1px 1px #000; */
    box-shadow: 0px 0px 8px 2px #00000042;
}
i.wht-small {
    position: absolute;
    font-size: 16px;
    left: 10px;
    top: 10px;
}
.wht-fix {
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 99;
}
@media (max-width: 1023px) {
  .menu-button {
     
    position: fixed;
    
  
    color: #fff;
    cursor: pointer;
    z-index: 9;
    left: 0;
    -webkit-box-align: center;
    align-items: center;
    background: transparent; 
    border-radius: 50%;
    bottom: 15px;
     box-shadow: none ;
    display: -webkit-box;
    display: flex;
    height: 56px;
    -webkit-box-pack: center;
    justify-content: center;
     line-height: 56px; 
    
    min-width: 0;
    overflow: visible;
    position: fixed;
    -webkit-transition-property: background-color,box-shadow,transform;
    -webkit-transition-property: background-color,box-shadow,-webkit-transform;
    transition-property: background-color,box-shadow,-webkit-transform;
    transition-property: background-color,box-shadow,transform;
    transition-property: background-color,box-shadow,transform,-webkit-transform;
    -webkit-transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    vertical-align: middle;
    width: 56px;
    z-index: 6;
     
         background: #2196f317;
     text-align: center;
}
      .navbar-item img {
        max-height:30px;
    }

    .s-top {
     
    position: fixed;
    right: 30px;
    bottom: 30px;
    font-size: 36px;
    color: #6ee5d3;
    cursor: pointer;
    z-index: 9;
    right: 0;
    -webkit-box-align: center;
    align-items: center;
    background: transparent; 
    border-radius: 50%;
    bottom: 65px;
     box-shadow: none ;
    display: -webkit-box;
    display: flex;
    height: 56px;
    -webkit-box-pack: center;
    justify-content: center;
     line-height: 56px; 
    margin-right: 10px;
    min-width: 0;
    overflow: visible;
    position: fixed;
    -webkit-transition-property: background-color,box-shadow,transform;
    -webkit-transition-property: background-color,box-shadow,-webkit-transform;
    transition-property: background-color,box-shadow,-webkit-transform;
    transition-property: background-color,box-shadow,transform;
    transition-property: background-color,box-shadow,transform,-webkit-transform;
    -webkit-transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    vertical-align: middle;
    width: 56px;
    z-index: 6;
     display: none;
         background: #2196f317;
     text-align: center;
}

}

@media (min-width: 1024px) {
.menu-button { display: none; }
.s-top {
      position: fixed;
    right: 30px;
    bottom: 30px;
    
    color: #6ee5d3;
    cursor: pointer;
    z-index: 9;
    right: 0;
    -webkit-box-align: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    bottom: 120px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    display: -webkit-box;
    display: flex;
    height: 56px;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 56px;
    margin-right: 30px;
    min-width: 0;
    overflow: visible;
    position: fixed;
    -webkit-transition-property: background-color,box-shadow,transform;
    -webkit-transition-property: background-color,box-shadow,-webkit-transform;
    transition-property: background-color,box-shadow,-webkit-transform;
    transition-property: background-color,box-shadow,transform;
    transition-property: background-color,box-shadow,transform,-webkit-transform;
    -webkit-transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    transition: box-shadow .3s cubic-bezier(0.55,0,0.55,0.2);
    vertical-align: middle;
    width: 56px;
    z-index: 85;
    display: none;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    color: #000;
    z-index: 1;
    /* width: 100%; */
    /* max-width: 460px; */
    float: right;
    pointer-events: all;
    /* position: relative; */
    text-align: center;
    color: #0854d8;
}

}
/*slide transition*/ 
.slide-enter-active,
.slide-leave-active
 {
  transition: transform 0.4s ease-out;
}
.slide-enter {
  transform: translateX(-10%) ;
}
.slide-leave-to {
  transform: translateX(10%);
}

.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
  animation: bounce-in .6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.99);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: .1s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.96);
}


</style>
