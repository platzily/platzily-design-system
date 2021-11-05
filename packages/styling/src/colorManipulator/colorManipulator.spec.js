import {
  recomposeColor,
  hexToRgb,
  rgbToHex,
  decomposeColor,
  alpha,
} from './colorManipulator';

describe('colorManipulator', () => {
  describe('recomposeColor', () => {
    it('converts a decomposed rgb color object to a string` ', () => {
      expect(
        recomposeColor({
          type: 'rgb',
          values: [255, 255, 255],
        }),
      ).toEqual('rgb(255, 255, 255)');
    });

    it('converts a decomposed rgba color object to a string` ', () => {
      expect(
        recomposeColor({
          type: 'rgba',
          values: [255, 255, 255, 0.5],
        }),
      ).toEqual('rgba(255, 255, 255, 0.5)');
    });

    it('converts a decomposed CSS4 color object to a string` ', () => {
      expect(
        recomposeColor({
          type: 'color',
          colorSpace: 'display-p3',
          values: [0.5, 0.3, 0.2],
        }),
      ).toEqual('color(display-p3 0.5 0.3 0.2)');
    });

    it('converts a decomposed hsl color object to a string` ', () => {
      expect(
        recomposeColor({
          type: 'hsl',
          values: [100, 50, 25],
        }),
      ).toEqual('hsl(100, 50%, 25%)');
    });

    it('converts a decomposed hsla color object to a string` ', () => {
      expect(
        recomposeColor({
          type: 'hsla',
          values: [100, 50, 25, 0.5],
        }),
      ).toEqual('hsla(100, 50%, 25%, 0.5)');
    });
  });

  describe('hexToRgb', () => {
    it('converts a short hex color to an rgb color` ', () => {
      expect(hexToRgb('#9f3')).toEqual('rgb(153, 255, 51)');
    });

    it('converts a long hex color to an rgb color` ', () => {
      expect(hexToRgb('#a94fd3')).toEqual('rgb(169, 79, 211)');
    });

    it('converts a long alpha hex color to an argb color` ', () => {
      expect(hexToRgb('#111111f8')).toEqual('rgba(17, 17, 17, 0.973)');
    });
  });

  describe('rgbToHex', () => {
    it('converts an rgb color to a hex color` ', () => {
      expect(rgbToHex('rgb(169, 79, 211)')).toEqual('#a94fd3');
    });

    it('converts an rgba color to a hex color` ', () => {
      expect(rgbToHex('rgba(169, 79, 211, 1)')).toEqual('#a94fd3ff');
    });

    it('idempotent', () => {
      expect(rgbToHex('#A94FD3')).toEqual('#A94FD3');
    });
  });

  describe('decomposeColor', () => {
    it('converts an rgb color string to an object with `type` and `value` keys', () => {
      const { type, values } = decomposeColor('rgb(255, 255, 255)');
      expect(type).toEqual('rgb');
      expect(values).toStrictEqual([255, 255, 255]);
    });

    it('converts an rgba color string to an object with `type` and `value` keys', () => {
      const { type, values } = decomposeColor('rgba(255, 255, 255, 0.5)');
      expect(type).toEqual('rgba');
      expect(values).toStrictEqual([255, 255, 255, 0.5]);
    });

    it('converts an hsl color string to an object with `type` and `value` keys', () => {
      const { type, values } = decomposeColor('hsl(100, 50%, 25%)');
      expect(type).toEqual('hsl');
      expect(values).toStrictEqual([100, 50, 25]);
    });

    it('converts an hsla color string to an object with `type` and `value` keys', () => {
      const { type, values } = decomposeColor('hsla(100, 50%, 25%, 0.5)');
      expect(type).toEqual('hsla');
      expect(values).toStrictEqual([100, 50, 25, 0.5]);
    });

    it('converts CSS4 color with color space display-3', () => {
      const { type, values, colorSpace } = decomposeColor('color(display-p3 0 1 0)');
      expect(type).toEqual('color');
      expect(colorSpace).toEqual('display-p3');
      expect(values).toStrictEqual([0, 1, 0]);
    });

    it('converts an alpha CSS4 color with color space display-3', () => {
      const { type, values, colorSpace } = decomposeColor('color(display-p3 0 1 0 /0.4)');
      expect(type).toEqual('color');
      expect(colorSpace).toEqual('display-p3');
      expect(values).toStrictEqual([0, 1, 0, 0.4]);
    });

    it('should throw error with inexistent color color space', () => {
      const decimposeWithError = () => decomposeColor('color(foo 0 1 0)');
      expect(decimposeWithError).toThrow();
    });

    it('idempotent', () => {
      const output1 = decomposeColor('hsla(100, 50%, 25%, 0.5)');
      const output2 = decomposeColor(output1);
      expect(output1).toStrictEqual(output2);
    });

    it('converts rgba hex', () => {
      const decomposed = decomposeColor('#111111f8');
      expect(decomposed).toStrictEqual({
        type: 'rgba',
        colorSpace: undefined,
        values: [17, 17, 17, 0.973],
      });
    });
  });

  describe('alpha', () => {
    it('converts an rgb color to an rgba color with the value provided', () => {
      expect(alpha('rgb(1, 2, 3)', 0.4)).toEqual('rgba(1, 2, 3, 0.4)');
    });

    it('updates an CSS4 color with the alpha value provided', () => {
      expect(alpha('color(display-p3 1 2 3)', 0.4)).toEqual('color(display-p3 1 2 3 /0.4)');
    });

    it('updates an rgba color with the alpha value provided', () => {
      expect(alpha('rgba(255, 0, 0, 0.2)', 0.5)).toEqual('rgba(255, 0, 0, 0.5)');
    });

    it('converts an hsl color to an hsla color with the value provided', () => {
      expect(alpha('hsl(0, 100%, 50%)', 0.1)).toEqual('hsla(0, 100%, 50%, 0.1)');
    });

    it('updates an hsla color with the alpha value provided', () => {
      expect(alpha('hsla(0, 100%, 50%, 0.2)', 0.5)).toEqual('hsla(0, 100%, 50%, 0.5)');
    });

    it('throw on invalid colors', () => {
      expect(() => {
        alpha('white', 0.4);
      }).toThrow();
    });
  });
});
