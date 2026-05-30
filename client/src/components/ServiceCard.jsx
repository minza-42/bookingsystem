import { useNavigate } from 'react-router-dom'

function ServiceCard({ service }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-900">{service.name}</h2>
      <p className="text-gray-500 text-sm flex-1">{service.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>{service.duration_minutes} min</span>
        <span className="text-gray-900 font-bold text-lg">{service.price} kr</span>
      </div>
      <button
        onClick={() => navigate('/boka', { state: { service } })}
        className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl font-medium transition"
      >
        Boka nu
      </button>
    </div>
  )
}

export default ServiceCard