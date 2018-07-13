<template>
    <div class="demo-banner">
        <div class="container">
            <h2 class="banner-title">{{ banner.title }}</h2>
            <div class="banner-text">
                {{ banner.text }}
            </div>
            <a :href="banner.button.url" class="btn btn-primary">{{ banner.button.text }}</a>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                banner: {
                    title: 'Heading title 2',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    button: {
                        text: 'Try our demo',
                        url: '#'
                    }
                }
            }
        }
    }
</script>