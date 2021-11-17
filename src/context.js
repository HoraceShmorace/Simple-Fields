import { createContext, useReducer } from 'react'
import { node } from 'prop-types'
const ADD_DATA_ACTION = 'ADD_DATA'
const RESET_DATA_ACTION = 'RESET_DATA'
const initialState = {}
const reducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_DATA_ACTION:
      return {
        ...state,
        ...payload
      }
    case RESET_DATA_ACTION:
      return {}
    default:
      return state
  }
}

export const Context = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addData = payload => dispatch({ payload, type: ADD_DATA_ACTION })
  const resetData = () => dispatch({ payload: initialState, type: RESET_DATA_ACTION })

  return (
    <Context.Provider value={{ addData, resetData, state }}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: node.isRequired
}
