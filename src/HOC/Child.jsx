import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                {/* {this.props.param} ket qua la : 'abc'*/} 
                {/* {this.props.children} ket qua la: hi cac ban */}
                
                {/* Goi ham tu props trong react  */}
                {this.props.render(<p>cyber soft front end class</p>)}
            </div>
        )
    }
}
