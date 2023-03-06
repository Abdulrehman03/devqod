import React from 'react'
import Seo from '../src/components/Seo'
import Loader from '../src/components/Loader'



const Home=()=>{
  return   <div className='container mx-auto flex min-h-screen flex-col px-4 sm:px-6'>
     
  <Seo templateTitle='Home'/>
  <div className='m-auto '>

  <h1 className='bg-transparent main text-4xl sm:text-6xl text-center  text-white bold-cursor'>DEVQOD</h1>

  <p className='text-white text-center text-md sm:text-xl mt-8 msg '>---------Coming Soon---------</p>
  </div>
 </div>
}

const App=()=>{
  const [loading,setLoading]=React.useState(true)
  React.useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return<>
  {loading?<Loader/> : <Home/>}
  </>
}
export default App;