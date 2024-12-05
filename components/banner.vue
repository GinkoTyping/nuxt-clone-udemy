<template>
  <div class="banner">
    <div class="banner-container">
      <div class="breads flex items-center mb-[1.6rem]">
        <a class="max-[500px]:hidden" href="">Development</a>
        <img class="right-dark" :src="BreadIcon" alt="" srcset="" />
        <img
          class="right-light max-[500px]:!hidden"
          :src="RighLightIcon"
          alt=""
          srcset=""
        />
        <a href="">Programming Languages</a>
        <img class="right-dark" :src="BreadIcon" alt="" srcset="" />
        <img class="right-light" :src="RighLightIcon" alt="" srcset="" />
        <a href="">Python</a>
      </div>
      <img
        class="min-[1080px]:hidden max-[500px]:w-[100vw] border border-black mb-[3.2rem]"
        src="~/public/images/course-image.png"
      />
      <div class="course-header">
        <h1 class="ud-heading-xxl mb-[1.6rem]">
          The Complete Python Bootcamp From Zero to Hero in Python
        </h1>
        <p class="course-header_desc ud-heading-lg mb-[1.6rem]">
          Learn Python like a Professional Start from the basics and go all the
          way to creating your own applications and games
        </p>
        <div class="course-header_rating flex ud-text-sm mb-[1.6rem]">
          <a href="" class="flex items-center mr-[.4rem]">
            <span class="pr-[.4rem]">4.6</span>
            <img :src="SartIcon" alt="" srcset="" />
            <img :src="SartIcon" alt="" srcset="" />
            <img :src="SartIcon" alt="" srcset="" />
            <img :src="SartIcon" alt="" srcset="" />
            <img :src="SartHalfIcon" alt="" srcset="" />
          </a>
          <span class="mr-[.8rem] ud-link-label">(523,484 ratings)</span>
          <span class="text-[#fff]">1,989,567 students</span>
        </div>
        <div class="course-header_supplier ud-text-sm mb-[1.6rem]">
          <span
            >Created by <a href="" class="ud-link-label">Jose Portilla</a>,
            <a href="" class="ud-link-label">Jose Portilla</a></span
          >
        </div>
        <div
          class="course-header_tags mb-[1.6rem] ud-text-sm flex items-center h-[1.8rem]"
        >
          <div class="course-header_tags-item">
            <img
              class="ud-icon-xsmall icon-dark"
              :src="WarningIcon"
              alt=""
              srcset=""
            />
            <img
              class="ud-icon-xsmall icon-ligt"
              :src="WarningLightIcon"
              alt=""
              srcset=""
            />
            <span>Last updated 2023/7</span>
          </div>
          <div class="course-header_tags-item">
            <img
              class="ud-icon-xsmall icon-dark"
              :src="EarthIcon"
              alt=""
              srcset=""
            />
            <img
              class="ud-icon-xsmall icon-ligt"
              :src="EarthIconLight"
              alt=""
              srcset=""
            />
            <span>English</span>
          </div>
          <div class="course-header_tags-item">
            <img
              class="ud-icon-xsmall icon-dark"
              :src="CalenderIcon"
              alt=""
              srcset=""
            />
            <img
              class="ud-icon-xsmall icon-ligt"
              :src="CalenderLightIcon"
              alt=""
              srcset=""
            />
            <span
              >English [Auto], Arabic [Auto] ,
              <a class="ud-link-label">14 more</a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BreadIcon from "~/assets/icons/bread.svg";
import SartIcon from "~/assets/icons/star.svg";
import SartHalfIcon from "~/assets/icons/star_half.svg";
import WarningIcon from "~/assets/icons/warning.svg";
import WarningLightIcon from "~/assets/icons/warning_light.svg";
import EarthIcon from "~/assets/icons/earth_white.svg";
import EarthIconLight from "~/assets/icons/earth.svg";
import CalenderIcon from "~/assets/icons/calender.svg";
import CalenderLightIcon from "~/assets/icons/calender_light.svg";
import RighLightIcon from "~/assets/icons/right.svg";
</script>

<style lang="scss" scoped>
.banner {
  .breads {
    font-size: var(--font-sm);
    padding: 0.4rem;
    img {
      width: 1.6rem;
      height: 1.6rem;
      margin: 0.4rem;
    }
  }
}
.banner {
  .banner-container {
    margin: 0 auto;
    .breads {
      font-weight: bold;
    }
    .course-header {
      .course-header_rating {
        color: rgb(246, 156, 8);
        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
      .course-header_tags {
        .course-header_tags-item {
          height: 100%;
          margin-right: 0.8rem;
          display: flex;
          align-items: center;
          img {
            margin-right: 0.8rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .banner-container {
    width: 118rem;
    padding: 0 4.8rem;
    .course-header {
      width: 70rem;
    }
  }
}

@media (min-width: 1080px) and (max-width: 1200px) {
  .banner-container {
    padding: 0 4.8rem;
    width: 100%;
    .course-header {
      width: 60rem;
    }
  }
}

@media (min-width: 1080px) {
  .banner {
    background-color: rgb(28, 29, 31);
    color: #fff;
    .breads {
      color: var(--banner-dark-inverse-color);
    }
    .right-dark,
    .icon-dark {
      display: block;
    }
    .right-light,
    .icon-ligt {
      display: none;
    }
    .ud-link-label {
      color: var(--banner-dark-inverse-color) !important;
    }
  }
}

@media (max-width: 1080px) {
  .banner {
    background-color: rgb(255, 255, 255);
    color: var(--primary-color);
    .banner-container {
      width: 60rem;
      margin: 0 auto !important;
      .breads {
        color: var(--banner-light-inverse-color);
      }
      .course-header_tags {
        flex-direction: column;
        align-items: flex-start;
        .course-header_tags-item {
          margin-bottom: 0.8rem;
        }
      }
      .right-dark,
      .icon-dark {
        display: none;
      }
      .right-light,
      .icon-ligt {
        display: block;
      }
    }
  }
}

@media (min-width: 800px) {
  .banner {
    margin-top: 7.2rem;
    padding: 3.2rem 0;
  }
}

@media (min-width: 500px) and (max-width: 800px) {
  .banner {
    margin-top: 5.6rem;
    padding: 3.2rem 0;
  }
}

@media (max-width: 500px) {
  .banner {
    margin-top: 5.6rem;
    .banner-container {
      width: 100%;
      padding-top: 2.4rem;
      & > img {
        border: none !important;
      }
      .breads,
      .course-header {
        margin: 0 2.4rem;
      }
    }
  }
}
</style>
