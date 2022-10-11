import React, { Component,} from "react";
import DateInput from "./DateInput";
import Photo from "./Photo";

import moment from 'moment';

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Edits on this component are still in progress
class Header extends Component {
	state = {
		date: new Date(),
		photo: ''
	}

	formatDate = (date) => {
		// converts date to yyyy-mm-dd
		return date.toISOString().split('T')[0]
	  }


	changeDate = dateFromInput => {
		this.setState({ date: dateFromInput });
		this.getPhotoByDate(this.formatDate(dateFromInput)); // getPhoto should be linked to a block of code that fetches the api photo
	}

	getPhotoByDate = date => {
		fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
		.then((response) => {
		  return response.json()
		})
		.then((photoData) => {
		  this.setState({ photo: photoData })
		})
	}

	render() {
		return (
			<div className="header">
				<h2 className="title"> Astronomy Photo of the Day</h2>
				<DateInput 
					date={this.state.date} 
					changeDate={this.changeDate} 
					onClick={this.changeDate} 

					/>
			</div>
		)
	};

}

export default Header;