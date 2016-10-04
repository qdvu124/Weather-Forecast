import axios from 'axios';

import { ROOT_URL } from '../constants/constants';
import { FETCH_WEATHER } from '../constants/actions';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}

