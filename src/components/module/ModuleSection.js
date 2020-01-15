import React from 'react'
import {useSelector} from 'react-redux'

import ModuleCell from './ModuleCell'

import './ModuleSection.css'

const ModuleSection = (props) => {
  const {name} = props
  const module = useSelector((store)=>store[name])
  // console.log('ModuleSection.module...', module)
  return (
    <section className="ModuleSection-block">
      <h1 className="ModuleSection-title">Module section {name}</h1>
      <div className="ModuleSection-cells">
        {
          Object.keys(module).map(cell=>{
            return <ModuleCell key={cell} {...module[cell]} />
          })
        }
      </div>
    </section>
  )
}

export default ModuleSection