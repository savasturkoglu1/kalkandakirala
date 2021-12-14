<template>
    <div class="cn-form" v-if="i18n">
          <form action="" @submit="sendMesaj($event)" id="ilForm">
                 <input type="hidden" v-if="villa" name="m_villa" :value="villa.vil_adi">
                  <input type="hidden" v-if="villa" name="m_villa_id" :value="villa.vil_adi_id">
                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-medium"  name="m_isim" required="true"  type="text"   :placeholder="i18n.name">
                                    <span class="icon is-left">
                                        <i class="fal fa-user"></i>
                                    </span>
                                    
               </div>
                <div class="control has-icons-left has-icons-right">
                                                <input class="input is-medium"  name="m_eposta" required 
                                                  type="email"  placeholder="myemail@sitem.com">
                                                <span class="icon is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>                                               
                 </div>
                   <div class="control has-icons-left has-icons-right">
                                                <input class="input is-medium" name="m_telefon"  required="true"   id="phone" type="phone"  :placeholder="i18n.tf" >
                                                <span class="icon is-left">
                                                     <i class="fal fa-phone"></i>  
                                                </span>   

                 </div>
                 <div class="control">
                     <textarea class="textarea" name="m_mesaj" :placeholder="i18n.mesas" rows="4">

                     </textarea>
                 </div>
                   <span :class="robot?'button  selected-button':'button'" type="button" style=" opacity:0.6" v-on:click="() => {this.robot=true}">
                                     <span class="icon">
                                         <i v-if="!robot" class="fal fa-robot"></i>
                                         <i v-if="robot" class="fal fa-check-double"></i>
                                     </span>
                                     <span>
                                        Robot değilim
                                     </span>
                     </span>
                 <div class="button-cont">
                     <button  :class="spn?'button is-fullwidth   is-loading  is-primary':'button  is-fullwidth   is-primary'" :disabled="!robot" >
                         <span v-if="success">
                     <i class="fal fa-check-double"></i>
                     </span> 
                     <span v-else>
                          {{i18n.send}}
                     </span>
                     </button>
                     <span v-if="alert" class="alert"> {{alert}} </span>
                 </div>
          </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            i18n: null,
            robot:false,
            alert:null,
            success:false,
            spn:false
        }
    },
    props :{
        lang: {
            default: 'tr'
        },
        villa:null
    },
    mounted(){
        if(this.lang == 'tr'){
                 this.i18n = {
                send: 'Gönder',
                name: 'Mutlu Mesut',
                phone: 'Telefon',
                tf: '90 5xx xxx xx xx ',
                mesaj: 'Merhaba ..'
            }
        } else {
               this.i18n = {
                send: 'Send',
                name: 'Alexander Ssallander',
                phone: 'Phone',
                tf: '44 5xx xxx xx xx ',
                mesaj: 'e.g. Hello world'
            }
        }
    },
    methods: {
        sendMesaj(e){
            this.alert= null;
            this.spn = true
            e.preventDefault();
           const data = $(e.target).serialize();
            this.$axios.get('/send-mesaj?'+data).then(resp => {
               if(resp.data.status==1){
                      this.success = true;
                      this.alert = 'Mesajınız alınmıştır'
               } else {
                   this.alert= 'Hata oluştu lütfen tekrar deneyiniz'
               }
                this.spn = false;
            })
        }
    }
}
</script>
<style scoped>
     .control {
         margin-bottom: 10px
     }
</style>