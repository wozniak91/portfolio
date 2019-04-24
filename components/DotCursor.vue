<template>
    <div class="cursor" :style="position">
        <div class="cursor__bg"></div>
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
            }
        }
    },
    mounted() {
        document.addEventListener('mousemove', (e) => {
            this.position.left = `${e.clientX}px`;
            this.position.top = `${e.clientY}px`;
        })
    }
}
</script>


<style lang="scss" scoped>
.cursor {
    position: fixed;
    text-align: center;
    width: 2rem;
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
    }
}
</style>