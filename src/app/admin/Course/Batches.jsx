import React from 'react'

function Batches({data, back}) {
  return (
    <div className='w-full border rounded-2xl overflow-hidden'>
        <div className='w-full h-20 bg-primary'>
            <button onClick={back}>back</button>
        </div>
      {data}
    </div>
  )
}

export default Batches
