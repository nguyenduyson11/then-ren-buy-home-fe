import React from 'react'
import './styles.css'
import { Spin } from 'antd';
function index() {
  return (
    <div className='loading-full'>
      <Spin />
    </div>
  )
}

export default index
