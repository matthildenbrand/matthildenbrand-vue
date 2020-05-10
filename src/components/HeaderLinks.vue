<template>
  <div>
    <div class="me" :class="{ toasty: toasty }">
      <img :src="require('../assets/images/me.png')" />
    </div>
    <div class="contact">
      <h1 @click="toastyClick">Matt Hildenbrand</h1>
      <ul>
        <li>
          <a
            class="github"
            href="https://github.com/matthildenbrand"
            target="_blank"
            rel="noopener noreferrer nofollow"
            ><inline-svg
              class="svg github"
              :src="require('../assets/images/svg/github.svg')"
          /></a>
        </li>
        <li>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/matt-hildenbrand-3b00327"
            target="_blank"
            rel="noopener noreferrer nofollow"
            ><inline-svg
              class="svg linkedin"
              :src="require('../assets/images/svg/linkedin.svg')"
          /></a>
        </li>
        <li>
          <a class="wordpress" href="http://matthildenbrand.com/blog"
            ><inline-svg
              class="svg wordpress"
              :src="require('../assets/images/svg/wordpress.svg')"
          /></a>
        </li>
        <li>
          <a
            class="email"
            href="mailto:hello@matthildenbrand.com?subject=Hello%20Matt&body=Hello%20Matt"
            ><inline-svg
              class="svg email"
              :src="require('../assets/images/svg/email.svg')"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
import _ from "lodash";

export default {
  components: {
    InlineSvg,
  },
  data() {
    return {
      toasty: false,
    };
  },
  methods: {
    toastyClick: _.debounce(function() {
      let audioElement = document.createElement("audio");
      audioElement.setAttribute("src", require("../assets/audio/TOASTY.mp3"));
      audioElement.play();
      this.toasty = true;
      setTimeout(() => {
        this.toasty = false;
      }, 1000);
    }, 300),
  },
};
</script>
