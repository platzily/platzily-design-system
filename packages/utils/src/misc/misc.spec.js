/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import { getTypeOf } from './misc';

describe('@utils/misc/getTypeOf', () => {
  it('Given a valid param it should return it type', () => {
    // assert
    expect(getTypeOf('foo')).toBe('String');
    expect(getTypeOf(1)).toBe('Number');
    expect(getTypeOf(Infinity)).toBe('Number');
    expect(getTypeOf(true)).toBe('Boolean');
    expect(getTypeOf(Symbol('foo'))).toBe('Symbol');
    expect(getTypeOf(null)).toBe('Null');
    expect(getTypeOf(undefined)).toBe('Undefined');
    expect(getTypeOf()).toBe('Undefined');
    expect(getTypeOf({})).toBe('Object');
    expect(getTypeOf([])).toBe('Array');
    expect(getTypeOf(/[a-z]/g)).toBe('RegExp');
    expect(getTypeOf(new Date())).toBe('Date');
    expect(getTypeOf(new Error())).toBe('Error');
    expect(getTypeOf(function() {})).toBe('Function');
    expect(getTypeOf((a, b) => a + b)).toBe('Function');
    expect(getTypeOf(async () => {})).toBe('Function');
    expect(getTypeOf(document.createElement('p'))).toBe('HTMLParagraphElement');
  });
});
