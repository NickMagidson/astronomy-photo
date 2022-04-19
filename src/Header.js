import React, { useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Header() {
	const [startDate, setStartDate] = useState(new Date());

		return(
		<div className="header">
			<h2 className="title"> Astronomy Photo of the Day</h2>
			<DatePicker 
				className="date-picker"
				selected={startDate} 
				onChange={(date) => setStartDate(date)} 
				dateFormat='MM/dd/yyyy'
				maxDate={new Date()}
				showYearDropdown
				scrollableMonthYearDropdown
			/>
		</div>
	)
}

export default Header;