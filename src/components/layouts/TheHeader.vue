<template>
    <header class="header">
        <router-link :to="{name: 'main'}">
            <img src="../../assets/logo.png" alt="">
        </router-link>
        
        <div class="search-field">
            <input 
                type="text"
                v-model="searchValue"
            >
            <button class="search_btn" >
                <i class="material-icons" @click="search(searchValue)">search</i>
            </button>
            <button class="search_btn" >
                <i class="material-icons" @click="clearSearchField">cancel</i>
            </button>
        </div>
        
    </header>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'the-header',
        props: {},
        data() {
            return {
                searchValue: ''
            }
        },
        methods: {
            ...mapActions([
                'GET_SEARCH_VALUE_TO_VUEX'
            ]),
            search(value) {
                this.GET_SEARCH_VALUE_TO_VUEX(value);
                if (this.$route.path !== '/catalog') {
                    this.$router.push('/catalog');
                }
            },
            clearSearchField() {
                this.searchValue = '';
                this.GET_SEARCH_VALUE_TO_VUEX();
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $green-bg;
        padding: $padding*2;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        img {
            width: 50px;
        }
        .search-field {
            padding: $padding;
            margin-right: $margin*3; //кастыль
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .search_btn {
            background: transparent;
            border: none;
            cursor: pointer;
        }
    }

</style>