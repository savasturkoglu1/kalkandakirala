<template>
  <div>
    <h2>Group Bar</h2>
    <div class="sub-nav">
      <ul v-if="$store.state.base">
        <li v-for="(item,i) in $store.state.base.kategoriler" :key="i"><NuxtLink :to="'/kategoriler/'+item.kat_url">{{item.kat_adi}}</NuxtLink></li>
        
      </ul>
    </div>
    <hr />
    <nuxt-child :key="$route.params._url" />
  </div>
</template>

<script>
export default {
  // transition: {
  //   name: 'swipe-right'
  // }
}