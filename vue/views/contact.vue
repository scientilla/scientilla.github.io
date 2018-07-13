<template>
    <div class="contact-view">
        <div class="container">
            <h1 class="page-title">Contact</h1>

            <div class="intro-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
            this.$emit('show-demo-banner', true);
        }
    }
</script>