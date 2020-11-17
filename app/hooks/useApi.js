import {useState} from 'react'

export default useApi=(apiFunc)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

  

    const request= async () => {
        setLoading(true)
        const response = await apiFunc()
        setLoading(false)


        if (!response.ok) {
            setError(true)
            console.log(response.problem)
        } else {
            setError(false)
            setData(response.data)
        }
    }


return {
    request, data, error,loading
}
}