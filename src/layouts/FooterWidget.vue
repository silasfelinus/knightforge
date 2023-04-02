<template>
  <footer>
    <div class="color-picker">
      <template v-for="(color, index) in colors" :key="index">
        <label :for="color.name">{{ color.label }}:</label>
        <input type="color" :id="color.name" v-model="color.value" @change="updateColor(color.name, color.value)" />
      </template>
    </div>
  </footer>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'FooterWidget',
  setup() {
    const colors = reactive([
      { name: 'primary', label: 'Primary Color', value: '#f0c3d3' },
      { name: 'secondary', label: 'Secondary Color', value: '#239c8e' },
      { name: 'accent', label: 'Accent Color', value: '#8b249c' },
      { name: 'dark', label: 'Dark Color', value: '#332b2b' },
      { name: 'dark-page', label: 'Dark Page Color', value: '#1a1a1a' },
      { name: 'positive', label: 'Positive Color', value: '#adffc0' },
      { name: 'negative', label: 'Negative Color', value: '#b34e00' },
      { name: 'info', label: 'Info Color', value: '#c4dd3a' },
      { name: 'warning', label: 'Warning Color', value: '#e8b12d' },
    ]);

    function updateColor(colorName, colorValue) {
      document.documentElement.style.setProperty(`--${colorName}`, colorValue);
    }

    return {
      colors,
      updateColor,
    };
  },
};
</script>

