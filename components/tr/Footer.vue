<template>
    <footer class="footer pr " v-if="$store.state.base"  >

        <div class="footer-top footer-border-top">
            <div class="container">
                <div class="columns">
                    <div class="column">
                          <div class="ft-sos">
                           
                            
                              <div class="buttons soc-buttons">
                                
                                <a class="button is-medium2 btn-insta " :href="$store.state.base.contact.sos_instagram" target="_blank">
                                    <i class=" flaticon-instagram"></i>
                                </a>
                                <a class="button is-medium2 btn-tiwtter" :href="$store.state.base.contact.sos_twitter" target="_blank">
                                    <i class=" flaticon-twitter"></i>
                                </a>
                                <a class="button is-medium2 btn-face" :href="$store.state.base.contact.sos_face" target="_blank">
                                    <i class=" flaticon-facebook"></i>
                                </a>
                                <a class="button is-medium2 btn-youtube" href="https://www.youtube.com/" target="_blank">
                                    <i class=" flaticon-youtube"></i>
                                </a>
                                
                            </div>
                       </div>
                    </div>
                    <div class="column">

                    </div>
                    <div class="columns">
                          <div class="buttons">
                              <button class="button fi-button br-right">
                                  <i class="flaticon-whatsapp"></i>
                                 <span class="fi-label"> {{$store.state.base.contact.ilt_mobil1}} <br><span class="note">Whatsapp iletişim</span> </span>  
                                 
                              </button>
                              <button class="button  fi-button">
                                  <i class="flaticon-phone " ></i>
                                 <span class="fi-label"> {{$store.state.base.contact.ilt_sabit1}} <br> <span class="note">Müşteri Himetleri</span> </span>
                                  
                              </button>
                          </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-mid footer-border-top">
            <div class="container">
                <div class="columns">


                    <div class="column is-4">
                          <h3>Popüler Bölgeler</h3>
                            <div class="foter-g-cols">
                                <div class="columns is-multiline">
                                     
                                      
                                    <div class="column is-6 foter-g-cols " v-for="(item,i) in $store.state.base.bolgeler" :key="i">
                                          <nuxt-link class="footer-menu-item" :prefetch="false"   :to="$store.state.trUrls.bolge+item.bo_url" :title="item.bo_adi">{{item.bo_adi}}
                                       </nuxt-link> 
                                    </div>
                                </div>
                            </div>
                    </div>

                     <div class="column is-8">
                          <h3>Villa Kategorileri</h3>
                            <div class="foter-g-cols">
                                <div class="columns is-multiline">
                                     
                                      
                                    <div class="column is-4 foter-g-cols " v-for="(item,i) in $store.state.base.kategoriler" :key="i">
                                          <nuxt-link class="footer-menu-item" :prefetch="false"  :to="$store.state.trUrls.kats+item.kat_url" :title="item.kat_adi">{{item.kat_adi}}
                                       </nuxt-link> 
                                    </div>
                                </div>
                            </div>
                    </div>

                    <!-- <div class="column is-3">
                          <h3>Destek</h3>
                            <div class="foter-g-cols">
                                <div class="columns is-multiline">
                                     
                                      
                                    <div class="column is-6 foter-g-cols " v-for="(item,i) in $store.state.base.sayfalar" :key="i">
                                          <nuxt-link class="footer-menu-item"   :to="'/sayfa/'+item.say_url" :title="item.say_adi">{{item.say_adi}}
                                    </nuxt-link> 
                                     
                                    </div>
                                </div>
                            </div>
                    </div> -->


                </div>
            </div>
        </div>   

        <div class="fotter-logos footer-border-top">
            <div class="container">
                <div class="columns">

                     <div class="column">
                            <img  :src="$store.state.base.settings.set_logo"  alt="villa kiralama" class="footer-logo" /> <br>
                            <b>KalkandaKirala Turizm</b>
                     </div>
                     <div class="column">

                     </div>
                     <div class="column">
                          <img  class="footer-kk" src="~/static/images/kklogo.png" alt="likya pix" > </a> 
                     </div>
                </div>
            </div>

        </div>
        
        <div class="container has-text-centered pr" >

       

          
           
           <hr>
           <div class="level">
               <div class="level-item" style='color:#607d8b'>
                   © KalkandaKirala.com - 2022 Tüm Hakları Saklıdır
                    - Geliştirici <a href="http://www.likyapix.com/" target="_blank"><img loading="lazy" class="footer-cc" style="width:60px" src="~/static/images/lplogo.png" alt="likya pix" > </a> 
               </div>              
           </div>

        </div>
        </footer>
</template>
<script>
export default {
    data(){
        return {
            cls:false,
            veri:null
        }
    },
    props: {
        data:null
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

<style >
a.footer-menu-item {
    color: #78909c;
    font-size: 16px;
}
.footer-menuler {
    text-align: left;
}
.footer-menu ul {
    list-style-type: none;
    margin-left: 0;
}
.footer-menuler h3 {
    color: #6f6f6f;
    font-size: 18px;
}
.footer-menuler {
    margin-bottom: 30px;
    padding-bottom: 1px;
   
}

.fk-trow  .button {
    background-color: #ffffff7d;
}
.footer .level {
      display: block;
}
.f-phone {
    font-size: 20px;
    margin-right: 20px;
    color: #37474f;
}
.footer-link {
    color: #333
}
.f-close {
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 56px;
    color: #6ee5d3;
    cursor: pointer;
}
.footer-cc {
    width: 180px
}
.hov {
    background: #fff !important
}
img.footer-mid-back {
    position: absolute;
    width: 100%;
    height: auto;
    text-align: center;
    z-index: 0;
    opacity: 0.05; left: 0;    

}
.columns.footer-mid {
    margin-bottom: 30px;
    margin-top: 40px;
}
.f-title {
    margin-bottom: 10px;
    margin-top: 15px;
    padding: 5px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: sans-serif !important;
}
ul.f-list {
    font-size: 16px;
    line-height: 34px;
    color: #333;
    font-weight: 600;
}
.footer-logo {
    width: 260px;
    opacity: 0.9;
}
    .footer {
  
   background-color: #fff; 
   padding: 0px;
   margin:auto
}
hr {
    background-color: #cfd8dc;
    border: none;
    display: block;
    height: 1px;
    margin: 1.5rem 0;
}
.fk-trow .button {
    background-color: rgb(255 255 255 / 96%);
}
.footer-mid i {
    font-size: 62px;
    font-weight: 500;
    color: #ddd;
    padding: 20px;
    border-radius: 50%;background: #f7f8f9;
}

.columns.fk-trow .button {
  background: #eceff1;
    border: none;
    color: #263238;
}
.columns.fk-trow h3 {
    color: #fff;
}

.fk-trow {
    color: #455a64;
}

.btn-insta {
    background: #e91e63 !important;
    color: #fff !important;
}

.btn-insta i::before {
   font-size: 20px;
}

/* .soc-buttons i::before {
    font-size: 24px;
} */

.btn-tiwtter {
    background-color: #03a9f4 !important;
    color: #fff !important;
}

.btn-face {
    background-color: #1565c0 !important;
    color: #fff !important;
}

.btn-youtube {
    background-color: #d32f2f !important;
    color: #fff !important;
}

.foter-g.hero {
    text-align: left;
}

.footer-top {
    padding-top: 30px;
    padding-bottom: 30px;
 
    
}

.footer-border-top {
border-top: 1px solid #ebf1fa;
}

.footer-mid {
    background: #f1f3fa;
    padding: 40px;
}

.buttons.soc-buttons {
    filter: opacity(0.5);
    opacity: 0.8;
    -webkit-transition: all 300ms linear;
}

.foter-g-cols {
    padding: 5px;
}


.footer h3 {
    margin-bottom: 20px;
}

.fi-button {
    border: none;
    border-radius: none;
}

.br-right {
    border-right: 1px solid #ccc;
}
span.fi-label {
    line-height: 15px;
}

.fi-button i::before {
    font-size: 24px;
}

button.button.fi-button {
    color: #546e7a;
}

.fotter-logos {
    padding: 30px;
}
</style>