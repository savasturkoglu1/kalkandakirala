<template>
     <div>
          <transition name="slide">
            <MobilMenu v-if="show==5" />
         </transition>
         <MobilContact v-if="show==4" />
         
        <div class="mb">
        <div class="mb-wrap">
            <div class="mb-buton" >
                
            </div>
            <div class="mb-buton" @click="goHome" >
                <i class="mb-icon fal fa-home"></i><br><span class="mb-name">Anasayfa</span>
            </div>
            <!-- <div  :class="show==2?'mb-buton mb-active':'mb-buton'"  @click="setShow(2)">
              
              <i class="mb-icon fas fa-th"></i>
               <br><span class="mb-name">App</span>
            </div> -->
            <div  :class="show==3?'mb-buton mb-active':'mb-buton'"    @click="()=>{ this.setShow(3)}">
                <i class="mb-icon fal fa-user"></i><br><span class="mb-name">Hesap</span>
            </div>
            <div  :class="show==4?'mb-buton mb-active':'mb-buton'"  @click="setShow(4)">
                <i v-if="false" class="mb-icon fal fa-times"></i>
                 <i class=" mb-icon  fab fa-whatsapp" ></i>
                <br><span class="mb-name">İletişim</span>
            </div>
            <div :class="show==5?'mb-buton mb-active':'mb-buton'"  @click="setShow(5)">
                <i class="mb-icon fal fa-bars"></i><br><span class="mb-name">Menu</span>
            </div>
        </div>
    </div>
    <!-- <div> 
       <div class="mc" v-if="cForm">
           sel
           <div class="mc-wrap">
                <ContactForm />

           </div>
       </div>
   </div> -->
   </div>
</template>
<script>
import ContactForm from '../tools/contactForm';
import MobilMenu from './mobilMenu';
import MobilContact from './mobilContact';
export default {
    components: { ContactForm, MobilMenu,MobilContact },
    data(){
        return {
            show:false,
            cForm:false,
            mm:false,
        }
    },
       watch:{
    $route (to, from){
        this.show = false;
         $("#accModal").removeClass("is-active");
            }
        },
   methods: {
       setShow(i){
          if(this.show==i){
              this.show=false;
               $("#accModal").removeClass("is-active");
          } else {
              this.show=i;
              if(i==3){
                  this.$parent.loginModal();
              }
          }
       },
       goHome(){
              this.show=false;
              $("#accModal").removeClass("is-active");
           this.$router.push({path:'/'});
       }
   }
}
</script>

<style scoped>



.slide-leave-active,
.slide-enter-active {
  transition: 0.7s;
}
.slide-enter {
   transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
         
        .mb-active {
            color: #00d1b2;
            /* border: 1px solid #00d1b240; */
        }
        .mb-active {
            color: #f60;
            /* border: 1px solid #00d1b240; */
        }

        .mc-buton i {
    font-size: 30px;
    margin-right: 10px;
    color: #f60;
}
      
    @media (max-width: 1000px) {

        .mc-buton i {
    font-size: 30px;
    margin-right: 10px;
    color: #f60;
}
       .mb {
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 0;
            margin: 0;    z-index: 99;
            box-shadow: 1px -1px 11px 0px rgba(0, 0, 0, 0.29);

        } 

        .mb-wrap {
            display: flex;
            width: 100%;
            background: #fff;
        }
i.mb-icon {
    font-size: 20px;
}
        .mb-buton {
            width: 100%;
            text-align: center;
            line-height: 17px;
            padding: 10px 2px;
            color: #607D8B;
        }

    .mb-name {
            font-size: 12px;
        }

        
    } 

      @media (min-width: 1001px) {
       .mb {
            display: none
        } 
    } 
</style>