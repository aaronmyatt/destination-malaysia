<template>
  <div class="mt-8">
    <h2 class="text-center text-3xl font-bold tracking-wide">Community</h2>
    <div class="mx-auto flex flex-wrap justify-center xl:w-2/3">
      <div
        :key="community"
        class="mt-6"
        v-for="community in ['blog', 'package', 'accommodation']"
      >
        <BaseCard
          :description="'Some sort of ' + community"
          :footer="'Location'"
          :footerSvgPath="
            'M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
          "
          :title="community"
          button-text="See More"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '../base/BaseCard'

export default {
  name: 'Community',
  components: {
    BaseCard
  }
}
</script>
