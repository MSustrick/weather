import axios from 'axios';
const API_KEY = '7358d6c0c8c2d2baad7909b1448a1b2d';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//valid api call
//https://api.openweathermap.org/data/2.5/forecast?q=olathe,us&appid=7358d6c0c8c2d2baad7909b1448a1b2d

export const FETCH_WEATHER = 'FETCH_WEATHER ';

export function fetchWeather(city){
  console.log("fetch weather: ", city);

  const url = `${ROOT_URL}&q=${city},us`;
  console.log("url ", url);

  const request = axios.get(url);
  console.log("payload ", request);

  return {
    type:FETCH_WEATHER,
    payload: request
  };
}
