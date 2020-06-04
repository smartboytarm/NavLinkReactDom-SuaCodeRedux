import React, { Component, Fragment } from 'react'
//custom cho phan HomeTemplate
import {Route} from 'react-router-dom'
import Header from '../../Components/Header'

//khai bao bien co dinh
const HomeLayOut = (props) => {
    return (
        <Fragment>
            {/* <Header /> */}
            {props.children}
        </Fragment>
    )
}
export const HomeTemplate = (props) => {
    return <Route
     path={props.path} {...props.exact} 
     render={(propsComponent) => {
         return (
             <HomeLayOut>
                 <props.component {...propsComponent}></props.component>
             </HomeLayOut>
         )
     }}/>
}
