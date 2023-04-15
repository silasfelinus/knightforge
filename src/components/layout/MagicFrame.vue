<!-- MagicFrame.vue -->
<template>
  <div class="magic-frame">
    <div class="magic-frame__border">
      <q-icon name="add" @click="createGameScreen" />
      <q-icon name="remote" @click="createMagicRemote" />
      <q-icon name="lava_lamp" @click="setBackground('lavaLamp')" />
      <q-icon name="rain_effect" @click="setBackground('rainEffect')" />
      <q-icon name="soap_bubbles" @click="setBackground('soapBubbles')" />
      <q-icon name="splash_image" @click="setBackground('splashImage')" />
      <q-icon
        name="under_construction"
        @click="setBackground('underConstruction')"
      />
    </div>
    <div class="magic-frame__content" :class="backgroundClass">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

interface GameScreen {
  id: string;
  preset: string;
}

export default defineComponent({
  name: 'MagicFrame',
  setup() {
    const router = useRouter();
    const gameScreens: GameScreen[] = ref([]);
    const magicRemote = ref(null);
    const backgroundType = ref('');

    const backgroundClass = computed(() => {
      return `magic-frame__content--${backgroundType.value}`;
    });

    function createGameScreen() {
      const newScreenId = uuidv4();
      gameScreens.value.push({ id: newScreenId, preset: 'game-screen' });
      router.push({ name: 'GameScreen', params: { id: newScreenId } });
    }

    function createMagicRemote() {
      if (!magicRemote.value) {
        const newRemoteId = uuidv4();
        magicRemote.value = { id: newRemoteId, preset: 'magic-remote' };
        router.push({ name: 'MagicRemote', params: { id: newRemoteId } });
      }
    }

    function setBackground(newBackgroundType: string) {
      backgroundType.value = newBackgroundType;
    }

    return {
      gameScreens,
      magicRemote,
      backgroundType,
      backgroundClass,
      createGameScreen,
      createMagicRemote,
      setBackground,
    };
  },
});
</script>

<style lang="scss"></style>
