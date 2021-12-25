<template>
   <div class="mega-menu">
       <div class="mega-wrap">
           <div class="container">
                <div class="mm-section">
                   <h4>Bölgeler</h4>
                        <div class="columns is-multiline">
                            <div  class="column is-6 mm-link" v-for="(item, i) in $store.state.base.bolgeler" :key="i" >
                            <nuxt-link 
                            :title="item.bo_adi"
                                :key="i"
                                :to="$store.state.trUrls.bolge + item.bo_url"
                                :prefetch="false"
                                  class="dd-item">
                                       {{ item.bo_adi }}
                            </nuxt-link>
                            </div>
                        </div>
               </div>
               <div class="mm-section">
                   <h4>Kategoriler</h4>
                        <div class="columns is-multiline">
                            <div class="column is-6 mm-link" v-for="(item, i) in $store.state.base.kategoriler" :key="i" >
                            <nuxt-link 
                            :title="item.kat_adi"        
                            :prefetch="false"     
                        :to="$store.state.trUrls.kats + item.kat_url"
                        class="dd-item">
                                {{ item.kat_adi }}
                            </nuxt-link>
                        </div>
                        </div>
               </div>
              
                <div class="mega-bottom">
                     <info-card />
                </div>
                </div>
           </div>


         
              


       </div>
   </div>
</template>

<script>
import InfoCard from './InfoCard.vue'
export default {
     components:{ InfoCard }
}
</script>

<style>
.meg-wrap {
    
}
   .mega-menu {
    padding: 20px;
}

.mm-section h4 {
    font-size: 24px;
    margin-bottom: 15px;
}

.mm-section {
    margin-top: 15px;
}
.mm-section .columns {
    margin: auto;
}
.mm-link {
    padding: 5px;
}

.mega-bottom {
    margin-top: 20px;
    border-top: 1px solid #ddd;
    padding-top: 15px;
}
</style>