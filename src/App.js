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
    setCopyMessage('')
    function calculate(months, years) {
      if(startDate) {
        const startDateArr = startDate.split('-')
        const startDateMonth = startDateArr[1]
        const startDateYear = startDateArr[0]
        const endOfStartDateMonth = new Date(startDateYear, startDateMonth, 0)
  
        let result = new Date(endOfStartDateMonth.getFullYear() + +years, endOfStartDateMonth.getMonth() + +months + 1, 0)
        
        setExpDate(result.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))
      }
    }

    calculate(months, years)
  }, [months, years, startDate])

  const onMonths = (e) => {
    setMonths(e.target.value)
  }

  const onYears = (e) => {
    setYears(e.target.value)
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
    <div className="flex flex-col items-center justify-end min-h-screen pt-8 bg-white min-w-screen sm:justify-center sm:pb-8">
      <div className="mb-8 font-bold text-3xl tracking-wider text-center sm:mt-[-60px]">
        Expiration Date Calculator
      </div>
      <div className="md:flex sm:gap-8 bg-black w-full h-full sm:h-auto sm:min-w-[640px] sm:w-auto p-8 md:p-16 rounded-t-xl sm:rounded-xl drop-shadow-2xl max-w-[740px]">
        <div className="mb-6 md:mb-0">
          <StartDate startDate={startDate} onStartDateChange={e => setStartDate(e.target.value)} />
          <button className="block mb-6 text-sm text-[#D9FF6B]" role="link" onClick={e => setStartDate(today)}>Today</button>
          <span className="inline-block mb-4 font-medium tracking-wide text-white">Retention Period</span>
          <Input id="months" label="Months" inputType="number" value={months || ''} onChange={onMonths} />
          <Input id="years" label="Years" inputType="number" value={years || ''} onChange={onYears} />
        </div>
        <Calculation expDate={expDate} copyMessage={copyMessage} onCopyExpDate={copyExpDate} onReset={resetCalculator} />
      </div>
    </div>
  );
}

export default App;
