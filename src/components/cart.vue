<template>
    <div class="cart">
      <h2>Cart</h2>
        <cart-item 
          v-for="(item, idx) in cartData"
          :key="item.article"
          :cartItemData="item"
          @deleteFromCart="deleteFromCart(idx)"
        />
    </div>    
</template>

<script>
  import cartItem from './cart-item.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'cart',
    components: {cartItem},
    props: {
      cartData: {
        type: Array,
        default: []
      }
    },
    data() {
        return {
            
        }
    },
    computed: {
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      deleteFromCart(idx) {
        this.DELETE_FROM_CART(idx);
      }
    },
    watch: {},
    mounted() {
        
    }
  }
</script>

<style>
    
</style>