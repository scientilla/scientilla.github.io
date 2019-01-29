<template>
    <div>
        <div class="wrapper js-wrapper" id="app">
            <header class="header js-header add-background">
                <div class="inner-header">
                    <router-link to="/" class="logo">Scientilla</router-link>
                    <a href="#" class="mobile-menu-button" @click="toggleMobileMenu">
                        <span></span>
                    </a>
                    <div class="mobile-menu-container js-mobile-menu-container">
                        <ul class="main-menu">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/faq">FAQ</router-link></li>
                            <li><router-link to="/contact">Contact us</router-link></li>
                        </ul>
                    </div>
                </div>
            </header>

            <router-view v-on:show-demo-banner="updateDemoBannerState"></router-view>
        </div>

        <footer class="footer js-footer">

            <demo-banner v-if="showDemoBanner"></demo-banner>

            <div class="footer-bottom">
                <div class="container">
                    <a href="#" class="logo">Scientilla</a>
                    <div class="footer-text">
                        Lorem ipsum - 2018
                    </div>
                    <ul class="socials">
                        <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import DemoBanner from '../../vue/components/demo-banner.vue';

    export default{
        data() {
            return {
                showDemoBanner: false
            }
        },
        components: {
            DemoBanner
        },
        methods: {
            updateDemoBannerState(state) {
                this.showDemoBanner = state;
                this.$nextTick(() => {
                    stickyFooter();
                });
            },

            toggleMobileMenu(evt) {
                eventBus.$emit('changeMobileMenu');

                evt.preventDefault();
            }
        },
        watch:{
            $route (to, from){
                this.showDemoBanner = false;
                this.$nextTick(() => {
                    stickyFooter();
                    eventBus.$emit('changeMobileMenu', false);
                });
            }
        }
    }
</script>