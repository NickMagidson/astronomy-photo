import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = props => (
  <div>
    Select a Date:
    <DatePicker
      className="date-picker"
      selected={props.date}
      onChange={props.changeDate}
      maxDate={new Date()}
      dateFormat='MM/dd/yyyy'
	  showYearDropdown
	  scrollableMonthYearDropdown
    />
  </div>
);

export default DateInput;