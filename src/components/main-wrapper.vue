<template>
    <div class="main-wrapper">
        <the-header></the-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>    
</template>

<script>
  import TheHeader from './layouts/TheHeader.vue';

  export default {
    name: 'main-wrapper',
    components: {TheHeader}
  }
</script>

<style>
    .main-wrapper {
        margin: 0 auto;
        padding-top: 100px;
    }
</style>
