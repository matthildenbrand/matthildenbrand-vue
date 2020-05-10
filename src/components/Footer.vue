<template>
  <div class="footer">
    <p>
      This site was built using the
      <a
        class="vue"
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        ><InlineSvg
          class="svg vue"
          :src="require('../assets/images/svg/vue.svg')"
          alt="Vue"
      /></a>
      framework, view source on
      <a
        class="github"
        href="https://github.com/matthildenbrand/matthildenbrand-vue"
        target="_blank"
        rel="noopener noreferrer nofollow"
        ><inline-svg
          class="svg github"
          :src="require('../assets/images/svg/github.svg')"/></a
      >.
    </p>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
};
</script>
