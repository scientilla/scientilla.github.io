<template>
    <div class="contact-view">
        <div class="container">
            <h1 class="page-title" v-html="page.title"></h1>

            <div class="intro-text" v-html="page.introText"></div>
        </div>
    </div>
</template>

<script>
    import ContactForm from '../../vue/components/contact-form.vue';

    export default{
        data() {
            return {
                page: {
                    title: 'Contact',
                    introText: '<p>The Data Analysis Office at the Istituto Italiano di Tecnologia is happy to provide you with' +
                        'more information and answer any questions you may have regarding <strong>SCIENTILLA</strong>. Just drop us a line at ' +
                        '<a href="mailto:data.analysis@iit.it">data.analysis@iit.it</a></p>'
                }
            }
        },
        components: {
            ContactForm
        },
        mounted() {
            this.$emit('show-demo-banner', false);
        }
    }
</script>