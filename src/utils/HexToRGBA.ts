/* eslint-disable no-bitwise */
/**
 * It takes a hex color and an alpha value and returns an rgba color
 * @param {string} hex - The hex color code you want to convert to RGBA.
 * @param {number} alpha - number - The alpha value of the color.
 * @returns A string of the hex value with the alpha value.
 */

const hexToRGBA = (hex: string, alpha: number) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ',',
    )},${alpha})`;
  }
  throw new Error('Bad Hex');
};

export default hexToRGBA;
