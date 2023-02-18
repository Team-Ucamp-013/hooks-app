import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetchGifs() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  const fetchData = () => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=Z4Ii4Qqs1tZPft402TqKarvbQG7i0SlF&limit=12&q=luffy'
    axios.get(url)
      .then((response) => {
        setLoading(true)
        setData(response.data)
        console.log('en el hook', response.data)
      })
      .catch(setError)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [data, error, loading, fetchData]

}
