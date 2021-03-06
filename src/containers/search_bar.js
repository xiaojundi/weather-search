import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'


class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			term: ''
		}
	}
	onChange = (event)=>{
		this.setState({term:event.target.value})
	}
	onFormSubmit=(event)=>{
		event.preventDefault();
		this.props.fetchWeather(this.state.term)
		this.state.term = ''
	}
	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group" action="">
				<input placeholder="Search"  className="form-control" value={this.state.term} onChange={this.onChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)