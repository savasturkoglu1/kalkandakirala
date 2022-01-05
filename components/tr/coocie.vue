<template>
   <div>
       <div class="coo-wrap" v-if="show">
        <div class="coo-body">
           Sizlere daha iyi bir kullanıcı ziyareti deneyimi sunabilmek ve hizmet kalitesini arttırmak için sitemizde çerezler kullanılmaktadır. 
           <a :href="url" target="_balnk">
               Detaylı bilgi için tıklayarak Çerez Politikamızı inceleyebilirsiniz
               </a> 
        </div>
        <div class="coo-close">
            <a  class="delete" @click="closeCocie"></a>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  data(){
      return {
          show:true,
          url:'https://www.kalkandakirala.com/sayfa/cerez-politikasi'
      }
  },
  mounted(){
    let c = localStorage.getItem('cookie')
     this.show = c?false:true
  },
  methods:{
      closeCocie(){
          this.show=false
          localStorage.setItem('cookie','1')
      }
  }
}
</script>

<style>
.coo-wrap {
    position: fixed;
    bottom: 0;
    background: #fff;
    left: 250px;
    
    display: flex;
    z-index: 999;
    box-shadow: -1px -1px 9px 1px #0000001f;
    padding: 5px;
    border-radius: 6px;
}

.coo-close {
    margin-left: 15px;
}

@media  (max-width:1000px) {
    .coo-wrap {
    position: fixed;
    bottom: 0;
    background: #fff;
    left: auto;
    display: flex;
    z-index: 999;
    box-shadow: -1px -1px 9px 1px rgba(0,0,0,0.12157);
    padding: 5px;
    border-radius: 6px;
}
}
</style>