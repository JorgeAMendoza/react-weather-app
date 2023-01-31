import axios from 'axios';
import { OneWeatherCall } from '../types/api';
const fetchWeatherData = async (
  searchQuery: string
): Promise<OneWeatherCall> => {
  try {
    const { data } = await axios.get<OneWeatherCall>(`/api/weather`, {
      params: {
        location: searchQuery,
      },
    });

    return data;
  } catch (e) {
    throw new Error('city not found');
  }
};

export default fetchWeatherData;
