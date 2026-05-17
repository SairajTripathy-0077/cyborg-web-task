import React from 'react'
import Navbar from './components/navbar'
import text from './assets/text.png'
import bench from './assets/bench.png'

const App = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Sub-Navbar */}
      <div className="flex items-center justify-between px-10 py-8 max-w-[1400px] mx-auto w-full">
        {/* Logo */}
        <div className="flex-shrink-0 w-[200px]">
          <img src={text} alt="Ethno Text Logo" className="h-16 object-contain" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-[313px]">
            <input
              type="text"
              placeholder="Search......"
              className="w-full border-2 border-black rounded-md py-2 pl-4 outline-none text-gray-700"
            />

          </div>
        </div>

        {/* Links */}
        <div className="flex-shrink-0 w-[300px] flex justify-end space-x-8">
          <a href="#" className="text-gray-500 text-2xl font-normal hover:text-black transition-colors">Furniture</a>
          <a href="#" className="text-gray-500 text-2xl font-normal hover:text-black transition-colors">Accessories</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto w-full px-10 py-12 gap-16 items-center">
        {/* Image */}
        <div className="md:w-1/2">
          <img src={bench} alt="Wooden Bench" className="w-full h-auto object-cover" />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-8 text-black tracking-tight">About Ethno</h1>
          <p className="text-black text-lg leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non eleifend leo. Donec varius tempor est, eu vulputate velit viverra viverra. Duis pharetra dignissim justo ullamcorper rutrum. Mauris aliquam massa elit, sit amet facilisis diam lobortis vitae.
            <br /><br />
            Suspendisse fringilla mollis felis ultricies varius. Proin eget iaculis massa. Etiam ac nisi arcu. Cras vehicula sagittis dolor, vel mattis diam blandit a.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App