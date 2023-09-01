import { Component } from 'react'
import './index.css'
import SideBar from '../SideBar'


const tabId = 3;

class TimeSpecificInfo extends Component{
    state = {batteryDataList: [], batteryId:'', specificInfo: '', startDateTime: '', endDateTime: '', errorMessage: ''}
    
    getBatteryByIdData = async event =>{
            event.preventDefault()
            const {batteryId, specificInfo} = this.state
            const url="https://localhost:8080/battery-averages"
            const options = {
                method: 'GET',
                params: {
                    batteryId: `${batteryId}`,
                    specificData: `${specificInfo}`,
                    startDateTime: `${startDateTime}`,
                    endDateTime: `${endDateTime}`
                },
    }
    
            const response = await fetch(url, options)
            if(response.ok){
                const data = await  response.json()
                const updatedData = data.map(eachdata => ({
                    specificInfo: eachdata.specificInfo,
                }))
                this.setState({ batteryDataList: updatedData})
            }else{
                this.setState({errorMessage: 'Something Went Wrong Try Again'})
            }
        }
    
        onChangeInput = event => {
            this.setState({batteryId: event.target.value})
        }

        onChangeSpecificInfo = event => {
            this.setState({specificInfo: event.target.value})
        }

        onChangeStartDateTime = event => {
            this.setState({startDateTime: event.target.value})
        }

        onChangeEndDateTime = event => {
            this.setState({EndDateTime: event.target.value})
        }
    
        render(){
            const {batteryDataList} = this.state

            return(
                <div className='retrive-battery-main-container'>
                    <h1 className="app-title">
                            Battery Management System
                        </h1>
                    <div className='retrive-battery-sub-container'>
                        <SideBar tabId={tabId} style={{width: '20%'}}/>
                        <div className='get-batteryBy-id-container'>
                            
                        <form className='from-time-specific-info' onSubmit={this.getBatteryByIdData}>
                            <label className='custom-label' htmlFor='batteryId'>
                                Battery Id
                            </label>
                            <input onChange={this.onChangeInput} type='text' className='custom-input' id="batteryId" placeholder='Enter Battery Id' />
                            <label className='custom-label' htmlFor='SpecificInfo'>
                                Specific Info
                            </label>
                            <input onChange={this.onChangeSpecificInfo} type='text' className='custom-input' id="SpecificInfo" placeholder='Enter Specific Info' />
                            <label className='custom-label' htmlFor='StartDateandTime'>
                                Start Date and Time
                            </label>
                            <input onChange={this.onChangeStartDateTime} type='datetime-local' className='custom-input' id="StartDateandTime" placeholder='Enter Specific Info' />
                            <label className='custom-label' htmlFor='EndDateandTime'>
                                End Date and Time
                            </label>
                            <input onChange={this.onChangeEndDateTime} type='datetime-local' className='custom-input' id="EndDateandTime" placeholder='Enter Specific Info' />
                            <button type='submit' className='submit-button'>Submit</button>
                        </form>
                        <div className='data-container'>
                            <h1>Battery Data</h1>
                            {batteryDataList.map(eachdata => {
                                return(
                                <div className='data-sub-container'>
                                    <p className='battery-data'>
                                        {eachdata.specificInfo}
                                    </p>
                                </div>
                                ) 
                            })}
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
export default TimeSpecificInfo