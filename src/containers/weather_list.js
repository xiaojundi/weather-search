import React, {Component} from "react"
import {connect} from "react-redux"
import TemGraph from '../components/tempgraph'

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name
		const temps = cityData.list.map(weather=>weather.main.temp)
		return (
			<tr key={name}>
				<td>{name}</td>
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