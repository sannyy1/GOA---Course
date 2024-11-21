const toggleButton = document.getElementById('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Dark Mode';
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleButton.textContent = 'Light Mode';
  }
});

// Default to light mode
body.classList.add('light-mode');
toggleButton.textContent = 'Dark Mode';