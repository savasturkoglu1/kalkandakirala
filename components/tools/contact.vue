<template>
   
    <div class="mcont-wrap "  v-if="data">
            <div class="sc-tek-wrp desc">
               <nuxt-link to="/teklif-al" title="teklif al" class="color-in">
                     <div class="sh-wrap">
                             <i class="fal fa-tags"></i>
                                
                                    <b>Teklif Al</b>
                                    
                                
                         </div>
              </nuxt-link>               
             </div>    
             <div class="sc-media-wrp desc">
                  <div class="sc-media-content">
                         <div class="sh-wrap br">
                             <i class="fal fa-headset"></i>
                                <div class="sc-nums sc-tel">
                                    <b> {{data.ilt_sabit1}}</b>
                                    <div class="note">MÜŞTERİ HİZMETLERİ</div>
                                </div>
                         </div>
                          <div class="sh-wrap sh-right">
                              <a class="wd nl-color" :href="wht()">

                              
                              <div class="sc-nums">
                             <b> {{data.ilt_mobil1}}</b>
                             <div class="note">WHATSAPP DESTEK</div>
                         </div>
                         <i class="fab fa-whatsapp"></i>
                         </a>
                          </div>
                  </div>
             </div>
             <!-- <div class="mob">
                 <i  class="fab fa-whatsapp"></i>
             </div> -->
    </div>
</template>
<script>
import CForm from './contactForm';
export default {
    components : { CForm },
    data(){
        return {
            data:null,
            show:0
        }
    },
 mounted() {
        this.getData();
        // $(".cn-btn").mouseenter(function(){ alert('asda');
        //     $(this).find('.cn-number').show();
        // });

    },
    methods: {
        // show(){
            
        // },
        // hide(){

        // },
        wht(){
            return 'https://api.whatsapp.com/send?phone='+this.data.ilt_mobil1+'&text=Merhaba'
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
.sh-right {
    
}
.sh-right i {
    float: right;
}
.sh-right .sc-nums {
    text-align: right;width: 100%
}
.br {
    border-right: 2px solid #eee
}
.sh-wrap {
    width: 100%;
    display: flex;padding: 10px;
}

.sc-media-content .sh-wrap b {
    font-size: 14px;
}
.sh-wrap b {
    font-size: 18px;
}
.sh-wrap i {
    font-size: 32px;
    padding-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
}
.sh-wrap i:before {
    font-size: 32px;
    padding-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
}
.mcont-wrap {
    position: fixed;
    right: 30px;
    bottom: 20px;
   
    z-index: 999;
    display: none
}
.sc-media-content{
    display: inline-flex;
    vertical-align: middle;
    width: 100%;
}
.sc-media-wrp {
    border-radius: 10px;
   background: #013243;
    -webkit-box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    color: #fff;
    padding: 10px 15px 10px 10px;
    z-index: 1;
    width: 460px;
    max-width: 460px;
    float: right;
    pointer-events: all;
    position: relative;
}

.sc-tek-wrp{
    border-radius: 10px;
    background: #013243;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    color: #f60;
    padding: 10px 15px 10px 10px;
    z-index: 1;
    width: 100%;
    max-width: 160px;
    left: 30px;
    pointer-events: all;
    position: fixed;
}


@media (max-width: 1000px) {
      .cn-wrap {
          display: none;
      }
}
.cn-row a {
    color: #fff;
}
    .cn-show{
       position: fixed;
    width: 300px;
    right: 0;
    bottom: auto;
    top: auto;
    }
    .cn-number {
       transition: all 0.8s;
    }
    .cn-wrap {
       
    }
    .cn-btn {
       margin-right: 5px;
     
    }

    .cn-wht {
        background: #7CB342;
         color: #fff;
          bottom: 350px;
     }
    .cn-mes {
    background: #1976D2;
    color: #eee;
       bottom: 200px;
       }
        .cn-phone {
            background: #e91e61;
            color: #eee;
             bottom: 250px;
        }
        .cn-mail {
            background: #00d1b2;
            color: #eee;
             bottom: 300px;
        }
        .cn-mesaj {
            background: #ce9700;
            color: #eee;
             bottom: 150px;
             z-index: 99999 !important
        }
    .cn-row {        
        cursor: pointer;
        padding: 12px; 
        font-size: 22px;
         position: fixed;
           right: 0;
         
          z-index: 9999;
    }
</style>