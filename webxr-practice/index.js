import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  asset,
  Location,
} from 'react-360';
import Stillettos from './entities/Stillettos.js'


export default class webxr_practice extends React.Component {
  state = {
    clothing: ""
  }

  _incrementCount = () => {
    console.log("hello")
  }

  _clickedShoes = () => {
    console.log("shoes")
    this.setState({clothing: "shoes"})
  }


  render(){
    return(
    <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to the Shopping District
          </Text>
        </View>
        <View style={styles.clothingNav}>
          <Text style={styles.headerText}>
            What clothes are you looking for?
          </Text>   

          <VrButton onClick={
            this._clickedShoes
          }>
            <Text>
              Shoes
            </Text>
          </VrButton>
        </View>

        <View style={styles.clothingPanel}>
        </View>
        

    </View>
    )
  }

};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 165, 0, .8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  clothingNav: {
    padding: 20,
    fontSize: 1,
  },
  headerText: {
    backgroundColor: 'blue'
  },
  clothingPanel: {
    width: 400,
    height: 300,
    backgroundColor:'red'
  },
  
});

AppRegistry.registerComponent('webxr_practice', () => webxr_practice);
AppRegistry.registerComponent('Stillettos', () => Stillettos)