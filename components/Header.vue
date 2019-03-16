<template>
    <header class="header" :class="{'header-sticky' : stickyHeader}">
       <div class="header-container container">
        <logo :class="{'logo-sticky' : stickyHeader}" />
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
			stickyHeader: false,
			menuActive: false,
		}
    },
    components: {
        Logo,
        Navigation,
    },
    created() {
        if (process.browser) {
            this.handleScroll();
            window.addEventListener('scroll', this.handleScroll)
        }
	},
	beforeUpdate () {
        if (process.browser) { 
            window.addEventListener('scroll', this.handleScroll)
        }
	},
	methods: {
		handleScroll () {
			if (window.scrollY >= 50) {
				this.stickyHeader = true
			} else {
				this.stickyHeader = false
			}
		},
	},
}
</script>


<style lang="scss">

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    transition: all .3s cubic-bezier(0.39, 0.58, 0.57, 1);

    &-sticky {
        height: 50px;
        box-shadow: 1px 5px 20px rgba(0,0,0,.05);
    }

    &-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
}

</style>