<template>
         <article class="bu-wrap"  itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting" >
                        
                        <div class="bu-image-wrap">
                           <nuxt-link  :to="'/blog/'+item.blog_url" :title="item.blog_baslik">
                            <img class="bu-image" :src="item.blog_kapak" :alt="item.blog_baslik">
                           </nuxt-link>
                        </div>
                        <div class="bu-body">
                                <h3  itemprop="headline">{{item.blog_baslik}}</h3>
                                <h4  itemprop="headline">{{item.blog_altbaslik}}</h4>
                                
                        </div>
                        <div class="bu-footer">
                               <div class="level">
                                   <div class="level-item">
                                       <div class="navbar">
                                           <div class="navbar-item ">
                                               <i class="flaticon-user "></i> Editör
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
                                       <nuxt-link class="button is-danger" :to="'/blog/'+item.blog_url" :title="item.blog_baslik"> Detaylar </nuxt-link>
                                       
                                   </div>
                               </div>
                        </div>

        </article>
</template>
<script>
export default {
    props: {
        item:null
    }
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

@media (max-width: 1000px) {
    .bu-image-wrap {
    height: auto;
    position: relative;
    overflow: hidden;
}
}
</style>