export const state = () => ({
    counter: 0,
    apiUrl: 'https://panel.kalkandakirala.com/frontapi/',
    siteName: 'kalkandakirala.com',
    baseTr: 'https://www.kalkandakirala.com',
    baseEng: 'https://www.kalkandakirala.com/eng',
    facebook_id: 'kalkandakirala.com',
    twitter_user: 'kalkandakirala.com',
    vec: [],
    trUrls: {
      kats: '/kiralik-villa-tipleri/',
      bolge: '/villa-bolgeleri/',
      villa: '/kiralik-villa/',
      allVillas: '/villa/',
      sayfa: '/bilgilendirme/',
    },
    kategoriler: null,
    bolgeler: null,
    saved: null,
    sayfalar:null,
    contact:null,
    base:null,
    cmodal:false,
    sidebar:false,
    mcontact:false
  
  })
  
  export const stt = state()
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    setBase(state, value) {
      state.base = value
    },
    setKat(state, value) {
      state.kategoriler = value 
    },
    setBol(state, value) {
      state.bolgeler = value
    },
    setPages(state, value) { 
      state.sayfalar = value
    },
    setContact(state, value) {
      state.contact = value
    },
    setVec(state, value) {
      state.vec = value
    },
  
    setSaved(state, value) {
     
      state.saved = value
    },

    searchModal(state, value) {
      state.cmodal = value
    },
    mobilContact(state, value) {
      state.mcontact = value
    },

    sideBar(state, value) {
      state.sidebar = value
    },
  }
  
  export const actions = {
    setKat(context, val) {
      context.commit('setKat', val)
    },

    setBase(context, val) {
      context.commit('setBase', val)
    },
    setBol(context, val) {
      context.commit('setBol', val)
    },
    setPages(context, val) {
      context.commit('setPages', val)
    },
    setContact(context, val) {
      context.commit('setContact', val)
    },
    setVec(context, val) {
      context.commit('setVec', val)
    },
    setSaved(context, val) {
      context.commit('setSaved', val)
    },
    searchModal(context, val) {
      context.commit('searchModal', val)
    },

    mobilContact(context, val) {
      context.commit('mobilContact', val)
    },

    sideBar(context, val) {
      context.commit('sideBar', val)
    },
  }
  