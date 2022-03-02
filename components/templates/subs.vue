<template>
    <div>
        <b> {{lang=='en'?'Newsletter, only good mails !':'Bültene Abone Ol Kampanyalar Postana Gelsin!'}}  </b>
        <br><br>
        <div class="is-grouped">
             <div class="sb-feed sl-sol pr">
                   <i class="fal fa-envelope"></i>
                   <input name="arrive"  type="text" class="form-k check_in_date"  placeholder="Email Adresiniz" v-model="mail">
              </div>
              <button :class="spn?'button is-medium  is-loading  is-primary':'button is-medium is-primary'" @click="sendSub">
                    <span v-if="success">
                     <i class="fal fa-check-double"></i>
                     </span> 
                     <span v-else>
                         {{lang=='en'?'Send':'Abone ol'}} 
                     </span>
              </button>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
         return {
             spn:false,
             mail:null,
             success:false,
         }
    },
    props :{
        lang:{
            type:String,
            default:'tr',
           
        }
    },
    
    methods:{
        sendSub(){
            this.spn = true;
            this.$axios.get('/newsletter?c_email='+this.mail).then(resp => {
                this.spn = false;
                this.success = true
            })
        }
    }
}
</script>
<style scoped>
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