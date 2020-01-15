import React from 'react'

import {useDispatch} from 'react-redux'

import './ModuleCell.css'

const ModuleCell = props => {
  const {action, ...data} = props
  const dispatch = useDispatch()
  const classes=`ModuleCell ${data['status']}`

  // convert other data types to string
  const returnString = (rawData) =>{
    switch (typeof rawData){
    case 'string':
      return rawData
    case 'number':
    case 'Date':
      return rawData.toString()
    default:
      return <pre>{JSON.stringify(rawData,null,2)}</pre>
    }
  }

  return (
    <table className={classes}
      onClick={() =>{ if (action) dispatch(action)}}>
      <tbody>
        {Object.keys(data).map(prop=>{
          return prop === 'error' ? null:
            (
              <tr key={prop}>
                <td>
                  {prop}
                </td><td>
                  {returnString(props[prop])}
                </td>
              </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default ModuleCell