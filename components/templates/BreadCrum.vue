<template>
    <div class="container">
        <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
  <ul itemscope itemtype="http://schema.org/BreadcrumbList" v-if="routeArray">
    
     <li v-for="(item , i) in routeArray" :key="i"  itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem" ><nuxt-link  itemprop="item" :to="item.path">
        <span itemprop="name">  {{item.name}} </span>
        <meta itemprop="position" :content="i+1" />
          </nuxt-link>
          </li>
    
  </ul>
</nav>
    </div>
</template>
<script>
export default {
    props: {
        routeArray:{
            default:null,
            type:Array
        }
    }
}
</script>
<style scoped>
.breadcrumb {
    font-size: 1rem;
    white-space: nowrap;
    margin-bottom: 5px;
    margin-top: 5px;
}
    nav.breadcrumb.has-bullet-separator li a {
    color:#607d8b;
    font-weight: 400;
   
    margin-top: 5px;
    margin-bottom: 10px;
}

.breadcrumb ul {
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}
.content {
    margin-bottom: 5px;
}
</style>