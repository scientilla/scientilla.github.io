<template>
    <div class="image-dialog" @keydown.esc="hideDialog">
        <button class="trigger" @click="showDialog">
            <img :src="src" :alt="alt">
        </button>
        <div class="image-dialog-container" v-show="appearedDialog">
            <div class="image-dialog-inner-container">
                <div class="image-dialog-background" @click="hideDialog"></div>
                <button class="close-dialog" @click="hideDialog">Close</button>
                <img
                    :src="src"
                    :alt="alt"
                    :class="{ loading: !loaded }"
                    @load="onLoadFull">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['src', 'alt'],
        data () {
            return {
                loaded: false,
                appearedDialog: false
            }
        },
        methods: {
            showDialog () {
                this.appearedDialog = true;
                eventBus.$emit('changeOverflow', true);
            },

            hideDialog () {
                this.appearedDialog = false;
                eventBus.$emit('changeOverflow', false);
            },

            onLoadFull () {
                this.loaded = true;
            },
        }
    }
</script>