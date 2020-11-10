import React from 'react'
import {asset} from 'react-360'
import Entity from 'Entity'

export default class Shoe extends React.Component {
    render(){
        return(
            <Entity
                source={{
                    obj: asset('shoe.obj'),
                    mtl: asset('shoe.mtl')
                }}
                style={{transform: [
                    {translate: [0,0,0]}
                ]}}
            />
        )
    }
}