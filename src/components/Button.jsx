const Button = ({ label }) => {
  return (
    <button className="flex justify-center items-center gap-1 px-7 py-4 border-2 font-bold font-monaco text-[20px] leading-none bg-blue-400 rounded-full text-white border-blue-400">
        {label}
    </button>
  )
}

export default Button