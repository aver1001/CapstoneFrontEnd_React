import { useContext } from "react"
import { Route } from "react-router-dom"

function LoginRequiredRoute({component,...kwags}){
    const { store: {jwtToken}} = useContext
    return(
        <Route/>


    )
}