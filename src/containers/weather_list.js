import React, {Component} from "react"
import {connect} from "react-redux"
import TemGraph from '../components/tempgraph'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name
		const temps = cityData.list.map(weather=>weather.main.temp)
		const lon = cityData.city.coord.lon
		const lat = cityData.city.coord.lat
		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<TemGraph  data={temps}/>
				</td>
				<td>
					<TemGraph  data={temps}/>
				</td>
				<td>
					<TemGraph  data={temps}/>
				</td>
			</tr>
		)
	}
	render(){
		return <table className="table table-hover">
			<thead>
				<tr>
					<th>city</th>
					<th>tempreture</th>
					<th>pressure</th>
					<th>humidity</th>
				</tr>
			</thead>
			<tbody>
				{(this.props.weatherData).map(this.renderWeather)}
			</tbody>
		</table>
	}
}

function mapStateToProps(state){
	return {
		weatherData: state.weather
	}
}

export default connect(mapStateToProps)(WeatherList)