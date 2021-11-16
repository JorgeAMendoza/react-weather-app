import { convertTempToImperial } from '../app/utils/unit-conversion/convert-temp-to-imperial';
import { convertTempToMetric } from '../app/utils/unit-conversion/convert-temp-to-metric';
import { convertWindToImperial } from '../app/utils/unit-conversion/convert-wind-to-imperial';
import { convertWindToMetric } from '../app/utils/unit-conversion/convert-wind-to-metric';

describe('Testing Conversion Functions', () => {
  test('70 Fahrenheit to 21 Celsius', () => {
    const result = convertTempToMetric(70);
    expect(result).toBe(21);
  });
  test('32 Celsius to 90 Fahrenheit', () => {
    const result = convertTempToImperial(32);
    expect(result).toBe(90);
  });
  test('10 Miles per Hour to 16 Kilometers Per Hour', () => {
    const result = convertWindToMetric(10);
    expect(result).toBe(16);
  });
  test('7 Kilometers per hour to 4 Miles per hour', () => {
    const result = convertWindToImperial(7);
    expect(result).toBe(4);
  });
});
 