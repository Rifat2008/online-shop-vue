<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params: {cartData: CART}}" >
          <div class="catalog__link_to_cart">
            Cart: {{CART.length}}
          </div>
        </router-link>
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
  import CatalogItem from './CatalogItem.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'catalog',
    components: {CatalogItem},
    props: {},
    data() {
        return {
            
        }
    },
    computed: {
      ...mapGetters(['PRODUCTS', 'CART'])
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
      &__link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: $padding*2;
        border: solid 1px #aeaeaa;
        border-radius: $radius;
      }
    }
</style>