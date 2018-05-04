export const randomBackgroundImage = () => {
  const bgImages = ['bg00', 'bg01', 'bg02', 'bg03', 'bg04', 'bg05', 'bg06', 'bg07'];

  const imageEl = document.getElementsByClassName('bg')[0];

  let randIdx = Math.floor(Math.random() * 8);
  let imageClass = bgImages[randIdx];

  while (imageClass === imageEl.classList[1]) {
    randIdx = Math.floor(Math.random() * 8);
    imageClass = bgImages[randIdx];
  }

  imageEl.setAttribute('class', 'bg  ' + imageClass);
};
