<template>
    <footer class="footer pr " v-if="$store.state.base"  >
        
        <div class="container has-text-centered pr">
            
           <!-- <div class="level">
               <div class="level-item has-text-centered">
                    <v-lazy-image  :src="data.logo"  class="footer-logo" alt="villa kiralama" />
               </div>              
           </div>
           <hr>     -->
          <img  :src="$store.state.base.settings.set_logo"  alt="villa kiralama" class="footer-mid-back" />
           <div class="content" v-if="veri">
               <div class="columns fk-trow">
                   <div class="column is-4">
                      <img  :src="$store.state.base.settings.set_logo"  alt="villa kiralama" class="footer-logo" /> <br>
VillA Evreni markası, ARICAN EMLAK TURİZM İNŞAAT SAN. VE TİC. LTD. ŞTİ. ticari ünvanı altında faaliyetine başlamıştır. VillA Evreni vizyonumuz, misafirlerimizin güzel anılar biriktirmesine aracı olarak bölgemizin değerinin arttırmak. VillA Evreni misyonumuz, müşteri memnuniyetini sürekli kılmak adına tatil döneminde evinde gibi rahat hissetmek isteyen misafirlerimize kaliteli villa portföyümüz ile hizmet vermek.                    </div>
                   <div class="column is-4">
                   </div>
                   <div class="column is-4">
                       <div >
                           
                            
                              <div class="buttons soc-buttons">
                                
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
                       <div>
                           
                       <br>
                        <div class="column has-text-left">
                        <div class="f-phone" v-if="$store.state.base.contact.ilt_mobil">
                            <i class="flaticon-phone" ></i>
                            <span> {{$store.state.base.contact.ilt_sabit1}} </span>
                        </div>
                        <div class="f-phone" v-if="$store.state.base.contact.ilt_mobil">
                            <i class="flaticon-phone"></i>
                            <span> {{$store.state.base.contact.ilt_mobil2}} </span>
                        </div>
                            <div class="f-phone">
                            <i class="flaticon-whatsapp"></i>
                            <span> {{$store.state.base.contact.ilt_mobil1}} </span>
                        </div>
                        <div class="f-phone">
                            <i class="flaticon-phone"></i>
                            <span> {{$store.state.base.contact.ilt_mobil1}} </span>
                        </div>
                            </div>
                            
                            <div class="column has-text-left">
                                    
                                    <div class="f-phone">
                                        <i class="flaticon-location"></i>
                                        <span> {{$store.state.base.contact.ilt_adres}} </span>
                                    </div>

                            </div>
                        </div>
                   </div>
               </div>
               <hr>   
              
               <div class="columns footer-menuler" > 
                   <div class="column is-3">
                       <h3>VİLLA SEÇENEKLERİ</h3>
                 
                       <div class="footer-menu">
                             <ul>
                                 <li  v-for="(item,i) in $store.state.base.kategoriler" :key="i" >
                                     <nuxt-link class="footer-menu-item" :to="$store.state.trUrls.kats+item.kat_url" :title="item.kat_adi">{{item.kat_adi}}
                                   </nuxt-link> 
                                 </li>
                                 <li>
                                <nuxt-link class="footer-menu-item"  to="/kiralik-villa" title="kiralik villa kategorileri">Tüm Villalar
                            </nuxt-link> 
                                 </li>
                             </ul>
                             
                             
                       </div>
                   </div>
               
                   <div class="column is-3">
                       <h3>BÖLGELER</h3>
                  
                       <div class="footer-menu">
                             <ul>
                                 <li v-for="(item,i) in $store.state.base.bolgeler" :key="i">
                                       <nuxt-link class="footer-menu-item"   :to="$store.state.trUrls.bolge+item.bo_url" :title="item.bo_adi">{{item.bo_adi}}
                                   </nuxt-link> 
                                 </li>
                             </ul>
                              
                       </div>
                   </div>
               
                   <div class="column is-3">
                       <h3>BİLGİLENDİRME</h3>
                 
                             <div class="footer-menu">   
                                 <ul>
                                     <li v-for="(item,i) in $store.state.base.pages" :key="i" >
<nuxt-link class="footer-menu-item"  :to="'/sayfa/'+item.say_url" :title="item.say_adi">{{item.say_adi}}
                                    </nuxt-link> 
                                     </li>
                                     <li>
                                        <nuxt-link class="footer-menu-item"  to="/iletisim" title="iletişim"> İletişim
                                   </nuxt-link>
                                 
                                     </li>
                                     <li>
                                     
                                   <nuxt-link class="footer-menu-item"  to="/teklif-al" title="teklif"> Sana özel teklif al
                                   </nuxt-link>
                                     </li>
                                    </ul>                      

                                    
                                      
                                   
                                   
                       </div>
                   </div>
                   <div class="column is-3">
                       <h3>ÇEŞİTLİ</h3>
                 
                             <div class="footer-menu">                         

                                    <ul>
                                        <li>
 <nuxt-link class="footer-menu-item"  to="/emlak" title="iletişim"> Satılık emlak
                                   </nuxt-link>
                                        </li>
                                        <li>
 <a class="footer-menu-item"  href="/blog" title="blog" target="_blank"> Blog
                                   </a>
                                        </li>
                                    </ul>
                                      
                                    
                                     
                       </div>
                   </div>
               </div>
           </div>
           
           <hr>
           <div class="level">
               <div class="level-item" style='color:#607d8b'>
                   © Villaevreni.com - 2021 Tüm Hakları Saklıdır
                    - Geliştirici <a href="http://www.likyapix.com/" target="_blank"><img  class="footer-cc" style="width:60px" src="~/static/images/lplogo.png" alt="likya pix" > </a> 
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

<style scoped>
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
  
   background-color: #f5f5f5; 
   padding: 3rem 1.5rem 1rem;
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

.soc-buttons i::before {
    font-size: 24px;
}

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
</style>