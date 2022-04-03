<template>
  <router-view />
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default {};
</script>
<style lang="scss">
* {
  --primary: yellow;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
</style>
