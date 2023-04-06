export function createButterflySvg() {
  const butterfly = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  // You can replace these paths with a more detailed butterfly design
  const leftWingPath = 'M0,0 C50,-50 100,0 50,50 Z';
  const rightWingPath = 'M0,0 C50,50 100,0 50,-50 Z';

  const leftWing = createWing(leftWingPath);
  const rightWing = createWing(rightWingPath);
  rightWing.setAttribute('transform', 'translate(100, 0)');

  butterfly.appendChild(leftWing);
  butterfly.appendChild(rightWing);

  return butterfly;
}

function createWing(pathData) {
  const wing = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  wing.setAttribute('d', pathData);
  wing.setAttribute('fill', 'rgba(255, 0, 0, 0.5)');
  return wing;
}
