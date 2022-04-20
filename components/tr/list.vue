<template>
 
  <div>

        <div class="mb-list-header mob">
              <button class="mb-to-button button justify-start  is-small has-icons-left" @click="() => {this.mFilter = true}">
                   <span class="icon">
                       <i class="flaticon-settings"></i>
                   </span>
                   <span>Filtrele</span>
              </button>
              <button class="mb-to-button button is-small has-icons-left" @click="()=> {this.smodal = true}">
                   <span class="icon">
                       <i class="flaticon-sort"></i>
                   </span>
                   <span>Sırala</span>
              </button>
          </div>
   
             <b-modal
                    v-model="smodal"
                    has-modal-card
                   
                    @close="()=> {this.smodal= false}"
                    :can-cancel="true">
                    <div class=" modal-card">
                        <div class="modal-card-body">
                         
                         <MobileSort @sendOrder="
                  (a, b) => {
                    this.setSort(a, b)
                  }
                " />
                           
                        </div>
                       </div>
                </b-modal>
        <b-modal
            v-model="mFilter"
            has-modal-card
            full-screen
            :can-cancel="false">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Fitrele</p>
                </header>
                <section class="modal-card-body f-modal-body">
                     <MobilFilter ref="form" @cBack="(v) => this.getFilter(v)" /> 
                      
                </section>
                 <footer class="md-card-foot">
                         <div class=" md-s-buttons">
                           <button class="button" @click="() => {this.mFilter = false}">
                             Kapat
                         </button>
                         <button class="button bg-primary-normal-gradient"  @click="sendFilterMob">
                           Fitrele
                         </button>
                         </div>
                      
                </footer>
                
            </div>
        </b-modal>
     
    <!-- <div class="m-filter mobil-fix-options" v-if="mFilter">
      <MobilFilter @cBack="(v) => this.getFilter(v)" />
    </div> -->

    <div class="list-wrapper" >
      <!-- <div class="desk">
        <Filtre @cBack="v => this.getFilter(v)" tip="filtre"   :bolge="bolge?{name:bolge.bo_adi, id:bolge.id}:null" />
      </div> -->
      <div class="container">
        <!-- <div class="columns">
          <div class="column is-12 ">
            
            <TopFilter @cBack="(v) => this.getFilter(v)" />
              
            
          </div>
        </div> -->
          <div class="columns">
          <div class="column-is-3 desk">
            <SideFilter  @cBack="v => this.getFilter(v)"  />
          </div>
          <div class="column is-9 list-col" v-if="veri">
            <div class="list-nav-wrap desk">
              <ListNav
                @sendShow="
                  (i) => {
                    this.show = i
                  }
                "
                @sendView="
                  (k) => {
                    this.map = k
                  }
                "
                @sendOrder="
                  (a, b) => {
                    this.setSort(a, b)
                  }
                "
              />
            </div>
            <div v-if="show == 1">
              <div
              class="li-anim"
              
              v-for="(item, i) in veri.data"
              :key="item.id"
              :style="{ 'animation-delay': 0.1 * i + 's' }"
            >
              <ListUnit :data="item" />
            </div>
            </div>

            <div class="columns is-multiline is-mobile " v-if="show == 2">
              <div
                v-for="(item, i) in veri.data"
                :key="item.id"
                :class="'column is-'+col"
              >
              <!-- is-half-tablet is-full-mobile is-one-third-desktop  -->
                <GUnit :data="item" />
              </div>
            </div>
          </div> 
        </div>
        <Paginate v-if="veri" :data="veri" :getPage="setQuery" />
      </div>
    </div>
  </div>
</template>
<script>
import Paginate from '../templates/pagination'
import Filtre from '../tr/SearchBar'
import ListUnit from './listUnit'
import GUnit from './HomeGridUnit'
import ListNav from '../tools/listNav'
import Brd from '../templates/BreadCrum'
import MobilFilter from '~/components/mobil/Filter.vue'
import MapUnit from './mapUnit'
import GMap from '../../components/tr/GMap'
import SideFilter from '../../components/tr/sidefilter'
import TopFilter from './topFilter.vue'
import MobileSort from '~/components/mobil/sort.vue'

export default {
  watchQuery: true,
  scrollToTop: true,
  loading: true,
  components: {
    MobileSort,
    Paginate,
    Filtre,
    ListUnit,
    GUnit,
    ListNav,
    Brd,
    MobilFilter,
    MapUnit,
    GMap,
    SideFilter,
    TopFilter,
  },
  props: {
    veri: {
      type: Object,
      default: null,
    },
    bolge: null,
    pinUrl: null,
  },
  data() {
    return {
      url: this.$route.params.url,
      lang: 'tr',
      type: 'kat', 
      page: 1,
      pagi: 3,
      smodal:false,
      orderBy: 'id',
      orderCond: 'DESC',
      show: 1,
      col:4,
      map: false,
      mFilter: false,
      selectedProp: null,
      mp: null,
      markers: [],
    }
  },
  mounted() {
   
    // rid responsivnes
     

    
    //this.show = window.width > 1000 ? 1 : 2
    //  this.getpinUrl();
    if (process.client) {
      const a = parseInt(localStorage.getItem('show'))
      const orderBy = localStorage.getItem('orderBy')
      const orderCond = localStorage.getItem('orderCond')
      if(window.innerWidth>1000) {
        this.show = a ? a : 1
      } else {
        this.show =2
      }
     
      this.orderBy = orderBy ? orderBy : null
      this.orderCond = orderCond ? orderCond : null
    }
      this.map = JSON.parse(localStorage.getItem('listView'))

      let w = window.innerWidth
        if (w<768) {
          this.show = 2
          this.col = 12
        } else if(w<=1024) {
          this.show = 2
          this.col = 6
        }
        else if(w>1024) {
          this.show = 1
          this.col = 4
        }
  },

  methods: {
    sendFilterMob(){
      this.mFilter = false
     this.$refs.form.sendFilter()
     
    },
    switchList() {
      this.map = false
      localStorage.setItem('listView', JSON.stringify(this.map))
      this.$refs.mNav.map = false
    },
    setPinned(i) {
      this.$axios.get('/single-list?id=' + i).then((resp) => {
        this.selectedProp = resp.data
      })
    },
    setSort(a, b) {
      localStorage.setItem('orderBy', a)
      localStorage.setItem('orderCond', b)
      this.orderBy = a
      this.orderCond = b
      this.smodal = false,
      this.$router.push({
        query: {
          ...this.$route.query,
          orderBy: this.orderBy,
          orderCond: this.orderCond,
        },
      })
    },
    getFilter(i) {
      //  this.$route.push({query:{ ...this.$route.query ,...i } });
      let qString = $.param(i) //  Object.keys(i).map(key => key + '=' + i[key]).join('&');
      let url = this.$route.fullPath + '&' + qString
      let qObject = { ...this.$route.query, ...i }
      console.log(qObject)
      $.each(qObject, function(key, value){
          if (value === "" || value === null){
              delete qObject[key];
          }
      });
      console.log(qObject)
      this.$router.push({ query: qObject })
    },
    setQuery(url) {
      this.$router.push({ query: { ...this.$route.query, page: url } })
    },

    setShow(i) {
      this.show = i
    },
  },
}
</script>
<style lang="css" scoped>
.map-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.mv-map-wrap {
  position: relative;
  overflow: hidden;
  height: 100vh;

}
.mv-list-wrap {
  
  z-index: 9;
  background: #fff;
  top: 0;
}
.close {
  position: absolute;
  right: 1px;
  background: #fff;
  width: 20px;
  text-align: center;
  border-radius: 50%;
  z-index: 999;
  top: -10px;
  cursor: pointer;
}
.list-wrapper {
  min-height: 400px;
}
.mtop {
  top: 0 !important;
}
.mv-filter {
  position: fixed;
  z-index: 2;
  right: 10px;
  width: 70%;
  top: auto;
}
.mv-map {
  position: absolute;
  height: 100%;
  bottom: 0px;
  top: 0;
  width: 100%;
  z-index: 1;
}
.n-map {
  position: absolute;
  height: 100%;
  bottom: 0px;
  top: 0;
  width: 100%;
  z-index: 1;
}
.mv-list {
  background: #f5f5f5;
  width: 25%;
  position: fixed;
  top: auto;
  padding: 10px 5px;
  z-index: 9;
  left: 0;

  overflow-y: auto;
  bottom: 0px;
  top: 105px;
  padding-bottom: 10px;
}
.map-info-box {
  width: 150px;
  height: 60px;
  font-size: 24px;
}
.map-wrap {
  height: 700px;
}
.GMap {
  /* position: fixed;
    height: 100%;
    width: 50%;
    left: 0; */
  height: 100%;
}

.pfix {
  position: fixed;
  height: 100%;
  width: 50%;
  left: 0;
  top: 0;
}
.GMap__Wrapper {
  width: 100%;

  height: 100% !important;
}

.selected-style {
  color: #ff3a62 !important;
}
.level .button {
  border: none;
}
.list-level {
  margin-bottom: 5px;
  background: #fff;
}
/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}

ul.pagination-list {
  display: inline-flex !important;
  width: 100%;
}

@media (min-width: 1001px) {
  ul.pagination-list {
    display: inline-flex;
    width: 100%;
  }
  .mobil-top,
  .m-filter {
    display: none;
  }
  .bk-butt {
    display: none;
  }

  .mp-list {
    position: absolute;
    bottom: 50;
    left: 25%;
    background: #fff;
    padding: 0;
    border-radius: 5px;
    width: 600px;
    z-index: 99;
  }
}

.mp-list .unit {
  margin: 0px;
  margin-bottom: 0px !important;
}

@media (max-width: 1000px) {
  .list-wrapper {
  padding: 8px !important;
}


  .mp-list {
    z-index: 9;
    position: absolute;
    bottom: 60px;
    left: 0;
    background: #fff;
    padding: 0;
    border-radius: 0;
    width: 100%;
  }
  .bk-butt {
    position: absolute;
    top: 60px;
    z-index: 99;
    text-align: center;
    width: 100%;
  }
  ul.pagination-list {
    display: inline-flex;
    width: 100%;
  }
  .mobil-top {
    display: block;
  }

  .mv-filter,
  .mv-list,
  .desk {
    display: none;
  }

  .mobil-list-top {
    margin-bottom: 10px;
  }

  .mobil-list-top .button {
    border: none;
  }
}

.map-buton {
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
}
span.map-ap {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10px;
  left: 0;
  font-size: 18px;
}

.list-col {
  padding-top: 0;
}

footer.md-card-foot {
    display: flex;
    margin-bottom: 0;
    padding: 10px;
    background: #fff;
    align-items: flex-end;
    text-align: right;
    border-top: 1px solid #dedede;
}
section.modal-card-body.f-modal-body {
    padding: 8px;
    background: #f6f9fd !important;
}


.md-s-buttons {
    width: 1005;
    text-align: revert;
    width: 100%;
}

.mb-list-header.mob {
    margin-bottom: 10px;
    align-items: flex-end;
    text-align: right;
    padding: 5px;
    background: #fff;
    border: 1px solid #eee;
    display: flex;
  justify-content: flex-end;
}



.mb-list-header i::before {
    font-size: 14px;
    color: #607d8b;
    font-weight: normal;
    margin-bottom: 0px;
    padding-bottom: 0px;
}
</style>
