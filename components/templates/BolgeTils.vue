<template>
  <div class="bt-wrap " v-if="bolgeler">
     

     <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
            <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <div class="tile is-child ">
                            <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.bolge+bolgeler[1].bo_url">
                                 <bolge-card :data="bolgeler[1]" />  
                            </nuxt-link>
                        </div>
                        <div class="tile is-child ">
                           <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.bolge+bolgeler[2].bo_url">
                                 <bolge-card :data="bolgeler[2]" />  
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="tile is-parent">
                        <div class="tile is-child till400 ">
                            <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.bolge+bolgeler[0].bo_url">
                                 <bolge-card :data="bolgeler[0]" />  
                            </nuxt-link>
                        </div>
                    </div>
  
                    <div class="tile is-parent is-vertical">
                        <div class="tile is-child ">
                            <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.bolge+bolgeler[3].bo_url">
                                 <bolge-card :data="bolgeler[3]" />  
                            </nuxt-link>
                        </div>
                        <div class="tile is-child ">
                           <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.bolge+bolgeler[4].bo_url">
                                 <bolge-card :data="bolgeler[4]" />  
                            </nuxt-link>
                        </div>
                    </div>
                     <div class="tile is-parent">
                        <div class="tile is-child ">
                            <nuxt-link class="col-card"
                                       
                                        :to="$store.state.trUrls.bolge+bolgeler[5].bo_url">
                                 <bolge-card :data="bolgeler[5]" />  
                            </nuxt-link>
                        </div>
                    </div>
            </div>
            
        </div>
      
        </div>


  </div>
</template>

<script>
import BolgeCard from './BCard.vue'
export default {
  components: { BolgeCard },
  data(){
      return {
          bolgeler:null
      }
  },
  props: {
      bols:{
          default:null,
         
      }
  },
  mounted() {
      if(this.bols){
       
          this.bolgeler =this.bols.sort((a, b) => b.count -a.count)
          console.log(this.bolgeler)
      }
        
  },

}


</script>

<style >
.tile.is-parent {
    padding: 7px;
    overflow: hidden;
}

.tile.is-vertical>.tile.is-child:not(:last-child) {
    margin-bottom: 7px !important;
}

.tile.is-child {
    overflow: hidden;
}
.till400 {
    height: 400px;
}

</style>