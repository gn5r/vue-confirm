export function isCssColor(color?: string): boolean {
  return !!color && !!color.match(/^(#|var\(--)|(transparent|inherit)/);
}
