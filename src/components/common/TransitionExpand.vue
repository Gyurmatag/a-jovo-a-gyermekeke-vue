<template>
  <transition
    name="expand"
    mode="in-out"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot/>
  </transition>
</template>

<script>
export default {
  name: 'TransitionExpand',

  setup() {
    const enter = (element) => {
      const { width } = getComputedStyle(element);

      // eslint-disable-next-line no-param-reassign
      element.style.width = width;
      // eslint-disable-next-line no-param-reassign
      element.style.position = 'absolute';
      // eslint-disable-next-line no-param-reassign
      element.style.visibility = 'hidden';
      // eslint-disable-next-line no-param-reassign
      element.style.height = 'auto';

      const { height } = getComputedStyle(element);

      // eslint-disable-next-line no-param-reassign
      element.style.width = null;
      // eslint-disable-next-line no-param-reassign
      element.style.position = null;
      // eslint-disable-next-line no-param-reassign
      element.style.visibility = null;
      // eslint-disable-next-line no-param-reassign
      element.style.height = 0;

      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.height = height;
      });
    };

    const afterEnter = (element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.height = 'auto';
    };

    const leave = (element) => {
      const { height } = getComputedStyle(element);

      // eslint-disable-next-line no-param-reassign
      element.style.height = height;

      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.height = 0;
      });
    };

    return {
      enter,
      afterEnter,
      leave,
    };
  },
};
</script>

<style scoped>
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>

<style>
  .expand-enter-active,
  .expand-leave-active {
    transition: height 1s ease-in-out;
    overflow: hidden;
  }
  .expand-enter,
  .expand-leave-to {
    height: 0;
  }
</style>
