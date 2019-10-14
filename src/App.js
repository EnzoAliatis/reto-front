import React, { useState } from 'react'
import './App.css'

function App() {
  const [string, setString] = useState('')
  const [code, setCode] = useState('')
  const [response, setResponse] = useState({})


  const getMatch = () => {
    fetch('http://0.0.0.0:5000/subtitles', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        string,
        code
      })
    }).then(res => console.log(res.json().then(json => {
      console.log(json)
      setResponse(json)
    })))
  }

  return (
    <div className='App container'>
      <h1>Prueba WEFERE</h1>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            STRING
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='ese tema y ojalá no le impulsen'
          onChange={e => {
            setString(e.target.value)
          }}
        />
      </div>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Codigo del video
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='Xgaz7dzyDKU'
          onChange={e => {
            setCode(e.target.value)
          }}
        />
      </div>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => getMatch()}>
        Get Match
      </button>

      <h4>Respuesta</h4>
      <p>Start: {response.start}</p>
      <p>dur: {response.dur}</p>
      <p>text: {response.text}</p>
      <p>Timestamp: {response.Timestamp}</p>
    </div>
  )
}

export default App



// Cod Pureba: Xgaz7dzyDKU
// String Prueba: ese tema y ojalá no le impulsen