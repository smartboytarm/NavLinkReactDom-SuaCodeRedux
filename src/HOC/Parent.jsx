import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
    render() {
        return (
            <div>
               <Child param="abc"
               render={(param) => {return (<h1>Hello World: {param}</h1> )}}>
                   <h2>hi cac ban</h2>
               </Child>
            </div>
        )
    }
}
