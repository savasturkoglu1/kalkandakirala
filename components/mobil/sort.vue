<template>
    <div class="mobil-sort-wra">
         <a 
                                 :class="orderBy=='vil_kapasite'&&orderCond=='asc'?'dropdown-item is-active':'dropdown-item'"
                                  @click="setSort('vil_kapasite', 'asc')">
                                 Kapsite azdan çoka
                                </a>
                                <a :class="orderBy=='vil_kapasite'&&orderCond=='desc'?'dropdown-item is-active':'dropdown-item'" @click="setSort('vil_kapasite', 'desc')">
                                  Kapsite çokdan aza
                                </a>
                                <a :class="orderBy=='price'&&orderCond=='asc'?'dropdown-item is-active':'dropdown-item'" @click="setSort('price', 'asc')">
                                  Fiyat düşükten yükseğe
                                </a>
                                <a :class="orderBy=='price'&&orderCond=='desc'?'dropdown-item is-active':'dropdown-item'" @click="setSort('price', 'desc')">
                                  Fiyat yüksekten düşüğe
                                </a>
                                <a :class="orderBy=='id'&&orderCond=='desc'?'dropdown-item is-active':'dropdown-item'"  @click="setSort('id', 'desc')">
                                  En Yeni İlanlar
                                </a>
                                <a :class="orderBy=='id'&&orderCond=='asc'?'dropdown-item is-active':'dropdown-item'"  @click="setSort('id', 'asc')">
                                   En eski ilanlalar
                                </a>
                                <hr class="dropdown-divider">
                                <a :class="orderBy=='smart'?'dropdown-item is-active':'dropdown-item'"  @click="setSort('smart', 'asc')">
                                 Akıllı Sıralama
                                </a>
    </div>
</template>
<script>
export default {

    data(){
        return {
            orderBy:null,
            orderCond: null,
            show:2,
            map:false,
            plc:'Sıralama',
        }
    },
    props: {
        sendShow:Function,
        sendOrder:Function,
        sendView:Function,
        listOnly: {
          default:false
        }
        
    },



     mounted(){
        if(process.client){
          const a =  parseInt(localStorage.getItem('show'));
         const orderBy = localStorage.getItem('orderBy');
         const orderCond = localStorage.getItem('orderCond');
         this.show =a?a:1 ;

        //  this.orderBy = orderBy?orderBy:null;
        //  this.orderCond = orderCond?orderCond:null;
        //   this.$emit('sendOrder', this.orderBy,this.orderCond );
        }

        //  this.map = JSON.parse(localStorage.getItem('listView')) ;
        //   if(this.map){
        //        $(".footer").hide();
        //      } else {
        //         $(".footer").show();
        //      }
        

    },
     
      methods: {
        
        setView(){
             this.map = !this.map;
             localStorage.setItem('listView', JSON.stringify(this.map));
             if(this.map){
               $(".footer").hide();
             } else {
                $(".footer").show();
             }
             this.$emit('sendView', this.map);
        },
      setSort(a,b){
        localStorage.setItem('orderBy',a);
        localStorage.setItem('orderCond',b);
        
        this.orderBy = a;
        this.orderCond = b;
          
          this.$emit('sendOrder', a,b);

       
      },       

       setShow(i){
          this.show = i;
          localStorage.setItem('show', JSON.stringify(i));
          this.$emit('sendShow', this.show);
      }

      }
}
</script>
<style scoped>
.dropdown-menu {
    display: none;
    /* left: 0; */
    min-width: 12rem;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    z-index: 20;
    right: 0;
    left: auto;
}
    .selected-style {
  color: #ff3a62 !important
}
.level .button {
    border: none;
}
</style>