<template>
    <div>
        <div class="container bg-dot">
            <div class="columns page-body">
                <div class="column is-8">
                    <div class="bu-wrap" >
                        <div class="bu-body">
                           <div class="has-text-centered">
                                <h1> {{item.say_baslik}}</h1>
                           </div>
                            <Content :Cont="item.content" />
                       </div>
                    </div>
                </div>
                 <div class="column is-4">
                    <div class="blog-right">
                        <ul>
                            <li v-for="(sy, k) in item.side" :key="k">
                               <nuxt-link :to="'/sayfa/'+sy.say_url">
                                    {{sy.say_adi}}
                               </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="side-villas">
                        <SideVillas />
                    </div>
                    <Help />
                 </div>  
            </div>         
        </div>
    </div>
</template>
<script>
import SideVillas from '~/components/templates/sideVillas.vue'
import Content from '../../components/templates/content'
import Help from '~/components/templates/help.vue'
export default {
    components: { Content,SideVillas,Help },
    scrollToTop: true,
    data(){
        return {

        }
    },

      head() {
            return {
                title: this.item.seo.seo_baslik,
             meta: [
                 { hid: 'description', name: 'description', content: this.item.seo.seo_aciklama },
                 
              
               
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.item.seo.seo_baslik },
                { property:"og:description" , content:this.item.seo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.item.seo.seo_baslik },
               
                { name:"twitter:creator" , content:"@twitterkullaniciadiniz"},
                { property:"fb:pages" , content:"BURAYA_FACEBOOK_SAYFA_ID_NUMARASI" },
                ],

               
            }
        },
      async asyncData ({$axios, params, route}) {          
      
      
      let data  = await $axios.get('/page/'+params.url).then(res => {             
                   return res.data;             
              });
         return {
             item:data
         }
       },
}
</script>

<style scoped>
.blog-right li {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333 !important;
}
.blog-right li a {
   
   
}
    .bu-wrap {
         
         padding: 0 !important;
         margin-bottom: 30px
         
     }
    .bu-image-wrap {
        height: 450px;
        position: relative;
        overflow: hidden;
    }
    .bu-body {
        padding: 30px;
        position: relative;
    }
    .bu-footer {
    border-top: 1px dotted #d8dce1;
    padding: 30px;
}

.blog-right{
    width: 100%;
    padding: 30px;
  
    margin-bottom: 20px;
}


</style>