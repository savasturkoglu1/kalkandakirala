<template>
   <div>
        
       <b-modal
            v-model="$store.state.cmodal"
            has-modal-card
            full-screen
            :can-cancel="false">
              <div class="modal-card headerless" style="width: auto">
            <div class="sr-wrap">
                <div :class="typing?'control mb-control is-loading has-icons-right':'control mb-control has-icons-right'">
                <input class="input is-rounded" v-model="model" type="text" @click="() =>  { this.sContent=true }" placeholder="Villa Adı"  @keyup="changeName($event)"  ref="ki"  >
                    
                        <span class="icon is-small is-right" v-if="!typing && !results" >
                        <i class="flaticon-search"></i>
                        </span>
                        <span class="icon is-small is-right ok-but" v-if="results" @click="close">
                            <div class="flaticon-tick"></div>
                        </span>
            </div>
            <div class="close-wrap">
                <button class="button is-rounded "  @click="() => {this.$store.dispatch('searchModal', false)}" >X</button>
            </div>
            </div>
        
         <div class="r-wrapper-m">
               <div class="s-sketelon" v-if="!results && typing">
                       <b-skeleton width="20%" :animated="animated"></b-skeleton>

                        <b-skeleton width="40%" :animated="animated"></b-skeleton>

                        <b-skeleton width="80%" :animated="animated"></b-skeleton>

                        <b-skeleton :animated="animated"></b-skeleton>
               </div>
               <div class="r-content" v-if="results">
              
                   <div class="r-row" v-for="(item,i) in results" :key="i" @click="goLink($store.state.trUrls.villa+item.vil_url)">
                     <div class="r-img-wrap">
                            <img :src="item.vil_response_img" alt="kalkandakirala">
                     </div>
                     <div class="r-details">
                         <h6> {{item.vil_adi}} </h6>
                         <p> {{item.vil_bolge}} </p>
                     </div>
                 </div>
                
               </div>
               <div v-else class="s-placeholder">
                   <p>Villa adı ile arayın</p>
               </div>
                <div class="no-res" v-if=" results &&  results.length<1 && !typing && model.length>0">
                       <h6>Aradığınız kriterlere uygun sonuç bulunamadı</h6>
                 </div>
                 
         </div>
              </div>
        </b-modal>
   </div>
  
</template> 

<script scoped>
export default {
    data(){
        return {
            results:false,
            typingTimeout:null,
            typing:false,
            text:null,
            sContent:false,
            model:null,
            searching:false,
            animated: true,
            cModal:false,
            
        }
    },
    mounted(){
       //this.$refs.ki.focus();
    },
   methods: {
       
       goLink(url) {
            this.$store.dispatch('searchModal', false);   
             this.close();             
             this.$router.push({path:url});
       },
       close(){
            // this.$store.dispatch('searchModal', false);
             this.results = null;
             this.typingTimeout=null
             this.typing = false;
             this.text   = null;
             this.sContent = false;
             this.model=null
             this.searching = false;
            
       },
       changeName (e)  {
          this.searching = true;
         this.typing=true 
        const self = this;
    
        if (self.typingTimeout) {
           clearTimeout(self.typingTimeout);
        }
    
           self.text=e.target.value;
           self.typing=true;
           self.typingTimeout=setTimeout(function () {
               
               self.findVilla()
             }, 1500)
    },
       findVilla() {
     
      if (this.text.length > 1) {
        this.$axios.get('/find-villa/' + this.text).then((resp) => {
            console.log(resp.data)
          this.results = resp.data
         
        })
      } else {
        this.results = null
      }
     
      this.typing=false;
      
    
    },
   }
}
</script>

<style scoped>
.sr-wrap {
    display: flex;
}
.r-wrapper {
    position: absolute;
    background: #fff;
    width: 100%;
    top: 55px;
    border-radius: 6px;
    padding: 10px;
        z-index: 999;
    border-radius: 6px;
    box-shadow: 0px 5px 11px 0px rgb(0 0 0 / 35%);
}
.control {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 999;
}

.s-wrapper {
       position: relative;
    width: 200px;
    transition: 0.5s;
}
.s-wrapper-w {
     position: relative;
    width: 400px;
     transition: 0.5s;
}
span.s-owerflow {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #00000060;
    z-index: 99;
}
.r-img-wrap {
    height: 120px;
    overflow: hidden;
    border-radius: 6px;
    width: 50%;
   
}

.r-row:hover {
    background: #f1f3fa;
}

.r-img-wrap img {
   height: auto;
   width: 100%;
   min-height: 100%;

}

.r-row {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
     cursor: pointer;
}

.r-details {
    margin-left: 10px;
    padding: 10px;
    border: 1px solid #eee;
    width: 50%;
}
.ok-but {
    cursor: pointer;
    pointer-events:auto  !important;
}

.control.mb-control {
    position: relative !important;
}

.modal-card.headerless{
    padding: 10px;
}

.s-placeholder {
    text-align: center;
    color: #bdbdbd;
}
</style>