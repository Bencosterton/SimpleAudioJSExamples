let time = 0;

function getSine(freq, time) {
  return Math.sin(2 * Math.PI * freq * time);
}

function loop(numFrames, outL, outR, sampleRate) {
  const freq = 666;
  const amp = 0.1;

  for (let i = 0; i < numFrames; i++) {
    outL[i] = getSine(freq      , time) * amp;
    outR[i] = getSine(freq * 1.5, time) * amp;

    time += 1 / sampleRate;
  }
}
