<template>
  <div class="mt-8">
    <h2 class="text-center text-3xl font-bold tracking-wide">Community</h2>
    <div class="mx-auto flex flex-wrap justify-center xl:w-2/3">
      <div
        v-for="community in ['blog', 'package', 'accommodation']"
        :key="image"
        class="mt-6"
      >
        <h3 class="capitalize mx-1 text-2xl font-semibold">{{ community }}</h3>
        <BaseImg class="m-1" />
        <div class="mt-2">Some sort of {{ community }}.</div>
        <div class="mt-2 flow">
          <svg
            class="stroke-current inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
          Location
        </div>
        <button
          class="block mx-auto mt-2 px-6 py-2 border-2 rounded-full font-bold hover:bg-blue-200 focus:border-blue-900 focus:rounded-full focus:outline-none"
        >
          See more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImg from '../base/BaseImg'
export default {
  name: 'Community',
  components: {
    BaseImg
  }
}
</script>
