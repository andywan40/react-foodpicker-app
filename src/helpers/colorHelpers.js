import chroma from "chroma-js";

export function getLuminance(hexColor) {
  let luminance = chroma(hexColor).luminance();
  return luminance;
}
