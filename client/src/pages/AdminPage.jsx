import { useEffect, useState } from 'react'

function AdminPage() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Adminpanel</h1>
      <p>Antal bokningar: {bookings.length}</p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
            <th style={{ padding: '0.75rem' }}>Kund</th>
            <th style={{ padding: '0.75rem' }}>Tjänst ID</th>
            <th style={{ padding: '0.75rem' }}>Tid</th>
            <th style={{ padding: '0.75rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.75rem' }}>{booking.notes}</td>
              <td style={{ padding: '0.75rem' }}>{booking.service_id}</td>
              <td style={{ padding: '0.75rem' }}>
                {new Date(booking.booking_time).toLocaleString('sv-SE')}
              </td>
              <td style={{ padding: '0.75rem' }}>
                <span style={{
                  background: booking.status === 'confirmed' ? '#22c55e' : '#f59e0b',
                  color: 'white',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem'
                }}>
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminPage