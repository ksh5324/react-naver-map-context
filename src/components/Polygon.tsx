import React, { useEffect } from 'react'
import { useNaverMap } from '../contexts/naverMap'

const Polygon = () => {
  const navermap = useNaverMap();

  useEffect(() => {
    console.log('polygon: ',navermap)
  }, [navermap])
  
  return (
    <div>Polygon</div>
  )
}

export default Polygon