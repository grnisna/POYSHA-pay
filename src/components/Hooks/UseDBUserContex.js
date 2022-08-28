import { DBUserContext } from "../Context/Context";
import { useContext } from "react";

export const UseDBUserContext = () => {
 const context = useContext(DBUserContext)
 
 return context
}