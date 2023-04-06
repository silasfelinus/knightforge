export function animateButterfly(butterfly) {
  const leftWing = butterfly.childNodes[0];
  const rightWing = butterfly.childNodes[1];

  let animationFrame;

  function update() {
    // Simple wing flapping animation by modifying the 'd' attribute of the wing paths
    // You can replace this with a more complex animation
    const t = Date.now() / 1000;
    const offsetY = 10 * Math.sin(10 * t);
    const leftWingPath = `M0,0 C50,${-50 + offsetY} 100,0 50,${50 + offsetY} Z`;
    const rightWingPath = `M0,0 C50,${50 - offsetY} 100,0 50,${
      -50 - offsetY
    } Z`;

    leftWing.setAttribute('d', leftWingPath);
    rightWing.setAttribute('d', rightWingPath);

    animationFrame = requestAnimationFrame(update);
  }

  update();

  return () => {
    // Cleanup function to stop the animation
    cancelAnimationFrame(animationFrame);
  };
}

export function updateButterflyPosition(butterfly, x, y) {
  // Update the butterfly's position based on the mouse coordinates
  butterfly.setAttribute('transform', `translate(${x - 50}, ${y - 25})`);
}
