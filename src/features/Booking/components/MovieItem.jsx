import { Card } from 'antd'
import { Button } from 'antd/es/radio'
import React from 'react'

const MovieItem = (props) => {
    const {item} = props
  return (
    <Card cover={<img src={item.hinhAnh} alt='movie img' />}>
        <h1>{item.tenPhim}</h1>
        <p>{item.moTa}</p>
        <Button className='mt-3' >Book ticket</Button>
    </Card>
  )
}

export default MovieItem