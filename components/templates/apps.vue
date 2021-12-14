<template>
   <div>
       <div class="app-wrap">
           <div class="columns">
               <div class="column is-6">
                  
                   <div class="app-button pr" @click="goComp">
                       <span class="app-badge" v-if="comp">{{comp}}</span>
                       <i class="fal fa-exchange-alt"></i>
                       <br>
                       <span>Karşılaştırma listesi</span>
                   </div>
               </div>
               <div class="column is-6">
                   <div class="app-button pr" @click="savedVillas">
                          <span class="app-badge" v-if="bookmark">{{bookmark}}</span>
                       <i class="fal fa-bookmark"></i>
                       <br>
                       <span>Kaydettiklerim</span>
                   </div>
               </div>
               
           </div>
           <div class="columns">
               <div class="column">
                   <b> Rezervasyon sorgulama  </b>
                    <div class="is-grouped">
                        <div class="sb-feed sl-sol pr">
                            <i class="fal fa-envelope"></i>
                            <input name="arrive"  type="text" class="form-k check_in_date"  placeholder="Rezervasyon kodunuz" v-model="kod">
                        </div>
                        <button :class="spn?'button is-medium  is-loading  is-success':'button is-medium is-success'" @click="sorgula">
                            Sorgula
                        </button>
                    </div>
               </div>
           </div>
       </div>
   </div>
     <!-- <div class="modal" id="accModal">
       <div class="modal-background"></div>
           <div class="modal-card">
   
           <section class="modal-card-body pr">
           </section>
      </div>
    
    </div> -->
</template>
<script>
export default {
    data(){
        return{
            spn:false,
            kod:null,
            comp:null,
            bookmark:null,
        }
    },
    mounted(){
         $('.app-wrap').click(function(event){ 
            event.stopPropagation();            
        });

         let comp =  JSON.parse(localStorage.getItem('compare'));  
         if(comp){
             this.comp = comp.length;
         }
         let bookmark =  JSON.parse(localStorage.getItem('bookmark'));
           if(bookmark){
             this.bookmark = bookmark.length;
         }
    },
    methods: {
        goComp(){
              let vll =  JSON.parse(localStorage.getItem('compare'));            
           let url = this.$router.resolve({name:'villa-karsilastirma', query:{villas:vll.join(',')}});
            window.open(url.href, '_blank');
        },
        sorgula(){
            this.$router.push({name:'rezervasyon-rezervasyon-sorgula', query:{kod:this.kod}});             
        },
        savedVillas() {
             let vll =  JSON.parse(localStorage.getItem('bookmark'));
            
            this.$router.push({name:'villalar', query:{villas:vll.join(','), title: 'Kaydedilen Villalar'}});
         }
    }
}
</script>
<style scoped>
span.app-badge {
    position: absolute;
    left: 10px;
    top: 10px;
    background: #00d1b2;
    width: 20px;
    border-radius: 50%;
    color: #fff;
}
    .app-button {
    text-align: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 6px;
    cursor: pointer;
}
.app-button i {
   font-size: 36px;
    margin-bottom: 15px;
    color: #90A4AE;
}
</style>