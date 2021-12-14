<template>
   <div :class="sContent?'s-wrapper-w':'s-wrapper'">
                <div :class="typing?'control is-loading has-icons-right':'control has-icons-right'">
               <input class="input " v-model="model" type="text" @click="() =>  { this.sContent=true }" placeholder="Villa Adı"  @keyup="changeName($event)"   >
        
            <span class="icon is-small is-right" v-if="!typing && !results" >
            <i class="flaticon-search"></i>
            </span>
            <span class="icon is-small is-right ok-but" v-if="results" @click="close">
                <div class="flaticon-tick"></div>
            </span>
         </div>
         <span class="s-owerflow" v-if="sContent" @click="close"></span>
         <div class="r-wrapper" v-if="model && model.length>0">
               <div class="s-sketelon" v-if="!results && typing">
                       <b-skeleton width="20%" :animated="animated"></b-skeleton>

                        <b-skeleton width="40%" :animated="animated"></b-skeleton>

                        <b-skeleton width="80%" :animated="animated"></b-skeleton>

                        <b-skeleton :animated="animated"></b-skeleton>
               </div>
               <div class="r-content" v-if="results">
              
                   <div class="r-row" v-for="(item,i) in results" :key="i" @click="goLink($store.state.trUrls.villa+item.vil_url)">
                     <div class="r-img-wrap">
                            <img :src="item.vil_response_img" alt="villaevreni">
                     </div>
                     <div class="r-details">
                         <h6> {{item.vil_adi}} </h6>
                         <p> {{item.vil_bolge}} </p>
                     </div>
                 </div>
                
               </div>
                <div class="no-res" v-if=" results &&  results.length<1 && !typing && model.length>0">
                       <h6>Aradığınız kriterlere uygun sonuç bulunamadı</h6>
                 </div>
         </div>
   </div>
</template> 

<script>
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
            
        }
    },
   methods: {
       
       goLink(url) {
             
                    
             this.$router.push({path:url});
       },
       close(){
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
    
    z-index: 999;
    top: 2px;
    right: 5px;

}

.s-wrapper {
       position: relative;
    width: 48px;
    transition: 0.5s;
}
.s-wrapper-w {
     position: relative;
    width: 300px;
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
    height: 60px;
    overflow: hidden;
    border-radius: 6px;
    width: 25%;
   
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
}.s-wrapper input {
    cursor: pointer;
}

.r-details {
    margin-left: 10px;
    padding: 10px;
    border: 1px solid #eee;
    width: 75%;
}
.ok-but {
    cursor: pointer;
    pointer-events:auto  !important;
}

@media (max-width:1078px) {
    .r-img-wrap {
    height: 60px;
    overflow: hidden;
    border-radius: 6px;
    width: 60px;
}
    .s-wrapper {
    position: relative;
    transition: 0.5s;
    width: 46px;
}
.s-wrapper-w {
     position: relative;
    width: 240px;
     transition: 0.5s;
}
.navbar-link {
    padding-right: 0px;
}

}
</style>