<template>
    <div class="cursor">
        <div class="cursor__bg" :class="{'cursor--pulse' : pulse}" v-on:click="animateCursor"></div>
    </div>
</template>

<script>

    export default {
    name: 'DotCursor',
    data() {
        return {
            position: {
                top: 0,
                left: 0,
            },
            pulse: false,
        }
    },
    mounted() {
        document.addEventListener('mousemove', (e) => {
            // this.position.left = `${e.clientX}px`;
            // this.position.top = `${e.clientY}px`;
            this.$el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        })
    },
    methods: {
        animateCursor() {
            this.pulse = true;
        }
    }
}
</script>


<style lang="scss" scoped>
.cursor {
    position: fixed;
    top: 0;
    left:0;
    text-align: center;
    width: 1rem;
    z-index: 1000;
    transform-origin: center center;
    pointer-events: none;
    mix-blend-mode: exclusion;
    transform: translate(-50%,-50%);
    
    &__bg {
        transition: transform .3s ease-in-out;
        backface-visibility: hidden;
        display: block;
        left: 0;
        top: 0;
        mix-blend-mode: exclusion;
        background: #fff;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        // animation: 2s pulse infinite;
    }
}
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.8);
    }
    100% {
        transform: scale(1);
    }
}
</style>