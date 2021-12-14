<template>
    <div class="column is-half is-offset-one-quarter">
            <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                <a v-if="data.prev_page_url" class="pagination-previous"  @click="getData(spliter(data.prev_page_url))">Önceki</a>
                <a v-if="data.next_page_url" class="pagination-next"  @click="getData(spliter(data.next_page_url))">sonraki</a>
                <ul class="pagination-list">
                    <li v-if="data.current_page>2" @click="getData(data.first_page)"><a class="pagination-link" aria-label="Goto page 1">1 </a></li>


                    <li  v-if="data.current_page>3"><span class="pagination-ellipsis">&hellip;</span></li>                    

                     <li v-for="(i, j) in  range(data.current_page-1, data.current_page+1, data.last_page)" :key="j"  >
                        <a v-bind:class="i === data.current_page?'pagination-link  is-current':'pagination-link'"   @click="getData(i)"> {{i}}</a>
                     </li>

                    <li  v-if="data.current_page+3<data.last_page"><span class="pagination-ellipsis">&hellip;</span></li>
                    <li v-if="data.last_page-data.current_page>2" @click="getData(data.last_page)"><a class="pagination-link" aria-label="Goto page 86">{{data.last_page}}</a></li>
                </ul>
            </nav>

    </div>
</template>

<script>

export default {
       data(){
           return{
               spn:false,
           }
       },
     
       props: {
           data:Object,
           getPage: { 
               default:null,
               type: Function
                },
       },
       watch:{
           data:function(oldwal, newwal){
               this.spn = false;
           }
       },
       created(){
           // console.log(this.data)
       },
       methods: {
         
           getData(url){
             
                if(this.getPage) {
                     this.spn = true;      
                     this.getPage(url);
                } else {
                     
                }
               
                
               
           },
           spliter(url){
               let urls = url.split('=');
               return urls[1];
           },
           range(i,j, max){
               let intArray = [];
               let top      = Math.min(max, j+1);
               let bottom   = Math.max(1, i)
               for(let a = bottom; a < top+1; a++){
                   intArray.push(a);
               }
               return intArray;
           }
       }

}
</script>

<style >
    .pagination a {
    background: #fff;
}
</style>


