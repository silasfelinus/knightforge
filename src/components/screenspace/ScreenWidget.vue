<template>
  <div class="screen-widget">
    <component :is="currentComponent" v-bind="currentProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import TextInput from '../labspace/TextInput.vue';
import SplashViewer from '../screenspace/SplashViewer.vue';
import ChatWidget from '../playspace/ChatWidget.vue';
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
    SplashViewer,
    ChatWidget,
    // ... other components
  },
  setup(props) {
    const currentComponent = computed(() => {
      switch (props.preset) {
        case 'TextInput':
          return 'TextInput';
        case 'SplashViewer':
          return 'SplashViewer';
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

