export function sleep() {
  return new Promise((r) => setTimeout(r, 1000));
}
