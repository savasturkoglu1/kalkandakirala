<template>
    <div class="list-wrapper">         
         <div class="container">
            <div class="column is-8 is-offset-2" v-if="veri">          
                <h1> {{title}} </h1>
                                       
                       <div class="mob">                      
                             <GridUnit   v-for="(item, i) in veri" :key="item.id" :data="item" /> 
                          </div>
                          <div class="desc">
                              <ListUnit  v-for="(item, j) in veri" :key="item.id" :data="item" />     
                         </div>
           </div>
         
     </div>
    </div>
</template>
<script>
import ListUnit from '../../components/tr/listUnit';
import GridUnit from '../../components/tr/HomeGridUnit';
export default {
    components: { ListUnit, GridUnit },
    async asyncData ({$axios, params, route}) { 
      //   const prms = route.query.villas        
        const title = route.query.title;
            console.log(route.query.villas   )
          const prms = 'villas='+''+route.query.villas+''
         let url = '/simple-list?'+prms     
        
     
        
         let data  = await $axios.get(url).then(res => {
              return res.data;             
              });         
         return {
             veri:data,
             title
         }
       },
}
</script>