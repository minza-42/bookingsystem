import { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard'

function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Välj en tjänst</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {services.length === 0 ? (
          <p>Inga tjänster hittades.</p>
        ) : (
          services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  )
}

export default Home