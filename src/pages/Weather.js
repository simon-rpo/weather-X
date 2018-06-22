import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class Weather extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="http://bernews.com/weather/wp-content/uploads/2013/02/clouds-sun-rain-day.png" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
    );
  }
}

export default Weather;
