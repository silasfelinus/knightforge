<template>
  <div class="custom-sidebar" :class="side">
    <button class="toggle-btn" @click="toggleCollapse">
      <span v-if="side === 'left'">►</span>
      <span v-else>◄</span>
    </button>
    <div
      class="sidebar-content"
      :class="{
        collapsed: isCollapsed,
        'partially-collapsed': isPartialCollapsed,
      }"
    >
      <component-frame :component="component">
        <slot></slot>
      </component-frame>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ComponentFrame from './ComponentFrame.vue';

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
      required: true,
    },
  },
  components: {
    ComponentFrame,
  },
  setup(props) {
    const isCollapsed = ref(!props.isCollapsible);
    const isPartialCollapsed = ref(false);

    const toggleCollapse = () => {
      if (!props.hasToggle) return;

      if (props.isPartialCollapsible) {
        isPartialCollapsed.value = !isPartialCollapsed.value;
      } else {
        isCollapsed.value = !isCollapsed.value;
      }
    };

    return {
      isCollapsed,
      isPartialCollapsed,
      toggleCollapse,
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
}

.left.toggle-btn {
  right: -20px;
}

.right.toggle-btn {
  left: -20px;
}

.collapsed .sidebar-content {
  transform: scaleX(0);
}

.partially-collapsed .sidebar-content {
  transform: scaleX(0.5);
}
</style>
