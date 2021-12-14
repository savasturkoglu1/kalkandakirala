<template>
    <div>
        <div class="container">
            <div class="columns page-body">
                <div class="column is-8" v-if="blogs" itemscope itemtype="http://schema.org/Blog" >
                    <Unit v-for="(item, i) in blogs" :key="i" :item="item" />
                </div>
                <div class="column is-4">
                    <div class="blog-right">
                      <Subs />
                    </div>
                     <div class="blog-right">
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Unit from '../../../components/blog/unit';
import Subs from '../../../components/templates/subs';
export default {
    layout:'trBlogApp',
    components: { Unit, Subs },

     head() {
            return {
                title: this.blogSeo.seo_baslik,
               meta: [
                 { hid: 'description', name: 'description', content: this.blogSeo.seo_aciklama },
                 { hid: 'keywords', name: 'keywords', content: this.blogSeo.seo_keywords},
              
                { property:"og:image" , content:this.blogSeo.kapak },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.blogSeo.seo_baslik },
                { property:"og:description" , content:this.blogSeo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.blogSeo.seo_baslik },
                { name:"twitter:image" , content:this.blogSeo.kapak },
                { name:"twitter:creator" , content:this.$store.state.twitter_user},
                { property:"fb:pages" , content:this.$store.state.facebook_id },
                ],

                link: [
                       {rel: 'canonical',href: this.$store.state.baseTr+  this.$route.path },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"x-default"  }
            
                    ],
            }
        },
       async asyncData ({$axios, params, route}) {          
      

         let blogSeo = await $axios.get('/static-seo?pos=Blog').then(resp => { return resp.data });      
         let data  = await $axios.get('/blog-list/all').then(res => { return res.data; });
        
         
         return {
             blogs:data,            
             blogSeo
         }
       },
}
</script>
<style scoped>
    .blog-right {
    width: 100%;
    padding: 30px;
    background: #fff;
    margin-bottom: 20px
}
</style>
