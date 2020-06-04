import React, { Component } from 'react'
import ModalRedux from './ModalRedux'
import ListCarRedux from './ListCarRedux'

export default class CarRedux extends Component {
    mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg', gia: 1000 , moTa: "chien binh Huyen Dieu"},
        { maSP: 2, tenSP: 'red car', hinhAnh: './CarBasic/products/red-car.jpg', gia: 2000, moTa: "Kieu hanh va manh liet" },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './CarBasic/products/silver-car.jpg', gia: 3000, moTa: "Hong Nhan Bac Phan" },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './CarBasic/products/steel-car.jpg', gia: 3000, moTa: "Manh Me nhu Thep" }
    ];
    render() {
        return (
            <div className="container mb-2">
                <h3>Car Gallery</h3>
                <div className="mt-2 mb-2">
                <ListCarRedux  CarReduxArray={this.mangSP}></ListCarRedux>
                </div>
                <div className="mt-2 mb-2">
                <ListCarRedux  CarReduxArray={this.mangSP}></ListCarRedux>
                </div>
                <div className="mt-2 mb-2">
                <ListCarRedux  CarReduxArray={this.mangSP}></ListCarRedux>
                </div>
               
                <ModalRedux></ModalRedux>
            </div>
        )
    }
}
