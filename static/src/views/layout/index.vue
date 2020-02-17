<template>
  <div class="content">
    <!-- <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div> -->
    <transition
      name="fadesd"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="css" scoped>

.content{
  width: 100%;
  height: 100%;
}
.fadesd-enter-active,
.fadesd-leave-active{transition: all .2s ease}
.fadesd-enter,
.fadesd-leave-active{
  opacity: 0
}

</style>
