import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initalState = null

  const [state, dispatch] = useReducer(alertReducer, initalState)

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 2000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AlertContext
