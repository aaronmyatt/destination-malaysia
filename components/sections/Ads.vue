<template>
  <div class="md:w-5/6 my-8 mx-auto">
    <h2 class="text-center text-3xl font-bold tracking-wide">
      Ads/External Links
    </h2>
    <div
      :style="{ 'scroll-snap-type': 'x mandatory' }"
      class="flex overflow-scroll"
    >
      <BaseImg
        :key="i"
        :style="{ 'scroll-padding': '10px', 'scroll-snap-align': 'center' }"
        class="px-1"
        v-for="i of 10"
      />
    </div>
  </div>
</template>

<script>
import BaseImg from '../base/BaseImg'

export default {
  name: 'Ads',
  components: {
    BaseImg
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://bundle.run/css-scroll-snap-polyfill@0.1.2'
    document.body.appendChild(script)
  }
}
</script>
