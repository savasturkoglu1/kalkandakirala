<template>

                  <div class="story-wrapper">
                       <div class="stories" v-if="veri">
                            <div class="story-list">
                                <Widget v-for="(item,i) in veri" :key="i" :data="item" @cBack="(i) => {showStory(i)}" />
                        
                        
                            </div>

                    </div>  
                   <div class="story-screen" v-if="show"> 
                        <div class="frame-wrapp" >
                       
                         <div class="progres">
                              <span class="pbar" v-for="(item,i) in veri"  :key="i">
                                <span :id="i" class="p-bar"></span> </span>
                        </div>      
                        

                        
                        <button class="st_close" @click="closeStory">
                         X
                       </button>               
                       <ShowCase v-if="currentStory" :veri="currentStory"  :key="currentStory.id" /> 
                       <span class="st-left" @click="prevStory"></span>
                       <span class="st-right" @click="nextStory"></span>
                  </div>
       
                   </div>
           </div>
     
</template>

<script>

import ShowCase from './showcase';
import Widget from './widget';
export default {
    components: { ShowCase, Widget },
   data(){
       return {
           veri:null,
           url:'/story',
           currentStory:null,
           currentIndex:0,
           id:0,
           time:[],
           timer:3000,
           inv:null,
           timeout:null,
           show:false
       }
   },
   props: {
        data:{
             type:Array,
             default:null
           },
   },
  //  watch: {
  //      id:function (i) {
        
  //          this.setArray(this.veri, this.id)
  //      }
  //  },
   mounted(){
        this.veri = this.data
          // this.setArray(this.veri, this.id)  
         //  this.storyFlow()
       },
   methods: {
       showStory(i){
                              
         this.setArray(this.veri, i)
         
           setTimeout(() => {
            this.storyFlow()
            this.show = true
          }, 500);
       },
     closeStory(){
         
                this.timer=7000;
            
               clearInterval(this.inv)
               clearTimeout(this.timeout)
               this.currentStory = 0
               this.show = false;
     },
       prevStory(){
          clearInterval(this.inv)
           $("#"+this.currentIndex).removeClass('past').css('width','0%');
             $("#"+(this.currentIndex-1)).removeClass('past').css('width','0%');
             this.currentIndex = this.currentIndex>0? this.currentIndex-1:0;
             this.storyFlow()
       },
       nextStory(){
          clearInterval(this.inv)
          $("#"+this.currentIndex).addClass('past');
             this.currentIndex = this.currentIndex+1;
             this.storyFlow()
       },
       setArray(ar,id){
          let i = ar.findIndex(ii  =>    {
              return ii.id == id
          });
          this.currentIndex = i
      
       },
       storyFlow(){
                
                if(this.currentIndex < this.veri.length){
                     if(this.timeout){
                       clearTimeout(this.timeout)
                     }
                     this.currentStory = this.veri[this.currentIndex];
                     let duration = this.currentStory.st_duration || 7000;
                     let tm =0;
                     let width=0;
                     let i = this.currentIndex;
                     let el = $("#"+this.currentIndex) 
                    console.log(i,el)
                    this.inv= setInterval(() => {
                       tm +=50;
                       width  = (tm/duration)*100
                       el.css('width',parseInt(width)+'%');
                      }, 50);

                  this.timeout =  setTimeout(() => {
                      clearInterval(this.inv)
                      $("#"+this.currentIndex).addClass('past');
                       this.currentIndex = this.currentIndex+1
                        
                       this.storyFlow()
                    }, duration);
                 
                } else {
                //   this.show= false;
                   this.closeStory()
                }

           
       },
       updateStory(id, v,c){
            let data = {
              '_method':'PATCH',
              'st_visit':this.currentStory.st_visit+1,
              'st_click':4,
            }
            this.$axios.post('/story/'+id, data )
       },
       getStory(){
          
          this.veri = null;
           
           this.$axios.get(this.url).then(resp=> {             
                  
                  this.veri = resp.data.filter(ii => {
                     return ii.st_status ==1
                  })               

                  if(this.id){                       
                     this.setArray(this.veri, this.id)
                  }
                
                  
                  this.storyFlow()
           });           
       },
    
   }

}
</script>

<style scoped>

.story-list {
    padding-left: 15px;
}
::-webkit-scrollbar { 
    display: none; 
}
.frame-wrapp {
    height: 85%;
    width: 450px;
    top: 100px;
    bottom: 80px;
    z-index: 999;
}
.story-screen {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999999999 !important;
    background: #00000087;
    text-align: center;
    right: 0;
    bottom: 0;
}
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
.story-list {
    display: flex;
    position: relative;
}
.p-bar {
    background: #fff;
    height: 3px;
    position: absolute;
    left: 0;
    top: auto;
    z-index: 999;
}
.st_close {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 15px;
    background-color: rgba(0,0,0,.3);
    border-radius: 4px;
    padding: 8px 10px;
    z-index: 250000;
    color: #fff;
    border: none;

}
.st-right {
    position: absolute;
   width: 20%;
    right: 0;
    top: 0;
    bottom: 100px;
    
    z-index: 999;
    pointer-events: all;
}
.st-left {
    position: absolute;
    width: 20%;
    left: 0;
    top: 0;
    bottom: 100px;
   
    z-index: 999;
    pointer-events: all;
}
.progres {
    top: 15px;
    right: 5px;
    position: absolute;
    z-index: 99;
    display: inline-flex;
    left: 5px;
    text-align: center;
}

progress {
  vertical-align: baseline;
    border-radius: 6px;
    height: 3px;
    margin-right: 5px;
    border: none;
    
}
progress::-webkit-progress-bar {
  background-color: #ffffff50;
  border-radius: 2px;
}
progress::-webkit-progress-value {
  background-color: #ffffff;
}
progress::-moz-progress-bar {
  background-color: #ffffff;
}
.modal-header {
    background: #fff;
}

.modal-content {
    background: transparent;
    border: none;
}

.st-conteiner {
    text-align: center;
}
.frame-wrapp {
   
    position: relative;
    display: inline-block;
}

.progress-container {
  display: flex;
  flex-direction: row;
  width: 80vw;
  padding: 10px 0;
  cursor: pointer;
}

.progress {
  height: 2px;
  flex-grow: 1;
  border-radius: 4px;
  margin: 0 5px;
  display: flex;
  background-image: -webkit-linear-gradient(left, 
    rgba(255,255,255,.5) 0%,
    rgba(255,255,255,.5) 50%,
    rgba(88, 89, 104,.5) 50.001%,
    rgba(88, 89, 104,.5) 100%
  );
  background-repeat: no-repeat;
  background-size: 200%;
  backgound-color: #666;
  background-position: 100% 50%;
  animation-timing-function: linear;
  animation-delay: .2s;
}

.progress.active {
    animation-name: Loader;
}

.progress.passed {
    background-position: 0 0; 
}

@-webkit-keyframes Loader {
  0%   { background-position: 100% 0; }
  100% { background-position: 0 0; }
}



/************************/
/************************/
/***** DEBUG STYLES *****/
/************************/
/************************/

.pause:hover .progress {
  animation-play-state: paused;
}

.pause .not-hovered {
  display: block;
}
.pause .hovered {
  display: none;
}

.pause:hover .not-hovered {
  display: none;
}
.pause:hover .hovered {
  display: block;
}

body {
  background: #121216;
  padding: 50px;
  width: 100vw;
  color: #fff;
  font-family: sans-serif;
}

.pbar {
    background: #ffffffa1;
    width: 100%;
    height: 3px;
    margin-right: 5px;
    position: relative;
    overflow: hidden;
}
.pbar:after {
    /* This value is the OPPOSITE color of our background */
    color: rgb(0, 255, 255); 
    mix-blend-mode: difference;
}
.past {
  width:100% !important;
}

@media (max-width:1000px) {
  .frame-wrapp {
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 0%;
    z-index: 999;
}


}

.story-list {
    display: flex;
    position: relative;
    display: inline-flex;
}
.stories {
    overflow-x: auto;   
    text-align: center;

}

</style>