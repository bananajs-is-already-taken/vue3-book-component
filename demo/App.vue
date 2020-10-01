<template>
  <div>
    Hello
    <BananaVue3Book class="book" :options="options" :list="list">
      <template #first>
        <div class="first">
          <h1>Vue 3 book component</h1>
        </div>
      </template>

      <template #faceFront="{ item }">
        <div class="page front">
          <img :src="item.img" />
          <div class="text front">
            {{ item.text }}
          </div>
        </div>
      </template>

      <template #faceBack="{ item }">
        <div class="page back">
          <img :src="item.img" />
          <div class="text">
            {{ item.text }}
          </div>
        </div>
      </template>

      <template #last>
        <div class="last">
          <h1>The end</h1>
        </div>
      </template>
    </BananaVue3Book>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BananaVue3Book } from '../lib/';

export default defineComponent({
  components: {
    BananaVue3Book,
  },

  setup() {
    const options = {
      duration: 1500,
      perspective: 1500,
      delay: 1000,
      autoplay: true,
      loop: false,
    };

    const list = [
      {
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJgxMxvOSYt9XAQ8vEW_ccCGlv7pU_HhObrA&usqp=CAU',
        text:
          '1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, facere officia quas, eos fugit cupiditate veniam pariatur doloribus ea fugiat ad quos consectetur ratione nesciunt optio alias laboriosam aliquid qui.',
      },
      {
        img:
          'https://static4.depositphotos.com/1001351/322/v/450/depositphotos_3223514-stock-illustration-grunge-abstract-background-eps-10.jpg',
        text:
          '2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, facere officia quas, eos fugit cupiditate veniam pariatur doloribus ea fugiat ad quos consectetur ratione nesciunt optio alias laboriosam aliquid qui.',
      },
      {
        img:
          'https://media.gettyimages.com/videos/4k-abstract-bokeh-background-loop-video-id817152426?s=640x640',
        text:
          '3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, facere officia quas, eos fugit cupiditate veniam pariatur doloribus ea fugiat ad quos consectetur ratione nesciunt optio alias laboriosam aliquid qui.',
      },
      {
        img:
          'https://static4.depositphotos.com/1001351/322/v/450/depositphotos_3223514-stock-illustration-grunge-abstract-background-eps-10.jpg',
        text:
          '4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, facere officia quas, eos fugit cupiditate veniam pariatur doloribus ea fugiat ad quos consectetur ratione nesciunt optio alias laboriosam aliquid qui.',
      },
    ];

    return { options, list };
  },
});
</script>

<style lang="scss" scoped>
.book {
  max-width: 1000px;
  height: 350px;
  margin: 120px auto;
  .first,
  .last {
    width: 100%;
    text-align: center;
  }
  .page {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 300px;
    }
    .text {
      padding: 15px;
    }
    &.front {
      background-color: indianred;
    }
    &.back {
      background-color: burlywood;
    }
  }
}
</style>
