import Button from "./Button"

const Calculation = ({ expDate, copyMessage, onCopyExpDate, onReset }) => {
  return (
    <div className="flex flex-col justify-between p-8 text-white bg-gradient-to-tr from-[#D9FF6B] to-[#18D5FF] rounded-xl sm:rounded-xl md:h-[320px] md:w-[320px]">
      <div className="flex flex-col">
        <span className="mb-4 tracking-wide text-black">Expiration Date</span>
        <span className="mb-4 h-[44px] text-[44px] font-bold text-black self-center">{expDate}</span>
        <span className="text-sm text-black mt-2 min-h-[20px]">{copyMessage}</span>
      </div>
      <div className="flex flex-col gap-4">
        <Button  text="Copy" bgColor="bg-black" handleClick={onCopyExpDate} />
        <Button text="Reset" textColor="black" handleClick={onReset}/>
      </div>
    </div>
  )
}

export default Calculation