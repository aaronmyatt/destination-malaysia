<template>
  <div class="sm:flex flex-wrap md:justify-center">
    <div class="m-8" v-for="(column, title) in footerSchema">
      <h4 class="capitalize font-semibold">{{ title }}</h4>
      <div class="flex md:block">
        <div v-for="row in column">
          <BaseSvg :path="row.svgPath" v-if="row.svgPath" />
          <a
            :href="row.link"
            class="inline-block mr-6 mt-2 text-sm text-grey-700 hover:underline hover:font-medium"
          >
            {{ row.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSvg from '../base/BaseSvg'

export default {
  name: 'Footer',
  components: {
    BaseSvg
  },
  data() {
    return {
      footerSchema: {
        company: [{ title: 'About Us', link: '/' }],
        social: [
          { title: 'Facebook', link: '/' },
          { title: 'Twitter', link: '/' },
          { title: 'Instagram', link: '/' }
        ],
        resources: [
          { title: 'Terms & Conditions', link: '/' },
          { title: 'Privacy', link: '/' },
          { title: 'Sitemap', link: '/' }
        ],
        contact: [
          {
            svgPath:
              'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z',
            title: 'joron@destination.com'
          },
          {
            svgPath:
              'M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z',
            title: '0101010101010'
          }
        ]
      }
    }
  }
}
</script>
