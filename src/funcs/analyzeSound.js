let analyser, raf;

function init(el, src) {
  setupWebAudio(el, src);
  draw();
}
function setupWebAudio(el, src) {
  var audio = document.createElement("audio");
  audio.src = src;
  audio.controls = "true";
  //el.appendChild(audio);
  audio.style.width = window.innerWidth + "px";

  var audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  var source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  audio.play();
}
function draw() {
  raf = requestAnimationFrame(draw);
  var freqByteData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(freqByteData);
  const radius = freqByteData[i] * 0.5;
}
function stop() {
  clearAnimationFrame(raf);
}

export default init;
