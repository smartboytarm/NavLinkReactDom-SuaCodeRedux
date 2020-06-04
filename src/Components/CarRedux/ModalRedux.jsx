import React, { Component } from 'react'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        statePropertyRoot: state.stateModal.statePropertyRoot
    }
} 

 class ModalRedux extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
  </button> */}
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src={this.props.statePropertyRoot.hinhAnh} alt="hinh" className="mw-100" />

                                    <strong >{this.props.statePropertyRoot.tenSP}</strong><br />
                                    <strong>Mô tả: </strong>{this.props.statePropertyRoot.moTa}<br />
                                    <strong>Giá: </strong>{this.props.statePropertyRoot.gia}$
        </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default connect(mapStateToProps)(ModalRedux);