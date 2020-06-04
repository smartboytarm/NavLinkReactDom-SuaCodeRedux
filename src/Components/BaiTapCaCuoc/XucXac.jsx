import React, { Component } from 'react'
import { connect } from 'react-redux'
import {playGame} from '../../redux/actions/ActionBauCua'

const mapStateToProps = (state) => {
    return {
        tongDiem: state.TamdnaBauCuaReducer.tongDiem,
        danhSachCuoc: state.TamdnaBauCuaReducer.danhSachCuoc,
        dsXucSac: state.TamdnaBauCuaReducer.dsXucSac
    }
}
class XucXac extends Component {
    handlePlayGame = () => (this.props.dispatch(playGame()))
    renderXucXac = () => {
        return this.props.dsXucSac.map((_itemXX$, index) => {
            return (
                (<img  key={index}
                    src={_itemXX$.hinhAnh}
                    style={{ width: '50px' }}
                    alt={_itemXX$.ma}>
                </img>)
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <h3>Tro Choi Xuc Xac</h3>
                <div className="row">
                    <div className="col-2">
                        <div onClick={() => { this.handlePlayGame() }} className="btn btn-primary btn-raised">PLAY_GAME</div>
                    </div>
                    <div className="col-8" style={{border: '1px solid grey'}}>{this.renderXucXac()}</div>
                    <div className="col-2"><strong>{this.props.tongDiem}</strong>
                        <p style={{color: "red"}}>&hearts;</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(XucXac)