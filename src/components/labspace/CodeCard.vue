<!-- CodeCard.vue -->
<template>
  <q-card class="api-processor-card" :class="{ large: large }">
    <q-avatar class="avatar">
      <img :src="avatar" />
    </q-avatar>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ description }}</div>
    </q-card-section>
    <q-card-section class="fields">
      <!-- You can loop through the fields array and display them in a custom format or style -->
      <div v-for="(field, index) in fields" :key="index">{{ field }}</div>
    </q-card-section>
    <div
      class="port input-port"
      ref="inputPort"
      @mousedown="emitPortPosition('input', $event)"
    ></div>
    <div
      class="port output-port"
      ref="outputPort"
      @mousedown="emitPortPosition('output', $event)"
    ></div>
    <!-- Add more sections or customize the look and feel of the card -->
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QAvatar, QCard, QCardSection } from 'quasar';

export default defineComponent({
  name: 'CodeCard',
  components: { QAvatar, QCard, QCardSection },
  props: {
    avatar: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const inputPort = ref(null);
    const outputPort = ref(null);

    function emitPortPosition(type, event) {
      event.stopPropagation();
      const port = type === 'input' ? inputPort.value : outputPort.value;
      const rect = port.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      emit('portPosition', { type, x, y });
    }

    return {
      inputPort,
      outputPort,
      emitPortPosition
    };
  }
});
</script>

<style scoped lang="scss">
.api-processor-card {
  width: 200px;
  margin: 8px;
  cursor: pointer;
}
.api-processor-card.large {
  width: 400px;
}
.avatar {
  position: absolute;
  top: -24px;
  left: 16px;
}
.port {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: $accent;
}
.input-port {
  bottom: 8px;
  left: 8px;
}
.output-port {
  bottom: 8px;
  right: 8px;
}
</style>
