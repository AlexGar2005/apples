type CardProps = {
    address: string;
    title: string;
    price: string;
}

const CollectionCard = ({address, title, price}:CardProps) => {
  return (
    <div className="w-full">
        <img src={address} alt="" className="w-full"/>
        <div className="flex flex-col items-center mt-6 xl:gap-2 md:gap-1 font-[300] text-[#56593D]">
            <h2 className="text-2xl">{title}</h2>
            <span className="text-xl">{price}</span>
        </div>
    </div>
  )
}

export default CollectionCard