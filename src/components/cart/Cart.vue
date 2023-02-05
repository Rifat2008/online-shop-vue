<template>
    <div class="cart">
      <router-link :to="{name: 'catalog'}" >
          <div class="catalog__link_to_cart">
            BACK TO CATALOG
          </div>
      </router-link>
      <h1>Cart</h1>
      <p v-if="!CART.length">There are no products in cart...</p>
      <cart-item 
        v-for="(item, idx) in CART"
        :key="item.article"
        :cartItemData="item"
        @deleteFromCart="deleteFromCart(idx)"
        @increment="increment(idx)"
        @decrement="decrement(idx)"
      ></cart-item>
      <div class="cart__total">
        <p class="total__name">Total:</p>
        <p>{{cartTotalCost}} Р.</p>
      </div>
    </div>    
</template>

<script>
  import CartItem from './CartItem.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'cart',
    components: {CartItem},
    // data() {
    //   return {
    //     cartData: CART;
    //   }
    // },
    computed: {
      ...mapGetters(['CART']),
      cartTotalCost() {
        if (this.CART.length) {
          let result = [];

          for (let item of this.CART) {
            result.push(item.price * item.quantity);
          }

          result = result.reduce(function(sum, el) {
            return sum + el;
          });
          return result;
          } else {
            return 0;
          }
      }
    },
    // props: {
    //   cartData: {
    //     type: Array,
    //     default: []
    //   }
    // },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM', 
        'DECREMENT_CART_ITEM'
      ]),
      deleteFromCart(idx) {
        this.DELETE_FROM_CART(idx);
      },
      increment(index) {
        this.INCREMENT_CART_ITEM(index);
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index);
      }
    }
  }
</script>

<style lang="scss">
  .cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*3;
      display: flex;
      justify-content: center;
      background-color: #25b431;
      color: #fff;
      font-size: 20px;
    }
    .total__name {
      margin-right: $margin*2;
      
    }
  }
</style>

