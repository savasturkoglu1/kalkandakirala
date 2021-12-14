<template>
    <footer class="footer pr" v-if="data"  >
                 selam
        </footer>
</template>
<script>
import Subs from '../templates/subs';
export default {
    components: { Subs },
    data(){
        return {
            cls:false
        }
    },
    props: {
        data:null
    },
    mounted(){
       
       
    },
    methods: {
       
     }
}
</script>

<style scoped>
.box-li {
  
  transition: transform .2s; /* Animation */
  cursor: pointer;
  
}

.box-li:hover {
  transform: scale(1.1); 
  box-shadow: 0 0 20px 0 rgba(62,28,131,0.1);
    -webkit-box-shadow: 0 0 20px 0 rgba(62,28,131,0.1);
    -moz-box-shadow: 0 0 20px 0 rgba(62,28,131,0.1);
    border: none;
    background: #fff;
    z-index: 99;
}
.footer-tmid {
    background: #eee;
}
.footer-subs {
    padding-top: 30px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    
}
.footerBox ul li:last-child {
    border: 1px solid #f5f5f5;
}
.fb-bottom {
    font-size: 16px;
    font-weight: 600;
    color: #607D8B;
}
.fb-top i {
    font-size: 55px;
    color: #f7b21f;
}
.fb-top img {
    height: 100%;
}
.fb-top {
    height: 70%;
    margin-bottom: 10px;
}
.footerBox ul li i {
    margin-bottom: 20px;
    display: block;
}
.footerBox {
    width: 100%;
    display: table;
    /* max-width: 1230px; */
    padding: 0 15px;
    margin: 0 auto;
    padding-bottom: 50px;
}
.footerBox ul li {
    float: left;
    width: 20%;
    text-align: center;
    border: 1px solid #eee;
    border-right: 0;
    padding: 30px 20px 10px 20px;
    height: 150px;
}
.footer .level {
      display: block;
}
.f-phone {
    font-size: 20px;
    margin-right: 20px;
    color: #00d1b2;
}
.footer-link {
    color: #333
}
.f-close {
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 56px;
    color: #6ee5d3;
    cursor: pointer;
}
.footer-cc {
    width: 180px
}
.hov {
    background: #fff !important
}
img.footer-mid-back {
    position: absolute;
    width: 100%;
    height: auto;
    text-align: center;
    z-index: 0;
    opacity: 0.05; left: 0;
}
.columns.footer-mid {
    margin-bottom: 30px;
    margin-top: 40px;
}
.f-title {
    margin-bottom: 10px;
    margin-top: 15px;
    padding: 5px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: sans-serif !important;
}
ul.f-list {
    font-size: 16px;
    line-height: 34px;
    color: #333;
    font-weight: 600;
}
.footer-logo {
    width: 260px;
    opacity: 0.9;
}
    .footer {
    /* background-color: #eef0f5;  */
    background-color: #fff; 
          padding: 0px;
}

.footer-mid i {
    font-size: 62px;
    font-weight: 500;
    color: #ddd;
    padding: 20px;
    border-radius: 50%;background: #f7f8f9;
}


@media (max-width:1000px) {
    .footerBox ul li{
    width: 50% !important;
    margin-bottom: -1px;
    border: none !important
}
.footerBox ul li:last-child {
    border: none;
}
.footer-subs {
    margin-left: 20px;
    padding-right: 20px;
}


}

.footer-logo {
    margin-top: 40px;
    margin-bottom: 20px;
}
</style>