<template>
  <div class="speech-recognition">
    <!-- You can add additional markup here if needed -->
  </div>
</template>

<script>
import annyang from 'annyang';
import SpeechKITT from 'speechkitt';

export default {
  name: 'SpeechRecognition',
  mounted() {
    if (annyang) {
      // Add our commands to annyang
      annyang.addCommands({
        hello: function () {
          alert('Hello world!');
        },
      });

      // Tell KITT to use annyang
      SpeechKITT.annyang();

      // Define a stylesheet for KITT to use
      SpeechKITT.setStylesheet(
        '//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css'
      );

      // Render KITT's interface
      SpeechKITT.vroom();
    }
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
