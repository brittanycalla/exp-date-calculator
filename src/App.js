import { useEffect, useState } from "react"
import StartDate from "./components/StartDate";
import Input from "./components/Input"
import Calculation from "./components/Calculation"

function App() {
  const today = new Date().toLocaleDateString("fr-CA")
  const [startDate, setStartDate] = useState('')
  const [months, setMonths] = useState(0)
  const [years, setYears] = useState(0)
  const [expDate, setExpDate] = useState('')
  const [copyMessage, setCopyMessage] = useState('')

  // Calculate Exp Date
  useEffect(() => {
    function calculate(months, years) {
      if(startDate) {
        const startDateArr = startDate.split('-')
        const startDateMonth = startDateArr[1]
        const startDateYear = startDateArr[0]
        const endOfStartDateMonth = new Date(startDateYear, startDateMonth, 0)
  
        let result = new Date(endOfStartDateMonth);
        result = new Date(result.getFullYear() + +years , result.getMonth() + +months + 1, 0)
        setExpDate(result.toLocaleDateString("fr-CA"))
      }
    }

    calculate(months, years)
  }, [months, years, startDate])

  const onMonths = (e) => {
    const value = e.target.value
    setMonths(value)
    setCopyMessage('')
  }

  const onYears = (e) => {
    setYears(e.target.value)
    setCopyMessage('')
  }

  // Copy Expiration Date
  const copyExpDate = () => {
    expDate && navigator.clipboard.writeText(`${expDate}`)
    expDate ? setCopyMessage(`Expiration date copied`) : setCopyMessage(`Calculate a date first`)
  }

  // Reset
  const resetCalculator = () => {
    setStartDate('')
    setExpDate('')
    setCopyMessage('')
    setMonths('')
    setYears('')
  }

  return (
    <div className="bg-emerald-100 min-w-screen min-h-screen flex flex-col justify-end sm:justify-center items-center pt-8 sm:pb-8">
      <div className="text-xl mb-8">
        EXP DATE
      </div>
      <div className="md:flex sm:gap-8 bg-white w-full h-full sm:h-auto sm:min-w-[640px] sm:w-auto p-8 md:p-16 rounded-t-xl sm:rounded-lg drop-shadow-2xl">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <StartDate startDate={startDate} onStartDateChange={e => setStartDate(e.target.value)} />
          <button className="block text-emerald-600 mb-6 text-sm" role="link" onClick={e => setStartDate(today)}>Today</button>
          <span className="inline-block mb-4">Retention Period</span>
          <Input id="months" label="Months" inputType="number" value={months || ''} onChange={onMonths} />
          <Input id="years" label="Years" inputType="number" value={years || ''} onChange={onYears} />
        </div>
        <Calculation expDate={expDate} copyMessage={copyMessage} onCopyExpDate={copyExpDate} onReset={resetCalculator} />
      </div>
    </div>
  );
}

export default App;