<template>
  <div>
    <Header />
    <Banner />
    <Search />
    <Destinations />
    <Hotels />
    <Community />
    <Ads />
    <LearnMore />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/sections/Header'
import Banner from '~/components/sections/Banner'
import Search from '~/components/sections/Search'
import Destinations from '~/components/sections/Destinations'
import Hotels from '~/components/sections/Hotels'
import Community from '~/components/sections/Community'
import Ads from '~/components/sections/Ads'
import LearnMore from '~/components/sections/LearnMore'
import Footer from '~/components/sections/Footer'

export default {
  components: {
    Header,
    Banner,
    Search,
    Destinations,
    Hotels,
    Community,
    Ads,
    LearnMore,
    Footer
  }
}
</script>

<style></style>
