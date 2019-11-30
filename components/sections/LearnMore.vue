<template>
  <div>
    <h2 class="text-center text-3xl font-bold tracking-wide">Learn More</h2>
    <div class="mx-auto flex flex-wrap justify-around w-3/4">
      <BaseCard
        button-text="Learn More"
        class="text-center"
        title-below-image="Travel"
      />
      <BaseCard
        button-text="Learn More"
        class="text-center"
        title-below-image="Host"
      />
    </div>
  </div>
</template>

<script>
import BaseCard from '../base/BaseCard'

export default {
  name: 'LearnMore',
  components: {
    BaseCard
  }
}
</script>
