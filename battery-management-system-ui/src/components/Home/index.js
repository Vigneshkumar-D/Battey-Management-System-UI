import { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'
const tabId = null;

class Home extends Component {
    state={}

    render(){
        return (
            <div className="home-container">
                    <h1 className="app-title">
                        Battery Management System
                    </h1>
                    <div className="home-sub-top-container">
                        <SideBar tabId={tabId} style={{width: '300px'}}/>
                        <div className='home-sub-left-container'>
                                Welcome!
                        </div>
                    </div>
            </div>
        )
    }
    
}
export default Home