document.querySelectorAll('.guide-figure').forEach(figure => {
  figure.querySelectorAll('.guide-marker').forEach(marker => {
    marker.setAttribute('aria-pressed', 'false');
    marker.addEventListener('click', () => {
      figure.querySelectorAll('.guide-marker').forEach(item => item.setAttribute('aria-pressed', String(item === marker)));
      figure.querySelectorAll('.guide-steps li').forEach(item => item.classList.toggle('active', item.id === marker.dataset.step));
      document.getElementById(marker.dataset.step).scrollIntoView({block: 'nearest', behavior: 'auto'});
    });
  });
  const enlarge = figure.querySelector('.guide-enlarge');
  enlarge.addEventListener('click', () => {
    const expanded = figure.classList.toggle('expanded');
    enlarge.setAttribute('aria-expanded', String(expanded));
    enlarge.textContent = expanded ? 'Standard size' : 'Enlarge screenshot';
  });
});
