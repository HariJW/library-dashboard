export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow p-4 rounded-md w-full md:w-1/3">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}