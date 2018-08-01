<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide
      class="swiper-item"
      v-for="(slide, index) in slides"
      :key="index">
      <div class="carousel-item">
        <div class="image-container" :style="slide.imageStyle">
          <img :src="slide.imageUrl" alt="">
        </div>
        <div class="text-container">
          <h3 class="carousel-title">{{ slide.title }}</h3>
          <div class="carousel-description">{{ slide.description }}</div>
          <div class="carousel-function">{{ slide.function }}</div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          direction: 'horizontal',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 5000
        },
        slides: [
          {
            title: 'Title slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            function: 'function',
            imageUrl: 'https://place-hold.it/800x450',
            imageStyle: 'background: url(\'https://place-hold.it/800x450\') no-repeat; background-size: cover; background-position: center;'
          }, {
            title: 'Title slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            function: 'function',
            imageUrl: 'https://place-hold.it/800x450',
            imageStyle: 'background: url(\'https://place-hold.it/800x450\') no-repeat; background-size: cover; background-position: center;'
          }, {
            title: 'Title slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            function: 'function',
            imageUrl: 'https://place-hold.it/800x450',
            imageStyle: 'background: url(\'https://place-hold.it/800x450\') no-repeat; background-size: cover; background-position: center;'
          }, {
            title: 'Title slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            function: 'function',
            imageUrl: 'https://place-hold.it/800x450',
            imageStyle: 'background: url(\'https://place-hold.it/800x450\') no-repeat; background-size: cover; background-position: center;' 
          }
        ]
      }
    }
  }
</script>