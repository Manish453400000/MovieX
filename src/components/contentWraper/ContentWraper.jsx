import React from 'react'

import "./style.scss"

const ContentWraper = ({children}) => {
  return (
    <div className='container-div-wrapper'>
      <div className="contentWraper">
        {children}
      </div>
    </div>
  )
}

export default ContentWraper
