<template>
    <div>
                  <social-sharing :url="base+conf.url"
                               :title="conf.title"
                               :description="conf.desc"
                               :quote="conf.quote"
                                :hashtags="conf.hastag"
                                :twitter-user="twt"
                                inline-template>
                        <div>
                            <network network="facebook">
                            <button class="button  is-danger" >
                                                <span class="icon">
                                                <i class="flaticon-facebook"></i> 
                                                </span>
                                </button>
                        </network>
                        <!-- <network network="pinterest">
                            <button class="button  is-danger" >
                                                <span class="icon">
                                                <i class="flaticon-pinterest"></i> 
                                                </span>
                                </button>
                        </network> -->
                        <network network="twitter">
                            <button class="button  is-danger" >
                                                    <span class="icon">
                                                    <i class="flaticon-twitter"></i> 
                                                    </span>
                                </button>
                        </network>
                        
                        
                    </div>
                    </social-sharing>
    </div>
</template>
<script>
export default {
    data(){
        return {
            base: this.$store.state.baseTr,
            twt:  this.$store.state. twitter_user
        }
    },
    props :{
           conf:Object,
    }
}
</script>