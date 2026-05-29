function ServiceCard({ service }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1.5rem',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <p>{service.duration_minutes} min</p>
      <p><strong>{service.price} kr</strong></p>
      <button style={{
        background: '#4F46E5',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Boka nu
      </button>
    </div>
  )
}

export default ServiceCard