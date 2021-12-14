//import axios from '@nuxtjs/axios';
import * as Store from '../store/index.js'
const axios = require('axios')

module.exports = async function getAppRoutes() {
  
  let  routes = [
      '/selam'
  ];

  

 await axios.get(Store.stt.apiUrl+'sitemap-data').then(resp => {      
      resp.data.villa.map(ii => {
          routes.push(Store.stt.trUrls.villa+ii);
         // routes.push('/'+ii);
      });
      resp.data.kategori.map(ii => {
        routes.push(Store.stt.trUrls.kats+ii);
    });
    resp.data.bolge.map(ii => {
        routes.push(Store.stt.trUrls.bolge+ii);
    });
    resp.data.blog.map(ii => {
        routes.push('/blog/'+ii); 
    });
    resp.data.sayfa.map(ii => {
        routes.push('/bilgilendirme/'+ii);
    });

  });

 
  return routes;
};