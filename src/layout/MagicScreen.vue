<template>
  <div class="q-pa-md">
    <q-draggable
      :prevent-scroll="true"
      :scroll-target="scrollContainer"
      @drag="onDrag"
    >
      <q-resizable
        :prevent-scroll="true"
        :min-width="50"
        :min-height="50"
        @resize="onResize"
      >
        <div
          ref="magicScreen"
          class="magic-screen bg-primary text-white text-center q-gutter-md"
          :style="styleObject"
        >
          <p>Magic Screen</p>
        </div>
      </q-resizable>
    </q-draggable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollContainer: null,
      styleObject: {
        width: '200px',
        height: '100px',
      },
    };
  },
  mounted() {
    this.scrollContainer = this.$refs.magicScreen.parentElement.parentElement;
  },
  methods: {
    onDrag(_, event) {
      this.styleObject.left = event.left + 'px';
      this.styleObject.top = event.top + 'px';
    },
    onResize(_, event) {
      this.styleObject.width = event.width + 'px';
      this.styleObject.height = event.height + 'px';
    },
  },
};
</script>

<style scoped>
.magic-screen {
  border: 2px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
</style>
