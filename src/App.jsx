import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'
import { useFetchGifs } from './hooks/useFetchGifs'

function App() {
  const [data, error, loading, fetchData] = useFetchGifs()
  console.log('En app', data)
  return (
    <div className="App">

      {/* <div className="card">
        <div>
          <h1>
            {count}
          </h1>
          <button onClick={() => setCount((count) => count + 1)}>
            +1
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            -1
          </button>
          <button onClick={() => setCount(0)}>
            reset
          </button>
        </div>
        <div>
          <button onClick={() => getPost()}>
            Posts
          </button>
          <button onClick={() => setPosts([])}>
            Posts reset
          </button>
          {
            posts &&
            posts.map((item) => (
              <div>{item.title}</div>
            ))
          }
        </div>
      </div> */}
      <div>

      </div>
    </div>
  )
}

export default App
