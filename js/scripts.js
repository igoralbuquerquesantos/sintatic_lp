document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('.solutions-logos img');
  const container = document.querySelector('.solutions-logos');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    logos.forEach(logo => {
      const logoRect = logo.getBoundingClientRect();
      const logoX = logoRect.left + logoRect.width / 2 - rect.left;
      const logoY = logoRect.top + logoRect.height / 2 - rect.top;

      const dx = logoX - mouseX;
      const dy = logoY - mouseY;
      const distance = Math.sqrt(dx*dx + dy*dy);

      const minDistance = 80; // distância mínima para fugir
      if(distance < minDistance) {
        const moveX = (dx / distance) * 30; // intensidade
        const moveY = (dy / distance) * 30;
        logo.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
      } else {
        logo.style.transform = `translate(0, 0) scale(1)`;
      }
    });
  });
});
