<template>
  <div class="navigation-widget">
    <q-card v-for="(preset, index) in presets" :key="index" class="q-ma-md">
      <q-card-section>
        <div class="text-h6">{{ preset.name }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          label="Change Preset"
          @click="$emit('changePreset', preset.target)"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationWidget',
  data() {
    return {
      presets: [
        {
          name: 'Left Sidebar',
          target: { side: 'left', preset: 'SidebarWidgetPreset2' },
        },
        {
          name: 'Main Widget',
          target: { side: 'main', preset: 'MainWidgetPreset3' },
        },
        {
          name: 'Right Sidebar',
          target: { side: 'right', preset: 'SidebarWidgetPreset4' },
        },
      ],
    };
  },
});
</script>

<style scoped>
.navigation-widget {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
