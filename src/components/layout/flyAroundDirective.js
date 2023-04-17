import { onMounted, onUnmounted } from 'vue';

const FlyAroundDirective = {
  mounted(el, binding, vnode) {
    const componentInstance = vnode.component.proxy;

    onMounted(() => {
      init();
      animate();
    });

    function init() {
      // ...
    }

    function moveButterfly() {
      // ...
    }

    function animate() {
      // ...
    }
  },
};

export default FlyAroundDirective;
