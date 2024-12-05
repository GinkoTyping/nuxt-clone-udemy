<template>
  <div
    class="pt-[2.4rem] pb-[1.6rem] border px-[2.4rem] overflow-hidden relative"
    :style="{ height: isExpand ? 'auto' : '35rem' }"
  >
    <h1 class="ud-heading-xl mb-[1.6rem]">What you'll learn</h1>
    <ul class="learn-list flex flex-wrap justify-between">
      <li class="my-[.4rem]" v-for="item in list" :key="item">
        <img :src="XIcon" alt="" srcset="" />
        <p class="ml-[1.6rem] ud-text-sm">{{ item }}</p>
      </li>
    </ul>
    <div class="bottom w-full h-[5.6rem] absolute bottom-0 left-0 bg-white">
      <button
        class="h-[4rem] ml-[2.4rem] ud-heading-sm text-[var(--banner-light-inverse-color)] flex items-center"
        @click="isExpand = !isExpand"
      >
        <span>{{ isExpand ? "Show less" : "Show more" }}</span>
        <img :src="ExpandIcon" class="ml-[.2rem]" width="14px">
      </button>
    </div>
    <div v-show="!isExpand" class="modal absolute bottom-[5.6rem] bg-black h-[12rem] w-full"></div>
  </div>
</template>

<script lang="ts" setup>
import XIcon from "~/assets/icons/gou.svg";
import ExpandIcon from "~/assets/icons/right.svg"

const list = [
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will build games and programs that use Python libraries.",
  "You will be able to use Python for your own work problems or personal projects.",
  "You will create a portfolio of Python based projects you can share.",
  "Learn to use Python professionally, learning both Python 2 and Python 3!",
  "Create games with Python, like Tic Tac Toe and Blackjack!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "Learn to use Object Oriented Programming with classes!",
  "Understand complex topics, like decorators.",
  "Understand how to use both the Jupyter Notebook and create .py files",
  "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
  "Build a complete understanding of Python from the ground up!",
];
const isExpand = ref(false);
</script>

<style lang="scss" scoped>
.learn-list {
  li {
    display: flex;
    align-items: flex-start;
    width: calc(50% - (2.4rem / 2));
    img {
      width: 1.6rem;
    }
  }
}
.modal {
  background: linear-gradient(to top, rgb(255, 255, 255), rgba(0, 0, 0, 0));
}
</style>
