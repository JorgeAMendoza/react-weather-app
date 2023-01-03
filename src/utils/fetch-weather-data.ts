import axios, { AxiosError } from 'axios';
import { OneWeatherCall } from '../types/api';

const fetchWeatherData = async (
  searchQuery: string
): Promise<OneWeatherCall> => {
  try {
    const { data } = await axios.get<OneWeatherCall>(
      'http://localhost:3000/api/weather',
      {
        params: {
          location: searchQuery,
        },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
    let message = '';
    if (e instanceof AxiosError) message = e.response?.data;
    else message = 'something went wrong';
    throw new Error(message);
  }
};

export default fetchWeatherData;
