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
            <div>
                <span class="quantity__btn" @click="decrementItem">-</span>
                {{ cartItemData.quantity }}
                <span class="quantity__btn" @click="incrementItem">+</span>
            </div>
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
        },
        incrementItem() {
            this.$emit('increment');
        },
        decrementItem() {
            this.$emit('decrement');
        }
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
        .quantity__btn {
            cursor: pointer;
        }
    }
</style>