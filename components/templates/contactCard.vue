<template>
   <div class="contact-cart-wrap" v-if="$store.state.base">

        <!-- contact card item -->
       <div class="cc-item" @click="wht">
           <div class="cc-icon wht">
               <i class="flaticon-whatsapp"></i>
           </div>
           <div class="cc-number">
               <h3>{{$store.state.base.contact.ilt_mobil1}}</h3>
               <span class="note">Mesaj göndermek için tıklayın</span>
           </div>
           <span class="justify-end cc-next ">
               <i class="flaticon-next"></i>
           </span>
       </div>
        <!-- contact card item end -->

         <!-- contact card item -->
       <div class="cc-item" @click="wht">
           <div class="cc-icon phn">
               <i class="flaticon-phone"></i>
           </div>
           <div class="cc-number">
               <h3>{{$store.state.base.contact.ilt_sabit1}}</h3>
               <span class="note">Aramak için tıklayın</span>
           </div>
           <span class="justify-end cc-next ">
               <i class="flaticon-next"></i>
           </span>
       </div>
        <!-- contact card item end -->

         <!-- contact card item -->
       <div class="cc-item" @click="wht">
           <div class="cc-icon mail">
               <i class="flaticon-envelope"></i>
           </div>
           <div class="cc-number">
               <h3>{{$store.state.base.contact.ilt_eposta1}}</h3>
               <span class="note">Mesaj göndermek için tıklayın</span>
           </div>
           <span class="justify-end cc-next ">
               <i class="flaticon-next"></i>
           </span>
       </div>
        <!-- contact card item end -->
         <div class="cc-sos">
                           
                            
               <div class="cc-sos-buttons soc-buttons">
                                
                                <a class="button is-medium2 btn-insta " :href="$store.state.base.contact.sos_instagram" target="_blank">
                                    <i class=" flaticon-instagram"></i>
                                </a>
                                <a class="button is-medium2 btn-tiwtter" :href="$store.state.base.contact.sos_twitter" target="_blank">
                                    <i class=" flaticon-twitter"></i>
                                </a>
                                <a class="button is-medium2 btn-face" :href="$store.state.base.contact.sos_face" target="_blank">
                                    <i class=" flaticon-facebook"></i>
                                </a>
                                <a class="button is-medium2 btn-youtube" href="https://www.youtube.com/" target="_blank">
                                    <i class=" flaticon-youtube"></i>
                                </a>
                                
                            </div>
                       </div>
   </div>
</template>

<script>
export default {


   methods:{
       wht() {
      let wh =
        'https://api.whatsapp.com/send?phone=' +
        this.$store.state.base.contact.ilt_mobil1 +
        '&text=Merhaba'
      window.open(wh, '_blank')
    },
    phone(){
            location.href = "tel:"+this.$store.state.base.contact.ilt_sabit1
       },
   }
}
</script>

<style>
.cc-next {
    padding-top: 4px;
}
.cc-item {
    display: inline-flex;
    width: 100%;
    padding: 5px 10px;
    cursor: pointer;
    position: relative;
    transition: transform .2s; /* Animation */
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
        margin-bottom: 10px;
}

.cc-item:hover {
  transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.cc-icon i::before {
    font-size: 24px;
    font-weight: 600;
}
.cc-sos-buttons.soc-buttons {
    display: flex;
    filter: opacity(0.7);
    margin-top: 20px;
}
.cc-icon.wht {
    color: #52c152;
    
}

.cc-icon.phn {
    color: #52c152;
    
}

.cc-icon.phn {
    color: #17a8d5;
}

.cc-icon.mail {
    color: #ff9800;
}
.cc-number {
    
    line-height: 14px;
}
.cc-number h3 {
    font-size: 18px;
    padding: 2px;
    font-weight: 600;
}

.cc-icon  {
    margin-right: 10px;
}

.cc-sos-buttons.soc-buttons {
    display: flex;
    filter: opacity(0.6);
    margin-top: 20px;
}

.contact-cart-wrap {
    background: #fff;
    top: 75px;
    left: -10px;
    min-height: 240px;
    min-width: 300px;
    border-radius: 8px;
    padding: 10px;
}
</style>