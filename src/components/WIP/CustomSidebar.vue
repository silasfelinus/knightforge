<template>
  <div class="custom-sidebar" :class="side">
    <button class="toggle-btn" :class="side" @click="toggleCollapse">
      <span v-if="side === 'left' && !isCollapsed">►</span>
      <span v-else-if="side === 'left' && isCollapsed">◄</span>
      <span v-if="side === 'right' && !isCollapsed">◄</span>
      <span v-else-if="side === 'right' && isCollapsed">►</span>
    </button>
    <div
      class="sidebar-content"
      :class="{
        collapsed: isCollapsed,
        'partially-collapsed': isPartialCollapsed,
      }"
    >
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  props: {
    side: {
      type: String,
      required: true,
      validator: (value: string) => ['left', 'right'].includes(value),
    },
    isCollapsible: {
      type: Boolean,
      default: false,
    },
    isPartialCollapsible: {
      type: Boolean,
      default: false,
    },
    hasToggle: {
      type: Boolean,
      default: false,
    },
    component: {
      type: String,
      required: false,
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MusicalComponent: () => import('../butterfly/MusicalComponent.vue'),
    // eslint-disable-next-line vue/no-unused-components
    SplashFolder: () => import('../gamescreens/SplashFolder.vue'),
  },
  setup(props) {
    const isCollapsed = ref<boolean>(!props.isCollapsible);
    const isPartialCollapsed = ref<boolean>(true);
    const currentComponent = ref<string | undefined>(props.component);

    const toggleCollapse = () => {
      if (!props.hasToggle) return;

      if (props.isPartialCollapsible) {
        isPartialCollapsed.value = !isPartialCollapsed.value;
      } else {
        isCollapsed.value = !isCollapsed.value;
      }
    };

    onMounted(() => {
      if (!currentComponent.value) {
        if (props.side === 'left') {
          currentComponent.value = 'MusicalComponent';
        } else if (props.side === 'right') {
          currentComponent.value = 'SplashFolder';
        }
      }
    });

    return {
      isCollapsed,
      isPartialCollapsed,
      toggleCollapse,
      currentComponent,
    };
  },
});
</script>

<style scoped>
.custom-sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.sidebar-content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  transition: transform 0.3s;
}

.toggle-btn {
  position: absolute;
  top: 10px;
  cursor: pointer;
  z-index: 1;
}

.left.toggle-btn {
  right: -20px;
}

.right.toggle-btn {
  left: -20px;
}
</style>
