import {Link} from 'react-router-dom'
import './index.css'
import { Component } from 'react'

const tabList = [
    {
        id: 0,
        value: 'Retrieve Battery',
        link: '/retrieve-battery'
    },
    {
        id: 1,
        value: 'Specific Info',
        link: '/specific-info'
    },
    {
        id: 2,
        value: 'Add Battery',
        link: '/add-aattery'
    },
    {
        id: 3,
        value: 'Time-Specific Info',
        link: '/time-specific-info'
    },
    {
        id: 4,
        value: 'Averages',
        link: '/averages'
      },
  ]

class SideBar extends  Component{
    state={activeTab: null}

    onClickTab = tabId => {
        this.setState({activeTab: tabId})
    }
    
    render(){
        const {tabId} = this.props
        const {activeTab} = this.state
    return(
        <div className='side-bar-container'>
                <nav className='nav-container'>
                    <ul className='unorder-list'>
                        {tabList.map(eachContent => {
                            const isClicked =
                            eachContent.id === activeTab ? 'active-button' : 'nav-button'
                            return (
                            <Link to={eachContent.link}>
                                <button
                                    onClick={this.onClickTab(tabId)}
                                    className={isClicked}
                                    key={eachContent.id}
                                    type="button"
                                >
                                    {eachContent.value}
                                </button>
                            </Link>
                            )
                        })}
                    </ul>
            </nav>
        </div>
    )
    }
    
}
export default SideBar