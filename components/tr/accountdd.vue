<template>
    <div class="modal" id="accModal">
    <div class="modal-background"></div>
      <div class="modal-card">
   
    <section class="modal-card-body pr">
      
      
           <div class="columns">
                    <div class="column log-img is-6">
                        <div class="lg-image-wrap">
                            <div class="log-wcom">
                                Hoş Geldiniz !
                            </div>
                            <img class="log-img" src="~/static/images/sh.webp" alt="villa kiralama" >
                        </div>
                    </div>
                    <div class="column is-6  log-wrap">
                        <button class="delete log-close" aria-label="close"   @click="hideModal"></button>
                         <div class="logi"  v-if="shw==1">
                             
                    <form action="">
                        <div class="field">
                        
                        <div class="control has-icons-left">
                            <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required v-model="email">
                            <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                        </div>
                        <div class="field">
                        
                        <div class="control has-icons-left">
                            <input type="password" placeholder="*******" class="input" required v-model="pass">
                            <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        </div>
                        <div class="field">
                        
                        </div>
                        <div class="field">
                        <button class="button is-primary  is-fullwidth" type="button" @click="login">
                            Giriş
                        </button>
                        </div>
                    </form>
                    <a @click="()=>{this.shw=2}">Kaydol</a>
                    <a style="float: right;" href="/password/reset" target="_blank">Şifremi unutum</a>
                         </div>
                         <div class="registi"  v-if="shw==2">
                                   
                     
                    <form action="">
                        <div class="field">
                        
                        <div class="control has-icons-left">
                            <input type="email" placeholder="Eposta adresiniz" class="input" required v-model="rMail">
                            <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                        </div>
                         <div class="field">

                        <div class="control has-icons-left">
                            <input type="tezt" placeholder="Adınız" class="input" required v-model="rName">
                            <span class="icon is-small is-left">
                            <i class="fal fa-user"></i>
                            </span>
                        </div>
                        </div>
                        <div class="field">
                        
                        <div class="control has-icons-left">
                            <input type="password" placeholder="şifre" class="input" required  v-model="rPass">
                            <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                            </span>
                        </div>
                         </div>
                         <div class="field">
                        <div class="control has-icons-left">
                            <input type="password" placeholder="Şifre Tekrar" class="input" required>
                            <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        </div>
                        <div class="field">
                        
                        </div>
                        <div class="field">
                            <div class="alert" v-if="rAlert"> {{rAlert}}</div>
                        <button class="button is-primary  is-fullwidth" @click="register">
                            Kaydol
                        </button>
                        </div>
                    </form>
                    <a  @click="()=>{this.shw=1}">Giriş yap</a>
                         </div>
                         
                    </div>
                    
                </div>
    </section>
   
  </div>
</div>
</template>

<script>
import RezRow from '../templates/rezRow';
export default {
    components : { RezRow },
    data(){
          return {
               rMail:null,
               rName:null,
               rPass:null,
                shw:1,
               logged:null,
               email:null,
               pass:null,
               user:null,
               rAlert:null
              
          }
    },
    mounted(){
       const logged = localStorage.getItem('token');
       if(logged){
           this.logged = logged;
           console.log(logged);
            this.getUser(logged);
            
       }
     
    },
    methods: {
        register(){
           if(!this.rMail && !this.rName && !this.rPass){
               this.rAlert = 'Lütfen tüm alanları doldurunuz';
               return false
           } 
          this.rAlert= null;
           this.$axios.get('/add-user?name='+this.rName+'&pass='+this.rPass+'&mail='+this.rMail).then(resp => {
                   if(resp.data.status ==1){
                            this.user = resp.data.value;                
                            this.logged =  resp.data.value._token;
                            localStorage.setItem('token',resp.data.value._token);
                            localStorage.setItem('user',JSON.stringify(resp.data.value));
                            $("#accModal").removeClass("is-active");
                            this.$router.push({ name: 'hesap'} );
                   } else {
                          this.rAlert = resp.data.value
                   }
           })
        },
        getUser(j){
            this.$axios.get('/get-user?_token='+j).then(resp => {
                this.user = resp.data
               
            });
        },
       
        logOut(){
            this.logged = null,
            localStorage.removeItem('token');
        },
        hideModal(){
             $("#accModal").removeClass("is-active");
        },
        
        login(){
            
            this.$axios.get('/login?mail='+this.email+'&pass='+this.pass).then(resp => {
                  this.user = resp.data.value;                
                 this.logged =  resp.data.value._token;
                 localStorage.setItem('token',resp.data.value._token);
                 localStorage.setItem('user',JSON.stringify(resp.data.value));
                 $("#accModal").removeClass("is-active");
                 this.$router.push({ name: 'hesap'} );
                
            });


        }
    }
}
</script>

<style scoped>
.log-wcom {
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    right: 0;
    bottom: 0;
    background: #00000024;
    text-align: center;
    padding-top: 50%;
    color: #fff;
    font-size: 32px;
}
.column.log-img.is-6 {
    padding: 0;
    position: relative;
        height: 400px;
    overflow: hidden;
}
@media (max-width:1000px) {
    .column.log-img.is-6 {
    padding: 0;
    position: relative;
    height: 230px;
    overflow: hidden;
}


.log-wcom {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.14118);
    text-align: center;
    padding-top: 30%;
    color: #fff;
    font-size: 32px;
}
}
img.log-img {
    height: 100%;
    width: auto !important;
    min-width: 100%;
    max-width: initial;
}

.log-close {
    position: absolute;
    right: 15px;
    top: 10px;
}

.lg-image-wrap {
    padding: 0;
    position: relative;
    height: 100%;
    overflow: hidden;
}

section.modal-card-body {
    padding: 0px !important;
}
section.modal-card-body .columns {
    margin: 0;
    padding: 0;
}
@media screen and (min-width: 769px), print
 {
     .modal-card, .modal-content {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
          width: 640px;
        /* min-height: 500px; */
}
 }
.log-wrap input {
    box-shadow: none
}
    .log-wrap{
        margin-top: 60px;
    padding: 30px;
    margin-bottom: 70px;
    }
</style>