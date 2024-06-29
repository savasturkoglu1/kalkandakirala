<template lang="">
    <div>
        <div class="bn-wrap">
              <div class="bn-logo">
                <img src="./kt.svg" alt="">
              </div>
              <div class="bn-no d-flex flex-column">
                <span>Kültür ve Turizm Bakanlığı</span>
                <span class="">Belge Başvuru No : {{ vil.sets.vil_yapi_no|| '---' }} </span>
              </div>
            </div>
    </div>
</template>
<script>

export default {
    props: {
        vil: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style >
    .bn-wrap {
    border: 1px solid #ff5722;
    border-radius: 4px;
    color: #607d8b;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    line-height: 18px;
    padding: 6px;
    width: 216px;
}
.d-flex {
    display: flex !important;
}
.flex-column {
    flex-direction: column !important;
}
.bn-logo img {
    height: 32px;
}

.v-ilanno, .flex-end {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
</style>