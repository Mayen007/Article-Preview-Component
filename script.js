const shareButton = document.getElementById('share-button');
const shareInfo = document.getElementById('share__info');
let shareButtonInfo = document.getElementById('share-button__info');

shareButton.addEventListener('click', () => {
  shareInfo.classList.toggle('visible');
  console.log('Share button clicked');
});

shareButtonInfo.addEventListener('click', () => {
  shareInfo.classList.toggle('visible');
  console.log('Share button info clicked');
});