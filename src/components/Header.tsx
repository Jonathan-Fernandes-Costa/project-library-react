
function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex-shrink-0">
        <span className="text-2xl">☰</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          ADMIN
        </span>

        <button className="text-blue-500">Sair</button>
      </div>
    </header>
  )
}

export default Header