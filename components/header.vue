<template>
  <header
    class="w-full items-center h-[7.2rem] px-[2.4rem] max-[800px]:hidden min-[800px]:flex relative z-50"
  >
    <img
      class="logo"
      src="~/public/images/logo-udemy.svg"
      alt=""
      srcset=""
    />
    <button class="nav-button ud-btn-large text-primary">
      <span>Categories</span>
    </button>
    <div class="search flex">
      <button class="ud-icon-large flex items-center justify-center">
        <img :src="SearchIcon" alt="" class="ud-icon-medium" />
      </button>
      <input type="text" placeholder="Search for anything" />
    </div>
    <button
      class="nav-button ud-btn-large text-primary max-[1080px]:hidden min-[1080px]:block"
    >
      <span>Udemy Business</span>
    </button>
    <button
      class="nav-button ud-btn-large text-primary max-[1080px]:hidden min-[920px]:block"
    >
      <span>Teach on Udemy</span>
    </button>
    <button class="ud-icon-large flex items-center justify-center">
      <img :src="CartIcon" class="ud-icon-medium" />
    </button>
    <button class="ud-btn-medium action-btn min-w-[8rem]">Login in</button>
    <button class="ud-btn-medium action-btn min-w-[8rem] reverse">
      Sign up
    </button>
    <button class="ud-btn-medium action-btn w-[4rem] !px-[1rem]">
      <img :src="EarthIcon" class="w-[2rem]" />
    </button>
  </header>
  <header
    class="w-full h-[6.2rem] px-[1.6rem] py-[0.8rem] max-[1080px]:hidden !bg-black fixed left-0 top-0 z-10"
  >
    <p class="text-white text-[1.6rem] font-bold mb-[.4rem]">
      The Complete Python Bootcamp From Zero to Hero in Python
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
      <span
        class="mr-[.8rem] ud-link-label !text-[var(--banner-dark-inverse-color)]"
        >(523,484 ratings)</span
      >
      <span class="text-[#fff]">1,989,567 students</span>
    </div>
  </header>

  <!-- smaller than 1080px -->
  <header
    class="w-full items-center h-[5.6rem] px-[0.4rem] min-[800px]:hidden max-[800px]:flex"
  >
    <button class="ud-icon-large flex items-center justify-center">
      <img :src="Menu" class="ud-icon-medium" />
    </button>
    <button class="ud-icon-large flex items-center justify-center"></button>
    <div class="flex justify-center items-center flex-1">
      <img
        class="logo !w-[7.5rem]"
        src="~/public/images/logo-udemy.svg"
        alt=""
        srcset=""
      />
    </div>
    <button class="ud-icon-large flex items-center justify-center">
      <img :src="SearchDarkerIcon" class="ud-icon-medium" />
    </button>
    <button class="ud-icon-large flex items-center justify-center">
      <img :src="CartIcon" class="ud-icon-medium" />
    </button>
  </header>
</template>

<script lang="ts" setup>
import SearchIcon from "~/assets/icons/search.svg";
import SearchDarkerIcon from "~/assets/icons/search_darker.svg";
import CartIcon from "~/assets/icons/cart.svg";
import EarthIcon from "~/assets/icons/earth.svg";
import Menu from "~/assets/icons/menu.svg";
import SartIcon from "~/assets/icons/star.svg";
import SartHalfIcon from "~/assets/icons/star_half.svg";
</script>

<style lang="scss" scoped>
.course-header_rating {
  color: rgb(246, 156, 8);
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
}
header {
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.5);
  background-color: #fff;
  .logo {
    width: 91px;
    padding-right: 8px;
  }
  .nav-button {
    padding: 0 1.2rem;
    min-width: auto;
    span {
      font-size: 1.4rem;
      line-height: 1.4;
      &:hover {
        color: #5022c3;
      }
    }
  }
  .search {
    border-radius: 100rem;
    padding-right: 2.4rem;
    margin: 0 1.2rem;
    flex-grow: 1;
    width: auto;
    height: 4.8rem;
    border: 1px solid var(--primary-color);
    background-color: #f7f9fa;
    input {
      border: 0;
      outline: none;
      font-size: 1.4rem;
      line-height: 1.4;
      width: 100%;
      background-color: transparent;
    }
  }
  .action-btn {
    margin-left: 0.8rem;
    padding: 0 1.2rem;
    border: 1px solid var(--primary-color);
    font-weight: bold;
    &.reverse {
      background-color: black;
      color: rgb(255, 255, 255);
    }
  }
}
</style>
