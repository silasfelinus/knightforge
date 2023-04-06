<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: {
    screenId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      screens: [], // To store your screens
    };
  },
  methods: {
    onScreenDropped() {
      this.$emit('screenDropped', this.screenId);
    },
  },
};
</script>

<style lang="scss">
.magic-screen {
  position: absolute;
  /* Add any other desired styles */
}

.draggable-area {
  background-color: $accent;
}
</style>
