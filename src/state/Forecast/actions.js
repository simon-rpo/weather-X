import * as api from '../../api/ForecastApi';

// #region "Get 5 days Forecast"
export function getForecastSuccess(data) {
  return {
    type: 'GET_5_DAYS_FORECAST_SUCCESS',
    data,
  };
}

export function getForecastFailed() {
  return {
    type: 'GET_5_DAYS_FORECAST_FAILED',
  };
}

export function getForecastLoading() {
  return {
    type: 'GET_5_DAYS_FORECAST_LOADING',
  };
}

export function get5DaysForecast(cityName) {
  return dispatch => {
    dispatch(getForecastSuccess());
    api
      .getFiveDaysForecastByName(cityName)
      .then(response => {
        dispatch(getForecastSuccess(response.data));
      })
      .catch(error => {
        dispatch(getForecastFailed());
      });
  };
}
// #endregion
