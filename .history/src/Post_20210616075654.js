import React, { Component, useState, useEffect, useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Post = (props) => {
    const {removePostfromHomepage} = useContext(GlobalContext)

    return (
        <div>
            <h1 key = {props.id}>{props.caption}</h1>
            <button onClick = {() => removePostfromHomepage(props)}></button>
        </div>
    )
}