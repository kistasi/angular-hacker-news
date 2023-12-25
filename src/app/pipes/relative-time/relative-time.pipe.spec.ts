import { RelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {
  let pipe: RelativeTimePipe;

  beforeEach(() => {
    pipe = new RelativeTimePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format timestamp correctly', () => {
    const now = Date.now();
    const oneHourAgo = now - 3600000; // 1 hour in milliseconds
    expect(pipe.transform(oneHourAgo / 1000)).toEqual('about 1 hour ago');
  });

  it('should handle future timestamp correctly', () => {
    const futureTime = Date.now() + 3600000; // 1 hour in the future
    expect(pipe.transform(futureTime / 1000)).toEqual('in about 1 hour');
  });

  it('should handle current timestamp', () => {
    const now = Date.now();
    expect(pipe.transform(now / 1000)).toEqual('less than a minute ago');
  });
});
