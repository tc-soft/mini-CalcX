import { useState } from 'react';
import CustomDatePicker from './components/CustomDatePicker';
import CustomSlider from './components/CustomSlider';
import { format, differenceInDays, addDays, getYear, startOfYear, endOfYear } from "date-fns";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 365));
  const [ratio, setRatio] = useState(1);
  const [amount, setAmount] = useState(''); // Nowy stan dla wartości kwotowej

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRatioChange = (event, newValue) => {
    setRatio(newValue);
  };

    const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const startOfYearDate = startOfYear(endDate);
  const endOfYearDate = endOfYear(startDate);
  const daysLeftInYear = differenceInDays(endOfYearDate, startDate) + 1;
  const daysAll = differenceInDays(endDate, startDate) + 1;

  const isSameYear = getYear(startDate) === getYear(endDate);
  const daysAfterNewYear = isSameYear ? 0 : differenceInDays(endDate, startOfYearDate) + 1;

  const amountOldYear = parseFloat(((amount / daysAll) * daysLeftInYear * ratio).toFixed(2));
  const amountNewYear = parseFloat(((amount / daysAll) * daysAfterNewYear * ratio).toFixed(2));

  const totalAmount = amountOldYear + amountNewYear;

  return (
    <>
      <div className="App">
        <h1>DLA JOLI</h1>
        <p>Data początkowa :</p>
        <CustomDatePicker date={startDate} onChange={handleStartDateChange} />

        <p>Data końcowa :</p>
        <CustomDatePicker date={endDate} onChange={handleEndDateChange} />

        <p>Ilość wszystkich dni: {daysAll}</p>
        <p style={{ color: 'blue' }}>
          Ilość dni do końca roku: <strong>{daysLeftInYear}</strong> - Ilość dni po nowym roku: <strong>{daysAfterNewYear}</strong>
        </p>

        <p>Współczynnik: {ratio}</p>
        <div className="custom-slider-container">
          <CustomSlider
            ratio={ratio}
            onChange={handleRatioChange}
          />
        </div>
        
        <p>Wpisz kwotę:</p>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Wpisz kwotę"
        />
        <br/>

        <p>Kwota na każdy dzień po zaokrągleniu : { ((amount / daysAll) * ratio).toFixed(2) } zł (suma to {((amount / daysAll) * ratio).toFixed(2) * daysAll} zł)</p>
        <p>Kwota na stary rok: {amountOldYear} zł</p>
        <p>Kwota na nowy rok: {amountNewYear} zł</p>
        <p>SUMA: {amountOldYear + amountNewYear} zł</p>

      </div>
    </>
  );
}

export default App;