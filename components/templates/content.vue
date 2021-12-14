<template>
    <div class="content-body">
        <div class="columns is-multiline" v-if="Cont">
         <div v-for="(item,i ) in Cont.contents" :key="i" v-bind:class="['column','is-'+item.cont_width ]">
             <div v-if="item.cont_tip ==2 " v-html="item.veri"></div>
             <div v-if="item.cont_tip ==1" >
                 <img :src="item.veri" class="cont-img" alt="icerik">
             </div>
               <div v-if="item.cont_tip ==3" class="cont-video" v-html="item.veri">

               </div>
         </div>
    </div>
    </div>
</template>
<script>
export default {
    props :{
        Cont:null
    },
    
    methods:{
        getVideo(i){
            let vidoo='<iframe  src="https://www.youtube.com/embed/'+i+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            return vidoo
        }
    }
}
</script>

<style scoped>
.cont-video {
    height: 300px;
}

.cont-video iframe {
    border: 0;
    height: 300px;
}
    .content-body {
    padding: 30px;
    position: relative;
    background:#fff;
}

@media (max-width: 1000px) {
    .content-body {
    padding: 10px;
    position: relative;
    background:#fff;
} 
}
</style>