let ul = document.getElementsByTagName('ul')[0];

ul.addEventListener('click', function (event) {
  let target = event.target;
  let closest = event.target.querySelector('ul');
  console.log(target, closest);
  if (closest.hidden) {
    closest.hidden = false;
  } else {
    closest.hidden = true;
  }

});