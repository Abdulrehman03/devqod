import Head from 'next/head'
import Image from 'next/image'
import Seo from '../src/components/Seo'

export default function Home() {
  return (
   <div className='container mx-auto flex min-h-screen flex-col px-4 sm:px-6'>
    <Seo templateTitle='Home'/>
    <div className='m-auto'>

    <h1 className='bg-transparent main text-4xl sm:text-6xl text-center  text-white'>DEVQOD</h1>

    <p className='text-white text-center text-md sm:text-xl my-8 msg'>---------Coming Soon---------</p>
    </div>
   </div>
  )
}
