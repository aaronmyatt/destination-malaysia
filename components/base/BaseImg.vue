<template>
  <img
    :class="classes"
    :src="src"
    :loading="lazyEnabled"
    class="lazyload"
    alt="Destination Malaysia"
  />
</template>

<script>
export default {
  name: 'BaseImg',
  props: {
    src: {
      type: String,
      default: 'https://via.placeholder.com/300x300.png'
    },
    alt: {
      type: String,
      default: 'Alt Text'
    },
    classes: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  computed: {
    lazyEnabled() {
      if ('loading' in HTMLImageElement.prototype) {
        return 'lazy'
      } else {
        return 'auto'
      }
    }
  }
}
</script>
