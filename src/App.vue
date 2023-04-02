<!-- App.vue -->
<template>
  <div id="app"> 
    <img
      class="splash-image"
      src="@/assets/splash/splash01.png"
      alt="Splash Image"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.splash-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
