<template>
    <div class="container">
         <div class="columns is-multiline">
                <div class="column is-4" v-for="(item, i) in data.data" :key="i">
                    <nuxt-link class="e-link" :to="'/emlak/'+item.e_url">
                    <div class="e-wrap">
                        <div class="e-img-wrap">
                              <v-lazy-image :src="item.kapak" :alt="item.e_baslik" />
                             
                        </div>
                        <div class="e-bottom">
                              <!-- <div class="columns">
                                  <div class="column is">

                                  </div>
                                  <div class="column">

                                  </div>
                              </div> -->
                            <div class="e-title-wrap">
                                <h3> {{item.e_baslik}} </h3>
                            </div>
                            <div class="e-adres">
                                {{item.e_il}} / {{item.e_ilce}}
                            </div>

                             <div class="e-price-wrap">
                                  <span class="e-price"> {{item.e_fiyat}} </span>
                              </div>
                        </div>
                    </div>
                    </nuxt-link>
                </div>

                 <Paginate  :data="data" :getPage="setQuery" />
         </div>
    </div>
</template>
<script>
import Paginate from '../../components/templates/pagination';
export default {
    
 watchQuery:true,
    scrollToTop: true,
    loading: true,
    components: { Paginate },

    async asyncData({$axios, route, params}){
          const data  = await $axios.get('/emlak-listing?lang=tr').then(resp => { return resp.data });
          return { data }
    },

    methods: {
         setQuery(url){
             this.$router.push({ query: { ...this.$route.query ,page: url }, });
       },

    }
}
</script>
<style scoped>

a.e-link {
    color: inherit;
}
    .e-wrap {
    padding: 0;
    margin: 10px auto;
    background: #fff;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.e-bottom {
    padding: 15px;
    position: relative;
}

.e-img-wrap {
    position: relative;
    height: 230px;
    overflow: hidden;
}
.e-img-wrap img {
    width: 100%;
    height: auto;
    min-height: 100%;
}

.e-price-wrap {
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid #eee;
    font-size: 20px;
    font-weight: 600;
    color: #00d1b2;
}
</style>