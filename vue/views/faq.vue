<template>
    <div class="faq-view">
        <div class="container">
            <h1 class="page-title" v-html="page.title"></h1>
            <faq></faq>
        </div>
    </div>
</template>

<script>
    import Faq from '../../vue/components/faq-items.vue';

    export default{
        data() {
            return {
                page: {
                    title: 'Frequently <br> Asked Questions'
                }
            }
        },
        components: {
            Faq
        },
        mounted() {
            this.$emit('show-demo-banner', true);
        }
    }
</script>