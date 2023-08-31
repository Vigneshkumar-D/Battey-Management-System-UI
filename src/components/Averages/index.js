import { Component } from 'react'
import './index.css'
import SideBar from '../SideBar'


const tabId = 5;

class Averages extends Component{
    state = {batteryDataList: {}, batteryId:'', errorMessage: ''}
    
    getBatteryByIdData = async event =>{
            event.preventDefault()
            const {batteryId, specificInfo} = this.state
            const url="https://localhost:8080/battery-specific-info"
            const options = {
                method: 'GET',
                params: {
                    batteryId: `${batteryId}`,
                },
    }

            const response = await fetch(url, options)
            if(response.ok){
                const data = await  response.json()
                const updatedData = {
                    currentAverage: data.data.currentAverage,
                    voltageAverage: data.data.voltageAverage,
                    temperatureAverage: data.data.temperatureAverage,
                }
                this.setState({ batteryDataList: updatedData})
            }else{
                this.setState({errorMessage: 'Something Went Wrong Try Again'})
            }
        }
    
        onChangeInput = event => {
            this.setState({batteryId: event.target.value})
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
                            
                        <form className='from-specific-info' onSubmit={this.getBatteryByIdData}>
                            <label className='custom-label' htmlFor='batteryId'>
                                Battery Id
                            </label>
                            <input onChange={this.onChangeInput} type='text' className='custom-input' id="batteryId" placeholder='Enter Battery Id' />
                            <button type='submit' className='submit-button'>Submit</button>
                        </form>
                        <div className='avg-data-container'>
                                
                                <div className='data-sub-container'>
                                    <p className='avg-battery-data'>
                                    Current Average: {batteryDataList.currentAverage}
                                    </p>
                                    <p className='avg-battery-data'>
                                    Voltage Average: {batteryDataList.voltageAverage}
                                    </p>
                                    <p className='avg-battery-data'>
                                    Temperature Average:   {batteryDataList.temperatureAverage}
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
export default Averages