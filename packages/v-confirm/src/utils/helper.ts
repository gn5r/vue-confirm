export function getSize(size: string | number) {
  return Number(String(size).replace(/[^0-9]/g, ""));
}
