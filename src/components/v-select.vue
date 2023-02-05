<template>
    <div class="v-select">
        <p 
            class="title"
            @click="areOptionsVisible = !areOptionsVisible"
        >{{selected}}
        </p>
        <div 
            class="options"
            v-if="areOptionsVisible"
            >
            <p 
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'v-select',
  props: {
    options: {
        type: Array,
        default() {
            return []
        }
    },
    selected: {
        type: String,
        default() {
            return 'Select'
        }
    }
  },
  data() {
    return {
        areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
        this.$emit('select', option);
        this.title = option.name;
        this.areOptionsVisible = false;
    },
    hideSelect() {
        this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}

</script>

<style>
    .v-select {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 200px;
        cursor: pointer;
        margin-bottom: 80px;
    }
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px #aeaeae;
        width: 100%;
    }
    .v-select p {
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .options {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 1px #aeaeae;
        position: absolute;
        top: 30px;
        right: 0;
        width: 100%;
    }

    .options p:hover {
        background-color: #e7e7e7;
    }
</style>
