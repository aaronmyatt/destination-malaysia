<template>
  <div class="mt-8">
    <h2 class="text-center text-3xl font-bold tracking-wide">Destinations</h2>
    <div class="mx-auto mt-4 flex flex-wrap justify-center xl:w-2/3">
      <BaseImg :key="image" class="m-1" v-for="image of 6" />
    </div>
    <button
      class="block mx-auto mt-4 px-6 py-2 border-2 rounded-full font-bold hover:bg-blue-200 focus:border-blue-900 focus:rounded-full focus:outline-none"
    >
      View More
    </button>
  </div>
</template>

<script>
import BaseImg from '../base/BaseImg'

export default {
  name: 'Destinations',
  components: {
    BaseImg
  }
}
</script>
