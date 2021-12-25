<template>
    <div class="bg-gray">
           
            <div class="container list-title">
                  <div class="content">
                      <h1>{{kategori.kat_baslik}}</h1>
                  </div>
              </div>
            
    </div>
     
</template>

<script>
import Listing from '~/components/tr/list';
import Content from '~/components/templates/content';
import Brd from '~/components/templates/BreadCrum';
export default {
  
   // watchQuery:true,
    scrollToTop: true,
    loading: true,
    components: { Listing,Content, Brd},
    data(){
        return {
        

        }
    },

     head() {
            return {
                title: this.kategori.seo.seo_baslik,
             meta: [
                 { hid: 'description', name: 'description', content: this.kategori.seo.seo_aciklama },
               
              
                { property:"og:image" , content:this.kategori.bo_kapak },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.kategori.seo.seo_baslik },
                { property:"og:description" , content:this.kategori.seo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.kategori.seo.seo_baslik },
                { name:"twitter:image" , content:this.kategori.bo_kapak },
                { name:"twitter:creator" , content:"@twitterkullaniciadiniz"},
                { property:"fb:pages" , content:"BURAYA_FACEBOOK_SAYFA_ID_NUMARASI" },
                ],

                link: [
                       {rel: 'canonical',href: this.$store.state.baseTr+  this.$route.path },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"x-default"  },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"tr"  },
                      // {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"en"  },
                       this.veri.current_page!==1?{ rel:"prev", href:this.$store.state.baseTr+  this.$route.path+"?page="+parseInt(parseInt(this.veri.current_page)-1)}:'',
                       this.veri.current_page!==this.veri.last_page?{ rel:"next",  href:this.$store.state.baseTr+  this.$route.path+"?page="+parseInt(parseInt(this.veri.current_page)+1)}:'',
                    ],
            }
        },

   
     async asyncData ({$axios, params, route}) {           
           const p = route.fullPath.split('?')[1];  
           let prms = p?p:'';       
           let url     = '/listing/'+params.url+'?type=kat&'+prms;  
           let pinUrl  = '/pins/'+params.url+'?type=kat&'+prms; 
           console.log(url)
           let veri  = await $axios.get(url).then(res => {  return res.data; });
           let kategori = await $axios.get('/kategori/'+params.url).then(resp => { return resp.data });    
          // let pins = await $axios.get(pinUrl).then(resp => { return resp.data });      
         return {
             veri,
             kategori,
             pinUrl
         }
       },
    
    methods: {
        //    async   getPins(){
        //         const url = this.$route.params.url;
                
        //         await this.$axios.get('/bolge-pins?url='+url).then(resp => {
        //         this.pins =resp.data
        //         });
        //     },
    }

}
</script>
