// import { useState } from 'react'
import './App.css'
import List from "./components/List"
import Form from "./components/Form"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div className='row'>
      <div className='col'>
        <Header/>
      </div>
      </div>
      <div className='row mt-4 pt-4'>
        <div className='col-12 d-flex'>
          <Form/>
        </div>
      </div>

    </>
  )
}

export default App