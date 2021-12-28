<template>
   <div>
        
       <b-modal
            v-model="$store.state.mcontact"
            has-modal-card
            @close="closeModal"
            :can-cancel="true">
               <div class="modal-card mob-cont">
                  <contact-card />
              </div>
              
        </b-modal>
   </div>
  
</template> 

<script scoped>
import contactCard from '../templates/contactCard.vue';
export default { 
  components: { contactCard },
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
       closeModal() {
           this.$store.dispatch('mobilContact', false);  
       }
       
     
   }
}
</script>

<style scoped>
.mob-cont.modal-card {
    padding: 15px;
}
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