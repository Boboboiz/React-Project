import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
const DemoQuery = () => {

    // query param
    // localhost:3000/ : khai báo param bên route => để load component bắt buộc url phải có param mới render đc
    let param = useParams()

    // query sting
    // localhost:3000?title=bc38&id=123
    let [useSearch, setUseSearch] = useSearchParams()
  return (
    <h1 className='text-center'>
        DemoQuery
        <br />
        {param.title}
        {useSearch.get('title')}
        {useSearch.get('id')}
        <button onClick={()=>{
            setUseSearch({title: 'helo huy đẹp trai'})
        }}>Change useSearch</button>
    </h1>
  )
}

export default DemoQuery