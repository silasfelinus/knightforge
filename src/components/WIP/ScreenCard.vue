<template>
  <q-card class="screen-card">
    <q-toolbar>
      <q-toolbar-title>{{ id }}</q-toolbar-title>
    </q-toolbar>
    <q-card-section>
      <div class="card-content">
        <q-input v-model="name" label="Name" />
        <splash-image />
        <p class="description">{{ description }}</p>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import SplashImage from '../screenfx/SplashImage.vue';

export default defineComponent({
  name: 'ScreenCard',
  components: {
    SplashImage,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  setup() {
    const name = ref('');

    return {
      name,
    };
  },
});
</script>
<style scoped>
:root {
  --card-height: 65vh;
  --card-width: calc(var(--card-height) / 1.5);
  --rotate: 132deg;
}

body {
  min-height: 100vh;
  background: #212534;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}

.screen-card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  font-family: cursive;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
}

q-card-section {
  flex: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.description {
  margin-top: 1rem;
}

.screen-card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}

.screen-card:hover:before,
.screen-card:hover:after {
  animation: none;
  opacity: 0;
}

.screen-card::before,
.screen-card::after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  animation: spin 2.5s linear infinite;
}

.screen-card::before {
  top: -1%;
  left: -2%;
}

.screen-card::after {
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  opacity: 1;
  transition: opacity 0.5s;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

a {
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
}
</style>
