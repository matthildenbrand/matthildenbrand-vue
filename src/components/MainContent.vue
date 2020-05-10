<template>
  <div>
    <p>
      Technologist currently residing in
      <a
        href="https://www.slocal.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <BigHover
          title="San Luis Obispo"
          imageName="slo"
          svg="../assets/images/svg/slo.svg"/></a
      >. Enjoys creating amazing web and mobile experiences using the latest and
      greatest nerd tech out there. Plays bass guitar in 80's pop cover band
      <a
        href="https://totallymakeover.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <BigHover
          title="Bennetar"
          imageName="makeover"
          svg="../assets/images/svg/makeover.svg"
        />
      </a>
      and can sometimes be seen streaming his awesome gaming skills on
      <a
        href="https://www.twitch.tv/matt_lousy/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <BigHover
          title="Duck Hunt"
          imageName="twitch"
          svg="../assets/images/svg/twitch.svg"/></a
      >.
    </p>
    <p class="second-section">
      With close to 20 years of building and delivering amazing experiences
      across the web, I have worked with many tech frameworks and brands.
    </p>
  </div>
</template>

<script>
import BigHover from "../components/BigHover";

export default {
  components: {
    BigHover,
  },
};
</script>
