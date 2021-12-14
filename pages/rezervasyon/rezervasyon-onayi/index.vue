<template>


    <div class="container sp-cont">
           <div class="columns ">
               <div class="column is-8 is-offset-2">
                  
                    <div class="sc-wrap">
                                  
                                <h1>Rezervasyon Talebiliniz Alınmıştır</h1>
                                <h3>Müşteri temsilcilerimiz en kısa sürede sizinle iletişim kuracaktır</h3>
                                <h4>Rezervasyon detaylarınız mail adresinize gönderilmiştir</h4>
                                <div class="rc-wrap" >
                                    <label>Rezerasyon Kodunuz: </label><br>
                                     <span class="rez-kodu">{{this.$route.query.code}}</span>
                                </div>
                                <!-- <div class="rc-wrap">
                                    <div class="columns is-centered">
                                         <div class="urs" v-if="user">
                                               {{user.email}}
                                               <br>
                                               email adresiniz ve şifreniz ile <a @click="showModal">giriş</a> yapapı rezervasyonunuzu takip edebilirsiniz !
                                           </div>
                                        <div v-else  class="column is-half">
                                             <b>Şifrenizi belirleyip üye olun rezervasyonunuzu kolayca takip edin</b>
                                            <div class="is-grouped">                                               
                                                <div class="sb-feed sl-sol pr">
                                                    <i class="fal fa-lock-alt"></i>
                                                    <input name="arrive"  type="password" class="form-k check_in_date"  placeholder="Şifreniz" v-model="mail">
                                                </div>
                                                <button :class="spn?'button is-medium  is-loading  is-success':'button is-medium is-success'" @click="sendSub">
                                                    Üye ol
                                                </button>
                                           </div>
                                          
                                        </div>
                                        
                                    </div>
                                </div> -->
                                 <div class="rc-wrap" >
                                    <h3>Soru ve görüşleriniz için </h3><br>
                                     <div class="button is-large">
                                         <span class="icon is-small">
                                              <i class="fab fa-whatsapp"></i>
                                         </span>
                                         <span>
                                             {{fData.ilt.ilt_mobil1}}
                                         </span>
                                     </div>
                                </div>
                                <div class="rv-wrap">
                                    <h3>Bilgilendirme</h3>
                                    <div class="buttons">
                                        <nuxt-link class="button" v-for="(item, i) in fData.pages" :to="'/sayfa/'+item.say_url" :key="i">
                                            {{item.say_adi}}
                                        </nuxt-link>
                                    </div>
                                </div>

                    </div>
               </div>
           </div>
    </div>
</template>
<script>
import AccModal from '../../../components/tr/accountdd';
export default {
    components: {  AccModal },
    data(){
        return {
             spn:false,
             user:null,
            mail:null
        }
    },
     head () {
            return {
            meta: [
                { hid: 'robots', name: 'robots', content: 'noindex' }
            ]
            }
        },
      async asyncData ({$axios, params, route}) { 
           let fData  = await $axios.get('/footerdata?lang=tr').then(res => { return res.data });  
           return { fData }
      },

    mounted(){
            let usr = localStorage.getItem('user');
              if(usr){
                  this.user = JSON.parse(usr);
                  
              }
    },
    methods:{
        showModal(){
        $("#accModal").addClass("is-active");
    },
        sendSub(){
            let code = this.$route.query.code;
            this.spn = true;
            this.$axios.get('/rez-uye-ol?sifre='+this.mail+'&kod='+code).then(resp => {
                this.spn = false;
                this.user = resp.data;
                 localStorage.setItem('token',resp.data._token);
                 localStorage.setItem('user',JSON.stringify(resp.data));                 
                 this.$router.push({ name: 'hesap'} );
            })
        }
    }
}
</script>
<style scoped>
.rez-kodu {
    background-color: #fff;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    
    justify-content: center;
    padding-bottom: calc(.375em - 1px);
    padding-left: .75em;
    padding-right: .75em;
    padding-top: calc(.375em - 1px);
    text-align: center;
    
}
.rc-wrap {
    margin-bottom: 20px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}
    .sc-wrap{
        padding: 40px;
        background: #fff;
        border-radius: 10px;
        text-align: center;
    }
    .sc-wrap h1 {
    font-size: 34px;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: #04d2b3;
    letter-spacing: 1px;
}

.detail-wrap .level {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

 .is-grouped {
    display: flex;
    justify-content: flex-start;
}


.sb-feed i {
    font-size: 18px;
        font-size: 18px;
    margin-top: 8px;
    margin-right: 5px;
    color: #d8dce1;
}

 .sb-feed {
  
  display: flex;
  width: 100%;
  height: 44px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  color: #555555;
  background-color: #fff;
  background-image: none;
   border: 1px solid #ccc; 
  border-radius: 4px;
 
  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
}
</style>