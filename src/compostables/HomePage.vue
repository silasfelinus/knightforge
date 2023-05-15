<template>
  <div class="homepage">
    <div class="timer-wrapper">
      <span class="timer">{{ timer }} seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      timer: 0,
    };
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        this.timer++;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.homepage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #4caf50;
}

.timer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}
</style>
