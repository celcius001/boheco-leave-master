function CardComponents({
  title,
  value,
  bgColor,
}: {
  title: string;
  value: string;
  bgColor: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between rounded-xl ${bgColor} h-24 w-40 p-4 font-bold text-white`}
    >
      <span>{value}</span>
      {title}
    </div>
  );
}

export default CardComponents;
