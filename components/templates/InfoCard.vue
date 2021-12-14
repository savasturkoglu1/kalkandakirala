<template>
   <div class="container inf-container">
       <div class="columns">

           <div class="column">
               <nuxt-link to="/teklif-al">

               
               <div class="inf-wrap">
                   <div class="inf-icon">
                        <i class="flaticon-diamond"></i> 
                   </div>
                   <div class="if-detail">
                        <h4>Teklif Alın</h4>
                        <span>
                            Tıklayın teklif formunu doldurun, size en uygun villaları önerelim
                        </span>
                   </div>
               </div>
               </nuxt-link>
           </div>

            <div class="column">
                
               <div class="inf-wrap" @click="wht()">
                   <div class="inf-icon w-icon">
                        <i class="flaticon-whatsapp"></i> 
                   </div>
                   <div class="if-detail">
                        <h4>Whatsapp Rezervayon</h4>
                        <span>
                            Tıllayın whatsaap ile tatil bilgileriniz gönderin, size en uygun villaları önerelim
                        </span>
                   </div>
               </div>
           </div>


            <div class="column">
                <nuxt-link :to="$store.state.trUrls.kats+'/indirimli-villalar'">
               <div class="inf-wrap">
                   <div class="inf-icon h-icon">
                        <i class="flaticon-love"></i> 
                   </div>
                   <div class="if-detail">
                        <h4>Fırsatları Yakalayın</h4>
                        <span>
                            İndirimli villaları görmek için tıklayın
                        </span>
                   </div>
               </div>
                </nuxt-link>
           </div>


       </div>
   </div>
</template>

<script>
export default {


methods:{
      wht(){
            let wh= 'https://api.whatsapp.com/send?phone='+this.$store.state.base.contact.ilt_mobil1;   
             window.open(wh, '_blank');
        },
}
}
</script>

<style>
.inf-wrap {
    display: flex;
    padding: 10px 20px;
    /* background: #f5f5f5; */
    border: 1px solid #ddd;
    border-radius: 8px;
        height: 100%;
        cursor: pointer;
}
.inf-wrap:hover {
    background: #f5f5f5;
}
.inf-icon i::before {
    font-size: 36px;
    font-weight: 500;
    color: #bd1f59;
}

.inf-icon{
    margin-right: 10px;
    padding-top: 10px;
}

.if-detail h4 {
    font-size: 20px;
    margin-top: 5px;
    color: #5035a0;
}

.if-detail span {
    font-size: 12px;
    color: #78909c;
}
.w-icon i::before {
    font-size: 36px;
    font-weight: 500;
    color:  #4caf50;
}
.h-icon i::before {
    font-size: 36px;
    font-weight: 500;
    color:  #8ac3f1;
}
</style>