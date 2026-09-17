function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-6 p-4 bg-gray-900 text-white">
      <a href="#about" className="hover:text-blue-400 transition">
        About
      </a>

      <a href="#work" className="hover:text-blue-400 transition">
        Work
      </a>

      <a href="#gallery" className="hover:text-blue-400 transition">
        Gallery
      </a>

      <a href="#subscribe" className="hover:text-blue-400 transition">
        Subscribe
      </a>

      <a href="#contact" className="hover:text-blue-400 transition">
        Contact
      </a>
    </nav>
  )
}

export default Navbar