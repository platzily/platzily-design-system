import {
  alpha,
} from './colorManipulator';

describe('colorManipulator', () => {

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
