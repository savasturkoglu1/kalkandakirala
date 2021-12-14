<template>
    <div class="mm"  @click="() => {this.$parent.show = false}">
        <div class="mm-top">
           <div class="button " @click="() => {this.$parent.show = false}">
               <i class="fal fa-chevron-left"></i>
           </div>
           <div class="mobil-flags">
              <div class="buttons">
                        <nuxt-link class="button is-primary"  to="/blog">
                           Blog
                        </nuxt-link>
                        <nuxt-link class="button is-primary"  to="/blog">
                           Teklif Al
                        </nuxt-link>
                   </div>
           </div>
        </div>
        <div class="mm-menu-cont">
            <FormSpinner v-if="!veri" />
        <div class="mm-body" v-else>
               <div class="mm-row">
                   <h3>Kategoriler</h3>
                   <div class="mb-li-wrap">
                        <ul>
                            <li class="mb-li" v-for="(item, i)  in veri.kategoriler" :key="i" >
                                <nuxt-link class="mb-li-link" :title="item.kat_adi" :to="$store.state.trUrls.kats+item.kat_url">
                               {{item.kat_adi}}
                              </nuxt-link>
                            </li>
                        </ul>
                   </div>
                    <!-- <div class="sec-buton-cont">
                              <nuxt-link  class="button button-small" :to="$store.state.trUrls.kats">Tüm Kateogirler</nuxt-link>
                       </div> -->
               </div>
               <div class="mm-row">
                   <h3>Bölgeler</h3>
                   <div class="mb-li-wrap">
                        <ul>
                            <li class="mb-li" v-for="(item, i)  in veri.bolgeler" :key="i" >
                                <nuxt-link class="mb-li-link" :title="item.bo_adi" :to="$store.state.trUrls.bolge+item.bo_url" >
                                  {{item.bo_adi}}
                              </nuxt-link>
                            </li>
                        </ul>
                   </div>
                   <!-- <div class="buttons">
                        <nuxt-link class="button" v-for="(item, k)  in veri.bolgeler" :title="item.bo_adi" :key="k" :to="$store.state.trUrls.bolge+item.bo_url" >
                            {{item.bo_adi}}
                        </nuxt-link>
                   </div> -->
                    <!-- <div class="sec-buton-cont">
                              <nuxt-link  class="button button-small " :to="$store.state.trUrls.bolge">Tüm bölgeler</nuxt-link>
                       </div> -->
               </div>
               <div class="mm-row">
                   <h3>Sayfalar</h3>
                     <div class="mb-li-wrap">
                        <ul>
                            <li class="mb-li" v-for="(item, i)  in veri.pages" :key="i" >
                                <nuxt-link class="mb-li-link" :title="item.say_adi"  :to="$store.state.trUrls.sayfa+item.say_url">
                                     {{item.say_adi}}
                              </nuxt-link>
                            </li>
                        </ul>
                   </div>
                   <!-- <div class="buttons">
                        <nuxt-link class="button" v-for="(item, m)  in veri.pages" :title="item.say_adi" :key="m" :to="$store.state.trUrls.sayfa+item.say_url">
                            {{item.say_adi}}
                        </nuxt-link>
                   </div> -->

                    
               </div>
             
               <div class="mm-row">
                    <App />
               </div>
                 <div class="mm-row">
                    <Subs />
               </div>
        </div>
        </div>
        <div class="mm-footer">
            
        </div>
    </div>
</template>
<script>
import FormSpinner from '../tools/Spinner';
import App from '../templates/apps';
import Subs from '../templates/subs';
export default {
    components: { FormSpinner, App, Subs },
    data(){
        return {
            veri:null,
        }
    },

 
    mounted(){
        this.getDatas();
    },
    methods: {
         async getDatas(){
         await this.$axios.get('/nav-set').then(resp => {
            this.veri = resp.data
          })
      }
    }
}
</script>

<style scoped>

.mm-menu-cont {
    width: 80%;
    background: #ECEFF1;
    position: relative;
}

.mb-li {
    margin-bottom: 10px;
}

a.mb-li-link::before {
    content: "\A";
    width: 10px;
    height: 6px;
    border-radius: 5px;
    background: #455A64;
    display: inline-block;
    margin-right: 10px;
}

a.mb-li-link{
   cursor: pointer;
    color: #455A64;
    font-size: 16px;
}
.mb-li-wrap {
    display: block;
    padding-left: 20px;
}
.mm-row {
    margin-bottom: 30px;
}
.mobil-flags {
    float: right;
}
.mobil-flags img {
    width: 25px;
    margin-top: 5px;
    margin-right: 5px;
}
.mm-top {
    border-bottom: 1px solid #d8dce1;
    padding: 5px;
        width: 80%;
    background: #000;
}
.mm-top .button {
   border: none;

}
    .mm {
    position: fixed;
    top: 0;
    height: 100%;
    background: #0000004f;
    padding: 0;
    width: 100%;
    z-index: 99;
}
.mm-body {
    padding: 15px;
    overflow-y: auto;
    height: calc(100vh - 100px);
}

.buttons a {
    font-size: 15px;
}

.mm-row h3 {
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
}
</style>