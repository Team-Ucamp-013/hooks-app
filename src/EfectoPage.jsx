import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const EfectoPage = () => {
  const [data, setData] = useState()

  const getData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])
  // useEffect(() => {
  //   console.log('Monta componente')

  //   return () => {
  //     console.log('Desmonta componente')
  //   }
  // }, [text])



  return (
    <section>
      <Link to="/">
        App
      </Link>

      {/* <div>
        <input type="text" onChange={(e) => setText(e.currentTarget.value)} />
      </div>
      <div>
        {text}
      </div> */}
      {
        data &&
        data.map((item) => (
          <>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </>
        ))
      }
    </section>
  )
}

export default EfectoPage