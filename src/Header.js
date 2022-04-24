import React, { Component, useState } from "react";
import DateInput from "./DateInput";
import Photo from "./Photo";

import moment from 'moment';


class Header extends Component {
	constructor(props) {
		super(props)
	}

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

	render() {
		return(
			<div className="header">
				<h2 className="title"> Astronomy Photo of the Day</h2>
				<DateInput changeDate={this.changeDate} />
			</div>
		)
	}

}

export default Header;