<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
          <catalog-item 
            v-for="product in PRODUCTS"
            :key="product.article"
            :productData="product"
            @addToCart="addToCart"
          />
        </div>
    </div>    
</template>

<script>
  import catalogItem from './catalog-item.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'catalog',
    components: {catalogItem},
    props: {},
    data() {
        return {
            
        }
    },
    computed: {
      ...mapGetters(['PRODUCTS'])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data);
      }
    },
    watch: {},
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('Data received!');
          }
        })
        
    }
  }
</script>

<style lang="scss">
    .catalog {
      &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }
    }
</style>