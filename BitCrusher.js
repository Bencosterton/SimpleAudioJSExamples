const bitDepth = 4;
const frequencyReduction = 0.1;

let phase = 0;
let lastSampleValueL = 0;
let lastSampleValueR = 0;

function crush(sample, step) {
  return step * Math.floor(sample / step + 0.5);
}

function loop(numFrames, outL, outR, sampleRate, inL, inR) {
  const isMono = inR === undefined;

  for (let i = 0; i < numFrames; ++i) {
    const step = Math.pow(0.5, bitDepth);
    phase += frequencyReduction;
    if (phase >= 1.0) {
      phase -= 1.0;
      lastSampleValueL = crush(inL[i], step);
      lastSampleValueR = isMono ? lastSampleValueL : crush(inR[i], step);
    }

    outL[i] = lastSampleValueL;
    if (!isMono) {
      outR[i] = lastSampleValueR;
    }
  }
}
