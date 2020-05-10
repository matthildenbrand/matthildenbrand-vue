<template>
  <div class="brands">
    <h2>Past Brands</h2>
    <div class="row">
      <div class="column">
        <a
          class="smart"
          href="https://www.smartusa.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          ><InlineSvg
            class="svg smart"
            :src="require('../assets/images/svg/smart.svg')"
            alt="Smart"
        /></a>

        <a
          class="usaa"
          href="https://www.usaa.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          ><InlineSvg
            class="svg usaa"
            :src="require('../assets/images/svg/usaa.svg')"
            alt="USAA"
        /></a>

        <a
          class="signet"
          href="http://www.signetjewelers.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          ><InlineSvg
            class="svg signet"
            :src="require('../assets/images/svg/signet.svg')"
            alt="Singet Jewelers"
        /></a>
      </div>
      <div class="column">
        <a
          class="samsung"
          href="http://www.samsung.com/us"
          target="_blank"
          rel="noopener noreferrer nofollow"
          ><InlineSvg
            class="svg samsung"
            :src="require('../assets/images/svg/samsung.svg')"
            alt="Samsung"
        /></a>

        <a
          class="blackberry"
          href="http://www.blackberry.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          ><InlineSvg
            class="svg blackberry"
            :src="require('../assets/images/svg/blackberry.svg')"
            alt="BlackBerry"
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
