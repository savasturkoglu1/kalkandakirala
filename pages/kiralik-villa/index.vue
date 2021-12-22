<template>
    <div>
        <div class="desc">
               <Brd :routeArray="[
              {name:'Anasayfa', path:'/'},
              {name:'Tüm Kiralık villalar', path:'/tum-villalar'}]" /> 
           </div>
         <Listing :veri="veri"  :pinUrl="pinUrl" />
          <div class="container">
              <div class="content">
                   <Content :Cont="vils.content" />
              </div>
          </div>
    </div>
     
</template>

<script>
import Listing from '../../components/tr/list';
import Content from '../../components/templates/content';
import Brd from '../../components/templates/BreadCrum';
export default {
  
    watchQuery:true,
    scrollToTop: true,
    loading: true,
    components: { Listing,Content, Brd },
    data(){
        return {
        

        }
    },

     head() {
            return {
                title: this.vils.seo.seo_baslik,
             meta: [
                 { hid: 'description', name: 'description', content: this.vils.seo.seo_aciklama },
                 
              
                { property:"og:image" , content:this.vils.kapak },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.vils.seo.seo_baslik },
                { property:"og:description" , content:this.vils.seo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.vils.seo.seo_baslik },
                { name:"twitter:image" , content:this.vils.kapak },
                { name:"twitter:creator" , content:"@twitterkullaniciadiniz"},
                { property:"fb:pages" , content:"BURAYA_FACEBOOK_SAYFA_ID_NUMARASI" },
                ],

                link: [
                       {rel: 'canonical',href: this.$store.state.baseTr+  this.$route.path },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"x-default"  },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"tr"  },
                     
                          this.veri.current_page!==1?{ rel:"prev", href:this.$store.state.baseTr+  this.$route.path+"?page="+parseInt(parseInt(this.veri.current_page)-1)}:'',
                       this.veri.current_page!==this.veri.last_page?{ rel:"next",  href:this.$store.state.baseTr+  this.$route.path+"?page="+parseInt(parseInt(this.veri.current_page)+1)}:'',
                    ],
            }
        },

   
     async asyncData ({$axios, params, route}) {           
           const p = route.fullPath.split('?')[1];  
           let prms = p?p:'';        
           let url     = '/listing?'+prms;  
           let pinUrl  = '/pins?'+prms; 

           let veri  = await $axios.get(url).then(res => {  return res.data; });
           let vils = await $axios.get('/villalar').then(resp => { return resp.data });    
            
         return {
             veri,
             vils,
             pinUrl
         }
       },
    
    methods: {
        //    async   getPins(){
        //         const url = this.$route.params.url;
                
        //         await this.$axios.get('/vils-pins?url='+url).then(resp => {
        //         this.pins =resp.data
        //         });
        //     },
    }

}
</script>
