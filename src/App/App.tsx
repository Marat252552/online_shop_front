import { BrowserRouter } from "react-router-dom"
import Page from "./Page"
import { createContext } from "react"
import UserState from "./State/UserState"
import {observer} from 'mobx-react-lite'
import {Routes} from 'react-router-dom'

export const Context = createContext({
  userState: new UserState()
})

const App = observer(() => {
  return <div>
    <BrowserRouter>
      <Context.Provider value={{
        userState: new UserState()
      }}>
        <Page />
      </Context.Provider>
    </BrowserRouter>
  </div>
})

export default App