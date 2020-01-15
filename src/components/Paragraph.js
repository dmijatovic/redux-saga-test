import React from 'react'

import {  } from './Paragraph.css'

const Paragraph = props => {
  const {title,body} = props
  return (
    <>
      <h1 className="Paragraph-title">{title}</h1>
      <div className="Paragraph-body" dangerouslySetInnerHTML={{__html:body}} />
    </>
  )
}

export default Paragraph
