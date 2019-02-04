<template>
    <div class="contact-view">
        <div class="container">
            <h1 class="page-title">Contact</h1>

            <div class="intro-text">
                <p>The Data Analysis Office at the Istituto Italiano di Tecnologia is happy to provide you with
                more information and answer any questions you may have regarding SCIENTILLA. Just drop us a line
                at data.analysis@iit.it</p>
            </div>

            <contact-form></contact-form>
        </div>
    </div>
</template>

<script>
    import ContactForm from '../../vue/components/contact-form.vue';

    export default{
        components: {
            ContactForm
        },
        mounted() {
            this.$emit('show-demo-banner', false);
        }
    }
</script>