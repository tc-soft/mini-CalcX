
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { pl } from 'date-fns/locale';

const CustomDatePicker = ({date, onChange}) => {

  return (
      <DatePicker
        dateFormat="dd.MM.yyyy"
        locale={pl}
        selected={date}
        onChange={onChange}
      />
  );
};
  
  export default CustomDatePicker;