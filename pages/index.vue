<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <Search></Search>
    <Destinations></Destinations>
    <Hotels></Hotels>
    <Community></Community>
    <LearnMore></LearnMore>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/sections/Header'
import Banner from '~/components/sections/Banner'
import Search from '~/components/sections/Search'
import Destinations from '~/components/sections/Destinations'
import Hotels from '~/components/sections/Hotels'
import Community from '~/components/sections/Community'
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
    LearnMore,
    Footer
  }
}
</script>

<style></style>
