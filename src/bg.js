export function initBg(container, mode = 'dark') {
  const isLight = mode === 'light';
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    return () => {};
  }

  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  const palette = {
    background: isLight ? '#f5f5f3' : '#09090a',
    glow: isLight ? 'rgba(255,255,255,0.56)' : 'rgba(255,255,255,0.54)',
    glowSoft: isLight ? 'rgba(186,192,205,0.14)' : 'rgba(207,213,224,0.08)',
    ring: isLight ? 'rgba(77,83,95,0.18)' : 'rgba(255,255,255,0.16)',
    ringSoft: isLight ? 'rgba(77,83,95,0.08)' : 'rgba(255,255,255,0.06)',
    particle: isLight ? 'rgba(51,56,66,0.72)' : 'rgba(255,255,255,0.72)',
    beam: isLight ? 'rgba(102,109,124,0.06)' : 'rgba(255,255,255,0.045)',
  };

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrame = 0;
  let startTime = performance.now();

  const orbits = [
    { radiusX: 0.18, radiusY: 0.11, lineWidth: 1.4, speed: 0.12, angle: 0.12, dots: [0.08, 0.62] },
    { radiusX: 0.28, radiusY: 0.18, lineWidth: 1, speed: -0.08, angle: -0.22, dots: [0.24, 0.74] },
    { radiusX: 0.38, radiusY: 0.23, lineWidth: 1, speed: 0.06, angle: 0.28, dots: [0.42] },
    { radiusX: 0.48, radiusY: 0.29, lineWidth: 0.8, speed: -0.04, angle: -0.18, dots: [0.16, 0.88] },
  ];

  const resize = () => {
    width = container.clientWidth;
    height = container.clientHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const drawBackground = (centerX, centerY) => {
    context.fillStyle = palette.background;
    context.fillRect(0, 0, width, height);

    const beamGradient = context.createLinearGradient(0, 0, width, 0);
    beamGradient.addColorStop(0, 'rgba(0,0,0,0)');
    beamGradient.addColorStop(0.35, palette.beam);
    beamGradient.addColorStop(0.5, 'rgba(255,255,255,0.02)');
    beamGradient.addColorStop(0.65, palette.beam);
    beamGradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = beamGradient;
    context.fillRect(0, centerY - height * 0.22, width, height * 0.44);

    const orbGlow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height) * 0.18);
    orbGlow.addColorStop(0, palette.glow);
    orbGlow.addColorStop(0.18, palette.glowSoft);
    orbGlow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = orbGlow;
    context.beginPath();
    context.arc(centerX, centerY, Math.max(width, height) * 0.18, 0, Math.PI * 2);
    context.fill();
  };

  const drawCenter = (centerX, centerY, elapsed) => {
    const pulse = 1 + Math.sin(elapsed * 0.7) * 0.04;
    const outerRadius = Math.min(width, height) * 0.03 * pulse;
    const innerRadius = outerRadius * 0.45;

    context.strokeStyle = palette.ring;
    context.lineWidth = 1;
    context.beginPath();
    context.arc(centerX, centerY, outerRadius * 1.7, 0, Math.PI * 2);
    context.stroke();

    const coreGradient = context.createRadialGradient(centerX, centerY, innerRadius * 0.1, centerX, centerY, outerRadius);
    coreGradient.addColorStop(0, palette.glow);
    coreGradient.addColorStop(0.35, palette.glowSoft);
    coreGradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = coreGradient;
    context.beginPath();
    context.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = isLight ? 'rgba(255,255,255,0.58)' : 'rgba(255,255,255,0.48)';
    context.beginPath();
    context.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    context.fill();
  };

  const drawOrbit = (centerX, centerY, orbit, elapsed) => {
    const radiusX = width * orbit.radiusX;
    const radiusY = height * orbit.radiusY;
    const orbitRotation = orbit.angle + elapsed * orbit.speed;

    context.save();
    context.translate(centerX, centerY);
    context.rotate(orbitRotation);
    context.strokeStyle = palette.ring;
    context.lineWidth = orbit.lineWidth;
    context.beginPath();
    context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
    context.stroke();

    context.strokeStyle = palette.ringSoft;
    context.setLineDash([8, 14]);
    context.lineWidth = orbit.lineWidth * 0.8;
    context.beginPath();
    context.ellipse(0, 0, radiusX * 1.05, radiusY * 1.05, 0, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);

    orbit.dots.forEach((dotOffset, dotIndex) => {
      const theta = elapsed * (orbit.speed * 2.6) + dotOffset * Math.PI * 2 + dotIndex * 0.45;
      const x = Math.cos(theta) * radiusX;
      const y = Math.sin(theta) * radiusY;
      const glow = context.createRadialGradient(x, y, 0, x, y, 10);

      glow.addColorStop(0, palette.glow);
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(x, y, 10, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = palette.particle;
      context.beginPath();
      context.arc(x, y, 2.4, 0, Math.PI * 2);
      context.fill();
    });

    context.restore();
  };

  const render = (time) => {
    const elapsed = (time - startTime) / 1000;
    const centerX = width * 0.5;
    const centerY = height * 0.53;

    drawBackground(centerX, centerY);
    orbits.forEach((orbit) => drawOrbit(centerX, centerY, orbit, elapsed));
    drawCenter(centerX, centerY, elapsed);

    animationFrame = window.requestAnimationFrame(render);
  };

  resize();
  animationFrame = window.requestAnimationFrame(render);
  window.addEventListener('resize', resize);

  return () => {
    window.removeEventListener('resize', resize);
    window.cancelAnimationFrame(animationFrame);
    container.removeChild(canvas);
  };
}
