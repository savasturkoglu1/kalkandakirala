<template>
    
    <div>
           <div class="teklif-body container">
               <div class="columns is-centered">
                   <div class="column is-8">
                       <div class="teklif-wrap">
                           <div class="t-head">
                               <h1>Rezervasyon Detayları</h1>
                           <div class="note">son güncelleme tarihi: </div>
                           </div>
                           <div class="t-wrap" >
                               <RezRow :rez="data" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    </div>
</template> 
<script>
import RezRow from '../../../components/templates/rezRow';
export default {
    components: { RezRow },
   async asyncData({$axios, route}) {
             const kod = route.query.kod;
        const data = await $axios.get('/rez-track?kod='+kod).then(resp => {
            return resp.data
        });
        return {
            data
        }
    },
}
</script>