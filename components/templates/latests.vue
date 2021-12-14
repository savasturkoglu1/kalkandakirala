<template>
     <section class="section">
           <div class="container title-cont">
                    <h3>Önerilen Villalar</h3>
                    <p>Göz attığınız villalara benzer villalar</p>
           </div>
            <div class="container pr">
                  <div  class="spn-box" v-if="!villas">
                            <Spinner/>
                  </div>
                  <div v-else class="columns is-mobile is-multiline">

                    <div class="column is-half-tablet  is-full-mobile  is-one-quarter-desktop li-anim" v-for="(item, ii) in villas " :key="ii"  :style="{'animation-delay': 0.08*ii+'s'}">
                        <Grid :data="item" />
                    </div>
                    </div>
            </div>
     </section>
        
   
</template>
<script>
import Grid from '../tr/sectionUnit';
import Spinner from '../tools/Spinner';
export default {
    components: { Grid, Spinner },
    data(){
        return {
            villas:null
        }
    },

    methods: {
        getVillas(i){
          let url = '/simple-list?villas='+i ;
            this.$axios.get(url).then(resp => {
               this.villas = resp.data
            })
        }
    }
}
</script>

<style scoped>
.container.title-cont {
    margin-bottom: 30px;
    text-align: left;
    line-height: 40px;
}
    .title-cont {
    text-align: center;
}
.title-cont h3 {
    font-size: 32px;
    font-weight: 800;
    color: #f60;
}
.title-cont p {
    font-size: 24px;
    font-weight: 600;
    
}

.spn-box {
  height: 240px;
  margin-top: 40px
}
</style>