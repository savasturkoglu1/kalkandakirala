<template>
  <div class="sb-fixed">
      <div class="sb-wrap" v-if="data">
          
          <a class="sb-button button  is-small button-youtube" href="https://www.youtube.com/channel/UCV8gmqW3sEdpN7MR6ofWY8w" target="_blank">
              <span class="icon">
                  <i class="flaticon-youtube"></i>
              </span>
          </a>
          <a class="sb-button button is-small  button-facebook"  :href="data.sos_face" target="_blank">
              <span class="icon">
                  <i class="flaticon-facebook"></i>
              </span>
          </a>
          <a class="sb-button button  is-small  button-instagram"  :href="data.sos_instagram" target="_blank">
              <span class="icon">
                  <i class="flaticon-instagram"></i>
              </span>
          </a>
         
      </div>
  </div>
</template>

<script>
export default {
  props:{
      data:null
  }
}
</script>

<style>
   .sb-fixed {
       position: fixed;
       right: 0;
       bottom: 30%;
       z-index: 9;
   }

   .sb-wrap {
    display: block;
    width: 60px;
}

.sb-button.button i::before {
    font-size: 20px;
}

.sb-button.button {
    border: none;
    border-radius: 0;
    color:#fff !important;
    height: 40px;
    width: 40px;
}
.button-youtube {
    background: #f44336;
}

.button-instagram {
    background: #e91e63;
}
.button-facebook {
    background: #087cea;
}
   @media (max-width:800px) {
      .sb-fixed {
      display: none;
   } 
   }
</style>