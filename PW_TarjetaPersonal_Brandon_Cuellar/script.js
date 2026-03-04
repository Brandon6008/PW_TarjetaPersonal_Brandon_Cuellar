// 1. Botón para cambiar tema (Claro/Oscuro)
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// 2. Botón para mostrar/ocultar la lista de intereses
const toggleInterestsBtn = document.getElementById('toggleInterests');
const interestsSection = document.getElementById('interestsSection');

toggleInterestsBtn.addEventListener('click', () => {
  if (interestsSection.style.display === "none") {
    interestsSection.style.display = "block";
  } else {
    interestsSection.style.display = "none";
  }
});

// 3. Mensaje dinámico al pasar el mouse por el nombre
const userName = document.getElementById('Sneyder');
userName.addEventListener('mouseover', () => {
  userName.innerText = "¡Bienvenido a mi perfil!";
});

userName.addEventListener('mouseout', () => {
  userName.innerText = "Sneyder"; 
});