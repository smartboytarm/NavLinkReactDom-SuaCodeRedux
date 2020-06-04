import React, { Component } from 'react'
import {connect} from 'react-redux';


//disPatchs the props to store
const mapDispatchToProp = (disPatchs) => {
    return {
        // create prototype es5, proptotype: details
        details: ( stateProperty) => { 
            let action = {
                type: "READ_DETAIL",
                stateProperty: stateProperty
            }
            disPatchs(action)
        }
    }
}

 class CarItemRedux extends Component {
    render() {
        return (
            <div>
                <div className="card text-white bg-secondary">
                    <img className="card-img-top" src={this.props.CarListProps.hinhAnh} alt="hinhAnh" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.CarListProps.tenSP}</h4>
                        <p className="card-text">{this.props.CarListProps.moTa}</p>
                        <button className="btn btn-dark border-danger" data-toggle="modal" data-target="#modelId" onClick={()=>{this.props.details(this.props.CarListProps)}}>Details</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProp)(CarItemRedux);