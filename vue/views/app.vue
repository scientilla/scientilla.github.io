<template>
    <div>
        <div class="wrapper js-wrapper" id="app">
            <header class="header js-header add-background">
                <div class="inner-header">
                    <router-link to="/" class="logo">Scientilla</router-link>
                    <ul class="main-menu">
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/faq">FAQ</router-link></li>
                        <li><router-link to="/contact">Contact us</router-link></li>
                    </ul>
                    <a href="#" class="btn btn-transparent btn-sm demo-button">Demo</a>
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
    import WebFont from 'webfontloader';

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
            updateDemoBannerState: function(state) {
                this.showDemoBanner = state;
                this.$nextTick(() => {
                    stickyFooter();
                });
            }
        },
        watch:{
            $route (to, from){
                this.showDemoBanner = false;
                this.$nextTick(() => {
                    stickyFooter();
                });
            }
        }
    }

    let loadGoogleWebFonts = function() {
        WebFont.load({
            google: {
                families: ['Open Sans: 400, 700, 800', 'Roboto Slab']
            }
        });
    }

    let stickyFooter = function() {
        let wrapperElements = document.getElementsByClassName('js-wrapper'),
            footerElements  = document.getElementsByClassName('js-footer'),
            wrapper         = wrapperElements[0],
            footer          = footerElements[0],
            height          = 0;

        if (wrapper && footer) {
            height = footer.clientHeight;
            wrapper.style.paddingBottom = height + 'px';
        }
    }

    global.stickyFooter = stickyFooter;

    // Directly load these scripts
    loadGoogleWebFonts();

    // Load after window is loaded
    window.onload = function() {
        stickyFooter();
    }

    window.onresize = function() {
        stickyFooter();
    }
</script>