import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function BookPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const service = location.state?.service

  const [form, setForm] = useState({
    name: '',
    email: '',
    booking_time: ''
  })

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
  } catch (err) {
    alert('Något gick fel, försök igen')
  }
}

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Boka {service?.name}</h1>
      <p>{service?.duration_minutes} min — {service?.price} kr</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Namn</label><br />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label><br />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Datum och tid</label><br />
          <input
            name="booking_time"
            type="datetime-local"
            value={form.booking_time}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>

        <button type="submit" style={{
          background: '#4F46E5',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer',
          width: '100%'
        }}>
          Bekräfta bokning
        </button>
      </form>
    </div>
  )
}

export default BookPage