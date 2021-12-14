<template>
    <div>
        <div class="container">
            <div class="columns page-body">
                <div class="column is-8" v-if="blogs" itemscope itemtype="http://schema.org/Blog" >
                    <Unit v-for="(item, i) in blogs" :key="i" :item="item" />
                    <div class="button-cont">
                       <nuxt-link class="button is-danger" to="/blog/liste" title="tüm bloglar">Tüm Bloglar</nuxt-link>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="blog-right">
                      <Subs />
                    </div>
                     <div class="blog-right">
                         <nuxt-link class="nl-color"  v-for="(blog ,j ) in side " :key="j" :to="'/blog/'+blog.blog_url">
                        <div class="columns">                            
                                 <div class="column is-5">
                                  <img :src="blog.blog_kapak" alt="">
                              </div>
                              <div class="column is-7">
                                  <h4>{{blog.blog_baslik}}</h4>
                                  <p>
                                      {{blog.blog_altbaslik}}
                                  </p>
                              </div>                            
                        </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Unit from '../../components/blog/unit';
import Subs from '../../components/templates/subs';
export default {
     scrollToTop: true,
    layout:'trBlogApp',
    components: { Unit, Subs },
        head() {
            return {
                title: this.blogSeo.seo.seo_baslik,
               meta: [
                 { hid: 'description', name: 'description', content: this.blogSeo.seo.seo_aciklama },
                 { hid: 'keywords', name: 'keywords', content: this.blogSeo.seo.seo_keywords},
              
                { property:"og:image" , content:this.blogSeo.kapak },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.blogSeo.seo.seo_baslik },
                { property:"og:description" , content:this.blogSeo.seo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.blogSeo.seo.seo_baslik },
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

         let data  = await $axios.get('/bloglar').then(res => { return res.data }); 
         let side  =  await $axios.get('/blog-most').then(resp => { return resp.data }); 
         let blogSeo = await $axios.get('/static-seo?pos=Blog').then(resp => {
             return resp.data
         }) 
    
        // let head  = await $axios.get('/slider').then(resp => { return resp.data });          
     
      return { 
         blogs:data.data,
         side:side, blogSeo
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
