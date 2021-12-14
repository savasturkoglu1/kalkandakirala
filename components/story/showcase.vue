<template>
    <div class="editor" v-if="content" :style="content.bg_gradient">
          <div class="story-title-fram z99">
                      
                <div class="text-cont" >
                    <h3  :style="content.title" > {{veri.st_title?veri.st_title:'Başlık'}} </h3>
                </div>                                      
           </div> 
           <div  :style="content.img_wrap">
                      <div class="st-img-cont">
                          <div class="st-video" v-if="veri.st_video_embed"  v-html="veri.st_video_embed"> </div>
                          <img v-else id="story-image"  :style="content.img"  :src="veri.st_img_url" alt="" />
                      </div>
             </div>
             <div class="story-tezt-fram">
                <div class="st-wrap pr">
                          <div class="text-cont"  v>
                                <p  :style="content.text" > {{veri.st_text?veri.st_text:'Harika forsatlar'}}  </p>
                            </div>
                </div>
            </div>

            <div class="sw-swipe-icon-wrapper" v-touch:swipe="swipeHandler" >
                <a id="sw-swipe-icon"  ><i class="fas fa-chevron-circle-up"></i><span id="sw-url-text" style=""> {{veri.st_swip_title}} </span>
                </a>
            </div>

    </div>                               

</template>

<script>
import Axios from 'axios'
export default {
   data(){
       return {
             content:null
       }
   },
   props: {
       veri:Object
   },

   mounted(){
       this.content = JSON.parse(this.veri.st_content)
   },
   methods: {
      swipeHandler(){
          if(this.veri.st_swip_url){
             window.location.href=this.veri.st_swip_url
          }
          
      }
   }

}
</script>

<style scoped>
.editor {
    border-radius: 8px;
}
.st-video {
    height: 100%;
}

.z99{
    z-index:99
}
.set-save {
    right: 10px;
    position: absolute;
    border: none;
    padding: 5px;
    top: 10px;
}
button.st-check-but.swbut {
    top: -32px;
    pointer-events: all;
}
.st-wrap {
    text-align: right;
    width: 100%;
}

.story-title-fram {
    position: absolute;
    top: 10%;
    left: 10px;
    right: 20px;
}
.story-img-buttons {
    padding-right: 0px;
    color: #fff;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 45%;
}
.set-save {
    right: 10px;
    position: absolute;
    border: none;
    padding: 5px;
}
.story-sets {
    position: absolute;
    top: auto;
    width: 340px;
    left: 30px;
    top: 73px;
    bottom: 103px;
    background: #fff;
    padding: 10px;
    z-index: 9999;
}
.text-cont p {
    /* padding: 5px 15px; 
     font-size: 18px;
      color: #fff;
       /* background: #3956c5; */
        /* border-radius: 6px; 
         box-shadow: 0px 0px 10px 4px #00000026;  */
}

.text_style1 {
    padding: 5px 15px; font-size: 18px; color: #fff; border-radius: 6px; box-shadow: 0px 0px 10px 4px #00000026;
}

.text_style2 {
    font-family: fantasy; padding: 5px 15px; font-size: 18px; color: #fff;  border-radius: 6px; box-shadow: 0px 0px 10px 4px #00000026;
}
.sw-swipe-icon-wrapper {
    background: linear-gradient(to top,rgba(0,0,0,.2),transparent);
    bottom: 0;
    height: 100px;
    left: 0;
    padding: 0 16px 16px;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
}
.sw-swipe-icon-wrapper #sw-swipe-icon {
    text-decoration: none!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 200001;
    bottom: 10px;
    text-align: center;
    animation: feedstory_swipe_anim 1s linear infinite;
    color: #fff;
    cursor: pointer;
}


@keyframes feedstory_swipe_anim {
    from {
        bottom:10px;
    }
    to { 
        bottom: 20px;
    }
}

@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 100px;
  }
}
input.form-control.story-inp {
    background: #0000001a;
    color: #fff;
        border-color: #0000002b;
}
.story-tezt-fram {
    position: absolute;
    top: 70%;
    left: 10px;
    right: 20px;
}
.text-cont {
    width: 100%;
    display: -webkit-box;
    padding: 5px;
}
.story-buttons {
    text-align: center;
    margin-top: 60px;
    font-size: 18px;
    color: #fff;
    z-index: 999;
    position: relative;
}

button.st-check-but {
    position: absolute;
    right: 0px;
    top: 35px;
    border: none;
    height: 28px;
    width: 28px;
    background: #0000002e;
    color: #fff;
    border-radius: 50%;
    right: 5px;
}

button.btn.btn-story {
    /* font-size: 18px; */
    color: #fff;
    background: #00000029;
    text-align: center;
}
button.btn.btn-story i {
     padding-right: 0px;
    color: #fff;
    
    text-align: center;
    font-size:18px
}
.buton-right .button {
    border: none;
    background: #00000024;
    color: #fff;
    font-size: 16px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    /* align-items: center; */
}
.buton-right {
    
    float: right;
    width: 60px;
    display: flex;
}
.img-set-butto {
    position: absolute;
    width: 100%;
    left: 0px;
    right: 0px;
    padding: 5px;
}
.st-img-cont {
    width:100%;
    height: 100%;
    position: relative;
}
.frema-image_wrap-h {
    height: 250px;
    top: 25%;
    position: absolute;
    left: 10px;
    right: 10px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 4px #00000026;
    overflow: hidden;
}

.frema-image_wrap-v {
    height: 100%;
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: none;
    box-shadow: none;
    overflow: hidden;
}
.frema-image_wrap-h img {
    min-width: 100%;
    height: 100%;
    width: auto;
    
   
}
.frema-image_wrap-v img {
    min-width: 100%;
    height: 100%;
    margin-left: -30%;
   
    
   
}
.button.story-button {
    font-size: 36px;
    font-weight: 600;
    border: 1px solid #8BC34A;
    color: #8BC34A;
    width: 60px;
    text-align: center;
    height: 60px;
    border-radius: 50%;
    padding-top: 3px;
}

.stories {
    width: 100%;
    overflow-x: auto;
}

.story-list {
    display: flex;
   
    margin-top: 10px;
    margin-bottom: 10px;
    overflow-y    :auto;
    

}
.story-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-shadow: 0 0 13px 0 rgba(82,63,105,.05);
    box-shadow: 0 0 13px 0 rgba(82,63,105,.05);
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
}
img.mockup {
    width: 400px;
}

.frame-wrap {
    position: relative;
}

.editor {
    background: #276d897a;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 103px;
    animation: gradient 15s ease infinite;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.story-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    padding: 0 25px;
    border-bottom: 1px solid #ebedf2;
    min-height: 60px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

@media (max-width:1000px) {
    .editor {
    border-radius: 0px;
}
}
</style>