<template>
    <div class="container e-cont">
          <div class="columns">
              <div class="column is-8">
                    <Slider v-if="data" :images="data.images" :per="1" sclass="es-img"/> 
                   
              </div>
              <div class="column is-4">
                   <div class="ed-wtap">
                         <div class="ed-title">
                             <h1>  {{data.e_baslik}}</h1>
                             <div class="ed-bolge">
                                 {{data.e_il}} {{data.e_ilce}} {{data.e_bolge}} {{data.e_mevkii}}
                             </div>
                             <h3> {{data.e_fiyat}} </h3>
                         </div>
                         <div class="ed-body">
                             <div class="ed-row columns is-mobile">
                                    <div class="column">
                                        Ada no
                                    </div>
                                    <div class="column has-text-right">
                                        {{data.e_ada_no}}
                                    </div>
                             </div>
                              <div class="ed-row columns is-mobile">
                                    <div class="column">
                                        Parsel no
                                    </div>
                                    <div class="column has-text-right">
                                        {{data.e_parsel_no}}
                                    </div>
                             </div>
                              <div class="ed-row columns is-mobile">
                                    <div class="column">
                                        Tapu durumu
                                    </div>
                                    <div class="column has-text-right">
                                        {{data.e_tapu}}
                                    </div>
                             </div>

                             <div class="ed-row columns is-mobile">
                                    <div class="column">
                                        Kredi durumu
                                    </div>
                                    <div class="column has-text-right">
                                        {{data.e_kredi}}
                                    </div>
                             </div>
                             <div class="ed-row columns is-mobile">
                                    <div class="column">
                                        Metrekare
                                    </div>
                                    <div class="column has-text-right">
                                        {{data.e_metrekare}}
                                    </div>
                             </div>
                         </div>
                   </div>
              </div>
          </div>
          <div class="columns">
              <div class="column is-8">
                   <div class="ea-row">
                        
                            <div class="ea-aciklama" v-html="data.e_aciklama">
                               
                            </div>
                      
                    </div>
                     <div class="ea-row">
                       
                            <div class="ea-video" v-html="data.e_video">

                            </div>
                        
                    </div>
                    <div class="ea-row">
                        
                            <div class="ea-map"  v-html="mapRender(data.e_lat, data.e_lang)">

                            </div>
                      
                    </div>
              </div>
              <div class="column is-4">
                   
                    <div class="ed-contact">
                         <h4>Bu emlak hakkında soru sorun !</h4>
                        <Contact />
                    </div>
              </div>
          </div>
    </div>
</template>
<script>
import Slider from '../../components/templates/VillaSlider';
import Contact from '../../components/tools/contactForm';
export default {
     
    scrollToTop: true,
    loading: true,
       head() {
            return {
                title: this.data.e_seo_baslik,
            meta: [
                 { hid: 'description', name: 'description', content: this.data.e_seo_aciklama },
                 
                // { hid:'rel', name:'canonical', href:this.$store.state.baseTr+this.$store.state.trUrls.villa+this.data.e_url },
                { property:"og:image" , content:this.data.images[0].res_url },
                { property:"og:site_name" , content: this.$store.state.siteName },
                { property:"og:type" , content:"website" },
                { property:"og:url" , content: this.$store.state.baseTr+  this.$route.path },
                { property:"og:locale" , content:"tr_TR"}, // Buraya o sayfanın dili. İngilizce ise en_US, türkçe ise tr_TR olacak.
                { property:"og:title" , content:this.data.e_seo_baslik },
                { property:"og:description" , content:this.data.e_seo_aciklama },
                { name:"twitter:card" , content:"summary_large_image"},
                { name:"twitter:site" , content: this.$store.state.siteName },
                { name:"twitter:url" , content: this.$store.state.baseTr+  this.$route.path},
                { name:"twitter:title" , content:this.data.e_seo_baslik },
                { name:"twitter:image" , content:this.data.images[0].res_url },
                { name:"twitter:creator" , content:"@twitterkullaniciadiniz"},
                { property:"fb:pages" , content:"kalkandakiralacom" },
                ],

                link: [
                       {rel: 'canonical',href: this.$store.state.baseTr+  this.$route.path },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"x-default"  },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"tr"  },
                       {rel: 'alterne',href: this.$store.state.baseTr+  this.$route.path, hreflang:"en"  }
                    ],
            }
        },

    components: { Slider, Contact },
        async  asyncData({params, $axios}) {            
                const data = await  $axios.get('/emlak/'+params.url) //.then(resp => { resp.data });
               
                return { data:data.data };
         },

          methods: {
             mapRender(lat, lang){
            return '<iframe style="height: 100%;" src="https://maps.google.com/maps?q='+lat+', '+lang+'&z=12&output=embed" width="100%" height="100%" frameborder="0" style="border:0"></iframe>';         
         }
            }
}
</script>
<style scoped>
.ed-contact {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}
.ea-aciklama {
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 6px;
}
.ea-map {
    height: 400px;
}
.ed-row {
    margin-bottom: 0px;
    padding: 5px;
}
.ed-body{
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
}
.ed-title {
    text-align: center;
    padding: 15px;
    background: #8bc34a6b;
}
.ed-wtap {
    background: #fff;
    padding: 0px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}
  .e-cont {
      margin-top: 30px;
      margin-bottom: 40px
  }

    .es-img {
    height: auto !important;
    width: 100% !important;
    min-height: 100%;
}
</style>