<template>
     <div>
          <b-modal
            v-model="menuModal"
            has-modal-card
            full-screen
            :can-cancel="false">
              <MobilMenu />
        </b-modal>

         <b-modal
            v-model="sanaOzel"
            has-modal-card
            full-screen
            :can-cancel="false">
              <UserMenu />
        </b-modal>
       
         
        <div class="mb">
        <div class="mb-wrap">            
            <div :class="show==1?'mb-buton mb-active':'mb-buton'"  @click="goHome" >
                <i class="mb-icon flaticon-home-1"></i><br><span class="mb-name">Anasayfa</span>
            </div>
            <!-- <div  :class="show==2?'mb-buton mb-active':'mb-buton'"  @click="setShow(2)">
              
              <i class="mb-icon fas fa-th"></i>
               <br><span class="mb-name">App</span>
            </div> -->
            <div  :class="show==3?'mb-buton mb-active':'mb-buton'"    @click="showUserMenu()">
                <i class="mb-icon flaticon-heart-3"></i><br><span class="mb-name">Sana özel</span>
            </div>
            <div  :class="show==4?'mb-buton mb-active':'mb-buton'"  @click="setShow(4);  wht()">
               
                 <i class=" mb-icon  flaticon-whatsapp" ></i>
                <br><span class="mb-name">Whatsapp</span>
            </div>
            <div :class="show==5?'mb-buton mb-active':'mb-buton'"  @click="toggleMenu()">
                <i class="mb-icon flaticon-menu-4"></i><br><span class="mb-name">Menu</span>
            </div>
            <div :class="'mb-buton'" >
                
            </div>
        </div>
    </div>
   
   </div>
</template>
<script>

import MobilMenu from './MobilMenu';
import UserMenu from './UserMenu';

export default {
    components: {  MobilMenu, UserMenu },
    data(){
        return {
            show:1,
            cForm:false,
            mm:false,
            menuModal:false,
            sanaOzel:false
        }
    },
       watch:{
    $route (to, from){
        this.show = false;
         $("#accModal").removeClass("is-active");
            }
        },
   methods: {
       close(){
           this.show = false;
           this.menuModal= !this.menuModal;
       },
       showUserMenu(){
           this.show = this.menuModal?false:3; 
           this.sanaOzel = !this.sanaOzel;
           this.menuModal = false;
       },
       toggleMenu() {
           this.show = this.menuModal?false:5;
           this.menuModal= !this.menuModal;
            this.sanaOzel = false;
       },
        wht(){
            const number  = this.$store.state.contact.ilt_mobil1.split(' ').join('');
            let wh= 'https://api.whatsapp.com/send?phone='+number+'&text=Merhaba';   
             window.open(wh, '_blank');
        },
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
              this.show=1; 
              this.menuModal= false; 
              this.sanaOzel = false;           
              this.$router.push({path:'/'});
       }
   }
}
</script>

<style scoped>

.mb-buton.mb-active, .mb-buton.mb-active i  {
    color: #ec642a !important;
    font-weight: 600;
}

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
            /* box-shadow: 1px -1px 11px 0px rgba(0, 0, 0, 0.29); */
            border-top: 1px solid #e5e5e5;

        } 

        .mb-wrap {
            display: flex;
            width: 100%;
            background: #fff;
        }
i.mb-icon {
    font-size: 20px;
    color: #646464;
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