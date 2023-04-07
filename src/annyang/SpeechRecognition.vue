<template>
  <div class="speech-recognition">
    <!-- You can add additional markup here if needed -->
  </div>
</template>

<script>
import annyang from 'annyang';

export default {
  name: 'SpeechRecognition',
  async mounted() {
    // Load SpeechKITT as an external script
    await this.loadScript('./speechkitt.min.js');

    if (annyang && window.SpeechKITT) {
      const SpeechKITT = window.SpeechKITT;

      // Add our commands to annyang
      annyang.addCommands({
        hello: function () {
          alert('Hello world!');
        },
      });

      // Tell KITT to use annyang
      SpeechKITT.annyang();

      // Define a stylesheet for KITT to use
      SpeechKITT.setStylesheet('./flat.css');

      // Render KITT's interface
      SpeechKITT.vroom();
    }
  },
  methods: {
    loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
