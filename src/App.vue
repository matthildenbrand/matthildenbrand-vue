<template>
  <div id="app">
    <Loader v-bind:loaded="loaded" />
    <div v-if="loaded" class="fadeIn hero-unit">
      <HeaderLinks />
      <MainContent />

      <div class="row">
        <div class="column">
          <Frameworks />
        </div>
        <div class="column">
          <Brands />
        </div>
      </div>
    </div>

    <div class="hide">
      <img :src="require('./assets/images/bg/bg.jpg')" @load="onLoad" />
      <img :src="require('./assets/images/bg/benatar.gif')" @load="onLoad" />
      <img :src="require('./assets/images/bg/slo.gif')" @load="onLoad" />
      <img :src="require('./assets/images/bg/duck-hunt.gif')" @load="onLoad" />
    </div>
  </div>
</template>

<script>
import Loader from "./components/Loader";
import HeaderLinks from "./components/HeaderLinks";
import MainContent from "./components/MainContent";
import Brands from "./components/Brands";
import Frameworks from "./components/Frameworks";
import metaData from "./metaData.js";

export default {
  name: "App",
  methods: {
    onLoad() {
      this.imgCount = this.imgCount + 1;
      if (this.imgCount === this.numberOfImgs) {
        this.loaded = true;
      }
    },
  },
  data() {
    return {
      loaded: false,
      imgCount: 0,
      numberOfImgs: 4,
    };
  },
  components: {
    HeaderLinks,
    MainContent,
    Brands,
    Frameworks,
    Loader,
  },
  metaInfo: {
    title: "Matt Hildenbrand - Technologist",
    meta: metaData(),
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
