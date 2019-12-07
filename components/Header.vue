<template>
    <header class="header" :class="{'header--sticky' : deltaY < 0}">
       <div class="header__container container">
        <logo :class="{'logo-sticky' : deltaY < 0}" />
        <navigation/>
       </div>
        
    </header>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import Navigation from '~/components/Navigation.vue'

    export default {
	name: 'Header',
	data() {
		return {
			menuActive: false,
		}
    },
    props: {
        deltaY: {
            default: 0,
            type: Number
        }
    },
    components: {
        Logo,
        Navigation,
    },
}
</script>


<style lang="scss">

.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    background: white;
    padding: 3.5rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    transition: all .3s cubic-bezier(0.39, 0.58, 0.57, 1);

    &--sticky {
        padding: 1rem 0;
        box-shadow: 1px 5px 20px rgba(0,0,0,.05);
    }

    &__container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
}

</style>