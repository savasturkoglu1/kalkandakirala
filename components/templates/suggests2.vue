<template>
     <section class="section s-section" >
           <div class="container title-cont" >
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
    components: { Grid, Spinner},
    data(){
        return {
            villas:null
        }
    },
   async    mounted(){     

       //   await this.sug();
    },
    methods: {
        
    //      sortResults(t){
    //             t.sort(function(a, b) {
    //                 return parseFloat(b.predict[0]) - parseFloat(a.predict[0]);
    //             });

    //             return t;
    //         },
    //     async   sug(){
    //            let vArray =localStorage.getItem('props');         
    //            console.log(vArray);
    //            if(vArray && vArray.length>1){
    //                  await  this.$axios({
    //               method:'get',
    //               url:'/oner?data='+vArray,
    //               baseURL: 'https://panel.mavillam.com/ai',
    //             }).then(resp => {
    //                                     var sortedResults = this.sortResults(resp.data);
    //                                     let clicked = JSON.parse(localStorage.getItem('clicked'));   
    //                                     //console.log(clicked);                                     
    //                                       let aa= sortedResults.filter(n => !clicked.includes(n.id));
    //                                    // console.log(aa);
    //                                       this.getVillas(aa);
    //                                      // latestSection(clicked);
    //              });
    //            }
              
    //       },
    //   async  getVillas(i){
    //       let li = i.slice(0, 4);
    //       let idList= li.map(ii => { return ii.id });
          
    //       let url = '/simple-list?villas='+idList.join(',') ;
    //     await  this.$axios.get(url).then(resp => {
    //            this.villas = resp.data
    //         })
    //     }
    }
}
</script>

<style scoped>
.s-section {
    padding: 3rem 1.5rem;
    background: #fff !important;
    z-index: 99;
    position: relative;
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

.container.title-cont {
    margin-bottom: 30px;
    text-align: left;
    line-height: 40px;
}

.spn-box {
  height: 240px;
  margin-top: 40px
}
</style>
