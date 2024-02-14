import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const header = {
      'Content-Type': 'application/json',
    }
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: header,
      })
      const resdata = await response.json()
      setData(resdata)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetchData, data, loading, error]
}

export default useFetch
