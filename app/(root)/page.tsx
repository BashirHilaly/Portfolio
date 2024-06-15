import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <main className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className=''>
        <Hero />
      </div>
    </main>
  )
}

export default Home