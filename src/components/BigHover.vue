<template>
  <div class="svg">
    <span @mouseover="hover = true" @mouseleave="hover = false">
      <inline-svg
        class="svg"
        :class="[imageName, { 'has-hover': hover }]"
        v-if="imageName === 'slo'"
        :src="require('../assets/images/svg/slo.svg')"
      />
      <inline-svg
        class="svg"
        :class="[imageName, { 'has-hover': hover }]"
        v-if="imageName === 'makeover'"
        :src="require('../assets/images/svg/makeover.svg')"
      />
      <inline-svg
        class="svg"
        :class="[imageName, { 'has-hover': hover }]"
        v-if="imageName === 'twitch'"
        :src="require('../assets/images/svg/twitch.svg')"
      />
    </span>
    <div class="background-image" :class="[imageName, { hover: hover }]" />
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
  data() {
    return {
      hover: false,
    };
  },
  props: {
    imageName: String,
    title: String,
    url: String,
  },
};
</script>
