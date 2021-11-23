import { convertTempToImperial } from '../unit-conversion/convert-temp-to-imperial';
import { convertTempToMetric } from '../unit-conversion/convert-temp-to-metric';
import { convertWindToMetric } from '../unit-conversion/convert-wind-to-metric';
import { convertWindToImperial } from '../unit-conversion/convert-wind-to-imperial';

export class CurrentWeather {
  constructor(
    temp,
    min,
    max,
    status,
    statusDescription,
    humidity,
    wind,
    weatherID,
    iconID
  ) {
    this.temp = Math.round(temp);
    this.min = Math.round(min);
    this.max = Math.round(max);
    this.stats = status;
    this.statusDescription = statusDescription;
    this.humidity = humidity;
    this.wind = Math.round(wind);
    this.weatherID = weatherID;
    this.iconID = iconID;
  }

  setToMetric() {
    this.temp = convertTempToMetric(this.temp);
    this.min = convertTempToMetric(this.min);
    this.max = convertTempToMetric(this.max);
    this.wind = convertWindToMetric(this.wind);
  }

  setToImperial() {
    this.temp = convertTempToImperial(this.temp);
    this.min = convertTempToImperial(this.min);
    this.max = convertTempToImperial(this.max);
    this.wind = convertWindToImperial(this.wind);
  }
}
