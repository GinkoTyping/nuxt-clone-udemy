<template>
  <Header />
  <Banner />
  <Popover />
  <div class="page-container h-[2000px] max-w-[108rem] my-0 mx-auto pt-[3.2rem]">
    <div class="content-container max-w-[70rem] max-[1180px]:mx-[4.8rem] max-[1180px]:w-[60rem]">
      <ContentLearnList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 1080px) {
  .page-container {

    .content-container {
      margin: 0 auto;
    }
  }
}

@media (max-width: 600px) {
  .content-container {
    width: auto;
    margin: 0 2.4rem !important;
  }
}

</style>