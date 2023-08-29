const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[550px] sm:min-w-[350px] sm:h-[205px] w-full rounded-[20px] shadow-3xl px-10 py-12 mt-10">
        <div className="w-11 h-11 flex justify-center items-center bg-purple-600 rounded-full">
            <img src={imgURL} alt={label} height={30} width={30} />
        </div>
        <h3 className="font-palanquin text-3xl leading-normal font-bold text-purple-600">{label}</h3>
        <p className="break-words font-monaco text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard