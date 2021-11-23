import { convertTempToImperial } from '../unit-conversion/convert-temp-to-imperial';
import { convertTempToMetric } from '../unit-conversion/convert-temp-to-metric';

export class ForecastWeather {
  constructor(min, max, outlook, weatherID, iconID) {
    this.min = Math.round(min);
    this.max = Math.round(max);
    this.outlook = outlook;
    this.weatherID = weatherID;
    this.iconID = iconID;
  }

  setToMetric() {
    this.min = convertTempToMetric(this.min);
    this.max = convertTempToMetric(this.max);
  }

  setToImperial() {
    this.min = convertTempToImperial(this.min);
    this.max = convertTempToImperial(this.max);
  }
}
