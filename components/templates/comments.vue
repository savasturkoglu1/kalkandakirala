<template>
    <div class="co-wrap">
          
           <div class="co-body">              
         <article itemscope itemtype="http://schema.org/UserComments" class="media" v-for="(item, i) in comments.filter(ii => {if(ii.yor_cevap_id ==0){ return ii }})" :key="i" >
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <i class="far fa-user"></i>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <p> 
                                <span  itemprop="creator" itemscope itemtype="http://schema.org/Person">
                                <strong itemprop="name">{{item.yor_ad}}</strong>
                                <div>
                                    <span v-for="yld in item.yor_yildiz" class="flaticon-start-1"></span>
                                </div>
                                </span>
                                <br>
                                <p itemprop="commentText">{{item.yor_yorum}}</p>
                                <br>
                                <small  itemprop="commentTime" :datetime="item.created_at"> {{item.created_at}}</small>
                            </p>
            </div>

                    <article class="media"  v-for="(sitem, jj) in comments.filter(d => {if(d.yor_cevap_id ==item.id){ return d }})" :key="jj" >
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <i class="far fa-user"></i>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{sitem.yor_ad}}</strong>
                                    <br>
                                    {{sitem.yor_yorum}}
                                    <br>
                                    <small> {{sitem.created_at}}</small>
                                </p>
                            </div>

                        
                            </div>
                        </article>
                    </div>
        </article>
        <div class="co-form">
               <div class="form-group pr">
                   <div class="spn" v-if="spn">
                       <Spinner />
                   </div>
                   <form id="yorForm" @submit="sendComment">
                       <input type="hidden" v-if="tip == 'Blog'"  name="yor_blog_id" :value="id">
                       <input type="hidden" v-else name="yor_villa_id" :value="id">
                      <input type="hidden"  name="yor_yildiz" :value="star">
                      <div class="columns">
                      <div class="field column">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" required type="email" name="yor_eposta" placeholder="emailadres@site.com" >
                            <span class="icon is-small is-left">
                            <i class="flaticon-envelope"></i>
                            </span>                       
                        </div>                    
                    </div>
                     <div class="field column">
                        <label class="label">İsim</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input"  type="text" name="yor_ad" placeholder="isim soyisim" >
                            <span class="icon is-small is-left">
                            <i class="flaticon-user"></i>
                            </span>                       
                        </div>                    
                    </div>
                      </div>
                    <div class="field">
                        <label class="label">Puanınız ? </label>
                        <div class="control has-icons-left has-icons-right">
                            <span v-bind:class="star>0?'flaticon-star-1 seleted-star':'flaticon-star'"    @click="setStar(1)"></span> 
                            <span  v-bind:class="star>1?'flaticon-star-1 seleted-star':'flaticon-star'"   @click="setStar(2)" ></span> 
                            <span  v-bind:class="star>2?'flaticon-star-1 seleted-star':'flaticon-star'"   @click="setStar(3)"></span> 
                            <span  v-bind:class="star>3?'flaticon-star-1 seleted-star':'flaticon-star'"   @click="setStar(4)"></span> 
                            <span  v-bind:class="star>4?'flaticon-star-1 seleted-star':'flaticon-star'"   @click="setStar(5)"></span>                     
                        </div>                    
                    </div>
                    <div class="field">
                        <label class="label"> {{tip=='Villa'?'Bu Villa İçin Yorum Yaz !':' Yorumunuz'}}</label>
                        <div class="control has-icons-left has-icons-right">
                            <textarea class="textarea" placeholder="Yorumunuz !" name="yor_yorum"></textarea>
                        </div>                    
                    </div>
                    <div class="field">
                        <div class="button-cont">
                            <button class="button is-danger">Yorum Yap</button>
                        </div>
                        **Size daha iyi hizmet verebilmemiz için yorumlarınızı bekliyoruz...
                        <div>{{alert}}</div>
                    </div>
                   </form>

               </div>
           </div>
  

           </div>
    </div>
</template>
<script>
import Spinner from '../tools/Spinner';
export default {
    components: { Spinner  },
    data(){
        return {
            star:0,
            spn:false,
            alert:null
        }
    },
    props: {
        tip:{
            type:String,
            default:'Villa'
        },
        comments:null,
        id:Number
    },
    methods: {
        setStar(i){
            this.star = i
        },
        sendComment(e){ 
              e.preventDefault();
              if(this.star ==0) {
                  this.$buefy.toast.open({ message: 'Yorum yapmak için lütfen puan verin !!',  type: 'is-danger' });
                  return 
              }
              this.spn=true;
              this.$axios.post('/add-comment', $("#yorForm").serialize()).then(resp => {
                  this.spn = false;
                  if(resp.data.status==1){
                       this.$buefy.toast.open({  message: 'Yorumunuz başarıyla eklendi !!',   type: 'is-success' });
                  } else {
                     this.$buefy.toast.open({ message: 'Yorum gönderilemedi lütfen tekrar deneyin !!',  type: 'is-danger' });
                  }
              });
        }
    }
}
</script>
<style scoped>
.flex {
    display: flex;
    width: 100%;
}
.flex .field {
    margin-right: 15px
}
.co-form .far {
    color: #bbb;
}
    .seleted-star {
        color: #fc0
    }

    .media-left i {
        font-size: 30px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 50%;
    width: 60px;
    text-align: center;
    height: 60px;
    color: #bbb;
    }

    .co-form {
    margin-top: 30px;
}
</style>