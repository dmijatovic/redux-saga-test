import React from 'react'
import {useSelector} from 'react-redux'


import {ModuleGrid,ModuleSection} from './components/module/'
import Paragraph from './components/Paragraph'
import './App.css'

import {textStore} from './store/text'

function App() {
  const store = useSelector(store=>store)
  return (
    <div className="App">
      <Paragraph
        title={textStore.app.title}
        body={textStore.app.body}
      />
      <ModuleGrid>
        {
          Object.keys(store).map(mod=>{
            return (
              <ModuleSection
                key={mod}
                name={mod}
              />
            )
          })
        }
      </ModuleGrid>
    </div>
  )
}

export default App
