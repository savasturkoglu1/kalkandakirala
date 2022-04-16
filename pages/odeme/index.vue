<template>
    <div class="container sp-cont">
        <div class="columns">
            <div class="column is-8 is-offset-2"> 
                <div class="se-wrap">
                    <h1>GüVENLİ ODEME SAYFASI</h1>
                  
                        <img  class="se-img" src="~/static/images/vmlogo.png" >
                </div>
                   <div class="kk-wrap">
                       <div class="columns">
                           <div class="column kk-col">
                                <div class="kk-img-wrap pr">
                                       <img :src="rez.villa_img" class="kk-img" alt="">
                                       <span class="kk-name"> {{rez.rez_villa}} </span>
                                </div>
                           </div>
                           <div class="column kk-kol">
                                  <div class="kk-cwrap">
                                      <div class="detail-wrap">
                                          <h3>{{rez.rez_ad}}</h3>
                                      <div class="level">
                                          <div class="level-left">
                                              Toplam Tutar
                                          </div>
                                          <div class="level-right">
                                              {{rez.muh.rez_tutar}}  {{rez.muh.rez_cur}}
                                          </div>
                                      </div>
                                      <div class="level">
                                          <div class="level-left">
                                              Ödenecek Tutar
                                          </div>
                                          <div class="level-right">
                                              {{rez.muh.rez_kk_odeme?rez.muh.rez_kk_odeme:rez.muh.rez_kaparo}}  {{rez.muh.rez_cur}}
                                          </div>
                                      </div>
                                      </div>
                                
                                  <div class="kk-form">
                                      <div class="field">
                                            
                                            <div class="control has-icons-left has-icons-right">
                                                <input class="input " type="text" :placeholder="rez.rez_ad" v-model="Name" >
                                                <span class="icon is-small is-left">
                                                <i class="flaticon-avatar"></i>
                                                </span>
                                                <span v-if="false" class="icon is-small is-right">
                                                <i class="flaticon-check "></i>
                                                </span>
                                            </div>
                                           
                                      </div>
                                      <div class="field">
                                            
                                            <div class="control has-icons-left has-icons-right">
                                                <input class="input " type="text" placeholder="1234 5678 9101 1213" v-model="Pan" >
                                                <span class="icon is-small is-left">
                                                <i class="flaticon-calendar-2"></i>
                                                </span>
                                                <span v-if="false" class="icon is-small is-right">
                                                  <i class="fas fa-check"></i>
                                                </span>
                                            </div>
                                           
                                      </div>
                                      <div class="ub-dates">
                                           <div class="field sl-sol">
                                            
                                            <div class="control has-icons-left has-icons-right">
                                                <input class="input " type="text" placeholder="Son Kullanım Tarihi" v-model="Expiry" >
                                                <span class="icon is-small is-left">
                                                <i class="flaticon-calendar-4"></i>
                                                </span>
                                                <span v-if="false" class="icon is-small is-right">
                                                  <i class="fas fa-check"></i>
                                                </span>
                                            </div>
                                           
                                      </div>
                                       <div class="field sl-sag">
                                            
                                            <div class="control has-icons-left has-icons-right">
                                                <input class="input " type="text" placeholder="CVV"  >
                                                <span class="icon is-small is-left">
                                              <i class="flaticon-password"></i>
                                                </span>
                                                <span v-if="false" class="icon is-small is-right">
                                                  <i class="fas fa-check"></i>
                                                </span>
                                            </div>
                                           
                                      </div>
                                      </div>
                                      <div class="button is-danger is-fullwidth"   @click="pay">Öde</div>
                                        </div>
                                  </div>
                           </div>
                       </div>
                   </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            Expiry:'',
            Name:'',
            Cvv2:'',
            Pan:0
        }
    },
     async asyncData ({$axios, params, route}) { 
           const kod = route.query.code;
           let rez  = await $axios.get('/kk-odeme/'+kod).then(res => { return res.data });  
           return { rez }
      },

      methods:{
          pay(){

            let data = {
                ShopCode:'kalkan_adm',
                merchantPass:'lQleJ',
                PurchAmount:100,
                Currency:949,
                OrderId:'kk123',
                OkUrl:'',
                FailUrl:'',
                Rnd:new Date(),
                Hash:'',
                TxnType:'Auth',
                InstallmentCount:'',
                SecureType:"3DPay" ,
                Lang :" tr",
                Expiry: this.Expiry,
                Pan:this.Pan,
                Name:this.Name,
                Cvv2:this.Cvv2,
                

                
            }

            this.$axios.post('https://test.inter-vpos.com.tr/mpi/Default.aspx', data).then(res => { 
                console.log(res.data)

             }); 

          },

          getPsData(){

          }
      }
}
</script>

<style scoped>
.se-wrap {
   
    display: block;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    text-align: center;
    padding: 20px;
}
    .kk-wrap {
   
    display: block;
    padding: 0px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
}

.column.kk-col {
    padding: 0px !important;
}
.kk-cwrap {
    padding: 30px;
}
.kk-form {
    margin-top: 30px;
}
.kk-img-wrap.pr {
    height: 100%;
    width: auto;
}
.kk-img-wrap:before {
    -webkit-transition: 0.2s;
    transition: 0.2s;
    content: '';
    opacity: 1;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(0%, rgba(0, 0, 0, 0)), color-stop(50%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%); 
    z-index: 9;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
img.kk-img {
    height: 100%;
    width: auto !important;
    min-width: 100%;
}
span.kk-name {
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
    color: #fff;
    z-index: 99;
    left: 0;
    font-size: 26px;
}

img.se-img {
    width: 200px;
    text-align: center;
}
.kk-cwrap .level {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}
</style>