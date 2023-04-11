<template>
  <div>
    <h1>Variable Editor</h1>
    <div v-for="section in sections" :key="section.name">
      <h2>{{ section.name }}</h2>
      <div v-for="variable in section.variables" :key="variable.name">
        <label :for="variable.name">{{ variable.name }}:</label>
        <input
          :type="variable.type === 'color' ? 'color' : 'text'"
          :id="variable.name"
          v-model="variable.value"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scssContent: `
        // Import colors
        @import './colors.scss';

        // Colors
        $primary: #239c8e;
        $secondary: $rose-petal;
        $accent: #8b249c;
        $dark: #332b2b;
        $dark-page: #1a1a1a;
        $positive: #adffc0;
        $negative: #b34e00;
        $info: #c4dd3a;
        $warning: #e8b12d;
        $text: #000000;
        $light-text: #111111;
        $background: #ffffff;

        // Typography
        $font-family: 'Roboto', sans-serif;
        $font-size-base: 16px;

        // Spacing
        $spacing-base: 8px;

        // Breakpoints
        $small: 600px;
        $medium: 960px;
        $large: 1280px;
      `,
      sections: [],
    };
  },
  mounted() {
    this.parseScss();
  },
  methods: {
    parseScss() {
      const sectionRegex = /\/\/\s*(.+)\n((?:\$.+;)+)/g;
      const variableRegex = /\$([\w-]+):\s*(.+);/g;
      const colorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

      const sections = [...this.scssContent.matchAll(sectionRegex)];
      const parsedSections = sections.map((section) => {
        const sectionName = section[1];
        const variables = [...section[2].matchAll(variableRegex)].map(
          (variable) => {
            const name = variable[1];
            const value = variable[2];
            const type = colorRegex.test(value) ? 'color' : 'text';
            return { name, value, type };
          }
        );

        return { name: sectionName, variables };
      });

      this.sections = parsedSections;
    },
  },
};
</script>
