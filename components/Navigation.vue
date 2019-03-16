<template>
  <nav class="nav">
    <div class="nav-content" v-scroll-spy-active v-scroll-spy-link>
      <a class="nav-link">O mnie</a>
      <a class="nav-link">Portfolio</a>
      <a class="nav-link">Kontakt</a>
    </div>
  </nav>
</template>

<style lang="scss">
.nav {

  &-link {
    padding: 1rem;
    font-weight: 300;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: .2s ease;
    color: #aaa;

    &.active {
      color: black;
    }
  }
}
</style>
