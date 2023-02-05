<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params: {cartData: CART}}" >
          <div class="catalog__link_to_cart">
            Cart: {{CART.length}}
          </div>
        </router-link>
        <h1>Catalog</h1>
        <div class="filters">
          <v-select
          :options="categories"
          :selected="selected"
          @select="sortByCategories"
        />
          <div class="range-slider">
            <input 
            type="range"
            min="0"
            max="10000"
            step="50"
            v-model.number="minPrice"
            @change="setRangeSlider"
            >
            <input 
            type="range"
            min="0"
            max="10000"
            step="50"
            v-model.number="maxPrice"
            @change="setRangeSlider"
            >
          </div>
          <div class="range-values">
            <p>Min: {{ minPrice }}</p>
            <p>Max: {{ maxPrice }}</p>
          </div>
        </div>
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
            sortedProducts: [],
            minPrice: 0,
            maxPrice: 10000
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
      setRangeSlider() {
        if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories();
      },
      sortByCategories(category) {
        // this.sortedProducts = [];
        // let vm = this;
        // vm.PRODUCTS.map((item) => {
        //   if (item.category === category.name) {
        //     this.sortedProducts.push(item);
        //   }
        // });
        // this.selected = category.name;
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS];
        this.sortedProducts = this.sortedProducts.filter(function(item) {
          return item.price >= vm.minPrice && item.price <= vm.maxPrice;
        })
        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function(el) {
            vm.selected = category.name;
            return el.category === category.name;
        })
        }
      }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('Data received!');
            this.setRangeSlider();
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

    .filters {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .range-slider {
      width: 200px;
      margin: auto 16px;
      text-align: center;
      position: relative;
    }

    .range-slider svg, .range-slider input[type="range"] {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    input[type="range"]::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      top: 2px;
      margin-top: -7px;
    }
</style>