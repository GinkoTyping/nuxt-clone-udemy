<template>
  <div class="dark banner-container mt-[7.2rem] px-[4.8rem] py-[3.2rem]">
    <div class="breads flex items-center">
      <a href="">Development</a>
      <img :src="BreadIcon" alt="" srcset="">
      <a href="">Programming Languages</a>
      <img :src="BreadIcon" alt="" srcset="">
      <a href="">Python</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BreadIcon from "~/assets/icons/bread.svg";
</script>

<style lang="scss" scoped>
.banner-container {
  .breads {
    font-size: var(--font-sm);
    img {
      width: 1.6rem;
      height: 1.6rem;
      margin: 0.4rem;
    }
  }
}
.dark {
  background-color: rgb(28, 29, 31);
  .breads {
    color: var(--banner-dark-inverse-color);
    font-weight: bold;
  }
}
</style>
