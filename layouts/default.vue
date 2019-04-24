<template>
  <div>
    <DotCursor/>
    <Header/>
    <nuxt class="wrapper" />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import DotCursor from '~/components/DotCursor.vue'
  export default{

    components: {
      Header,
      Footer,
      DotCursor
    }

  }

</script>

<style lang="scss">

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: black;
  cursor: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

a {
  text-decoration: none;
  color: black;
}

strong, b {
  font-weight: 400;
}

.link {
  font-weight: 400;
}

.btn {
  border:none;
  color: black;
  background: white;
  padding: .75rem 2rem;
  font-size: .85rem;
  border-radius: .25rem;
  display: inline-block;
  margin: .25rem;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  transform: none;
  font-family: inherit;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out, transform .15s ease-in-out;

  &:hover,
  &:active,
  &:focus {
      box-shadow: 0 7px 20px rgba(0,0,0,0.15);
      transform: translateY(-1px);
      outline: none;
  }

  &--accent {
     color: white;
     background: #2196F3;
  }
}

.container {
  width: 100%;
  max-width: 1170px;
  padding: 0 1rem;
  margin: 0 auto;
}
.wrapper {
  margin-top: 4.4rem;
  background: white;
}
.well {
  padding: 1rem;
  background: #fafafa;

  &-text {
    text-align: center;
    font-size: .9rem;
    font-weight: 300;
    line-height: 1;
  }
}
.heading-1 {
    font-size: 5rem;
    letter-spacing: 2px;
    font-weight: 100;
    line-height: 1;
    margin-bottom: 2rem;

    &:nth-letter(3) {
      font-weight: 300;
    }
}
.text {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 1rem;

  &-centered {
    text-align: center;
  }
}
.section {
    min-height: 70vh;
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid #eee;

  &-centered {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

    &--hero {
      background-image: url(~assets/img/main.png);
    }

    &--dark {
      background: black;
      color: white;
    }
  
}

.hero {
  width: 100%;
  max-width: 768px;

  &-text {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
}

</style>
