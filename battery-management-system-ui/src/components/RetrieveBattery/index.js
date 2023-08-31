import { Component } from 'react'
import './index.css'
import SideBar from '../SideBar'

const tabId = 0;

class RetrieveBattery extends Component  {
    state = {batteryDataList: [], batteryId:'', errorMessage: ''}

    getBatteryByIdData = async event =>{
        event.preventDefault()
        const {batteryId} = this.state
        const url="https://localhost:8080/batteries"
        const options = {
            method: 'GET',
            params: {
                batteryId: `${batteryId}`,
            },
        }

        const response = await fetch(url, options)
        if(response.ok){
            const data = await  response.json()
            const updatedData = data.map(eachdata => ({
                batteryId: eachdata.batteryId,
                current: eachdata.current,
                voltage: eachdata.voltage,
                temprature: eachdata.temprature,
                timestamp: eachdata.timestamp,
            }))
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
                        
                    <form className='from' onSubmit={this.getBatteryByIdData}>
                        <label className='custom-label' htmlFor='batteryId'>
                            Battery Id
                        </label>
                        <input onChange={this.onChangeInput} type='text' className='custom-input' id="batteryId" placeholder='Enter Battery Id' />
                        <button type='submit' className='submit-button'>Submit</button>
                    </form>
                    <div className='data-container'>
                        {batteryDataList.map(eachdata => {
                            return(
                            <div className='data-sub-container'>
                                <p className='battery-data'>
                                    {eachdata.batteryId}
                                </p>
                                <p className='battery-data'>
                                    {eachdata.current}
                                </p>
                                <p className='battery-data'>
                                    {eachdata.voltage}
                                </p>
                                <p className='battery-data'>
                                    {eachdata.temprature}
                                </p>
                                <p className='battery-data'>
                                {eachdata.timestamp}
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
export default RetrieveBattery