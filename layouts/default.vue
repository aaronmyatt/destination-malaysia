<template>
  <div class="text-gray-900">
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js'
    document.body.appendChild(script)
  }
}
</script>
