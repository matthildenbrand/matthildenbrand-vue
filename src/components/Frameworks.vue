<template>
  <div class="brands">
    <h2>The Tech</h2>
    <div class="row">
      <div class="column">
        <a
          class="react"
          href="https://facebook.github.io/react/"
          target="_blank"
          ><InlineSvg
            class="svg react"
            :src="require('../assets/images/svg/react.svg')"
            alt="React"
        /></a>
        <a class="angular" href="https://angular.io/" target="_blank"
          ><InlineSvg
            class="svg angular"
            :src="require('../assets/images/svg/angular.svg')"
            alt="Angular"
        /></a>
        <a class="vue" href="https://vuejs.org/" target="_blank"
          ><InlineSvg
            class="svg vue"
            :src="require('../assets/images/svg/vue.svg')"
            alt="Vue"
        /></a>
        <a class="flutter" href="https://flutter.dev/" target="_blank"
          ><InlineSvg
            class="svg flutter"
            :src="require('../assets/images/svg/flutter.svg')"
            alt="Flutter"
        /></a>
      </div>
      <div class="column">
        <a class="ionic" href="https://ionicframework.com/" target="_blank"
          ><InlineSvg
            class="svg ionic"
            :src="require('../assets/images/svg/ionic.svg')"
            alt="Ionic"
        /></a>
        <a class="redux" href="http://redux.js.org/" target="_blank"
          ><InlineSvg
            class="svg redux"
            :src="require('../assets/images/svg/redux.svg')"
            alt="Redux"
        /></a>
        <a
          class="typescript"
          href="https://www.typescriptlang.org/"
          target="_blank"
          ><InlineSvg
            class="svg typescript"
            :src="require('../assets/images/svg/typescript-fixed.svg')"
            alt="TypeScript"
        /></a>
      </div>
    </div>
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
