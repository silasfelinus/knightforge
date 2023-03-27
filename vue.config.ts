module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/_presets.scss";
          @import "@/styles/_colors.scss";
        `,
      },
    },
  },
};
