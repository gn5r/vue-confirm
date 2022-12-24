export function getSize(size?: string | number | null): number | undefined {
  if (size === undefined || size === null || size === "") return undefined;
  return Number(String(size).replace(/[^0-9]/g, ""));
}

export function convertToUnit(
  size?: string | number | null,
  unit = "px"
): string | undefined {
  if (size === undefined || size === null || size === "") return undefined;
  return `${getSize(size)}${unit}`;
}
