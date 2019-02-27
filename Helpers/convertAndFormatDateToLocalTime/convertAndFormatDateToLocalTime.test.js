import convertAndFormatDateToLocalTime from './convertAndFormatDateToLocalTime';

describe('convertAndFormatDateToLocalTime()', () => {
  it('returns formatted date converted to local time', () => {
    expect(convertAndFormatDateToLocalTime(new Date(2019, 2, 27))).toEqual('27/03/2019 00:00:00');
  });
});
