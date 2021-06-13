import React from 'react'

export default function Bkash() {
  return (
    <div className=' w-96 mx-auto' >
      <header className='flex justify-between p-2 text-gray-100 from-indigo-300 ' style={{ background: '#540729' }}>
        <div className='flex space-x-2'>
          <p>8:21 PM</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className='battary'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <i className='fa fa-battary'></i>
        </div>
      </header>
      <main className='relative'>
        <div className='h-20' style={{ background: "#710935" }}>

        </div>
        <div className='bg-white h-52'>

        </div>
        <div className='absolute top-0 left-0 bg-white shadow'>
          <div className='flex justify-between '>
            <div className=''>
              <span className='text-2xl' style={{color: "#D7A8C5"}}>Your </span>
              <span className='text-xl font-semibold' style={{color: "#E52F81"}}>Send Money </span>
              <span className=''>is</span>
              <span className='block'>successfull</span>
            </div>
            <span className='rounded-full w-9 h-9 flex items-center justify-center' style={{border: "3px solid #2A8A76"}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#2A8A76" style={{border: '1px soild #2A8A76'}}>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            </span>
          </div>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className='number'>
              <p>016411146789</p>
              <p>016411146789</p>
            </div>
            <table>
              <tr>
                <td>
                  <p>8:21 PM</p>
                  <p>10/12/21</p>
                </td>
                <td>
                  <p>Transaction ID</p>
                  <p>10/12/21</p>
                  <p>+ No Charge</p>
                </td>
                <td>
                  <p>New Balance</p>
                  <p>৳540</p>
                </td>
              </tr>
              <tr>
                <p>Total</p>
                <p>৳3000.00</p>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
