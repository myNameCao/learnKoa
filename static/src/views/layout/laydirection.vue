<template>
  <div class="content">
    <transition
      :name="viewTransition"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    viewTransition () {
      return 'pop-out' // TODO:后期全局要添加方向
    }
  }
}
</script>

<style lang="css">
.content{
  width: 100%;
  height: 100%;
  position: relative;
}
.pop-out-enter-active,
.pop-out-leave-active,
.pop-in-enter-active,
.pop-in-leave-active {
  will-change: transform;
  transition: all 200ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
