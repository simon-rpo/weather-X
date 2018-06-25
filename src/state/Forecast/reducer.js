const initialState = {
  forecast: [],
  loading: false,
};

export default function FiveForecastReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_5_DAYS_FORECAST_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_5_DAYS_FORECAST_SUCCESS': {
      return {
        ...state,
        hotels: action.data,
        loading: false,
      };
    }
    case 'GET_5_DAYS_FORECAST_FAILED': {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
