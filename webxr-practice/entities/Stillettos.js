import React from 'react'
import {asset} from 'react-360'
import Entity from 'Entity'

export default class Stilletos extends React.Component{
    render(){
        return(
            <Entity
            source={{
                obj: asset('Stillettos_01.obj'),
                mtl: asset('Stillettos_01.mtl')
            }}
            style={{transform:[
          {translate: [-10, 0, -5]},
          {scale: [1,1,1]},

        ]}}
            />
        )
    }
}