<template>
  <div class="screen-widget">
    <component :is="currentComponent" v-bind="currentProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import TextInput from './labspace/TextInput.vue';
import SplashWidget from './playspace/SplashWidget.vue';
import ChatWidget from './playspace/ChatWidget.vue';
// ... import other components

export default defineComponent({
  name: 'ScreenWidget',
  props: {
    side: String,
    preset: String,
    visible: Boolean,
  },
  components: {
    TextInput,
    SplashWidget,
    ChatWidget,
    // ... other components
  },
  setup(props) {
    const currentComponent = computed(() => {
      switch (props.preset) {
        case 'TextInput':
          return 'TextInput';
        case 'SplashScreen':
          return 'SplashScreen';
        case 'ChatWidget':
          return 'ChatWidget';
        // ... other cases
        default:
          return 'DefaultComponent'; // Replace with the actual component name
      }
    });

    const currentProps = computed(() => {
      // Add any logic to compute the current props needed for the component
      return {};
    });

    return {
      currentComponent,
      currentProps,
    };
  },
});
</script>

<style lang="scss" scoped>
.screen-widget {
  // Add any necessary styling for the screen widget component
}
</style>
