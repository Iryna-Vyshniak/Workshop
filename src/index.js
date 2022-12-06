// 3D scroll
// zSpacing - distance from card to text on z-axis
// lastPos - all elements have animation on start position, when preload page
// mainFrames - main parent element - frame;
// delta - element`s last position with scroll, conditional value, use for animate frames on z-axios; delta become bigger or smaller - depends on scrolling(top or bottom)
// -5.5 - swipe speed
// i - indexCurrentElement

const zSpacing = -1000;
let lastPos = zSpacing / 5;
const mainFrames = document.getElementsByClassName('gallery__frame');
const frames = Array.from(mainFrames);
let zVals = [];

window.onscroll = function () {
  const top = document.documentElement.scrollTop;
  const delta = lastPos - top;
  lastPos = top;

  frames.forEach((currentElement, i) => {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;

    const frame = frames[i];

    const transform = `translateZ(${zVals[i]}px)`;
    const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);

// audio

const soundButton = document.querySelector('.soundbutton');
const audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
  soundButton.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
