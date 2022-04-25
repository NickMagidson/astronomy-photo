import React, { Component, useState } from "react";
import DateInput from "./DateInput";
import Photo from "./Photo";

import moment from 'moment';

const API_KEY = 'V3So8Qu3NHWIE20l3VCTlXhyZscIKTZK7W1vhJS8';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Edits on this component are still in progress
class Header extends Component {
	state = {
		date: moment(),
		photo: <Photo />
	}

	formatDate = moment => {
		let year = moment.year;
		let month = moment.month + 1;
		let day = moment.date;
		return `${year}-${month}-${day}`;
	}


	changeDate = dateFromInput => {
		this.setState({ date: dateFromInput });
		this.getPhoto(this.formatDate(dateFromInput)); // getPhoto should be linked to a block of code that fetches the api photo
	}

	getPhoto = date => {
    fetch(API_URL)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
	}

	render() {
		return (
			<div className="header">
				<h2 className="title"> Astronomy Photo of the Day</h2>
				<DateInput changeDate={this.changeDate} />
			</div>
		)
	};

}

export default Header;