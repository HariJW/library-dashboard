export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 rounded-lg border border-gray-200 w-full">
      <div className="text-sm text-gray-600 mb-2 font-medium">{title}</div>
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
        {value}
      </div>
    </div>
  );
}
