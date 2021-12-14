<template>
   <div class="w-content" v-if="data">
      <div :class="data.st_status==1?'w-wrap':'w-wrap st-pasif'"  @click="getStory" >
          
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><linearGradient spreadMethod="pad" id="gradient-4" x1="0" y1="70%" x2="70%" y2="0"><stop offset="0%" style="stop-opacity: 1; stop-color: rgb(255, 167, 61);"></stop><stop offset="100%" style="stop-opacity: 1; stop-color: rgb(0, 177, 255);"></stop></linearGradient><circle cx="50" cy="50" r="50" fill="none" stroke="url(#gradient-4)"></circle></svg>
             <img class="w-image" :src="data.st_thumb_url?data.st_thumb_url:'https://placeimg.com/300/300/animals'" />
             
      </div>
      <!-- <p> {{data.st_title}} </p> -->
   </div>
</template>

<script>
export default {
   data(){
       return {
           
       }
       
   }, 
   props: {
         data:Object,
         
   },
   methods : {
        getStory(){
         this.$emit('cBack', this.data.id);
       },
   }
}
</script>

<style>
/* .sw-story-widget-row_story-circle svg {
    fill: none;
    stroke-linecap: round;
    stroke-width: 3;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    position: absolute;
    top: -2px;
    overflow: visible;
    left: -2px;
    width: 83px;
    height: 83px;
    animation: stroke-draw 7s ease-in-out alternate both;
} */

@keyframes stroke-draw{50%{stroke-dasharray:10;-webkit-transform:rotate(200deg);transform:rotate(200deg)}to{stroke-dasharray:1}}
.w-wrap {
    position: relative;
    cursor: pointer;
    height: 100%;
    width: 100%;
}
.stories {
    padding-top: 15px;
    padding-bottom: 15px;
}
.st-pasif {
    opacity: 0.7;
}
.w-wrap {
    position: relative;
    cursor: pointer;
}

.w-wrap:hover img {
    transform: scale(1.1); 
    transition: transform .5s ease;
}
.zoom:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.w-content {
    height: 80px;
    width: 80px;
    text-align: center;
    margin-right: 15px;
}
   .w-image {
       width: 100%;
       height: 100%;
       border-radius: 50%;
           box-shadow: 1px 1px 9px 0px #00000030;
   }

   .w-content  svg {
    fill: none;
    stroke-linecap: round;
    stroke-width: 3;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    position: absolute;
    top: -2px;
    overflow: visible;
    left: -2px;
    width: 83px;
    height: 83px;
    animation: stroke-draw 7s ease-in-out alternate both;
}
</style>
