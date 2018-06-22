import Instance from './instance';

export const getFiveDaysForecastByName = (city) => Instance.get('forecast', {
  params: {
    q: city, APPID: process.env.WEATHER_X_APP_KEY
  },
});
