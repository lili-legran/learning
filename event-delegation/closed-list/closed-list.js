let id = document.querySelector('#container');

id.addEventListener('click', function (event) {
  let container = event.target.closest('div');
  container.style.display = "none";
});
