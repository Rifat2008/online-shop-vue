<template>
    <div class="main-wrapper">
        <p>{{ title }}</p>
        <catalog></catalog>
        <cart></cart>
    </div>    
</template>

<script>
  import Cart from './cart'
import catalog from './catalog.vue';
  import cart from './cart.vue';
  export default {
    name: 'main-wrapper',
    components: {
    Cart,catalog, cart},
    props: {},
    data() {
        return {
            title: 'Main Wrapper'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log('Hello i am alive');
    }
  }
</script>

<style>
    .main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
