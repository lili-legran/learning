let body = document.querySelector('body');
let hintContainer;

document.addEventListener('mouseover', function (event) {
  let target = event.target;

  if (!target.dataset.tooltip) {
    return;
  } else {
    hintContainer = document.createElement('div');
    let hint = hintContainer.innerText = target.dataset.tooltip;
    console.log(hint);
    hintContainer.classList.add("tooltip");
    body.appendChild(hintContainer);
  }

});

document.addEventListener('mouseout', function (event) {
  hintContainer.style.display = 'none';
});
