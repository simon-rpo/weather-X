import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import * as actions from '../state/Forecast/actions';

const { Meta } = Card;

class Weather extends Component {
  constructor() {
    super();
  }

  componentWillMount = () => {
    this.props.get5DaysForecast('medellín');
  };

  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="http://bernews.com/weather/wp-content/uploads/2013/02/clouds-sun-rain-day.png"
          />
        }>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
  }
}

Weather.propTypes = {
  get5DaysForecast: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    forecast: state.forecast.forecast,
    loading: state.forecast.loading,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Weather);
