<template>
  <div class="vil-main bg-gray parallax">
    
   <div class="parallax__group">

   
    <div class="container   parallax__layer parallax__layer--back">
      <div class="slider-sectio desc">
        <ImageGrid v-if="vil" :images="vil.image" />
      </div>

      <div class="slider-sectio parallax-slider mob" id="mobile-galery">
        <Slider v-if="vil" :images="vil.image" />
      </div>
    </div>

    <div class="container body-main parallax__layer parallax__layer--base">
      <div class="columns is-fullheight">
        <!-- sol sağ  -detaylar -->
        <div class="column is-8 ">
          <!-- <div class="rop-sectio desc">
                             <div class="columns">
                                  
                             </div>
                         </div> -->
          
          <div class="welc-section vil-detail-cont">
                   <!-- DetaySekmesi Sekmesi -->
            <div class="columns w-col">
               <div class="column is-12 w-top-col">
                 <div class="wel-title justify-start">
                      <h1 class="welk-title">
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
                

              

                <div class="item-address ">
                  <span class="icon">
                    <i class="flaticon-pin"></i>
                  </span>
                  {{ vil.lokasyon.vil_il }} {{ vil.lokasyon.vil_il ? '/' : '' }}
                  <span class="unit-bolge"> {{ vil.vil_bolge }}</span> /
                  {{ vil.lokasyon.vil_mevki }}
                </div>
               </div>
            </div>
            <div class="ow-sec">
              <div class="ow-wrap">
                 <div class="ow-row ">
                    <!-- ow-col  -->

                      <div class="ow-col desk ">
                        <div class="ow-item">
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
                    </div>
                    <!-- ow col end -->
                   <!-- ow-col  -->
                   
                    <div class="ow-col">
                       <div class="ow-item">
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
                    </div>
               

                 <!-- ow col end -->

                 <!-- ow-col  -->
                    <div class="ow-col">
                      <div class="ow-item">
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
                    </div>
                  <!-- ow col end -->

                     <!-- ow-col  -->

                      <div class="ow-col border-none">
                        <div class="ow-item">
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
                    </div>
                    <!-- ow col end -->

                    
                 </div>
              </div>
            </div>
            <div class="welc-onecikan-wrap">
                 <div class="wo-body">
                     <h5>Öne Çıkan Özellikler</h5>
                     <div class="wo-list">
                          <div class="hu-oc columns" v-if="vil.vil_onecikan_ozellik">
                            <div class="column is-4" v-for="(item, d) in vil.vil_onecikan_ozellik.split(',')" :key="d">
                                <span>
                                  <i class="flaticon-check"></i>
                                </span>
                                <span class="wo-item">
                                  {{item}}
                                </span>
                            </div>
                                      
                           </div>
                     </div>
                 </div>
                 
            </div>
            <!-- <div class="ws-bottom">
                   <div class="ws-bottom-wrap dFlex">
                       <div class="we-like justify-start ">
                            <Like :id="vil.id"  :title="false" />
                       </div>
                       <div class="ws-whatsapp">
                            <div class="cs-row ws-cont" v-if="$store.state.base">
                                             <span class="wa-icon">
                                               <i class="flaticon-whatsapp" ></i>
                                             </span>
                                             <span class="ws-tel">
                                               {{$store.state.base.contact.ilt_mobil1}}
                                               <br>
                                               <span class="note">WhatsApp Rezervasyon</span>
                                             </span>
                                             <b-icon class="is-pulled-right" icon="menu-right"></b-icon>
                           </div>
                       </div>
                   </div>
                 </div> -->
          </div>

          <div class="sec-tabs desc dis-none" id="menutab">
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
            
            <!-- Başlık Sekmesi end -->

            <!-- DetaySekmesi Sekmesi -->
            <div class="item-section " id="sec1">
              <div class="section-title2">
                  <h3>Detaylar</h3>
                </div>
              <div class="block-body vil-detail-cont">
              
               
                <div class="tab-body-de">
                  <div class="" v-html="vil.vil_aciklama"></div>
                  <div v-for="(item, t) in vil.content" :key="t">
                    <h4>{{ item.ic_baslik }}</h4>
                    <Content :Cont="item" />
                  </div>
                </div>
              </div>
            </div>
            <!-- setay Sekmesi Sekmesi end -->

            <!-- takvim Sekmesi -->
            <client-only>

          
            <div class="item-section" id="sec2">
              <div class="section-title2">
                  <h3>Takvim</h3>
                </div>
              <div class="block-body vil-detail-cont">
                
               
                  <Calendar v-if="vil" :vilId="vil.id" :inline="true" />
               
              </div>
            </div>
              </client-only>
            <!-- takvim Sekmesi end -->

            <!-- fiyat Sekmesi  -->
            <client-only>

            
            <div class="item-section " id="sec3">
              <div class="section-title2">
                  <h5>Fiyatlar</h5>
                </div>
              <div class="block-body vil-detail-cont">
                
                <div class="cur-dd ">
                  <b-dropdown aria-role="list"
                @change="val => {this.setCur(val)}">
                  <template #trigger="{ active }">
                      <b-button
                          :label="pbirim"
                          type="is-ghost is-bordered"
                          :icon-right="active ? 'menu-up' : 'menu-down'" />
                  </template>


                  <b-dropdown-item aria-role="listitem" value="TL">TL</b-dropdown-item>
                  <b-dropdown-item aria-role="listitem" value="USD">USD</b-dropdown-item>
                  <b-dropdown-item aria-role="listitem" value="GBP">GBP</b-dropdown-item>
                  <b-dropdown-item aria-role="listitem" value="EURO">TL</b-dropdown-item>
              </b-dropdown>
                </div>
               

                <div class="columns">
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
                  <!-- <div class="column is-4">
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
                        Fiyata Dahil Olanlar: Konaklama, Giriş Temizliği, Günlük
                        Havuz Bakımı, Elektrik, Su, Gaz, İnternet
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>

            </client-only>

            <!-- fiyat Sekmesi  enf-->

            <!-- mapSekmesi -->
            <client-only>

          
            <div class="item-section " id="sec4">
              <div class="section-title2">
                  <h5>Konum</h5>
                </div>
              <div class="block-body conum-cont vil-detail-cont  ">
                
                <div
                  class="map-section"
                  v-html="mapRender(vil.bolge.vil_lat, vil.bolge.vil_lang)"
                ></div>
              
                <div class="columns is-mobile is-multiline mesafeler">
                  <div class="column is-one-third-desktop is-half-mobile mes-col">
                    <div class="mes-wrap">
                      <div class="icon is-small">
                        <i class="flaticon-airplane"></i>
                      </div>
                      <div class="mes-name"
                        >Havaalanına 
                      </div>
                      <div class="mes-value">
                             {{ vil.lokasyon.vil_havaalanina }}
                      </div>
                    </div>
                  </div>

                  <div class="column is-one-third-desktop is-half-mobile mes-col">
                    <div class="mes-wrap">
                      <div class="icon is-small">
                        <i class="flaticon-heartbeat"></i>
                      </div>
                      <div class="mes-name"
                        >Sağlık Kurumuna
                      </div>
                      <div class="mes-value">
                          {{ vil.lokasyon.vil_dolmusa }}
                      </div>
                    </div>
                  </div>
                  <div class="column is-one-third-desktop is-half-mobile mes-col">
                    <div class="mes-wrap">
                      <div class="icon is-small">
                        <i class="flaticon-cityscape"></i>
                      </div>
                      <div class="mes-name"
                        >Merkeze
                      </div>
                      <div class="mes-value">
                        {{ vil.lokasyon.vil_merkeze }}
                      </div>
                    </div>
                  </div>
                  <div class="column is-one-third-desktop is-half-mobile mes-col">
                    <div class="mes-wrap">
                      <div class="icon is-small">
                        <i class="flaticon-shopping-cart"></i>
                      </div>
                      <div class="mes-name"
                        >Markete
                      </div>
                       <div class="mes-value">
                         {{ vil.lokasyon.vil_markete }}
                       </div>
                    </div>
                  </div>
                  <div class="column is-one-third-desktop is-half-mobile mes-col">
                    <div class="mes-wrap">
                      <div class="icon is-small">
                        <i class="flaticon-sunbed"></i>
                      </div>
                      <div class="mes-name"
                        >Plaja
                      </div>
                       <div class="mes-value">
                         {{ vil.lokasyon.vil_plaja }}
                       </div>
                    </div>
                  </div>
                  <div class="column is-one-third-desktop is-half-mobile mes-col">
                    <div class="mes-wrap">
                      <div class="icon is-small">
                        <i class="flaticon-fork"></i>
                      </div>
                      <div class="mes-name"
                        >Restorana 
                      </div>
                       <div class="mes-value">
                         {{ vil.lokasyon.vil_restoranta }}
                       </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
              </client-only>
            <!-- mapSekmesi end -->

            <!-- ozellikler Sekmesi -->


            <div class="item-section " id="sec5">

              <div class="section-title2">
                  <h3>Özellikler</h3>
                </div>
              <div class="block-body vil-detail-cont">
                <h6>Havuz Özellikleri</h6>
                <div class="columns is-multiline">
                  <div class="column">
                    {{ vil.vil_havuz }}
                  </div>
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


            <!-- ozellikler Sekmesi end -->
            <!--  video -->
            <div class="item-section " v-if="vil.vil_video">
              <div class="section-title2">
                  <h3>Video</h3>
                </div>
              <div class="block-body vil-detail-cont">
                
                <div class="vdeo-body" v-html="vil.vil_video"></div>
              </div>
            </div>
            <!-- video end -->
          </div>
          <!-- yorumlar -->
          <div class="mob mob-s"></div>
          <div class="item-section  " id="commetns">
            <div class="section-title2">
                <h3>Yorumlar</h3>
              </div>
            <div class="block-body vil-detail-cont" id="sec6">
              
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

            <div class="bb-bottom">
               <div class="ws-bottom">
                   <div class="ws-bottom-wrap">
                       <div class="we-like ">
                            <Like :id="vil.id"  :title="false" />
                       </div>
                       <div class="ws-whatsapp">
                            <div class="cs-row ws-cont" v-if="$store.state.base">
                                             <span class="wa-icon">
                                               <i class="flaticon-whatsapp" ></i>
                                             </span>
                                             <span class="ws-tel">
                                               {{$store.state.base.contact.ilt_mobil1}}
                                               <br>
                                               <span class="note">WhatsApp Rezervasyon</span>
                                             </span>
                                             <b-icon class="is-pulled-right" icon="menu-right"></b-icon>
                           </div>
                       </div>
                   </div>
                 </div>
            </div>
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
          <button class="button mb-bak-button is-ghost" @click="() => {this.bModal=false}">
            <i class="flaticon-left-arrow"></i>
          </button>
          <p class="modal-card-title">Rezervasyon formu</p>
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
            <button class="button bg-primary-normal-gradient text-w" style="float: right" @click="showRez">
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
import Slider from '../../components/mobil/ImageGrid.vue'

import MobilBooking from '../../components/mobil/BookingForm'

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

      if ($(window).width() > 1000) {
        if ($(this).scrollTop() > 400) {
          $('#bookside').addClass('fixed-right')
          $('#bookside').css('width', self.width)
          $('#menutab').removeClass('dis-none')
          $('#menutab').addClass('tab-fix')
          //   $("#menutab").css('width',self.widthtab);
        }
        // if($(this).scrollTop() > $('html,body').height()-1150 ){
        //     $("#bookside").removeClass('fixed-right');
        //     $("#bookside").addClass('fixed-right2');
        // }
        if ($(this).scrollTop() < 400) {
          $('#bookside').removeClass('fixed-right')
          $('#bookside').removeClass('fixed-right2')
          $('#menutab').addClass('dis-none')
          $('#menutab').removeClass('tab-fix')
        }
      }
     

    //   if($(window).width() < 1000) {
       
      
    //    if($(this).scrollTop() > 30){
    //      $("#mobile-galery").addClass('slider-fix');
    //    }

    //    if($(this).scrollTop() < 30){
    //      $("#mobile-galery").removeClass('slider-fix');
    //    }
    // }

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
  margin-bottom: 15px;
  /* background: #fff; */
  /* box-shadow: 2px 1px 11px 0px #00000047; */
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
  color: #b0bec5;
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
  height: 400px;
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
    
   margin-bottom: 35px !important;
    border-radius: 0px;
    border-top: none;
    margin-top: 35px;
}

.tab-body-de {
    font-weight: initial;
}
.section-title2 {
    margin-bottom: 20px;
    font-size: 18px;
    
}
.vil-detail-cont {
  background: #fff;
  border-radius: 8px;
  /* box-shadow: 0 2px 12px 0 rgb(55 64 77 / 8%); */
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
 background: #14c9ca12;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 5px;
    border-radius: 8px;
}

.mesafeler .button {
  font-size: 16px !important;
  height: 50px;
  border-color: #cfd8dc;
  color: #546e7a;
}

@media (max-width: 1000px) {
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
 
    border: none;
    margin-bottom: 35px !important;
    border-radius: 0px;
    box-shadow: none;
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
    display: flex;
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
    z-index: 999;
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

 .w-top-col {
   display: flex;
 }

@media (max-width: 1000px) {
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
    /* top: -15px; */
    /* left: 30px; */
    padding: 5px 10px;
    border-radius: 6px;
    color: #146bc1;
    font-weight: 500 !important;

    margin-bottom: 5px;
    display: inline-block;
  }
  .w-top-col {
    display: block !important;
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
  color: rgb(25 118 210);;
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
  background: #fcf5ee;
  border: 1px solid #f5dfc9;
}

.mesafeler {
  margin-top: 40px;
}

.mb-address {
  margin-bottom: 20px;
}

.mob-starts span.flaticon-star::before {
  font-size: 14px;
  color: #ff9800;
}

.mob-mes {
    margin-top: 20px;
}

.mob-mes .mes-name {
       width: 65%;
    display: inline-flex;
}

.mob-mes span.icon.is-small {
    margin-right: 10px;
}

button.mob-bttom-back {
    border: NONE;
    background: transparent;
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
.welc-section .columns {
    margin: 0;
}

h1.welk-title {
  font-size: 32px;
}

.wo-body h5 {
    font-weight: 600;
}

.welc-onecikan-wrap {
    padding: 15px;
}

.ow-row {
    border-top: 1px solid #16ccc73d;
    border-bottom: 1px solid #16ccc73d;
}
.cs-row.ws-cont {
    display: inline-flex;
}
.ws-whatsapp {
    text-align: center;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid #eee;
}
span.ws-tel {
    line-height: 14px;
}

span.wa-icon {
    margin-right: 10px;
}

span.wa-icon i::before {
    font-size: 24px;
    margin-bottom: 5px;
    filter: opacity(0.5);
}

.ws-bottom {
    padding: 10px;
    border-top: 1px solid rgb(10 178 228 / 38%);
    margin-top: 20px;
    background: #fff;
    border-bottom: 1px solid #fcb50073;
}

.item-address i::before {
    font-size: 14px;
    color: #0bb5e1;
    font-weight: 800;
}

/* .ow-item {
    background: #f6f9fd !important;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgb(55 64 77 / 8%);
} */

.dis-none{
  display: none;
}

span.wo-item {
    color: #546e7a;
}

.hu-oc.columns i::before {
    color: #fcb708;
    font-weight: 600 !important;
    font-size: margin-ri;
    margin-right: 10px;
}

.columns.w-col {
    padding-top: 10px;
    padding-bottom: 10px;
}

.block-body.conum-cont {
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
}

.mes-wrap {
    text-align: center;
}

.mes-wrap i::before {
    font-size: 28px;
        color: #1976d2;
}
.columns.is-mobile.is-multiline.mesafeler {
    margin: auto;
}

.mes-col {
    border: 1px solid #1976d224;
    padding-bottom: 20px;
    padding-top: 20px;
}

.mes-value {
    color: #607d8b;
}

.slider-fix {
    position: fixed;
    top: -25px;
    transition: all, 0.3s, ease-in;
}

.slider-fix::before {
    background: #fff;
}

.parallax-slider {
  /* transform-style: preserve-3d;
  transform: translateZ(-2px) scale(1.2);
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px; */
}

/* .parallax__group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
   transform: translate3d(700px, 0, -800px) rotateY(30deg);
}
.parallax__group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}
.parallax {
  perspective-origin-x: 100%;
}
.parallax__layer {
  transform-origin-x: 100%;
}

.parallax__layer--back {
  transform: translateZ(-1px) scale(2);
}

.parallax__layer--base {
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-1px);
}

.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
} */
</style>
