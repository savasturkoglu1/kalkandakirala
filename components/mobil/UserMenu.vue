<template>
    <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                     <button class="button mb-bak-button" @click="backButton">
                         <i class="flaticon-left-arrow"></i>
                     </button>
                    <p class="modal-card-title"> Sana Özel </p>
                </header>
                <div class="mm-content">

                   
                    <div class="mm-wrap">

                        <!-- list item  -->
                        <div class="mm-list"   @click="savedVillas()">
                            <div class="mm-icon">
                               <i class="flaticon-like"></i>
                            </div>
                            <div class="mm-menu-name">
                                Kaydedilen vilalar
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->

                          <!-- list item  -->
                        <div class="mm-list"   @click="goLink('/karsilastirma')">
                            <div class="mm-icon">
                               <i class="flaticon-transfer"></i>
                            </div>
                            <div class="mm-menu-name">
                               Karşılaştırma
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->

                            <!-- list item  -->
                        <div class="mm-list"   @click="goLink( $store.state.trUrls.villa+'indirimli-villalar')">
                            <div class="mm-icon">
                               <i class="flaticon-tag"></i>
                            </div>
                            <div class="mm-menu-name">
                               İndirimli Villar
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->

                            <!-- list item  -->
                        <div class="mm-list"  @click="goLink('/teklif-al')">
                            <div class="mm-icon">
                               <i class="flaticon-diamond"></i> 
                            </div>
                            <div class="mm-menu-name">
                                Teklif İste
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->

                            <!-- list item  -->
                        <div class="mm-list"  @click="goLink('/blog')">
                            <div class="mm-icon">
                               <i class="flaticon-diamond"></i> 
                            </div>
                            <div class="mm-menu-name">
                                Blog
                            </div>
                            

                        </div>
                         
                         <!-- list item -end -->


                            <!-- list item  -->
                        <div class="mm-list">
                             <div class="top-search">
                                        <div class="field">
                                          <form @submit="sorgula">
                                        <p class="control has-icons-left">
                                          
                                             <input class="input top-inp" type="text" placeholder="Rezervasyon Sorgula" v-model="kod">
                                          <span class="icon is-small is-left">
                                            <i class="fal fa-search"></i>
                                          </span>
                                                                                
                                        </p>

                                        </form>    
                                      </div>
                                      <div class="button" @click="sorgula">
                                        <i class="flaticon-search"></i>
                                      </div>

                                    </div>
                            

                        </div>
                         
                         <!-- list item -end -->




                    </div>
                  
                     <!-- main menu end -->
                </div>
                
             
            </div>
</template>

<script>
import KategoriCar from './CatgoryCard';
import BolgeCard  from './BolgeCard';
export default {
    components : {KategoriCar, BolgeCard},
    data(){
        return {
            title:'Menu',
            show:1,
            kod:null,
        }
    },
    mounted(){
           console.log(this.$store.state.bolgeler)
    },
    methods:{
         sorgula(e){
          e.preventDefault();
                if(this.kod){
                  this.$router.push({name:'rezervasyon-rezervasyon-sorgula', query:{kod:this.kod}});    
                }         
        },
        backButton(){
          if(this.show==1) {
            this.$parent.close()
          } else {
              this.show=1
          }
        },

        savedVillas() {
             this.$parent.close();
      let vll = JSON.parse(localStorage.getItem('like'))
     console.log('like villas ', vll)
      this.$router.push({
        name: 'villalar',
        query: { villas: vll.join(','), title: 'Kaydedilen Villalar' },
      })
    },
        goLink(url) {
            this.$router.push({path:url});
            this.$parent.close();
        }
    }
}
</script>

<style>
.top-search {
    display: flex;
}
.mm-list {
    width: 100%;
    display: inline-flex;
    padding: 8px ;
    margin-bottom: 8px;
        margin-top: 5px;
        border-radius: 6px;
    background: #f8f8f8;

}
.mm-menu-name {
        position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    
    margin-left: 16px;
    padding-right: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.mm-icon i {
    margin-left: 15px;
}
.mm-icon i::before {
    font-size: 28px;
}
.mm-menu-name:after {
    content: "";
    position: absolute;
    top: 0;
    right: 11px;
    width: 8px;
    height: 100%;
}
.mm-menu-name:after {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 12' fill='%23919191'%3E%3Cpath d='M7.75 6c0 .33-.142.646-.39.864L1.784 11.77a.924.924 0 01-1.22-1.386l4.877-4.29a.125.125 0 000-.188L.564 1.616A.924.924 0 011.784.23l5.574 4.904c.249.219.392.534.392.866z'/%3E%3C/svg%3E");
}



.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}
.slide-enter {
   transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.mm-content {
    
    overflow-y: auto;
    margin-bottom: 40px;
    padding-bottom: 20px;
    overflow-x: hidden;
}

.mm-wrap {
    padding: 10px;
}
.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

</style>