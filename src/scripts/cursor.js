document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.getElementById('custom-gif-cursor');
  const links = document.querySelectorAll('a');

  // 1. Update the position of the custom cursor container smoothly
  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  // 2. Loop through links to handle visibility triggers
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      customCursor.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
      customCursor.style.display = 'none';
    });
  });
});