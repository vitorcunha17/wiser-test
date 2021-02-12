import { useState, useEffect } from 'react'

export default function useFetch(fn: any, ...params: any) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [...params])

  const fetchData = async () => {
    try {
      fn(...params).then((res: any) => {
        setResponse(res.data)
      })
        .catch((err: any) => {
          setError(err.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } catch (err) {
      setError(err.message)
    }
  }

  return { response, error, isLoading, refetch: fetchData }
}