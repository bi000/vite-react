const CardList = ({ header, items, items1 }) => {
if (items == null || items == ''){
    return <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition-all">
    <h3 className="text-2xl font-robot font-semibold text-[#0066b3] mb-4">{header}</h3>
    <ul className="text-gray-700 space-y-2 font-robot">
      {items1.map((item, idx) => (
        <li key={idx} className="font-robot font-light text-base tracking-tight">
          {item.Items}
        </li>
      ))}
    </ul>
  </div>
}

return (
  <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition-all">
    <h3 className="text-2xl font-robot font-semibold text-[#0066b3] mb-4">{header}</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2 font-robot">
      {items.map((item, idx) => (
        <li key={idx} className="font-robot font-light text-base tracking-tight">
          {item.Items}
        </li>
      ))}
    </ul>
  </div>
);
}
export default CardList;