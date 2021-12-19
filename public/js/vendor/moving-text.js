moveLetter();
function moveLetter() {
  const textWrapper = document.querySelector('#js-anime-target');
  textWrapper.innerHTML = textWrapper.textContent.replace(/(\S|\s)/g, '<span class="letter">$&</span>');
  setTimeout(() => {
      textWrapper.style.opacity = 1;
  }, 300);


  // eslint-disable-next-line no-undef
  anime.timeline({loop: false})
    .add({
      targets: '#js-anime-target .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutQuad",
      duration: 1000,
      delay: (el, i) => 500 + 30 * i
  });
}