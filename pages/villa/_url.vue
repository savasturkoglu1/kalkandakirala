<template>
  <div class="vil-main">
    
    <div class="container top-detail-cont desc">
      <div class="columns">
        <div class="column is-8">
           <div class="vl-title">
              <h1 class="listing-title">
            {{ vil.vil_adi }}
          </h1>
           <h2>
                  {{
                    vil.vil_baslik
                      ? vil.vil_baslik
                      : 'Bu kısma villa başlık yazısı gelecek '
                  }}
                </h2>
           </div>
              <div class="item-address">
              <span class="icon">
                <i class="flaticon-pin"></i>
              </span>
              {{ vil.lokasyon.vil_il }} {{ vil.lokasyon.vil_il ? '/' : '' }}
              <span class="unit-bolge"> {{ vil.vil_bolge }}</span> /
              {{ vil.lokasyon.vil_mevki }}
          </div>
          <!-- <div class="tp-wrap buttons">
            <div class="tp-col button">
              <span class="tp-icon">
                <i class="flaticon-user"></i>
              </span>
              <span>
                <span>{{ vil.vil_kapasite }} Kişilik </span>
              </span>
            </div>

            <div class="tp-col button">
              <span class="tp-icon">
                <i class="flaticon-bed"></i>
              </span>
              <span>
                <span> {{ vil.vil_yodasi }} Yatak Odası</span>
              </span>
            </div>

            <div class="tp-col button">
              <span class="tp-icon">
                <i class="flaticon-shower"></i>
              </span>
              <span>
                <span>{{ vil.vil_banyo }} Duş </span>
              </span>
            </div>
          </div> -->

         
        </div>
        <div class="column is-4">
          <!-- <div class="v-ilanno"><button class="button ">İlan No: TRM00{{vil.id}}</button></div> -->
          <div class="column" style="float: right">
            <Like :id="vil.id"  :title="false" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- <div class="slider-sectio "  v-if="vil">
        <Slider v-if="vil" :images="vil.image" />
      </div> -->

      <!-- <div class="slider-sectio mob">
        <Slider v-if="vil" :images="vil.image" />
      </div> -->
    </div>

    <div class="container body-main">
      <div class="columns is-fullheight">
        <!-- sol sağ  -detaylar -->
        <div class="column is-8 vil-detail-cont">
          <div class="slider-sectio desc "  v-if="vil">
            <Slider v-if="vil" :images="vil.image" />
          </div>
           <div class="slider-sectio mob "  v-if="vil">
            <MobilSlider v-if="vil" :images="vil.image" />
          </div>
          <!-- <div class="rop-sectio desc">
                             <div class="columns">
                                  
                             </div>
                         </div> -->
          <div class="sec-tabs desc" id="menutab">
            <div class="tabs is-medium">
              <ul>
                <li :class="pos == 1 ? 'is-active' : ''" @click="go(1)">
                  <a>Açıklama</a>
                </li>
                <li :class="pos == 2 ? 'is-active' : ''" @click="go(2)">
                  <a>Takvim</a>
                </li>
                <li :class="pos == 3 ? 'is-active' : ''" @click="go(3)">
                  <a>Fiyatlar</a>
                </li>
                <li :class="pos == 4 ? 'is-active' : ''" @click="go(4)">
                  <a>Konum</a>
                </li>
                <li :class="pos == 5 ? 'is-active' : ''" @click="go(5)">
                  <a>Özellikler</a>
                </li>
                <li :class="pos == 6 ? 'is-active' : ''" @click="go(6)">
                  <a>Yorumlar</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="main-content">
            <!-- Başlık Sekmesi -->
            <div class="item-section mob title-section" v-if="vil">
              <div class="block-body">
                <div class="item-title">
                  <div class="mb-titles">
                    <h1 class="mob-top_name">{{ vil.vil_adi }}</h1>
                    <h2>
                      {{
                        vil.vil_baslik
                          ? vil.vil_baslik
                          : 'Bu kısma villa başlık yazısı gelecek '
                      }}
                    </h2>
                  </div>
                 

                   <div class="mob-onc">
                      <b> {{ vil.vil_onecikan_ozellik || '-' }} </b>
                    </div>
                 

                  <div class="mb-address">
                    <i class="flaticon-pin"></i>
                    {{ vil.lokasyon.vil_il }}
                    {{ vil.lokasyon.vil_il ? '/' : '' }}
                    <span class="unit-bolge"> {{ vil.vil_bolge }}</span> /
                    {{ vil.lokasyon.vil_mevki }}
                  </div>
                 

                  <!-- <div class="mb-like">
                    <Like :id="vil.id" :count="vil.vil_like" :title="false" />
                  </div> -->
                </div>
              </div>
            </div>
            <!-- Başlık Sekmesi end -->

            <!-- DetaySekmesi Sekmesi -->
            <div class="ow-sec">
              <div class="ow-wrap">
                 <div class="ow-row">
                    <!-- ow-col  -->

                      <div class="ow-col desc">
                       <div class="block-icon-m">
                        <i class="flaticon-home"></i>
                      </div>
                      <div class="note ow-label">
                          Konaklama tipi
                      </div>
                      <div>
                        <strong>{{ vil.vil_tipi }}</strong>
                      </div>
                    </div>
                    <!-- ow col end -->
                   <!-- ow-col  -->
                   
                    <div class="ow-col">
                       <div class="block-icon-m">
                        <i class="flaticon-bed"></i>
                      </div>
                      <div class="note ow-label">
                          Yatak odası
                      </div>
                      <div>
                        <strong> {{ vil.vil_yodasi }}  Yatak odası </strong>
                      </div>
                    </div>
               

                 <!-- ow col end -->

                 <!-- ow-col  -->
                    <div class="ow-col">
                     <div class="block-icon-m">
                        <i class="flaticon-user-3"></i>
                      </div>
                      <div class="note ow-label">
                          Kapasite
                      </div>
                      <div>
                        <strong>{{ vil.vil_kapasite }} Kişilik</strong>
                      </div>
                    </div>
                  <!-- ow col end -->

                     <!-- ow-col  -->

                      <div class="ow-col border-none">
                       <div class="block-icon-m">
                        <i class="flaticon-shower"></i>
                      </div>
                      <div class="note ow-label">
                          Duş sayısı
                      </div>
                      <div>
                        <strong>{{ vil.vil_banyo }} Banyo </strong>
                      </div>
                    </div>
                    <!-- ow col end -->

                    
                 </div>
              </div>
            </div>
            <div class="item-section" id="sec1">
              <div class="block-body" >
                                              <div class="tabs is-medium">
                                                    <ul class="ac-tab">
                                                        <li :class="section==99?'is-active':''"  @click="setSection(99)"><a>Açıklama</a>
                                                        </li>
                                                        <li v-for="(item, l) in vil.content" :key="l"  @click="setSection(l)" :class="section==l?'is-active':''" ><a>{{item.ic_baslik}}</a></li>
                                                       
                                                    </ul>
                                               </div>
                                               <div class="tab-body">
                                                   <div class="font-init" v-if="section==99"  itemprop="description" v-html="vil.vil_aciklama"></div>
                                                   <div class="font-init" v-for="(item, t) in vil.content" :key="t" >
                                                       <Content  v-if="section==t"    :Cont="item" />
                                                   </div>
                                               </div>
                                        </div>
            </div>
              <!-- <div class="block-body">
                 <div class="section-title bck3">
                  <h5>Açıklama</h5>
                </div>
               
                <div class="mob-onc">
                      <b> {{ vil.vil_onecikan_ozellik || '-' }} </b>
                 </div>
              
                <div class="tab-body-de" style="font-weight: initial;">
                  <div class=""  v-html="vil.vil_aciklama"></div>
                  <div v-for="(item, t) in vil.content" :key="t">
                    <h4>{{ item.ic_baslik }}</h4>
                    <Content :Cont="item" />
                  </div>
                </div>
              </div>
            </div> -->
            <!-- setay Sekmesi Sekmesi end -->

            <!-- takvim Sekmesi -->
            <client-only>

          
            <div class="item-section" id="sec2">
              <div class="block-body">
                <div class="section-title bck3">
                  <h5>Takvim</h5>
                </div>
                <Calendar v-if="vil" :vilId="vil.id" :inline="true" />
              </div>
            </div>
              </client-only>
            <!-- takvim Sekmesi end -->

            <!-- fiyat Sekmesi  -->
            <client-only>

            
            <div class="item-section" id="sec3">
              <div class="block-body">
                <div class="section-title bck3">
                  <h5>Fiyatlar</h5>
                </div>

                <div class="buttons">
                  <button
                    :class="pbirim == 'TL' ? 'button bg-primary-normal-gradient text-white' : 'button'"
                    @click="setCur('TL')"
                  >
                    TL
                  </button>
                  <button
                    :class="pbirim == 'USD' ? 'button bg-primary-normal-gradient text-white' : 'button'"
                    @click="setCur('USD')"
                  >
                    USD
                  </button>
                  <button
                    :class="pbirim == 'GBP' ? 'button bg-primary-normal-gradient text-white' : 'button'"
                    @click="setCur('GBP')"
                  >
                    GBP
                  </button>
                  <button
                    :class="pbirim == 'EURO' ? 'button bg-primary-normal-gradient text-white' : 'button'"
                    @click="setCur('EURO')"
                  >
                    EURO
                  </button>

                
                </div>

                <div class="columns is-multiline ">
                  <div class="column is-12">
                    <Spinner v-if="!priceTable" />
                    <div
                      v-else
                      class="level price-level pr"
                      v-for="(fiyat, f) in priceTable"
                      :key="f"
                    >
                      <div class="level-left">
                        <span>{{ fiyat.period }}</span>
                        <span class="p-note"
                          >En az kiralama {{ fiyat.fiy_enaz }} gece</span
                        >
                      </div>
                      <div class="level-right">
                        <span class="p-note">
                          {{ fiyat.fiy_tur == 2 ? 'Haftalık' : 'Gecelik' }}
                        </span>
                        <span class="price-fiyat">
                          <span v-if="fiyat.fiy_indirim" class="prc-disc"
                            >{{ fiyat.fiy_fiyat }} {{ pbirim }}
                          </span>
                          {{
                            fiyat.fiy_indirim
                              ? fiyat.fiy_indirimli_tutar
                              : fiyat.fiy_fiyat
                          }}
                          {{ pbirim }}
                        </span>
                      </div>
                      <span v-if="fiyat.fiy_indirim" class="pr-discount">
                        % {{ fiyat.fiy_indirim }} <br />
                        indirim
                      </span>
                    </div>
                  </div>
                  <div class="column is-12">
                    <div class="price-level level">
                      <div class="level-item">
                        Kiralama Kaporası: {{ vil.priceSets.vil_kaparo }} %
                      </div>
                    </div>
                    <div class="price-level level">
                      <div class="level-item">
                        Hasar Depozitosu: {{ vil.priceSets.vil_depozito }}
                        {{ vil.priceSets.vil_currency }}
                      </div>
                    </div>
                    <div class="price-level level">
                      <div class="level-item">
                        Ekstra Temizlik Ücreti:
                        {{ vil.priceSets.vil_extra_tem }}
                        {{ vil.priceSets.vil_currency }}
                      </div>
                    </div>
                    <div class="price-level level">
                      <div class="level-item" style="display: contents">
                        Fiyata Dahil Olanlar: <br>  Giriş Temizliği, Günlük
                        Havuz Bakımı, Elektrik, Su, Gaz, İnternet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </client-only>

            <!-- fiyat Sekmesi  enf-->

            <!-- mapSekmesi -->
            <client-only>

          
            <div class="item-section " id="sec4">
              <div class="block-body pd0">
                <div class="section-title bck3">
                  <h5>Konum</h5>
                </div>
                <div
                  class="map-section"
                  v-html="mapRender(vil.bolge.vil_lat, vil.bolge.vil_lang)"
                ></div>
                 <div class="mob-mes">
                   <div class="columns is-multiline mob ">
                  <div class="column is-12">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-airplane"></i>
                      </span>
                      <span class="mes-name"
                        >Havaalanına
                      </span>
                       <span class="mes-val">
                              {{ vil.lokasyon.vil_havaalanina }}
                      </span>
                    </div>
                  </div>

                  <div class="column is-12">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-heartbeat"></i>
                      </span>
                      <span class="mes-name"
                        >Sağlık Kurumuna
                      </span>
                      <span class="mes-val">
                               {{ vil.lokasyon.vil_dolmusa}}
                      </span>
                    </div>
                  </div>
                  <div class="column is-12">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-cityscape"></i>
                      </span>
                      <span class="mes-name"
                        >Merkeze 
                      </span>
                      <span class="mes-val">
                               {{ vil.lokasyon.vil_merkeze}}
                      </span>
                    </div>
                  </div>
                  <div class="column is-12">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-shopping-cart"></i>
                      </span>
                      <span class="mes-name"
                        >Markete
                      </span>
                      <span class="mes-val">
                               {{ vil.lokasyon.vil_markete}}
                      </span>
                    </div>
                  </div>
                  <div class="column is-12">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-sunbed"></i>
                      </span>
                      <span class="mes-name"
                        >Plaja 
                      </span>
                      <span class="mes-val">
                               {{ vil.lokasyon.vil_plaja }}
                      </span>
                    </div>
                  </div>
                  <div class="column is-12">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-fork"></i>
                      </span>
                      <span class="mes-name"
                        >Restorana  
                      </span>
                      <span class="mes-val">
                               {{ vil.lokasyon.vil_restoranta }}
                      </span>
                    </div>
                  </div>
                </div>
                 </div>
                <div class="columns is-multiline mesafeler desc pd40">
                  <div class="column is-6">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-airplane"></i>
                      </span>
                      <span class="mes-name"
                        >Havaalanına: {{ vil.lokasyon.vil_havaalanina }}
                      </span>
                    </div>
                  </div>

                  <div class="column is-6">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-heartbeat"></i>
                      </span>
                      <span class="mes-name"
                        >Sağlık Kurumuna: {{ vil.lokasyon.vil_dolmusa }}
                      </span>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-cityscape"></i>
                      </span>
                      <span class="mes-name"
                        >Merkeze : {{ vil.lokasyon.vil_merkeze }}
                      </span>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-shopping-cart"></i>
                      </span>
                      <span class="mes-name"
                        >Markete : {{ vil.lokasyon.vil_markete }}
                      </span>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-sunbed"></i>
                      </span>
                      <span class="mes-name"
                        >Plaja : {{ vil.lokasyon.vil_plaja }}
                      </span>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="mes-buton2">
                      <span class="icon is-small">
                        <i class="flaticon-fork"></i>
                      </span>
                      <span class="mes-name"
                        >Restorana : {{ vil.lokasyon.vil_restoranta }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </client-only>
            <!-- mapSekmesi end -->

            <!-- takvim Sekmesi -->
            <div class="item-section" id="sec5">
              <div class="block-body">
                <h6>Havuz Özellikleri</h6>
                <div class="columns is-multiline">
                  <div class="column">
                    {{ vil.vil_havuz }}
                  </div>
                </div>

                <div class="section-title bck3">
                  <h5>Özellikler</h5>
                </div>
                <div class="columns is-mobile is-multiline">
                  <div
                    :class="'column oz-cols is-' + col"
                    v-for="(item, d) in Array.from(
                      new Set(
                        vil.features
                          .filter((ii) => {
                            if (ii.oz_lang == 'tr') {
                              return ii
                            }
                          })
                          .map((j) => {
                            return j.oz_name
                          })
                      )
                    )"
                    :key="d"
                  >
                    <i class="flaticon-check-box-with-check-sign"></i>
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
            <!-- takvim Sekmesi end -->
            <!--  video -->
            <div class="item-section" v-if="vil.vil_video">
              <div class="block-body">
                <div class="section-title bck3">
                  <h5>Video</h5>
                </div>
                <div class="vdeo-body" v-html="vil.vil_video"></div>
              </div>
            </div>
            <!-- video end -->
          </div>
          <!-- yorumlar -->
          <div class="mob mob-s"></div>
          <div class="item-section" id="commetns">
            <div class="block-body" id="sec6">
              <div class="section-title">
                <h5>Yorumlar</h5>
              </div>
              <Comment type="Villa" :comments="vil.comments" :id="vil.id" />
            </div>
          </div>
          <!-- yorumlar end -->
          <Brd
            class="desc"
            v-if="vil"
            :routeArray="[
              { name: 'Anasayfa', path: '/' },
              { name: 'Kiralık villalar', path: $store.state.trUrls.allVillas },
              {
                name: vil.vil_adi,
                path: $store.state.trUrls.allVillas + '/' + vil.vil_url,
              },
            ]"
          />
        </div>

        <!-- sol sağ  -detaylar end -->

        <!-- sol taraf -rezervasyon -->
      
        <aside class="column is-4 is-narrow-mobile is-fullheight mobile-book">
          <div
            :class="true ? 'book-side' : 'book-side '"
            id="bookside"
            ref="bookside"
          >
            <BookingForm v-if="vil" :vil="vil" />
           <Help />
          </div>
        </aside>
             
        <!-- sol taraf -rezervasyon end  -->
      </div>
    </div>

    <!-- <div class="mob-start">
                    <div class="vl-coms">
                      <a @click="$parent.scrollTo('commetns')">
                        <span v-if="vil.yorumCount > 0">
                          {{ vil.yorumCount || '0' }} yorum
                        </span>
                        <span v-else>ilk yorumu sen yap</span>
                      </a>
                    </div>
                    <div class="vl-stars">
                      <span
                        v-for="(item, i) in vil.stars || 0"
                        class="flaticon-star-1"
                        :key="i"
                      ></span>
                      <span
                        v-for="(item, i) in Array(5 - vil.stars)
                          .fill()
                          .map((_, idx) => idx)"
                        class="flaticon-star"
                        :key="i"
                      ></span>
                    </div>
                  </div> -->

    <b-modal
      v-model="bModal"
      has-modal-card
      full-screen
      :can-cancel="false"
    >
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <button class="button mb-bak-button" @click="() => {this.bModal=false}">
            <i class="flaticon-left-arrow"></i>
          </button>
          <p class="modal-card-title">Booking Form</p>
        </header>
        <div class="mm-content sb-modal-content">
          
           <MobilBooking :vil="vil" />
        </div>
      </div>
    </b-modal>

    <div class="mb-book">
      <div
        class="ub-price"
        itemprop="offers"
        itemscope
        itemtype="http://schema.org/Offer"
      >
        <div class="columns is-mobile">
           <button class="mob-bttom-back" @click="$router.go(-1)"  >
               <i class="flaticon-left-arrow"></i>
           </button>
          <div class="column">
            <div class="mb-price-b">
              <span
                class="ub-coast"
                itemprop="price"
                :content="vil.minPrice ? vil.minPrice : '0'"
              >
                {{ vil.minPrice ? vil.minPrice : '0' }}</span
              >
              <span
                class="ub-currency"
                itemprop="priceCurrency"
                content="TRY"
                >{{ vil.minPrice ? vil.priceSets.vil_currency : 'TL' }}</span
              >
              <span class="un-den">başlayan</span>
            </div>
            <div class="mob-stars">
              <div class="vl-stars">
                <i
                  v-for="(item, i) in vil.stars || 0"
                  class="flaticon-star-1"
                  :key="i"
                ></i>
                <i
                  v-for="(item, i) in Array(5 - vil.stars)
                    .fill()
                    .map((_, idx) => idx)"
                  class="flaticon-star"
                  :key="i"
                ></i>
              </div>
            </div>
          </div>
          <div class="column">
            <button class="button text-white bg-primary-normal-gradient" style="float: right" @click="showRez">
              <span v-if="!rf">Rezervasyon Yap</span>
              <span class="icon" v-if="rf">
                <i class="flaticon-left-arrow"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>


import Comment from '../../components/templates/comments'
import Calendar from '../../components/tr/calendar'
import Brd from '../../components/templates/BreadCrum'
import BookingForm from '../../components/tr/bookingForm'
import Content from '../../components/templates/content'
import Spinner from '../../components/tools/Spinner'

import Like from '../../components/templates/villaLike' 

import ImageGrid from '../../components/templates/villaImageGrid'
// import Slider from '../../components/templates/VillaSlider'
import Slider from '../../components/templates/VillaSlider'
import MobilBooking from '../../components/mobil/BookingForm'
import MobilSlider from '../../components/mobil/VillaSlider.vue'
import Help from '~/components/templates/help.vue'


export default {
  components: {
    Slider,
    Calendar,
    Brd,
    BookingForm, 
    Comment,
    Content,
    Spinner,
    Like,
    ImageGrid,
    MobilBooking,
    MobilSlider,
    Help,
  },
  scrollToTop: true,
  data() {
    return {
      scroll: 0,
      scrollY: null,
      section: 99,
      width: 0,
      widthtab: 0,
      col: 3,
      ozlcol: 3,
      pbirim: null,
      rf: false,
      priceTable: null,
      timer: 0,
      pos: 1,
      bModal:false,
    }
  },
  head() {
    return {
      title: this.vil.vil_seo_baslik
        ? this.vil.vil_seo_baslik
        : this.vil.vil_adi,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.vil.vil_seo_aciklama
            ? this.vil.vil_seo_aciklama
            : this.vil.vil_adi,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.vil.vil_seo_keywords,
        },
        // { hid:'rel', name:'canonical', href:this.$store.state.baseTr+this.$store.state.trUrls.villa+this.vil.vil_url },
        { property: 'og:image', content: this.vil.image.length>0?this.vil.image[0].res_url:'' },
        { property: 'og:site_name', content: this.$store.state.siteName },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: this.$store.state.baseTr + this.$route.path,
        },
        { property: 'og:locale', content: 'tr_TR' }, // Buraya o sayfanın dili. İngilizce ise en_US, türkçe ise tr_TR olacak.
        { property: 'og:title', content: this.vil.vil_seo_baslik },
        {
          property: 'og:description',
          content: this.vil.vil_seo_aciklama
            ? this.vil.vil_seo_aciklama
            : this.vil.vil_adi,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: this.$store.state.siteName },
        {
          name: 'twitter:url',
          content: this.$store.state.baseTr + this.$route.path,
        },
        { name: 'twitter:title', content: this.vil.vil_seo_baslik },
        { name: 'twitter:image', content: this.vil.image.length>0?this.vil.image[0].res_url:'' },
        { name: 'twitter:creator', content: '@twitterkullaniciadiniz' },
        { property: 'fb:pages', content: 'BURAYA_FACEBOOK_SAYFA_ID_NUMARASI' },
      ],

      link: [
        { rel: 'canonical', href: this.$store.state.baseTr + this.$route.path },
        {
          rel: 'alterne',
          href: this.$store.state.baseTr + this.$route.path,
          hreflang: 'x-default',
        },
        {
          rel: 'alterne',
          href: this.$store.state.baseTr + this.$route.path,
          hreflang: 'tr',
        },
      ],
      bodyAttrs: {
        class: 'villa-page',
      },

      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(
            /** structer data start */

            {
              '@context': 'http://schema.org',
              '@type': 'Hotel',
              name: this.vil.vil_adi,
              description: this.vil.vil_seo_aciklama,
              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: this.vil.lokasyon.vil_il,
                  addressCountry: 'Turkey',
                  streetAddress: this.vil.lokasyon.vil_bolge,
                  postalCode: '07960',
                },
              ],

              telephone: '+90 505 769 54 70',
              photo: this.vil.image.length>0?this.vil.image[0].res_url:'',
              image: this.vil.image.length>0?this.vil.image[0].res_url:'',
              starRating: {
                '@type': 'Rating',
                ratingValue: '5',
              },
              priceRange: this.vil.minPrice + '-' + this.vil.minPrice + 1000,
            },
            {
              '@context': 'http://schema.org',
              '@type': 'WebPage',
              name: this.vil.vil_adi,
              description: this.vil.vil_seo_aciklama,
              url: this.$store.state.baseTr + this.$route.path,
              inLanguage: 'tr',

              mainEntity: {
                '@type': 'Hotel',
                name: this.vil.vil_adi,

                image: this.vil.image.length>0?this.vil.image[0].res_url:'',
                inLanguage: 'tr',
                offers: {
                  '@type': 'Offer',
                  availability: this.$store.state.baseTr + this.$route.path,
                  price: this.vil.minPrice ? this.vil.minPrice : '0',
                  priceCurrency: 'TRY',
                },
                address: [
                  {
                    '@type': 'PostalAddress',
                    addressLocality: 'Antalya',
                    addressCountry: 'Kaş',
                    streetAddress: 'Kalkan',
                    postalCode: '07960',
                  },
                ],
                review: [
                  {
                    '@type': 'Review',
                    author: 'mutlu musteri',
                    datePublished: '2019-05-04',
                    name: 'Çok güzel Villa',
                    reviewBody: 'Çok güzwl villa',
                    reviewRating: {
                      '@type': 'Rating',
                      ratingValue: '5',
                    },
                  },
                ],
                // "amenityFeature" : [
                //                 { "@type" : "LocationFeatureSpecification","value" : "true", "name" : "Havuzu Korunaklı" }

                // ]
              },
            }

            /** structer data end */
          ),
          type: 'application/ld+json',
        },
      ],
    }
  },

  async asyncData({ params, $axios, redirect }) {
    try {
      let data = await $axios.get('/villa-detay/' + params.url)
      return { vil: data.data }
    } catch (err) {
      return redirect('/hata')
    }
  },
  watch: {
    pbirim: function (val) {
      this.setCur(val)
    },
  },

  mounted() {
    if (
      localStorage.getItem('clicked') === null ||
      localStorage.getItem('clicked') === undefined
    ) {
      localStorage.setItem('clicked', JSON.stringify([]))
    }

    let cArray = localStorage.getItem('clicked')
    let cveri = JSON.parse(cArray)
    if (!cveri.includes(this.vil.id)) {
      cveri.push(this.vil.id)
    }
    localStorage.setItem('clicked', JSON.stringify(cveri))

    setInterval(() => {
      this.timer = this.timer + 1
    }, 10)

    if (process.client) {
      this.col = window.innerWidth < 1001 ? 6 : 3
    }
    this.width = $('#bookside').width()
    this.widthtab = $('#menutab').width()
    let self = this
    $(window).scroll(function () {
      // if($(window).width()<1000) {
      //                if ($(this).scrollTop() > 100) {
      //             $(".mb-book").show();
      //         }
      //         if($(this).scrollTop() < 100) {
      //             $(".mb-book").hide();
      //         }
      //       }

      if ($(window).width() > 768) {
        if ($(this).scrollTop() > 300) {
          $('#bookside').addClass('fixed-right')
          $('#bookside').css('width', self.width)

        
        }
        // if($(this).scrollTop() > $('html,body').height()-1150 ){
        //     $("#bookside").removeClass('fixed-right');
        //     $("#bookside").addClass('fixed-right2');
        // }
        if ($(this).scrollTop() < 300) {
          $('#bookside').removeClass('fixed-right')
          $('#bookside').removeClass('fixed-right2')

        
        }

         if ($(this).scrollTop() > 600) {
        

          $('#menutab').addClass('tab-fix')
          //   $("#menutab").css('width',self.widthtab);
        }
        // if($(this).scrollTop() > $('html,body').height()-1150 ){
        //     $("#bookside").removeClass('fixed-right');
        //     $("#bookside").addClass('fixed-right2');
        // }
        if ($(this).scrollTop() < 600) {
        

          $('#menutab').removeClass('tab-fix')
        }
      }
    })

    // setTimeout(() => {
    //   this.$Model.run()
    // }, 3000)

    setTimeout(() => {
      this.pbirim = this.vil.priceSets.vil_currency
      this.priceTable = this.vil.priceTable
    }, 1000)
  },

  methods: {
    go(i) {
      this.pos = i
      let id = '#sec' + i
      $('html, body').animate(
        {
          scrollTop: $(id).offset().top - 90,
        },
        500
      )
    },
    goRez() {},
    setCur(i) {
      if (i !== this.pbirim) {
        this.priceTable = null
        this.pbirim = i
        this.$axios
          .get('/currency-table?cur=' + i + '&id=' + this.vil.id + '&lang=tr')
          .then((resp) => {
            this.priceTable = resp.data
          })
      }
    },
    showRez() {
      this.bModal = !this.bModal
    //   if (this.rf) {
    //     $('.mobile-book').show()
    //   } else {
    //     $('.mobile-book').hide()
       
    //   }
    },
    setSection(l) {
      this.section = l
    },
    scrollTo(i) {
      $('html, body').animate(
        {
          scrollTop: $('#' + i).offset().top - 20,
        },
        700
      )
    },

    dateConverter() {},
    seeAllImage() {
      let imgs = []
      this.vil.image.map((ii) => {
        imgs.push({
          src: ii.res_url,
          thumb: ii.res_resp_url,
          title: ii.res_alt,
        })
      })
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: imgs,
        download: false,
      })
    },
    mapRender(lat, lang) {
      return (
        '<iframe style="height: 100%;" src="https://maps.google.com/maps?q=' +
        lat +
        ', ' +
        lang +
        '&z=12&output=embed" width="100%" height="100%" frameborder="0" style="border:0"></iframe>'
      )
    },
  },

  beforeRouteLeave(to, from, next) {
    if (
      localStorage.getItem('props_') === null ||
      localStorage.getItem('props_') === undefined
    ) {
      localStorage.setItem('props_', JSON.stringify([]))
    }
    let vArray = localStorage.getItem('props_')
    let veri = JSON.parse(vArray)
    let data = {}
    data.id = this.vil.id
    data.time = this.timer
    veri.push(data)
    localStorage.setItem('props_', JSON.stringify(veri))
    next()
  },
}
</script>

<style lang="css" scoped>
.item-stars {
  display: flex;
  /* float: revert; */
  float: right;
  align-items: flex-end;
  text-align: right;
  /* display: table-footer-group; */
}
.item-address {
  font-family: inherit !important;
  font-weight: 600 !important;
  font-style: inherit !important;
  font-variant: inherit !important;
  font-size: 14px !important;
  line-height: 20px !important;
  color: rgb(113, 113, 113) !important;
  text-decoration: none !important;
}

.tp-wrap {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
}
.sec-tabs.desc {
  margin-bottom: 20px;
    background: #fff;
    box-shadow: 2px 1px 11px 0px #00000047;
    
    border-radius: 8px;
    border-top: none;
    box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 3%);
}
.slider-sectio {
    margin-bottom: 20px;
}
.tp-col {
  padding: 0px 10px;
  font-weight: 500;
}

span.tp-icon {
  font-size: 20px;
  margin-right: 5px;
}
.mob-top {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  left: 0;
  height: auto;
  padding: 5px;
}
.vdeo-body {
  height: 400px;
}

.vdeo-body iframe {
  height: 100% !important;
}
.ub-price .fa {
  color: #fc0;
}
.mob-s {
  margin-top: 10px;
  padding: 10px;
  background: #fff;
}
.mb-book {
  display: none;
}
/* .fixed-right{
     position: -webkit-sticky;
  position: sticky;
    top:0
} */

.fixed-right2 {
  position: -webkit-sticky;
  position: sticky;
  bottom: 700px;
}
.section-title {
  font-size: 18px;
  position: absolute;
  top: -15px;
  left: 30px;
  padding: 5px 10px;
  border-radius: 6px;
  color: #fff;
  font-weight: 500 !important;
  border-radius: 6px;
  color: #607d8b;
  font-weight: 400 !important;
  background: #ffffff;
  border: 1px solid #cfd8dc;
}
.level-right .p-note {
  text-align: right;
}
.p-note {
  font-size: 14px;
    color: #78909c;
  font-weight: 500;
}
.comment-section {
  padding: 30px;
  background: #fff;
  margin-top: 30px;
}
span.img-see-all {
  position: absolute;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000004d;
  justify-content: center;
  vertical-align: middle;
  display: grid;
  color: #fff;
  padding-top: 30%;
  text-align: center;
  font-size: 18px;
}
.img-grd {
  margin: 0px;
}
img.grid-img {
  height: 100%;
  width: auto;
  min-width: 100%;
}
.img-col {
  height: 170px;
  padding: 0.03rem;
  position: relative;
  overflow: hidden;
  background: #fff;
}
iframe {
  height: 100%;
}
.map-section {
  height: 500px;
      border-radius: 8px;
    overflow: hidden;
}
.block-icon {
  margin-bottom: 15px;
}

.block-icon .fa {
  color: #d8dce1;
}

.block-bordered {
  border-bottom: 1px dotted #d8dce1;
  display: table;
  width: 100%;
}
.block-icon {
  font-size: 40px;
  line-height: 40px;
  font-weight: normal;
  text-transform: none;
  letter-spacing: normal;
}
.block-col-25 {
  width: 25%;
}
.block-col {
  padding: 30px 20px;
  text-align: center;
  padding: 30px 0;
  border-right: 1px dotted #d8dce1;
  display: table-cell;
}
.w100 .animated {
  width: 100%;
}
.body-main {
  margin-top: 20px;
  margin-bottom: 30px;
}
.block-body {
  padding: 40px;
  border-bottom: none;
}
.item-section {
  padding: 0 !important;
  position: relative;
  background: #fff;

  margin-bottom: 35px !important;
  border-radius: 8px;
  border-top: none;
  box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 3%);
}

.vil-detail-cont {

  border-radius: 8px;
 
}

.item-starts {
  position: absolute;
  right: 10px;
  top: 20px;
  display: flex;
}

.vl-stars {
  margin-right: 10px;
}
.item-title h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
.rating .fa {
  color: #fc0;
}

.label-vil {
  font-size: 12px;
  margin-left: 10px;
  background: #00d1b2;
  padding: 5px 10px;
  border-radius: 10px;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  display: inline;
}

.price-level .level-left {
  display: grid;
}

.level.price-level .level-right {
  display: grid;
}

.price-level {
  background: #f7fafc;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 5px;
}

.mesafeler .button {
  font-size: 16px !important;
  height: 50px;
  border-color: #cfd8dc;
  color: #546e7a;
}

@media (max-width: 1000px) {
.level-right .p-note {
    text-align: left;
}
  .price-level .level-right {
    margin-top: 5px;
    justify-content: flex-start;
}
  .item-title h2 {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .body-main {
    margin-top: 5px;
    margin-bottom: 30px;
  }
  .label-vil {
    font-size: 12px;
    margin-left: 0px;
    background: #00d1b2;
    padding: 5px 10px;
    border-radius: 10px;
    color: #fff;
    white-space: nowrap;
    /* text-align: center; */
    display: inline-block;
    margin-bottom: 10px;
  }
  .item-starts {
    position: relative;
    right: auto;
    top: 20px;
    display: block;
    margin-bottom: 10px;
  }
  .item-section {
    padding: 0 !important;
    position: relative;
    background: #fff;
    border: none;
    margin-bottom: 35px !important;
    border-radius: 0px;
    box-shadow: none;
    margin-left: 5px;
    margin-right: 5px;
    box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 3%);
  }
  ul.ac-tab {
    font-size: 14px;
  }

  .mesafeler .button span {
    font-size: 12px !important;
  }

  .mesafeler .column.is-6 {
    padding: 5px;
  }
  .block-body {
    padding: 15px;
   
  }

  .mobile-book {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 38;
    left: 0;
    right: 0;
    bottom: 60px;

    background: #fff;
    display: none;
    padding: 0;
  }
  .book-side {
    overflow-y: auto;
    height: 100%;
    padding-top: 50px;
  }

  .level {
    display: block;
  }

  .img-col {
    height: 120px;
    padding: 0.03rem;
    position: relative;
    overflow: hidden;
    background: #fff;
  }

  .mb-book {
    padding: 5px;
    background-color: #fff;
    color: inherit;
    position: fixed;
    z-index: 9;
    bottom: 0;
    width: 100%;
    display: block;
    box-shadow: 0 -0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  }
  /* .mb-book-sabit {
    margin-top: 20px;
    padding: 10px;
    background-color: #4f5962;
    color: #fff;
   
    top: 0;
    z-index: 99;
    width:100%;
   
} */

  span.v-ilanno {
    float: right;
    font-weight: 600;
    color: inherit;
  }
}

.vn-title_title {
  padding: 20px 0;
  border-right: 1px dotted #d8dce1;
}
.vn-title_price {
  padding: 20px 0;
  border-right: 1px dotted #d8dce1;
}

.ub-price {
  line-height: 18px;
  padding: 10px;
  display: inline-block;
  width: 100%;
}

.ub-coast {
  font-size: 32px;
  font-weight: 700;
  font-family: sans-serif;
}
span.ub-currency {
  font-size: 24px;
  font-weight: 600;
  font-family: sans-serif;
}

.n-title_price_cols {
  display: flex;
  width: 100%;
  padding: 10px;
}
.n-title_button_col {
  padding: 10px;
  margin-top: 10px;
  float: right;
  margin-left: 20%;
}

@media (max-width: 1000px) {
  .mob-mes {
    margin-top: 20px;    padding: 20px;
}
  .section-title.renk3 {
    position: inherit;
    margin-bottom: 10px;
    background: transparent !important;
    color: #333;
    border-bottom: 1px solid #eee;
    border-radius: 0;
  }
  .ub-coast {
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
  }
  span.ub-currency {
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
  }

  .section-title {
       font-size: 18px;
    position: relative;
    top: -15px;
    left: 0px;
    padding: 5px 10px;
    
    color: #455a64;
    font-weight: 500 !important;
    margin-bottom: 5px;
    display: inline-block;
    border: none;
  }
}

.block-col-m {
  border: 1px solid #eee;
}

span.block-icon-m i {
  font-size: 18px;
  color: #78909c;
}

.mob-onc {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}

.oz-cols.is-3 i {
  font-size: 17px;
      color: #1e88e5;
}

button.mes-buton {
  width: 100%;
  text-align: left;
  padding: 0px;
  border: 1px solid #eee;
  background: #fff;
}

button.mes-buton .icon {
  padding: 20px;
  background: #eee;
  font-size: 18px;
  color: #eee;
  background: #349dff;
}

.block-icon .fa {
  color: #359eff;
}
.pr-discount {
    position: absolute;
    right: -5px;
    top: -15px;
    background: #1e88e5;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 14px;
    vertical-align: baseline;
    padding-top: 5px;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
}
.mes-buton2 .icon {
    margin-right: 10px;
    font-size: 16px;

    color: #1e88e5;
}

.tab-fix {
  position: fixed;
  top: 0;
  z-index: 99;
  background: #fff;
  width: inherit;
}

h1.listing-title {
  font-size: 32px;
}

.top-detail-cont {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.v-ilanno {
  text-align: right;
}

.tp-col.button {
  background: #fff;
  border: 1px solid #eee;
}

span.tp-icon i::before {
    font-size: 24px;
    color: #03a9f4;
  
}

.mesafeler {
  margin-top: auto;
}

.mb-address {
  margin-bottom: 5px;
}

.mob-starts span.flaticon-star::before {
  font-size: 14px;
  color: #ff9800;
}



.mob-mes .mes-name {
       width: 65%;
    display: inline-flex;
}

.mob-mes span.icon.is-small {
    margin-right: 10px;
}

button.mob-bttom-back {
    border: none;
    background: transparent;
}
.vil-main {
    background: #F7FAFC;
}

.vil-main .tabs li.is-active a {
    border-bottom-color: #7957d5;
    color: #e91e63;
}

.price-level.level .level-item {
    text-align: left !important;
    justify-content: flex-start;
}

.item-address {
    margin-bottom: 10px;
    margin-top: 10px;
}

.contact-sectio {
    padding: 0;
    background: #fff;
    margin-bottom: 30px;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgb(55 64 77 / 8%);
    transition: all .5s ease-in-out;
    border: 1px solid #eee;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgb(0 0 0 / 12%);
}

.cs-wrap {
    padding: 20px 30px;
}

.ow-sec {
  margin-bottom: 15px;
  margin-top:10px;
}
.ow-wrap {
  background: #fff;
  border-radius: 6px;
  padding: 0px;
  border-radius: 8px;
    border-top: none;
    box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 3%);
}
.ow-row {
  display:flex
}

.ow-col {
    padding: 15px 20px;
    width: 100%;
    text-align: center;
    border-right: 1px solid #2196f33d;
}

.ow-sec i::before {
    color: #1976d2;
    font-size: 28px;
}

.cs-wrap h3 {
    color: #1565c0;
    font-size: 18px;
}

.cs-row {
    margin-top: 10px;
    font-weight: 700;
    font-size: 18px;
}

.cs-row .flaticon-whatsapp::before {
   color: forestgreen;
}
.cs-row .flaticon-phone::before
{
      color: #1565c0
}

.ow-label {
    font-weight: 600;
    color: #607d8b;
}

.vl-title h1 {
    color: #1976d2;
}

.oz-cols i {
    font-size: 17px;
    color: #1e88e5;
}

.item-section.mob.title-section {
    margin-bottom: 5px !important;
}

h1.mob-top_name {
    color: #1976d2;
}

.vl-stars i::before {
    font-size: 14px;
    color: #ff9800;
}

span.price-fiyat {
    color: #673ab7;
    font-weight: 700;
}
</style>
