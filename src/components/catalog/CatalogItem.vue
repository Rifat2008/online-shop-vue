<template>
    <div class="catalog-item">


      <popup
        v-if="isInfoPopupVisible"
        submitBtnTitle="Add to cart"
        :popupTitle="productData.name"
        @closePopup="closeInfoPopup"
        @action="add"
      >
        <img class="catalog-item__image" :src=" require('../../assets/images/' + productData.image) " alt="img">
        <div class="">
          <p class="catalog-item__price">Price: {{ productData.price }} Р.</p>
          <p class="catalog-item__price">Category: {{ productData.category }}</p>
        </div>
      </popup>

        
      <img class="catalog-item__image" :src=" require('../../assets/images/' + productData.image) " alt="img">
      <p class="catalog-item__name">{{ productData.name }}</p>
      <p class="catalog-item__price">Price: {{ productData.price }} Р.</p>
      <button
        class="catalog-item__show-info"
        @click="showPopupInfo"
        >Show info
      </button>
      <button 
        class="catalog-item__add_to_cart_btn btn" 
        @click="add"
        >Add to cart
      </button>
    </div>    
</template>

<script>
  import Popup from '../popup/Popup.vue';

  export default {
    name: 'catalog-item',
    components: {Popup},
    emits:['sendArticle', 'addToCart'],
    props: {
      productData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isInfoPopupVisible: false
      }
    },
    methods: {
      showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
      add() {
        this.$emit('addToCart',this.productData)
      }
    },
    mounted() {
      this.productData.quantity = 1;
    }
  }
</script>

<style lang="scss">
    .catalog-item {
      flex-basis: 25%;
      box-shadow: 0 0 8px 0 #e0e0e0;
      padding: $padding*2;
      margin-bottom: $margin*2;
      &__image {
      width: 100px;
      }
    }
</style>