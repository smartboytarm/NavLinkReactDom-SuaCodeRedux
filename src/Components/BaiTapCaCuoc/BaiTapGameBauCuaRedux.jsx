import React, { Component } from 'react'
import XucXac from './XucXac'
import DanhSachCuoc from './DanhSachCuoc'

export default class BaiTapGameBauCuaRedux extends Component {
    render() {
        return (
            <div>
                <XucXac></XucXac>
                <DanhSachCuoc></DanhSachCuoc>
            </div>
        )
    }
}
