<template>
    <div class="popup_wrapper" ref="popup-wrapper">
        <div class="popup">
            <div class="popup__header">
                <span>{{popupTitle}}</span>
                <span>
                    <i 
                        class="material-icons"
                        @click="closePopup"
                        >close
                    </i>
                </span>
            </div>
            <div class="popup__content">
                <slot></slot>
            </div>
            <div class="popup__footer">
                <button 
                    class="close_modal"
                    @click="closePopup"
                    >Close
                </button>
                <button 
                    class="submit_btn"
                    @click="action"
                    >{{submitBtnTitle}}
                </button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            popupTitle: {
                type: String,
                default: 'Popup name'
            },
            submitBtnTitle: {
                type: String,
                default: 'Ok'
            }
        },
        methods: {
            closePopup() {
                this.$emit('closePopup');
            },
            action() {
                this.$emit('action');
            }
        },
        mounted() {
            let vm =this;
            document.addEventListener('click', function(item) {
                if (item.target === vm.$refs['popup-wrapper']) {
                    vm.closePopup();
                }
            });
        }
    }
</script>
<style lang="scss">
    .popup_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: .4);
    }
    .popup {
        padding: $padding*2;
        position: fixed;
        z-index: 10;
        width: 400px;
        top: 25%;
        left: 25%;
        background-color: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        &__header, &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .material-icons {
            cursor: pointer;
        }
        .submit_btn {
            padding: $padding;
            color: #fff;
            background-color: green;
            cursor: pointer;
        }
        .close_modal {
            padding: $padding;
            color: #fff;
            background-color: red;
            cursor: pointer;
        }
    }
</style>