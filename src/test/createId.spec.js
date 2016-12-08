import expect from 'expect';
import createId from './../createId';

describe('createId', () => {
  it('should convert a description into a unique id', () => {
    const actual = createId(123, 'uno due tre');
    const expected = '123-uno-due';
    expect(actual).toEqual(expected);
  });
});


