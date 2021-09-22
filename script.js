const countEl = document.getElementById('count');

updateMyVisit();
function updateMyVisit(){
  fetch('https://api.countapi.xyz/update/dwayne/mychannel/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}
