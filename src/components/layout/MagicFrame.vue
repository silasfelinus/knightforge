<template>
  <div class="magic-frame">
    <div class="magic-frame__border">
      <q-icon name="add" @click="createGameScreen" />
      <q-icon name="remote" @click="createMagicRemote" />
      <template v-for="bgType in backgroundTypes" :key="bgType.type">
        <q-icon :name="bgType.icon" @click="setBackground(bgType.type)" />
      </template>
    </div>
    <div class="magic-frame__content" :class="backgroundClass">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref } from 'vue';
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
    const gameScreens: Ref<GameScreen[]> = ref([]);
    const magicRemote: Ref<GameScreen | null> = ref(null);
    const backgroundType = ref('');

    const backgroundTypes = [
      { icon: 'lava_lamp', type: 'lavaLamp' },
      { icon: 'rain_effect', type: 'rainEffect' },
      { icon: 'soap_bubbles', type: 'soapBubbles' },
      { icon: 'splash_image', type: 'splashImage' },
      { icon: 'under_construction', type: 'underConstruction' },
    ];

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
      backgroundTypes,
    };
  },
});
</script>
<style lang="scss"></style>
1
