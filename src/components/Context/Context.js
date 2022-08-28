import { createContext, useReducer } from 'react'

export const DBUserContext = createContext()

export const DBUserReducer = (state, action) => {
 switch (action.type) {
  case 'SET_DBUSER':
   return {
    DBUser: action.payload
   }
  case 'CREATE_DBUSER':
   return {
    DBUser: [action.payload, ...state.DBUser]
   }
  default:
   return state
 }
}
export const DBUserProvider = ({ children }) => {
 const [state, dispatch] = useReducer(DBUserReducer, {
  DBUser: null
 })
 return (
  <DBUserContext.Provider value={{...state, dispatch}}>
   {children}
  </DBUserContext.Provider>
 )
}