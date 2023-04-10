<!-- StatusLight.vue - A reusable status light indicator component.
     - Props: isActive (Boolean) - Determines if the light is on or off.
-->

<template>
  <div class="status-light">
    <div :class="{ 'light-on': isActive, 'light-off': !isActive }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatusLight',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.status-light {
  .light-on,
  .light-off {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .light-on {
    background-color: green;
  }

  .light-off {
    background-color: red;
  }
}
</style>
