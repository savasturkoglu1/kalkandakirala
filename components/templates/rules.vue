<template>
    <section>

        <b-collapse
            class="card"
            animation="none"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                >
                    <p class="card-header-title">
                        {{ collapse.title }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content">
                    {{ collapse.text }}
                </div>
            </div>
        </b-collapse>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                depozito:100,
                collapses: [
                {
                    title: 'Griş çıkış satleri',
                    text: 'Giriş Zamanı: 16:00        Çıkış Zamanı: 10:00'
                },
                {
                    title: 'Ücrete Dahil olanlar',
                    text: 'Elektrik, su, tüpgaz, temizlik, havuz ve bahçe bakımı giderleri ücrete dahildir. Bunlar için herhangi bir ödeme talep edilmeyecektir. '
                },
                {
                    title: 'Depozito',
                    text: 'Bu villamız için depozito ücreti '+this.vil.priceSets.vil_depozito+' TL’dir, villaya giriş yaparken tahsil edilir. Villadan ayrılırken yapılan kontrollerde hasar, zayi, kırık, dökük vb. görülmediğinde para iade edilir.'
                },
                {
                    title: 'Temizlik',
                    text: 'Villalarımız haftada 1 kez temizlenmektedir. 1 haftayı aşan konaklamalarda, dilerseniz ücretsiz temizlik hizmetinden faydalanabilirsiniz. Minimum kiralama süresinin altındaki rezervasyonlarda '+this.vil.priceSets.vil_extra_tem+' TL temizlik ücreti alınmaktadır.'
                },
                {
                    title: 'Doğa İçindeki Villalar',
                    text: 'Villalar böcek ve haşerelere karşı düzenli olarak ilaçlanmaktadır. Buna rağmen doğa içinde bulunan villalarda haşere çıkma ihtimali bulunmaktadır. Bu bilgi sadece bu villa için değil, doğa içinde bulunan tüm villalar için geçerlidir.'
                },
                {
                    title: 'Havuz Bakımı',
                    text: 'Bakımlar günde bir kez sabah veya akşam görevliler tarafından ücretsiz olarak yapılmaktadır.'
                }
                ]
            }
        },
        props:{
            vil:{
            default:null,
        
        },
        },
        // beforeMount(){
        //       this.depozito = this.vil.priceSets.vil_depozito
        // }
    }
</script>
<style scoped>
    .card {
    background-color: #f6f9fd55;
    border-radius: 0.25rem;
    box-shadow: none;
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
}

.card-header {
    background-color: transparent;
    align-items: stretch;
    box-shadow: none;
    display: flex;
    border-bottom: 1px solid #ddd;
    border-radius: 0px;
}

.card-header-title {
    align-items: center;
    color: #07aee9;
    display: flex;
    flex-grow: 1;
    font-weight: 700;
    padding: 0.75rem 1rem;
}
</style>