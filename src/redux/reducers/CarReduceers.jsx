const stateModal = {
    statePropertyRoot: { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg', gia: 1000 , moTa: "chien binh Huyen Dieu"},
}
// READ_DETAIL
const CarReduceers = (state =stateModal, action ) => {
    switch (action.type) {
        case 'READ_DETAIL' : return {...state, statePropertyRoot: {...action.stateProperty}}
        default: return {...state}
    }
}
export default CarReduceers;