import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function BookPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const service = location.state?.service

  const [form, setForm] = useState({ name: '', email: '', booking_time: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: service.id,
          booking_time: form.booking_time,
          notes: form.name + ' - ' + form.email
        })
      })
      if (res.ok) {
        alert('Bokning bekraftad!')
        navigate('/')
      }
    } catch {
      alert('Något gick fel, försök igen')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Boka {service?.name}</h1>
        <p className="text-gray-400 text-sm mb-6">{service?.duration_minutes} min — {service?.price} kr</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Namn</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Datum och tid</label>
            <input
              name="booking_time"
              type="datetime-local"
              value={form.booking_time}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button type="submit" className="mt-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition">
            Bekräfta bokning
          </button>
          <button type="button" onClick={() => navigate('/')} className="text-sm text-gray-400 hover:text-gray-600 transition">
            Avbryt
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookPage