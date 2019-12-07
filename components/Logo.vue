<template>
  <div class="logo">
    <!-- <div class="logo-icon">
    </div> -->
    <svg class="logo__img" width="230" height="115" viewBox="0 0 230 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M124.842 0H0L27.0086 115H32.8044L32.6885 114.763L43 88.5L61.5 38L81.5 88.5L92.0378 114.763V115H97.8337L124.842 0Z" fill="black"/>
    <path d="M185.153 65.7933H137.758V115H132V0H175.74C182.384 0.105311 188.659 0.97413 194.565 2.60646C200.471 4.18613 205.601 6.42399 209.957 9.32006C214.386 12.2161 217.856 15.6914 220.366 19.7459C222.95 23.7477 224.242 28.2234 224.242 33.1731C224.242 37.1749 223.393 40.8081 221.695 44.0728C220.071 47.2848 217.782 50.1809 214.829 52.761C211.876 55.3411 208.333 57.6053 204.199 59.5536C200.139 61.5018 195.672 63.1605 190.8 64.5295L230.332 113.894V115H224.242L185.153 65.7933Z" fill="black"/>
    </svg>

  </div>
</template>

<style lang="scss">
.logo {
  // max-width: 40px;
  // display: inline-block;
  // transition: all .2s ease;

  // &-icon {
  //   border-left: 19px solid transparent;
  //   border-right: 19px solid transparent;
  //   border-bottom: 30px solid black;
  // }

  &__img {
    max-width: 60px;
    width: 100%;
    height: auto;
  }

  &--sticky {
    transform: scale(.8);
  }

}
</style>
