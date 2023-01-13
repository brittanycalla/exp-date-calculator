import Button from "./Button"

const Calculation = ({ expDate, copyMessage, onCopyExpDate, onReset }) => {
  return (
    <div className="flex flex-col justify-center gap-6 bg-emerald-900 rounded-xl sm:rounded-lg text-white p-8 md:w-[30vw]">
      <div className="flex flex-col mb-4">
        <span className="mb-2">Expiration Date</span>
        <span className="mb-4 min-h-[36px] text-3xl">{expDate}</span>
        <span className="text-sm text-emerald-300 min-h-[20px]">{copyMessage}</span>
      </div>
      <Button text="Copy" handleClick={onCopyExpDate} />
      <Button text="Reset" handleClick={onReset}/>
    </div>
  )
}

export default Calculation