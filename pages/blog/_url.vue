<template>
         
         <div itemscope itemtype="http://schema.org/BlogPosting">
         <meta itemprop="name" :content="item.blog_baslik" />
           <meta itemprop="coverageStartTime" :content="item.created_at" />
          <meta itemprop="coverageEndTime" :content="item.updated_at" />
        <div class="container">
            <div class="columns page-body">
                <div class="column is-8">
                    <div class="bu-wrap" >
                        <div class="bu-footer">
                               <div class="level">
                                   <div class="level-item">
                                       <div class="navbar">
                                           <div class="navbar-item "> 
                                               <i class="flaticon-user "></i> Yazar
                                           </div>
                                           <div class="navbar-item ">
                                                {{item.created_at}}
                                           </div>
                                           <div class="navbar-item ">
                                               {{item.blog_comment}} Yorum
                                           </div>
                                            <div class="navbar-item " v-if="item.blog_click">
                                               {{item.blog_click}} Okuma
                                           </div>
                                       </div>
                                       
                                   </div>
                                   <div class="level-right">
                                     <div v-if="item.content" class="buttons bu-like" style="display:none">
                                            <div :class="begen?'button is-smal is-danger':'button is-smal'" title="Villayı Beğen" @click="like(item.id)">
                                                <i class="fal fa-heart"></i>
                                            </div>
                                            
                                        </div>
                                   </div>
                               </div>
                        </div>
                        <div class="bu-image-wrap">
                         
                            <img class="bu-image" :src="item.blog_kapak" :alt="item.blog_baslik">
                        </div>
                        <div class="bu-body">
                                <h1 itemprop="headline">{{item.blog_baslik}}</h1>
                                <h4  itemprop="headline">{{item.blog_altbaslik}}</h4>
                                <p  itemprop="description"> {{item.blog_giris}} </p>

                        </div>
                        <div class="bu-content"  itemprop="articleBody">
                               <Content :Cont="item.content" />
                        </div> 
                          <div class="bu-footer">
                              <Sosyal
                              :conf="{
                                   url:this.$route.fullPath,
                                   title: item.seo.seo_baslik
                              
                                  }" />
                          </div>
                         
                        

        </div>
           <div class="bu-wrap" >
                  <div class="bu-body">
                        <Comment type="Blog" :comments="item.comments" :id="item.id" />
                  </div>             
           </div>
                </div>
                <div class="column is-4">
                    <div class="blog-right">
                      <Subs />
                    </div>
                     <div class="blog-right">
                         <nuxt-link class="nl-color"  v-for="(blog ,j ) in item.side " :key="j" :to="'/blog/'+blog.blog_url">
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
import Comment from '../../components/templates/comments';
import Subs from '../../components/templates/subs';
import Content from '../../components/templates/content';
import Sosyal from '../../components/templates/SocialSharing';

export default {
        scrollToTop: true,
        components: { Subs, Content, Sosyal, Comment},
        layout:'trBlogApp',  
        
         head() {
            return {
                title: this.item.seo.seo_baslik,
               meta: [
                 { hid: 'description', name: 'description', content: this.item.seo.seo_aciklama },
                 { hid: 'keywords', name: 'keywords', content: this.item.seo.seo_keywords},
              
                { property:"og:image" , content:this.item.blog_kapak },
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
                { name:"twitter:image" , content:this.item.blog_kapak },
                { name:"twitter:creator" , content:this.$store.state.twitter_user},
                { property:"fb:pages" , content:this.$store.state.facebook_id },
                ],

                link: [
                       {rel: 'canonical',href: this.$store.state.baseTr+  this.$route.path },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"x-default"  }
            
                    ],

            }
        },

      data(){
          return {
              path:null,
             // id:this.item.id,
              begen:false,
              }
      },
      mounted(){
          if(process.client){
              this.path = window.location
          }
         // this.check();
      },
       async asyncData ({$axios, params, route}) {          
      
      
      let data  = await $axios.get('/blog/'+params.url).then(res => {             
                   return res.data;             
              });
         return {
             item:data
         }
       },

       methods: {
           check(){
               let like = JSON.parse(localStorage.getItem('blog'));
                 if(like){
                     if(like.includes(this.id)){
                     this.begen=true
                 } else {
                     this.begen = false;
                    }
                 }
           },
           like(id){
              let list = JSON.parse(localStorage.getItem('blog'));
                  if(list){
                       if(list.includes(id)){
                        var index = list.indexOf(id);                    
                            if (index !== -1){ list.splice(index, 1);}  
                    } else {
                        list.push(id);
                    }
                    localStorage.setItem('blog', JSON.stringify(list));
                    
                  }  else {
                     localStorage.setItem('blog', JSON.stringify([id]));
                  }
       }}
}
</script>
<style scoped>
.bu-body h3 {
    font-size: 30px;
    margin-bottom: 10px;
}
.bu-body h4 {
    font-size: 24px;
    margin-bottom: 10px;
        color: #455A64;
}.bu-body p {
    font-size: 18px;
}
.buttons.bu-like .button {
    border: none;
    width: 50px;
}
.bu-footer i {
    font-size: 18px;
    /* background: #eeeeee5c; */
    color: #00d1b2;
    padding: 10px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #eee;
}
.bu-footer .navbar {
    text-align: left;
    flex-grow: inherit;
    font-size: 16px;
    
}
     .bu-wrap {
         background: #fff;
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
    background: #fff;
    margin-bottom: 20px;
}
</style>