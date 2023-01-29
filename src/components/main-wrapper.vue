<template>
    <div class="main-wrapper">
        <catalog></catalog>
        <cart 
            v-if="CART.length"
            :cartData="CART"
        ></cart>
    </div>    
</template>

<script>
  import catalog from './catalog.vue';
  import cart from './cart.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'main-wrapper',
    components: {catalog, cart},
    props: {},
    data() {
        return {
            //title: 'Main Wrapper'
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
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
