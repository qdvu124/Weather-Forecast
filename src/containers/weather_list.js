import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component {

  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);


    return (
      <tr key={ name }>
        <td> { name } </td>
        <td><Chart data={ temp } color="red" /></td>
        <td><Chart data={ pressure } color="blue" /></td>
        <td><Chart data={ humidity } color="black" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

WeatherList.propTypes = {
  weather: React.PropTypes.array,
};

export default connect(mapStateToProps)(WeatherList);
