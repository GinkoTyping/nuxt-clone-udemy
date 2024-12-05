<template>
  <div class="course-popover w-[34rem]">
    <div
      class="course-popover-container max-[1080px]:hidden min-[1200px]:transform-from-left"
    >
      <img
        class="left"
        src="~/public/images/course-image.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@media (min-width: 1200px) {
  .course-popover {
    left: 50%;
    transform: translateX(
      calc(-100% + var(--BANNER-HALF) - var(--BANNER-PADDING_RIGHT))
    );
  }
}

.course-popover {
  --BANNER-HALF: 59rem;
  --BANNER-PADDING_RIGHT: 4.8rem;
  position: absolute;
  top: 10.4rem;
}

@media (max-width: 1200px) {
  .course-popover {
    right: var(--BANNER-PADDING_RIGHT);
  }
}
</style>
