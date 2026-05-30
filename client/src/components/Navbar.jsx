import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">✂ Salongen</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-purple-400 transition">Tjänster</Link>
        <Link to="/admin" className="hover:text-purple-400 transition">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar