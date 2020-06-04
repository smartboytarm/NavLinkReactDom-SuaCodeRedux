import React, { Component } from 'react'
import CarItemRedux from './CarItemRedux'

export default class ListCarRedux extends Component {
    renderCar =() => this.props.CarReduxArray.map((item,index) => (<div className="col-3" key={index}>
        <CarItemRedux CarListProps={item}></CarItemRedux>
    </div>))
    render() {
        return (
            <div>
                <div className="row h-50">
                    {this.renderCar()}
                </div>
            </div>
        )
    }
}
