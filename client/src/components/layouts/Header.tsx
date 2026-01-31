export function Header() {
  return (
    <>
      <header className="py-2 px-4 bg-gray-900 text-white">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center italic">
              <img src="/assets/images/svalinn_shield_transparent_50.webp" alt="logo" />
              <span className="text-xl font-bold uppercase">Svalinn</span>
            </div>
            <ul className="flex gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <a className="text-white bg-yellow-500 border-2 border-transparent rounded-md px-4 py-2 font-bold" href="#">Login</a>
            <a className="text-black bg-yellow-50 border-2 border-amber-400 rounded-md px-4 py-2 font-bold" href="#">Sign Up</a>
          </div>
        </nav>
      </header>
    </>
  )
}
