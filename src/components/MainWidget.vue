<template>
  <div
    :class="[
      'main-widget',
      { 'collapsed-right': collapsedRight, 'collapsed-left': collapsedLeft },
    ]"
  >
    <!-- Main widget content -->
    <q-img :src="randomSecretImage" alt="Secret Image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
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

    return {
      randomSecretImage,
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
</style>
