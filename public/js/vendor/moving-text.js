moveLetter();
function moveLetter() {
  var textWrapper = document.querySelector('#js-anime-target');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class="letter">$&</span>');

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