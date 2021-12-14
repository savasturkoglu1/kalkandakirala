<template>
   <div class="contact-sectio" v-if="$store.state.base">
                                <div class="cs-wrap">
                                        <h3>Yardıma mı ihtiyacınız var ?</h3>
                                        <strong>Bize ulaşın !</strong>
                                        <div class="cs-row">
                                             <span>
                                               <i class="flaticon-whatsapp" ></i>
                                             </span>
                                             <span>
                                               {{$store.state.base.contact.ilt_mobil1}}
                                             </span>
                                        </div>
                                        <div class="cs-row">
                                            <span>
                                               <i class="flaticon-phone" ></i>
                                             </span>
                                             <span>
                                               {{$store.state.base.contact.ilt_sabit1}}
                                             </span>
                                        </div>
                                </div>
       </div>
        
</template>

<script>
export default {

}
</script>

<style>
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
</style>