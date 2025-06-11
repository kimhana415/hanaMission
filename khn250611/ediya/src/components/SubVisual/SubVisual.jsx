// SubVisual.jsx

import React from 'react'
import SubVisualText from './SubVisualText'
import SubVisualTab from './SubVisualTab'

export default function SubVisual() {
  return (
    <div className='sub-visual'>
      <div className="sub-visual__inner">
        <SubVisualText />
        <SubVisualTab />
      </div>
    </div>
  )
}
