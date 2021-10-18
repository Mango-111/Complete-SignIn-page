import { Component } from 'react'
import Navigate from './Navigate'
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Sidebar from './Sidebar'
import Sign from './Sign'


class Dashboard extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = " ";
        if(token ==null){
            loggedIn=false
        }
        this.state ={
            loggedIn:true
        }
    }
    render() {
        if(this.state.loggedIn===false){    
            return <Redirect to="/Sign"/>
        }
        return (
            <>
            <Navigate/>
            <Sidebar/>
             </>
        )
    }
}
export default Dashboard;