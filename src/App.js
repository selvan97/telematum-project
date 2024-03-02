import React from 'react'
import CustomTable from './Components/TableComponent/CustomTable'
import CustomH1 from './Components/Custom_Heading/CustomH1'
import'./App.css'

const App = () => {
  return (
    <div className='border light:border-gray-700 sm:rounded-lg m-5'>
      <div className="m-5"> 
      <CustomH1></CustomH1>
      <CustomTable></CustomTable>
      </div>
    </div>
  )
}

export default App
