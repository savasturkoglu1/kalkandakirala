<template>
    <div>
        <section class="hero top-hero">
                                           <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.1385537441388!2d29.409968529283002!3d36.2746002987538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c02d7069fc8329%3A0x176e7f132bb3f04d!2sVillA%20Evreni!5e0!3m2!1sen!2str!4v1638286758188!5m2!1sen!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12866.175988951483!2d29.4169102!3d36.2748483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b726e70e61764d5!2sKalkandaKirala.com%20Kiral%C4%B1k%20Villa%20Tatil%20Asistan%C4%B1n%C4%B1z*21!5e0!3m2!1sen!2str!4v1646204564597!5m2!1sen!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </section>
        <div class="container">
            <div class="columns is-centered page-body">
                <div class="column is-8">
                    <div class="bu-wrap" >
                        <!-- <div class="bu-body">
                           
                       </div> -->
                       <div class="bu-body">
                           <div class="columns">
                               <div class="column is-6" v-if="data">
                                    
                                    <ul>
                                        <h6 itemscope itemtype="http://schema.org/Organization" class="text-uppercase font-weight-bold"><i class="fal fa-map-marker"></i> <h1>İletişim</h1></h6>
                                        <h3  itemprop="name">{{data.ilt_firma}}</h3>
                                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                                <li><p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><i class="fa fa-home mr-3" ></i> {{data.ilt_adres}}</p></li>
                                <li><p  itemprop="email"><i class="fal fa-envelope mr-3"></i> {{data.ilt_eposta1}}</p></li>
                                <li><p  itemprop="email"><i class="fal fa-envelope mr-3"></i> {{data.ilt_eposta2}}</p></li>
                                <li  itemprop="telephone"><p><i class="fal fa-mobile-android"></i>  {{data.ilt_sabit1}}</p></li>
                                <li  itemprop="telephone"><p><i class="fa fa-print mr-3"></i> {{data.ilt_sabit3}}</p></li>
                                <li  itemprop="telephone"><p><i class="fab fa-whatsapp"></i> {{data.ilt_mobil1}}</p></li>
                                    </ul>
                                     <div class="buttons soc-buttons" v-if="$store.state.base">
                                
                                <a class="button is-medium btn-insta " :href="$store.state.base.contact.sos_instagram" target="_blank">
                                    <i class=" flaticon-instagram"></i>
                                </a>
                                <a class="button is-medium btn-tiwtter" :href="$store.state.base.contact.sos_twitter" target="_blank">
                                    <i class=" flaticon-twitter"></i>
                                </a>
                                <a class="button is-medium btn-face" :href="$store.state.base.contact.sos_face" target="_blank">
                                    <i class=" flaticon-facebook"></i>
                                </a>
                                <a class="button is-medium btn-youtube" href="https://www.youtube.com/" target="_blank">
                                    <i class=" flaticon-youtube"></i>
                                </a>
                                
                            </div>
                               </div>
                               <div class="column is-6">
                                   <Cform />
                               </div>
                           </div>
                       </div>
                       <!-- <div class="bu-body">
                           <div class="ilt-map2"  style="width:100%; height: 300px;">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.1385537441388!2d29.409968529283002!3d36.2746002987538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c02d7069fc8329%3A0x176e7f132bb3f04d!2sVillA%20Evreni!5e0!3m2!1sen!2str!4v1638286758188!5m2!1sen!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                           </div>
                       </div> -->
                    </div>
                </div>
                 
            </div>         
        </div>
    </div>
</template>
<script>
import Cform from '../../components/tools/contactForm';
export default {
    components: { Cform }, scrollToTop: true,
      head() {
            return {
                title: this.iltSeo.seo.seo_baslik,
               meta: [
                 { hid: 'description', name: 'description', content: this.iltSeo.seo.seo_aciklama },
                 { hid: 'keywords', name: 'keywords', content: this.iltSeo.seo.seo_keywords},
              
                { property:"og:image" , content:this.iltSeo.kapak },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"},
                { property:"og:title" , content:this.iltSeo.seo.seo_baslik },
                { property:"og:description" , content:this.iltSeo.seo.seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.iltSeo.seo.seo_baslik },
                { name:"twitter:image" , content:this.iltSeo.kapak },
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

        }
    },
      async asyncData ({$axios, params, route}) {   
           let data  = await $axios.get('/contact').then(res => {     return res.data;     });
            const iltSeo   =   await $axios.get('/static-seo?pos=iletisim').then(resp => {
             return resp.data
         }) 
     
         return { data,iltSeo }
       },
}
</script>

<style scoped>
.top-hero {
    height: 400px;
}
.bu-body li {
    margin-bottom: 10px; font-size: 20px
}
.mr-3 {
    margin-right: 10px;
    font-size: 20px
}
 iframe {
    height: 100%;
    max-width: 100%;
}
.blog-right li {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333 !important;
}
.blog-right li a {
   
    color: #333 !important;
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
        background: #f3f1fa;
    margin-bottom: 30px;
    border-radius: 8px;
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