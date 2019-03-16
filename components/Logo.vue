<template>
  <div class="logo">
    <div class="logo-icon">
    </div>
  </div>
</template>

<style lang="scss">
.logo {
  max-width: 40px;
  display: inline-block;
  transition: all .2s ease;

  &-icon {
    border-left: 19px solid transparent;
    border-right: 19px solid transparent;
    border-bottom: 30px solid black;
  }

  &-sticky {
    transform: scale(.8);
  }

}
</style>
