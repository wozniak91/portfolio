<template>
  <div class="App">
    <DotCursor/>
    <Header :deltaY="positionY" />
    <div class="AppWrapper" ref="AppWrapper">
      <nuxt class="wrapper" />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import DotCursor from '~/components/DotCursor.vue'
  export default{

    mounted() {
      this.scrollableContent()
    },
    data() {
      return {
        positionY: 0,
        positionTop: true,
        scrollHeight: 0,
      }
    },
    components: {
      Header,
      Footer,
      DotCursor
    },
    methods: {
      scrollableContent() {

        if (process.client) {
          const { scrollHeight } = this.$refs.AppWrapper;
          const { innerHeight } = window;
          this.scrollHeight = scrollHeight-innerHeight;

          document.addEventListener('wheel', (e) => {
            const { deltaY } = e;
            if(this.positionY - deltaY <= 0) {
              const diff = scrollHeight-innerHeight+deltaY;
              this.positionY -= deltaY;
            } 
          });

        }

      }
    }

  }

</script>

<style lang="scss">

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
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
  cursor: none;
}

a {
  text-decoration: none;
  color: black;
}

strong, b {
  font-weight: 400;
}


// .App {
//   overflow: hidden;
//   height: 100vh;
// }
// .AppWrapper {
//   position: relative;
//   transition: transform .75s ease-in-out;
// }
.link {
  font-weight: 400;
}

.btn {
  border:none;
  color: black;
  position: relative;
  background: white;
  border: 2px solid;
  padding: 1.25rem 3.25rem;
  font-size: .9rem;
  border-radius: .25rem;
  margin: .25rem;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  transform: none;
  font-family: inherit;
  transition: color .15s ease-in-out,background-color .15s ease-in-out, transform .15s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 7px 25px rgba(0,0,0,0.25);
    left: 0;
    top: 0;
    opacity: .8;
    transition: opacity .15s ease-in-out;
  }

  &:hover,
  &:active,
  &:focus {
      
      transform: translateY(-1px);
      outline: none;

      &::before {
        opacity: 1;
      }
  }



  &--secondary {
     color: white;
     background: black;
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
.text {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 1rem;

  &--center {
    text-align: center;
  }
}
.section {
    min-height: 100vh;
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid #eee;

  &--center {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

    &--hero {
      background: url(~assets/img/main.svg) no-repeat 100%;
    }
  
}

.hero {
  padding-top: 10rem;
  padding-bottom: 7rem;

  &__title {
    font-size: 4rem;
    letter-spacing: 2px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 1rem;
  }

  &__text {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    &::after {
      content: "";
      display: inline-block;
      width: .8rem;
      height: 2px;
      background: black;
      animation: line .75s infinite ease-in-out;
    }
  }

}

@keyframes line {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

</style>
