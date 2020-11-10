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
          {translate: [0, 1, 0]},
          {scale: [0,0,0]},

        ]}}
            />
        )
    }
}
