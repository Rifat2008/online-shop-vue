<template>
    <div class="cart-item">
        <img class="cart-item__image" :src="require('../assets/images/' + cartItemData.image)" alt="img">
        <div class="cart-item__info">
            <p>{{ cartItemData.name }}</p>
            <p>{{ cartItemData.price }}</p>
            <p>{{ cartItemData.article }}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Qty</p>
            {{ cartItemData.quantity }}
        </div>
        <button class="btn" @click="deleteFromCart">DELETE</button>
    </div>    
</template>

<script>
  export default {
    name: 'cart-item',
    props: {
        cartItemData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart');
        }
    },
    mounted() {
        this.cartItemData.quantity = 1;
    }
  }
</script>

<style lang="scss">
    .cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &__image {
            max-width: 50px;
        }
    }
</style>