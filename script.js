const toggleSwitch = document.getElementById('theme-toggle');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
