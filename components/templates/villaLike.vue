<template>
     <div class="buttons l-buttons" >
            <div :class="begen?'button   is-clk bounce':'button  '" title="Villayı Beğen" @click="set('like', $event)">
                  <span class="icon ">
                       <i :class="begen?'flaticon-heart-1':'flaticon-heart'"></i>
                    </span>
                    <span>
                        Kaydet
                    </span>
            </div>
            <div :class="compare?'button  is-clk bounce':'button  '"  title="Karşılaştırma Listesine Ekle"  @click="set('compare', $event)">
                    <span class="icon ">
                        <i class="flaticon-transfer"></i>
                    </span>
                    <span>
                        Karşılaştır
                    </span>
            </div>
            <div class="button "  title="sosyal medyada paylaş"  @click="set('compare', $event)">
                    <span class="icon ">
                        <i class="flaticon-share"></i>
                    </span>
                    <span>
                        Paylaş
                    </span>
            </div>
            <!-- <div :class="bookmark?'button  is-clk bounce':'button '"  title="Villayı Kaydet"  @click="set('bookmark', $event)">
                <i :class="bookmark?'fas fa-bookmark':'fal fa-bookmark'"></i>
            </div> -->
       </div>
</template>
<script>
export default {
    data(){
        return {
            begen:false,
            compare:false,
            bookmark:false,
            like:0
        }
    },
    props :{
        count : {
            type:Number,
            default:0
        },
        tip: {
            type:String,
            default:'villa'
        },
        id :null
    },
    watch:{
        id: function(val){
              this.like = this.count?this.count:0;
             this.check();
        }
    },

    mounted(){
         this.check();
         this.like = this.count?this.count:0;
    },
    methods : {
        
         check(){
                 let like = JSON.parse(localStorage.getItem('like'));
                 if(like){
                     if(like.includes(this.id)){
                     this.begen=true;
                   
                    } else {
                        this.begen = false;
                    }
                     this.$store.dispatch('setSaved', like);
                 }

                  let cmp = JSON.parse(localStorage.getItem('compare'));
                 if(cmp){
                     if(cmp.includes(this.id)){
                     this.compare=true
                 } else {
                     this.compare = false;
                 }
                 }

                 let bmark = JSON.parse(localStorage.getItem('bookmark'));
                if(bmark){
                      if(bmark.includes(this.id)){
                     this.bookmark=true
                 } else {
                     this.bookmark = false;
                 }
                }
         },
         set(type,e){
              e.preventDefault();
                 let list = JSON.parse(localStorage.getItem(type));
                  if(list){
                       if(list.includes(this.id)){
                        var index = list.indexOf(this.id);                    
                            if (index !== -1){ list.splice(index, 1);}  
                            if(type =='like'){
                                  this.like = this.like-1;
                                  this.$store.dispatch('setSaved', list);
                            }
                            this.$buefy.toast.open({
                    message: 'Listenizden çıkarıldı ! !!',
                    type: 'is-danger'
                })
                    } else {
                        list.push(this.id);
                             if(type =='like'){
                                  this.like = this.like+1;
                                  this.$store.dispatch('setSaved', list);
                            }
                    }
                    this.$buefy.toast.open({
                    message: 'Listenize başarıyla eklendi !!',
                    type: 'is-success'
                })
                    localStorage.setItem(type, JSON.stringify(list));
                    
                    
                  }  else {
                     localStorage.setItem(type, JSON.stringify([this.id]));
                      if(type =='like'){
                      this.$store.dispatch('setSaved', [this.id]);
                     }
              }
             
               

              if(type=='like'){
                  if(this.tip == 'villa') {
                       if(this.like > -1){
                       this.$axios.get('/villa-like/'+this.id+'?like='+this.like);
                   }
                  }
              }
              this.check();
                 
         }
    }

}
</script>
<style scoped>
.like-count {
    position: absolute;
    right: 5px;
}

.l-buttons .button {
  border: 1px solid #cfd8dc;

       color: #607d8b;
}
.is-clk {
    
    color:#F44336 !important
}
.l-buttons {
   pointer-events:visiblePainted
}
    .red {
        color: red !important
    }

    .bounce {
  display: flex;
  position: relative;
  -moz-animation: bounce 0.25s 2  linear;
  -o-animation: bounce 0.25s 2 linear;
  -webkit-animation: bounce 0.25s 2 linear;
  animation: bounce 0.25s 2 linear;
  
}
.fa-twitter{
	color: #027bdd;
  font-size: 30px;
  margin: 20px;
}
@-webkit-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-moz-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-o-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-ms-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}


</style>