<template>

     <nuxt-link :to="'/kiralik-villa/'+prop.vil_url">

     
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="prop.vil_response_img?prop.vil_response_img:'https://via.placeholder.com/250'" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
           {{prop.vil_adi}}
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        </div>
        </nuxt-link>

</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
          prop:{
              type:Object,
              default:null
          }
    },
    watch: {
        prop: function(newData,oldData){
              if(newData !==null){

              }
        }
    }
}
</script>

