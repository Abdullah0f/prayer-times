export const convert = (time) => {
  let [h, m] = time.split(":");
  h = parseInt(h);
  m = parseInt(m);
  let suffix = "AM";
  if (h > 12) {
    h = h - 12;
    suffix = "PM";
  }
  return `${h}:${m.toString().padStart(2, "0")} ${suffix}`;
};
