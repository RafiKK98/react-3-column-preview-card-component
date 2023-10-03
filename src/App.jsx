import './App.css'
import iconLuxary from '../src/assets/icon-luxury.svg';
import iconSedans from '../src/assets/icon-sedans.svg';
import iconSuvs from '../src/assets/icon-suvs.svg';

function App() {

  return (
    <div className='very-light-gray h-screen text-base'>
      <div className='grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto h-full py-6'>
        {/* Sedans and Orange */}
        <div className='max-w-sm mx-auto lg:w-full rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg h-fit my-auto p-12 space-y-8 bg-bright-orange'>
          <img src={iconSedans} alt="" />
          <h2 className='text-3xl font-big-shoulders uppercase'>
            Sedans
          </h2>
          <p className='font-lexend transparent-white pb-16'>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className='btn py-2 px-4 border-2 rounded-3xl hover:bg-white hover:text-[#e38826] hover:border-white'>
            Learn More
          </button>
        </div>
        {/* Suvs and Dark Cyan */}
        <div className='max-w-sm mx-auto lg:w-full h-fit my-auto p-12 space-y-8 bg-dark-cyan'>
          <img src={iconSuvs} alt="" />
          <h2 className='text-3xl font-big-shoulders uppercase'>
            Suvs
          </h2>
          <p className='font-lexend transparent-white pb-16'>
            Take an SUV for its spacious interior, power and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className='btn py-2 px-4 border-2 rounded-3xl hover:bg-white hover:text-[#006970] hover:border-white'>
            Learn More
          </button>
        </div>
        {/* Luxury and Very Dark Cyan */}
        <div className='max-w-sm mx-auto lg:w-full rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg h-fit my-auto p-12 space-y-8 bg-very-dark-cyan'>
          <img src={iconLuxary} alt="" />
          <h2 className='text-3xl font-big-shoulders uppercase'>
            Luxury
          </h2>
          <p className='font-lexend transparent-white pb-16'>
            Cruise in the best car brands without the bloated prices. 
            Enjoy the enhanced comfort of a luxury rental and arrive in style. 
          </p>
          <button className='btn py-2 px-4 border-2 rounded-3xl hover:bg-white hover:text-[#004241] hover:border-white'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
