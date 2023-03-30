<template>
  <div
    :class="[
      'main-widget',
      { 'collapsed-right': collapsedRight, 'collapsed-left': collapsedLeft },
      { 'error-loading-image': errorLoadingImage },
    ]"
  >
    <!-- Main widget content -->
    <q-img :src="randomSecretImage" alt="Secret Image" @error="onError" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { QImg } from 'quasar';

export default defineComponent({
  name: 'MainWidget',
  components: { QImg },
  props: {
    collapsedRight: {
      type: Boolean,
      required: true,
    },
    collapsedLeft: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const randomSecretImage = computed(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      return `/images/secret/secret0${randomNumber}.png`;
    });

    const errorLoadingImage = ref(false);

    function onError() {
      errorLoadingImage.value = true;
      randomSecretImage.value = '/images/splash01.png';
    }

    return {
      randomSecretImage,
      errorLoadingImage,
      onError,
    };
  },
});
</script>

<style lang="scss">
.main-widget {
  flex-grow: 1;
}

.collapsed-right {
  margin-right: 150px; // Adjust the margin to account for the expanded right sidebar
}

.collapsed-left {
  margin-left: 150px; // Adjust the margin to account for the expanded left sidebar
}

.error-loading-image {
  background-color: $warning; // Change the background color when there's an error loading the image
}
</style>
