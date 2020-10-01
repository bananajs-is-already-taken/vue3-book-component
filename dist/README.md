# Vue 3 Book Component

<img src="logo.svg" align="right"
     alt="Book logo made by Freepik" width="120" height="102">

Distributed under LGPL-3.0-or-later license

Book component for Vue 3. It provides easy, flexible API and great customizability.

- You can make your book interactive
- Or create interactive journal
- Or you just need to do something fast and easy way

## Usage

```ts
// main.ts

import {createApp} from 'vue';
import BananaVue3BookPlugin from '@bananajs/vue3-book-component';
import '@bananajs/vue3-book-component/BananaVue3Book.css';
import App from './App.vue';

createApp(App).use(BananaVue3BookPlugin).mount('#app');
```

```html
// App.vue

<template>
  <banana-vue3-book :options="options" :list="list">
      <template #first>
      </template>

      <!-- item of slot data is the same object in list prop -->
      <template #faceFront="{ item }">
      </template>

      <template #faceBack="{ item }">
      </template>

      <template #last>
      </template>
  </banana-vue3-book>
</template>
<script>
  setup() {
    const options = {
      duration: 1500,
      perspective: 1500,
      delay: 1000,
      autoplay: true,
      loop: false,
    };

    const list = [/* your data to show */];

    return { options, list };
  },
</script>
```

## API

### Props

| Name      | Type   | Purpose                    |
| --------- | ------ | -------------------------- |
| `options` | Object | Different options for book |
| `list`    | Array  | Your pages to show         |

### Options object

#### `duration`

How fast will work auto flip.

Default: `1500`

#### `perspective`

Default: 1500

#### `delay`

Delay between page turn

Default: 1000

#### `autoplay`

Turn on/off auto play

Default: false

#### `loop`

Turn on/off loop

Default: false

### Slots

| Name        | Data       | Purpose            |
| ----------- | ---------- | ------------------ |
| `first`     | None       | First item in book |
| `faceFront` | `{ item }` | Face of the page   |
| `faceBack`  | `{ item }` | Back of the page   |
| `last`      | None       | Last item in book  |

## Contributing

1. Fork it (<https://github.com/bananajs-is-already-taken/vue-book-components/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes using a semantic commit message.
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Assets

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
