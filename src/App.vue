<template>
  <TheNavigation />
  <div class="container">


    <RouterView class="view left-sidebar" name="leftsidebar"> </RouterView>
    <Transition name="fade" mode="out-in">
      <Component :key="$route.path"></Component>
    </Transition>


    <RouterView class="main-view"></RouterView>
    <Transition name="fade" mode="out-in">
      <Component :key="$route.path" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<style lang="css" scoped>
/* name=slide mode =out-in*/

/* .slide-enter-active,
.slide-leave-active {
  Transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30)
} */

/* .moveUp-enter-active {
  animation: fadeIn 0.6s ease-in-out
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5
  }

  100% {
    opacity: 1
  }


}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in-out
}

@keyframes moveUp {
  0% {
    opacity: 0
  }

  100% {
    transform: translateY(-200px);
  }

} */

/**  fade */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;

}

.fade-enter,
.fade-leave-to {
  opacity: 0;

}

.container {
  display: flex;
}

.left-sidebar {
  width: 80%;
}

.main-view {
  width: 100%;
}
</style>