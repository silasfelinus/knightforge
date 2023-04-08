<template>
  <div class="title-bar">
    <div
      v-for="(letter, index) in letters"
      :key="index"
      class="letter-container"
    >
      <div v-if="index === 1 || index === 7">
        <flower>
          <butterfly v-for="i in 17" :key="i"></butterfly>
        </flower>
      </div>
      <div v-else class="letter">{{ letter }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letters: 'wOnderfOrge'.split(''),
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  display: flex;
}
.title-bar {
  display: flex;
  margin: auto;
  font-family: Arial, sans-serif;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.letter-container {
  position: relative;
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
}
.letter {
  position: absolute;
  top: 0;
  left: 0;
}
flower {
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
butterfly {
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: wheel 4.5s infinite cubic-bezier(0.35, 0, 0.6, 1);
  border: 1px solid white;
  @for $i from 1 through 17 {
    &:nth-child(#{$i}) {
      background: linear-gradient(
        to top,
        white 45%,
        hsl(($i / 17) * 360deg, 70%, 50%) 65%
      );
      $ratio: (18 - $i) / 18;
      width: 100% * $ratio;
      height: 100% * $ratio;
      $rotation: (9 - $i) * 360deg;
      transform: translate(-50%, -50%) rotate($rotation);
    }
  }
}
@keyframes wheel {
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
</style>
