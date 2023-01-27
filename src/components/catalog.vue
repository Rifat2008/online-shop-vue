<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
          <catalog-item 
            v-for="product in products"
            :key="product.article"
            :productData="product"
            @sendArticle="showArticle"
          />
        </div>
    </div>    
</template>

<script>
  import catalogItem from './catalog-item.vue';
  export default {
    name: 'catalog',
    components: {catalogItem},
    props: {},
    data() {
        return {
          "products": [
            {
              image: "1.jpg",
              name: "T-shirt 1",
              price: 2100.234234234,
              article: "T1",
              available: true,
              category: "Мужские"
            },
            {
              image: "2.jpg",
              name: "T-shirt 2",
              price: 3150.12312412,
              article: "T2",
              available: true,
              category: "Женские"
            },
            {
              image: "3.jpg",
              name: "T-shirt 3",
              price: 4200.51524,
              article: "T3",
              available: false,
              category: "Женские"
            },
            {
              image: "4.jpg",
              name: "T-shirt 4",
              price: 5300.1245512,
              article: "T4",
              available: true,
              category: "Мужские"
            },
            {
              image: "5.jpg",
              name: "T-shirt 5",
              price: 6500.3522314,
              article: "T5",
              available: false,
              category: "Женские"
            },
            {
              image: "6.jpeg",
              name: "T-shirt 6",
              price: 8700.4124123,
              article: "T6",
              available: true,
              category: "Женские"
            }
          ],  
        }
    },
    computed: {},
    methods: {
      showArticle(article) {
        console.log(article);
      }
    },
    watch: {},
    mounted() {
        
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