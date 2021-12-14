export const state = () => ({
    counter: 0,
    apiUrl: 'https://panel.villaevreni.com/frontapi/',
    siteName: 'villaevreni.com',
    baseTr: 'https://www.villaevreni.com',
    baseEng: 'https://www.villaevreni.com/eng',
    facebook_id: 'villaevreni.com',
    twitter_user: 'villaevreni.com',
    vec: [],
    trUrls: {
      kats: '/kiralik-villa-tipleri/',
      bolge: '/villa-bolgeleri/',
      villa: '/villa/',
      allVillas: '/villa/',
      sayfa: '/bilgilendirme/',
    },
    kategoriler: null,
    bolgeler: null,
    saved: null,
    sayfalar:null,
    contact:null,
    base:null,
    cmodal:false
  
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
  }
  