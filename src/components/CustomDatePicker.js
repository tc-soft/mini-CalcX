
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({date, onChange}) => {

  return (
      <DatePicker
        showIcon
        dateFormat="dd.MM.yyyy"
        selected={date}
        onChange={onChange}
      />
  );
};
  
  export default CustomDatePicker;