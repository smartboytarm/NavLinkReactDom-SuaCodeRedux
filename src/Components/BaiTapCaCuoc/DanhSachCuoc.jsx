import React, { Component } from 'react'
import { connect } from 'react-redux'
import {datCuoc} from '../../redux/actions/ActionBauCua'

const mapStateToProps = (state) => ({ danhSachCuoc: state.TamdnaBauCuaReducer.danhSachCuoc });
class DanhSachCuoc extends Component {
    renderDanhSachCuoc = () => {
        // console.log(this.props.danhSachCuoc)
        return this.props.danhSachCuoc.map((_itemCuoc, index) => {
            return (        
                <div key={index} className='px-2 mt-2 text-center'>
                    <button className="bbg-secondary" onClick={() => {this.tangDiemCuoc(_itemCuoc.ma)}}>
                        <img src={_itemCuoc.hinhAnh} alt={_itemCuoc.ma} style={{ width: '150px' }} />
                        <h1 style={{color: 'red'}}>{_itemCuoc.diemCuoc}</h1>
                    </button>
                </div>
            )
        })
    }
    tangDiemCuoc = (ma) => (this.props.dispatch(datCuoc(ma)))
    render() {
        return (
            <div className="container">
                <div className='row'>
                    {this.renderDanhSachCuoc()}
                </div>
            </div>

        )
    }
}
export default connect(mapStateToProps)(DanhSachCuoc)

