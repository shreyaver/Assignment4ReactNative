import convertAndFormatDateToLocalTime from './convertAndFormatDateToLocalTime';

describe('convertAndFormatDateToLocalTime()', () => {
  it('returns formatted date converted to local time', () => {
    expect(convertAndFormatDateToLocalTime('2019-01-01T17:30:00.000Z')).toEqual('01/01/2019 23:00:00');
  });
});
