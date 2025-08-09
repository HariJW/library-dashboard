export default function Table({ headers = [], rows = [] }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded p-2 mb-4">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((h, i) => <th key={i} className="text-left px-4 py-2">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="border-t">
              {r.map((c, ci) => <td key={ci} className="px-4 py-2">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}