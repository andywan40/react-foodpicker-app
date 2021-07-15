export function getRandomItem(items) {
  const n = items.length;
  const item = items[Math.floor(Math.random() * n)];
  return item;
}
