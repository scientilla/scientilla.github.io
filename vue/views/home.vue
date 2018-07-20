<template>
    <div class="homepage">
        <div class="spotlight">
            <div class="container">
                <h1 class="spotlight-title">{{ spotlight.title }}</h1>
                <div class="intro-text" v-html="spotlight.introText"></div>
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
                <a
                    :href="github.button.url"
                    :title="github.button.text"
                    target="_blank"
                    class="github-link">{{ github.button.text }}</a>
            </div>
        </div>

        <div class="demo-video-container">
            <div class="container">
                <div class="video-outer-container">
                    <div class="table-container">
                        <div class="table-cell-container">
                            <div class="video-container">
                                <div id="youtube-video" :data-id="video.id"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <div class="table-container">
                        <div class="table-cell-container">
                            <div class="text" v-html="video.text"></div>

                            <a
                                :href="video.button.url"
                                v-if="video.button.url"
                                class="btn btn-primary">{{ video.button.text }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="personal-group-section">
            <div class="container">
                <h2 class="section-title">{{ personalGroupSection.title }}</h2>

                <div class="intro-text" v-html="personalGroupSection.introText"></div>

                <div class="image-text-container">
                    <div class="text" v-html="personalGroupSection.text"></div>
                    <image-dialog
                    :src="personalGroupSection.image.url"
                    :alt="personalGroupSection.image.alt"
                    v-if="personalGroupSection.image.url"></image-dialog>
                </div>
            </div>
        </section>

        <section class="collaborative-environment">
            <div class="container">
                <h2 class="section-title">{{ collaborativeEnvironment.title }}</h2>

                <div class="intro-text" v-html="collaborativeEnvironment.introText"></div>

                <div class="text" v-html="collaborativeEnvironment.text"></div>
            </div>
        </section>

        <section class="metrics-and-charts">
            <div class="container">
                <h2 class="section-title">{{ metricsAndCharts.title }}</h2>
                <div class="intro-text" v-html="metricsAndCharts.introText"></div>
                <div class="text" v-html="metricsAndCharts.text"></div>

                <div class="images">
                    <image-dialog
                    :src="image.url"
                    :alt="image.alt"
                    v-for="image in metricsAndCharts.images"
                    v-if="image.url"></image-dialog>
                </div>
            </div>
        </section>

        <section class="external-access">
            <div class="container">
                <div class="text-container">
                    <div class="table-container">
                        <div class="table-cell-container">
                            <h2 class="section-title">{{ externalAccess.title }}</h2>
                            <div class="intro-text" v-html="externalAccess.introText"></div>
                            <div class="text" v-html="externalAccess.text"></div>
                        </div>
                    </div>
                </div>

                <image-dialog
                    :src="externalAccess.image.url"
                    :alt="externalAccess.image.alt"
                    v-if="externalAccess.image.url"></image-dialog>
            </div>
        </section>

        <div class="carousel-container">
            <div class="container">
                <h2 class="section-title">Heading level 2</h2>
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
    import ImageDialog from '../../vue/components/image-dialog.vue';
    import YouTubeIframeLoader from 'youtube-iframe';

    export default{
        data(){
            return {
                spotlight: {
                    title: 'SCIENTILLA',
                    introText: '<p>Spark your research!</p>'
                },
                github: {
                    button: {
                        url: '#',
                        text: 'Visit our Github page!'
                    }
                },
                video: {
                    id: '',
                    text: '<p><strong>SCIENTILLA</strong> is the new <strong>open-source</strong> platform to store, manage and access scientific research output, developed at the Italian Institute of Technology.</p><p>Institutions, research groups and researchers can certify and keep track of their <strong>own scientific results</strong>, such as publications, books, talks, ...</p><p>Group leaders will find the output of  their team <strong>easily accessible</strong> and they  can better design a strategy to reach  their goals.</p><p><strong>Charts</strong> and <strong>metrics</strong> related to research results are readily accessible at personal, group and institutional level.</p><p>SCIENTILLA data are made available to external services through <strong>APIs</strong>.</p>',
                    button: {
                        text: 'Try our demo?',
                        url: '#'
                    }
                },
                personalGroupSection: {
                    title: 'Personal, group and institutional profiles',
                    introText: '<p>keep up-to-date research output at several levels</p>',
                    text: '<ul><li>Institutional installation.</li><li>Hierarchy of profiles: personal, group and institutional profiles.</li><li>Researchers and group leaders choose what to showcase about their activity and the activity of the research group.</li></ul>',
                    image: {
                        url: '/dist/assets/img/personal-group.png',
                        alt: 'Personal, group and institutional profiles'
                    }
                },
                collaborativeEnvironment: {
                    title: 'Collaborative environment',
                    introText: '<p>Limit the burden of filling-in your document infos</p>',
                    text: '<ul><li>Newly added documents are suggested to the users who are likely to be co-authors reducing the amount of typing.</li><li>Keeping up-to-date the output of a whole research group is a quick operation: SCIENTILLA automatically suggests to group leaders the publications authored by their staff.</li><li>In institutes provided with a paid access to Elsevier Scopus APIs, researchers can import automatically documents augmented with bibliometric information from the Scopus database.</li></ul>'
                },
                metricsAndCharts: {
                    title: 'Metrics and charts',
                    introText: '<p>graphical overview of your performance</p>',
                    text: '<ul><li>Graphics information about documents (by type, by year, by institution, ...)</li><li>In institutions provided with a paid access to Elsevier Scopus APIs, bibliometric indexes and citational data are monitored through a dashboard.</li></ul>',
                    images: [
                        {
                            url: '/dist/assets/img/documents-by-type-bar-chart.png',
                            alt: 'Bar chart'
                        },
                        {
                            url: '/dist/assets/img/documents-by-type-pie-chart.png',
                            alt: 'Pie chart'
                        }
                    ]
                },
                externalAccess: {
                    title: 'External access',
                    introText: '<p>re-use your data outside SCIENTILLA</p>',
                    text: '<ul><li>REST JSON APIs allow institutional websites, analysis tools or services for accessing research results and bibliometric data from SCIENTILLA.</li><li>1-click export of all publications in a SCIENTILLA profile into csv or bibtex files to reuse your bibliography externally.</li></ul>',
                    image: {
                        url: '/dist/assets/img/external-access.png',
                        alt: 'External access'
                    }
                }
            }
        },
        components: {
            Testimonials,
            ImageDialog
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