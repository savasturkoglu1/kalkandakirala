const key =  'AIzaSyC7ey1gg-yNzPvuRgwG-rdTaHLrAeiJm-Q';
const getAppRoutes = require('./static/getRouter');

export default {
  loadingIndicator: {
    name: 'chasing-dots',
    color: 'purple',
    background: 'green'
 },
  router: {
    base: '/',
     extendRoutes (routes, resolve) {
       routes.push({
         name: 'custom',
         path: '*',
         component: resolve(__dirname, 'pages/index.vue')
       })
     },
     scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
   }, 
  server: {
    
    port: 9090,
    // host:  '0.0.0.0',  
},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kalkanda kirala | Tatil Asistanınız',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no,maximum-scale=1' },
      {  name:"google-site-verification", content:"A5tAojA-mFP3ySVDwRn82HaYxc1aYZdcnrgPhNo8l4Y" },
      {name:"yandex-verification", content:"080cdba740516973"},
      { name:'theme-color' , content: '#cb1260'},      
     { name:"ROBOTS",content:"FOLLOW" },
     { name:"ROBOTS", content:"INDEX" },
     { name:'p:domain_verify',content:"741bbe8beb6a3f1bacf3f0011b65b8c4"},
     { name:"facebook-domain-verification", content:"hgt7gx5so8s54hhwoer22aqmysxjjd" }
    
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href:'/favicon.png'},    
      { rel: 'stylesheet',  href :'https://unpkg.com/buefy/dist/buefy.min.css' },
      {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/jquery.swipebox/1.4.4/css/swipebox.min.css'},        
      { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/css/lightgallery.min.css' },
      {rel:'stylesheet', href:'https://unpkg.com/swiper@7/swiper-bundle.min.css'},
      {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css'}
  
    ], 
    script: [   
     
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js", 
        type: "text/javascript",
        body:true
      },
     
      {
        src:'https://panel.kalkandakirala.com/assets/ui/jquery-ui.js',
        type:'text/javascript', 
        body: true
      },

      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/jquery.swipebox/1.4.4/js/jquery.swipebox.min.js',
        type:'text/javascript', 
        body: true
      },
     
      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/js/lightgallery-all.min.js',
        type: "text/javascript",
        body:true
      },
         
       {
         src:'https://maps.googleapis.com/maps/api/js?key='+key+'&callback=initMap',
         type: 'text/javascript',
         body: true, defer: true 

       },
       {
         src:'https://unpkg.com/swiper@7/swiper-bundle.min.js', type: 'text/javascript',
         body: true
       },
      {src:'https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js', body:true}
      
     ]
  },
  //loading: '~/components/tools/loader.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/style.css',
    '~/assets/css/style.0.1.css',
    '~/assets/font/flaticon.css',
    '~/assets/ui/jquery-ui.min.css',
    '~/assets/css/default.css',
    '~/assets/css/mobile.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
     '~/plugins/sosyal',   
     
   // {src:'~/plugins/lazy', mode: 'client', ssr:false}, 
  //  {src:'~/plugins/swiper', mode: 'client', ssr:false},    
    // '~/plugins/touch',  
     { src: '~plugins/ga.js', mode: 'client' }, 
    { src: '~plugins/tawk.js', mode: 'client', ssr:false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/buefy
    
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa', 
    ['nuxt-buefy', { css: false, materialDesignIcons: true }],
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '3268105243514269',
      autoPageView: true,
      disabled: false
    }],  

    '@nuxtjs/gtm'

    /// GTM-5VLCKFJ  tag maanger
  ],

  sitemap: {
    hostname: 'https://www.kalkandakirala.com',
    routes() {
      return getAppRoutes();
    },
    path: '/sitemap.xml',
    gzip: true,
    generate: false, 
  },

  gtm: {
    id: 'GTM-5VLCKFJ',
    enabled:true,
    debug: false,

   
    layer: 'dataLayer',
    variables: {},

    pageTracking: true,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'

    
  },

 



  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://panel.kalkandakirala.com/frontapi',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Kalkanda Kirala",
  theme_color: "#cb1260",
  display:'fullscreen',  
  short_name:"KalkandaKirala",
  lang: 'en'

     }
  },




  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   // transpile: ['v-lazy-image']
   
  }
}
 



