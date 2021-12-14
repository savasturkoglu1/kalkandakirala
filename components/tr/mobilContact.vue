<template>
    <div class="mc">
          <div class="mc-top">

          </div>
          <div class="mc-body" v-if="data">
               <ContactForm />
               <div class="mc-row">
                   <div class="button mc-buton is-rounded  is-outlined is-medium is-fullwidth" @click="wht">
                       <span class="icon">
                           <i class="fab fa-whatsapp" ></i>
                       </span>
                       <span>
                          {{data.ilt_mobil1}} <br><div class="note">Bağlanmak için dokunun</div>
                       </span>
                      
                   </div>
                   <div class="button  mc-buton   is-outlined  is-rounded is-medium is-fullwidth" @click="call">
                       <span class="icon">
                           <i class="fal fa-phone" ></i>
                       </span>
                       <span>
                          {{data.ilt_mobil1}}<div class="note">Aramak için dokunun</div>
                       </span>
                      
                   </div>
                   <div class="button  mc-buton   is-outlined  is-rounded is-medium is-fullwidth" @click="mailto">
                       <span class="icon">
                           <i class="fal fa-at" ></i>
                       </span>
                       <span>
                          {{data.ilt_eposta1}}<div class="note">Mail göndermek için dokunun</div>
                       </span>
                      
                   </div>
                    
               </div>
          </div>
    </div>
</template>
<script>
import ContactForm from '../tools/contactForm';
export default {
    components: { ContactForm },
    data(){
        return {
            data:null
        }
    },
     mounted() {
        this.getData();
       
    },
    methods: {
        // show(){
            
        // },
        // hide(){

        // },
        call(){        
            location.href = "tel:"+this.data.ilt_mobil1
        },
        wht(){
            let wh= 'https://api.whatsapp.com/send?phone='+this.data.ilt_mobil1+'&text=Merhaba';   
             window.open(wh, '_blank');
        },
        mailto(){
             return "mailto:"+this.data.ilt_eposta1;
        },
        getData(){
              this.$axios.get('/contact').then(resp => { this.data = resp.data })
        }
    }
}
</script>
<style scoped>
        .input, .textarea {
    box-shadow: none;
}
        .mc-buton {
            border: none;
            margin-bottom: 10px !important;
            padding-bottom: 10px !important;
            border-bottom: 1px solid #eee;
            border-radius: 0;
            margin-top: 10px;
        }
    .mc-buton {
        margin-bottom: 10px;
        
    }
      .mc {
                position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            z-index: 99;
            bottom: 50px;
            margin: 0 auto;
        }

        .mc-wrap {
            padding: 15px;
            overflow: auto
        }

        .mc-body {
    padding: 15px;
    overflow-y: auto;
    height: calc(100vh - 60px);
}
</style>