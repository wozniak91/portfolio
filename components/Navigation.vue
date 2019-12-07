<template>
  <nav class="nav">
    <button class="nav__btn" @click.prevent="toggleMenu" ref="buttton"></button>

    <div :class="['nav__content', {'nav__content--active' : active}]" ref="content">
      <a class="nav__link">Home</a>
      <a class="nav__link">Projects</a>
      <a class="nav__link">Contact</a>
    </div>
  </nav>
</template>

<script>
import { TimelineLite } from 'gsap';

export default {
  name: 'Navigation',
  mounted() {
    const { content } = this.$refs;
    this.tl = new TimelineLite();
  },
  data() {
    return {
      active: false,
      tl: null,
    }
  },
  methods: {
    toggleMenu() {
      const { content } = this.$refs;
      this.tl.to(content, {x: 0}).play()
    }
  }
}
</script>

<style lang="scss">
.nav {

  &__content {
    width: 100vh;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    transform: translateX(100%);
    transition: transform .25s ease-in-out;

    // &--active {
    //   transform: translateX(0);
    // }

  }

  &__btn {
    width: 3rem;
    height: 3rem;
    border: none;
    background: none;
    padding: .5rem;
    transition: transform .25s ease-in-out;

    &::before,
    &::after {
      content: '';
      height: 2px;
      display: block;
      margin: 10px 0;
      background: black;
    }

    &::before {
      width: 100%;
    }

     &::after {
      width: 90%;
    }

  }

  &__link {
    padding: 1rem 2rem;
    font-weight: 600;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: .2s ease;
    color: black;
    display: block;

    &.active {
      color: black;
    }
  }
}
</style>
