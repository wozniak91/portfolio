<template>
  <nav class="nav">
    <div class="nav-content" v-scroll-spy-active v-scroll-spy-link>
      <a class="nav-link">Home</a>
      <a class="nav-link">Projekty</a>
      <a class="nav-link">Kontakt</a>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {

  &-link {
    padding: 1rem;
    font-weight: 500;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: .2s ease;
    color: #aaa;
    display: inline-block;

    &.active {
      color: black;
    }
  }
}
</style>
