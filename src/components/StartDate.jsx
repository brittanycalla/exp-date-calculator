import Input from "./Input"

const StartDate = ({ startDate, onStartDateChange }) => {
  return (
    <div>
      <Input value={startDate} id="startDate" label="Start Date" inputType="date" onChange={onStartDateChange} />
    </div>
  )
}

export default StartDate