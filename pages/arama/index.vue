<template>
    <div class="list-wrapper">         
         <div class="container">
            <!-- <div :class="show==1?'column is-8 is-offset-2':'column is-12'" v-if="veri">
                  <ListNav @sendShow="(i)=>{this.show = i}" @sendOrder="(a,b) => {this.setSort(a,b)}"/>
               
                   <ListUnit  v-if="show==1"   v-for="(item, i) in veri.data" :key="item.id" :data="item" /> 
                    <div class="columns is-multiline" v-if="show==2"  >
                         <div  v-for="(item, i) in veri.data" :key="item.id"  class="column is-4">
                           <GridUnit :data="item" /> 
                           </div> 
                      </div>              
                
           </div> -->
         <div class="container list-title">
                  <div class="content">
                      <h1>Arama sonuçları</h1>
                  </div>
              </div>
         <div v-if="veri">
           <Listing :veri="veri"  />
         </div>
         <!-- <Paginate v-if="veri" :data="veri" :getPage="setQuery" /> -->
          

     </div>
    </div>
</template>

<script>
import Paginate from '../../components/templates/pagination';
import Filtre from '../../components/tr/filter';
import listUnit from '../../components/tr/listUnit';
import GridUnit from '../../components/tr/HomeGridUnit';
import ListNav from '../../components/tools/listNav';
import Listing from '../../components/tr/list';
export default {
   watchQuery:true,
    scrollToTop: true,
    loading: true,
    components: { Paginate, Filtre, listUnit, GridUnit, ListNav, Listing },
    data(){
        return {
          url:this.$route.params.url,         
          lang:'tr',
          type: 'kat',
          page: 1,
          pagi:3,
          orderBy:'id',
          orderCond: 'DESC',
          veri:null,
          show:1
        }
    },
      head() {
    return {
      title:'KalkandaKirala.com - Kiralık Villa Tatili Asistanınız',
     meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kiralık Villa Tatili Asistanınız'
        
        },
        
        { property: 'og:site_name', content: this.$store.state.siteName },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: this.$store.state.baseTr + this.$route.path,
        },
        { property: 'og:locale', content: 'tr_TR' }, // Buraya o sayfanın dili. İngilizce ise en_US, türkçe ise tr_TR olacak.
     
        
      ],

    
      }

      
  },


     async asyncData ({$axios, params, route}) {
         const prms = route.fullPath.split('?')[1];        
         let url = '/listing?'+prms //page?'/listing/'+params.url+'?page='+page:'/listing/'+params.url; 
         
         let data  = await $axios.get(url).then(res => {
              return res.data;
             
              });
         
         return {
             veri:data
         }
       },
       mounted(){

          this.show = window.width>1000?1:2;
    //  this.getpinUrl();
        if(process.client){
         if(window.width>1000){
           const a =  parseInt(localStorage.getItem('show')); 
          this.show =a?a:1 ;
         }
        }
  },
    methods: {
      setSort(a,b){
       
        this.orderBy = a;
        this.orderCond = b;
         this.$router.push({ query: { ...this.$route.query ,orderBy:this.orderBy, orderCond:this.orderCond }, });
      },
        getFilter(i){
                i.guests?this.$router.push({ query: { ...this.$route.query ,guests: i.guests }, }):'';
        },
       setQuery(url){
             this.$router.push({ query: { ...this.$route.query ,page: url }, });
       },
       
    }

}
</script>

<style lang="css" scoped>
/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}
    body {
        background-color: #fff !important;
        background: #fff !important;
    }
</style>