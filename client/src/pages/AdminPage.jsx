import { useEffect, useState } from 'react'

function AdminPage() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Adminpanel</h1>
        <p className="text-gray-500 mb-8">{bookings.length} bokningar totalt</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-gray-500 font-medium">Kund</th>
                <th className="text-left px-6 py-4 text-gray-500 font-medium">Tjänst</th>
                <th className="text-left px-6 py-4 text-gray-500 font-medium">Tid</th>
                <th className="text-left px-6 py-4 text-gray-500 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-900">{booking.notes}</td>
                  <td className="px-6 py-4 text-gray-500">#{booking.service_id}</td>
                  <td className="px-6 py-4 text-gray-500">{new Date(booking.booking_time).toLocaleString('sv-SE')}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminPage