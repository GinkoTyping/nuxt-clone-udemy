<template>
  <div class="course-popover absolute w-[34rem] animate__animated">
    <div
      class="course-popover-container max-[1080px]:hidden min-[1200px]:transform-from-left bg-white shadow-lg"
    >
      <img
        class="left border border-white"
        src="~/public/images/course-image.png"
        alt=""
        srcset=""
      />
      <div class="middle p-[2.4rem] border-b">
        <h1 class="mb-[.8rem] ud-heading-xxl">¥27,800</h1>
        <button
          class="w-full bg-[rgb(164,53,240)] text-white ud-heading-md h-[4.8rem] mb-[.8rem]"
        >
          Add to cart
        </button>
        <button
          class="w-full border border-black ud-heading-md h-[4.8rem] mb-[1.6rem]"
        >
          Buy now
        </button>
        <p class="text-center mb-[1.6rem]">
          30-Day Money-Back Guarantee |
          <a class="ud-link-label">Refund Policy</a> and
          <a class="ud-link-label">Refund Policy</a>
        </p>
        <div class="desc">
          <p class="ud-heading-md mb-[.8rem]">This course includes:</p>
          <div class="desc-item flex items-center">
            <img :src="CalenderIcon" alt="" srcset="" />
            <span>22 hours on-demand video</span>
          </div>
          <div class="desc-item flex items-center">
            <img :src="CalenderIcon" alt="" srcset="" />
            <span>19 coding exercises</span>
          </div>
          <div class="desc-item flex items-center">
            <img :src="CalenderIcon" alt="" srcset="" />
            <span>Certificate of completion</span>
          </div>
          <div class="desc-item flex items-center">
            <img :src="CalenderIcon" alt="" srcset="" />
            <span>15 articles</span>
          </div>
          <div class="desc-item flex items-center">
            <img :src="CalenderIcon" alt="" srcset="" />
            <span>Access on mobile and TV</span>
          </div>
          <div class="desc-item flex items-center">
            <img :src="CalenderIcon" alt="" srcset="" />
            <span>Full lifetime access</span>
          </div>
        </div>
        <div class="share-links flex justify-between">
          <span class="ud-heading-sm underline">Share</span>
          <span class="ud-heading-sm underline">Gift this course</span>
          <span class="ud-heading-sm underline">Apply Coupon</span>
        </div>
        <button
          class="border border-dashed w-full h-[4.8rem] relative mb-[.8rem]"
        >
          <p class="text-left ml-[.8rem]"><b>V2JPLETSLEARN</b> is applied</p>
          <p class="text-left ml-[.8rem]">Udemy coupon</p>
          <button class="ud-btn-large w-[4.8rem] absolute top-0 right-0">
            <img class="w-[1.2rem] mx-auto" :src="XIcon" />
          </button>
        </button>
        <div class="w-full border border-black h-[3.7rem] flex">
          <input
            type="text"
            placeholder="Enter Coupon"
            class="ud-text-sm h-full w-[21rem] outline-0 px-[1.6rem]"
          />
          <button class="bg-black text-white w-[8rem] ud-text-sm">Apply</button>
        </div>
      </div>
      <div class="botom p-[2.4rem]">
        <h2 class="ud-heading-md mb-[.8rem]">Training 5 or more people?</h2>
        <p class="ud-text-sm mb-[.8rem]">
          Get your team access to 27,000+ top Udemy courses anytime, anywhere.
        </p>
        <button class="w-full h-[4.0rem] border border-black ud-heading-sm">
          Try Udemy Business
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "animate.css";
import CalenderIcon from "~/assets/icons/calender_light.svg";
import XIcon from "~/assets/icons/cuowu.svg";

onMounted(() => {
  document.addEventListener("scroll", onScroll);
  popover.value = document.querySelector(".course-popover") as HTMLElement;
  onScroll();
});

const popover = ref<HTMLElement | null>();
const SCROLL_HEIGHT = 370;
function onScroll() {
  if (popover.value) {
    if (window.scrollY > SCROLL_HEIGHT) {
      if (!popover.value.classList.contains("fixed")) {
        popover.value.classList.add("fixed");
        popover.value.classList.add("animate__fadeIn");
      }
      if (popover.value.classList.contains("absolute")) {
        popover.value.classList.remove("absolute");
      }
    } else {
      if (popover.value.classList.contains("fixed")) {
        popover.value.classList.remove("fixed");
        popover.value.classList.remove("animate__fadeIn");
      }
      if (!popover.value.classList.contains("absolute")) {
        popover.value.classList.add("absolute");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.course-popover {
  --BANNER-HALF: 59rem;
  --BANNER-PADDING_RIGHT: 4.8rem;

  &.absolute {
    top: 10.4rem;
    position: absolute;
  }
  &.fixed {
    top: 1.6rem;
    position: fixed;
  }
}
.animate__animated.animate__fadeIn {
  --animate-duration: 500ms;
}

@media (min-width: 1200px) {
  .course-popover {
    &.absolute,
    &.fixed {
      left: 50%;
      transform: translateX(
        calc(-100% + var(--BANNER-HALF) - var(--BANNER-PADDING_RIGHT))
      );
    }
  }
}

@media (max-width: 1200px) {
  .course-popover {
    &.absolute,
    &.fixed {
      right: var(--BANNER-PADDING_RIGHT);
    }
  }
}

.desc-item {
  height: 2rem;
  padding: 0.4rem 0;
  img {
    width: 1.6rem;
    margin-right: 1.6rem;
  }
  span {
    line-height: 1.4;
    font-size: 1.4rem;
  }
}
.share-links {
  span {
    line-height: 4rem;
  }
}
</style>
