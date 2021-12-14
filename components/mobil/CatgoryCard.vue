<template>
    <div v-if="data" class="mb-card">
           
               <div class="mb-card-wrap">
                    <div class="mb-card-img-wrap">
                         <img :src="data.kat_kapak_thumb?data.kat_kapak_thumb:data.kat_kapak_resp?data.kat_kapak_resp:data.kat_kapak" class="mobil-card-img">
                    </div>
                    <div class="mb-card-info">
                        <span> {{data.kat_adi}} </span>
                        
                    </div>
               </div>
          
    </div>
</template>

<script>
export default {
   props:{
       data:null
   }
}
</script>

<style scoped>
.mb-card-img-wrap {
    height: 120px;
    width: auto;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
}
.mobil-card-img {
    height: 100%;
    width: auto;
    min-width: 100%;
}
</style>