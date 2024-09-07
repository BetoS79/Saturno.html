
const btnModal = document.getElementById('btnModal');
const modal = document.getElementById('modal');


btnModal.addEventListener('click', () => {
  modal.style.display = 'block';
});


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}