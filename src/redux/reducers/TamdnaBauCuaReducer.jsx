const stateGame = {
    tongDiem: 100,
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: "./gameImg/bau.png", diemCuoc: 0 },
        { ma: 'cua', hinhAnh: "./gameImg/cua2.png", diemCuoc: 0 },
        { ma: 'tom', hinhAnh: "./gameImg/tom.png", diemCuoc: 0 },
        { ma: 'ca', hinhAnh: "./gameImg/ca.png", diemCuoc: 0 },
        { ma: 'ga', hinhAnh: "./gameImg/ga.png", diemCuoc: 0 },
        { ma: 'nai', hinhAnh: "./gameImg/nai.png", diemCuoc: 0 },
    ],
    dsXucSac: [
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG' },
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG' },
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG' },
    ]
}
const TamdnaBauCuaReducer = (state = stateGame, action) => {
    console.log(action)
    switch (action.type) {
        case 'DAT_CUOC': {
            let danhSachCuocUpdate = [...state.danhSachCuoc];
            let index = danhSachCuocUpdate.findIndex(quanCuoc => quanCuoc.ma === action.ma);
            if (index !== -1 ) {
                if (state.tongDiem <= 100 && state.tongDiem > 0 ) {
                    danhSachCuocUpdate[index].diemCuoc += 10;
                    state.tongDiem -= 10;
                }
            }
            state.danhSachCuoc = danhSachCuocUpdate;
            return {...state}
        };
        case 'PLAY_GAME': {
            //tao 3 con xuc xac ngau nhien
            let mangXucXacNgauNhien = [];
            for (let i = 0; i<3;i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                let xxNgauNhien = {
                    ma: state.danhSachCuoc[soNgauNhien].ma,
                    hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                }
                mangXucXacNgauNhien.push(xxNgauNhien);
            }
            state.dsXucSac = mangXucXacNgauNhien;
            //----- end tao 3 con xuc xac ngau nhien

            //cong diemCuoc trong danhsachCuoc len neu quay dinh - quet danhsachCuoc
            mangXucXacNgauNhien.forEach((_xucxacNN,index)=>{
                let _indexChess = state.danhSachCuoc.findIndex(quanCuoc => quanCuoc.ma === _xucxacNN.ma);
                if (_indexChess !== -1) {
                    state.tongDiem += state.danhSachCuoc[_indexChess].diemCuoc;
                }
            });
            //quet mangngau nhien
            state.danhSachCuoc.forEach((_itemQuanCuoc,index)=> {
                let _indexCH = mangXucXacNgauNhien.findIndex((_xucXacNN, index)=> _xucXacNN.ma === _itemQuanCuoc.ma);
                if (_indexCH !== -1) {
                    state.tongDiem += _itemQuanCuoc.diemCuoc;
                }
            });
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 };
            })
            return { ...state }
        }
        default: return state

    }
    return {...state};
}
export default TamdnaBauCuaReducer;