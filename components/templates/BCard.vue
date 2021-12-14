<template>
    <div v-if="data" class="mb-card">
           
               <div class="mb-card-wrap">
                    <div class="mb-card-img-wrap">
                         <img loading="lazy" :src="data.bo_kapak_resp?data.bo_kapak_resp:data.bo_kapak" class="mobil-card-img">
                    </div>
                    <div class="mb-card-info">
                        <span> {{data.bo_adi}} </span>
                        <div> {{data.count}} Villa </div>
                        
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

<style >

.mb-card:hover img {
    transform: scale(1.1);
}

.mb-card {
       -webkit-transition: all 0.5s ease-in;
-moz-transition: all 0.5s ease-in;
-o-transition: all 0.5s ease-in;
transition: all 0.5s ease-in;
      transform: scale(1);
      display: block;
      position: relative;
}
.mb-card-img-wrap {
    height: 80px;
    width: auto;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
}
.mobil-card-img {
    height: 100%;
    width: auto;
    min-width: 100%;
    max-width: none;
}

@media screen and (min-width:1024px) {
     .mb-card-img-wrap {
    height: 100%;
    width: auto;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    }

    .mb-card-wrap, .mb-card {
        height: 100%;
    }

    .mb-card-info {
    color: #fff !important;
    position: absolute;
    bottom: 20px;
    left: 15px;
}
}
</style>