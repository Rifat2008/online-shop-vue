<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params: {cartData: CART}}" >
          <div class="catalog__link_to_cart">
            Cart: {{CART.length}}
          </div>
        </router-link>
        <h1>Catalog</h1>
        <v-select
          :options="categories"
          :selected="selected"
          @select="sortByCategories"
        />
        <div class="catalog__list">
          <catalog-item 
            v-for="product in filteredProducts"
            :key="product.article"
            :productData="product"
            @addToCart="addToCart"
          />
        </div>
    </div>    
</template>

<script>
  import CatalogItem from './CatalogItem.vue';
  import vSelect from '../v-select.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'catalog',
    components: {CatalogItem, vSelect},
    props: {},
    data() {
        return {
            categories: [
              {name: 'Все', value: 'ALL'},
              {name: 'Мужские', value: 'м'},
              {name: 'Женские', value: 'ж'},
            ],
            selected: 'Все',
            sortedProducts: []
        }
    },
    computed: {
      ...mapGetters(['PRODUCTS', 'CART']),
      filteredProducts() {
        if(this.sortedProducts.length) {
          return this.sortedProducts;
        } else {
          return this.PRODUCTS;
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data);
      },
      sortByCategories(category) {
        this.sortedProducts = [];
        let vm = this;
        vm.PRODUCTS.map((item) => {
          if (item.category === category.name) {
            this.sortedProducts.push(item);
          }
        });
        this.selected = category.name;
      }
    },
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