// 3D scroll
// zSpacing - distance from card to text on z-axis
// lastPos - all elements have animation on start position, when preload page
// mainFrames - main parent element - frame;
// delta - element`s last position with scroll, conditional value, use for animate frames on z-axios; delta become bigger or smaller - depends on scrolling(top or bottom)
// -5.5 - swipe speed
// i - indexCurrentElement

let zSpacing = -1000;
let lastPos = zSpacing / 5;
mainFrames = document.getElementsByClassName('gallery__frame');
frames = Array.from(mainFrames);
zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop;
  delta = lastPos - top;
  lastPos = top;

  frames.forEach((currentElement, i) => {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;

    let frame = frames[i];

    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);
