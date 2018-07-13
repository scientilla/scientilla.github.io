<template>
    <div class="homepage">
        <div class="spotlight">
            <div class="container">
                <h1>Heading 1</h1>
                <div class="intro-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <ul class="screenshot-listing">
                    <li>
                        <div class="image-container">
                            <img src="https://place-hold.it/800x450" alt="">
                        </div>
                    </li>
                   <li>
                        <div class="image-container">
                            <img src="https://place-hold.it/800x450" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="image-container">
                            <img src="https://place-hold.it/800x450" alt="">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="github-link-container">
                <a href="#" target="_blank" class="github-link">Visit our Github page!</a>
            </div>
        </div>

        <div class="demo-video-container">
            <div class="container">
                <div class="video-outer-container">
                    <div class="video-container">
                        <div id="youtube-video"></div>
                    </div>
                </div>
                <div class="text-container">
                    <h2>Heading 2</h2>

                    <div class="text">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <a href="#" class="btn btn-primary">Try our demo?</a>
                </div>
            </div>
        </div>

        <div class="features-container">
            <div class="container">
                <h2>Heading 2</h2>

                <div class="intro-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="text">
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="info-container">
            <div class="container">
                <div class="text-container">
                    <h2>Heading 2</h2>

                    <div class="text">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div class="image-container">
                    <img src="https://place-hold.it/800x450" alt="">
                </div>
            </div>
        </div>

        <div class="carousel-container">
            <div class="container">
                <h2>Heading level 2</h2>
                <div class="intro-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="testimonial-carousel">
                    <testimonials></testimonials>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Testimonials from '../../vue/components/testimonials.vue';
    import YouTubeIframeLoader from 'youtube-iframe';

    export default{
        components: {
            Testimonials
        },
        mounted() {
            addYouTube();
        }
    }

    let addYouTube = function () {
        YouTubeIframeLoader.load(function(YT) {
            new YT.Player('youtube-video', {
                height: '450',
                width: '800',
                videoId: 'gJ1q9dUMB4A',
                playerVars: {
                    autoplay: 1,
                    modestbranding: 0,
                    showinfo: 0,
                    controls: 0,
                    rel: 0
                }
            });
        });
    }
</script>