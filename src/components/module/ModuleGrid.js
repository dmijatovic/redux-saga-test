import React from 'react'

import './ModuleGrid.css'

const ModuleGrid = props => {
  return (
    <article className="ModuleGrid">
      {props.children}
    </article>
  )
}

export default ModuleGrid