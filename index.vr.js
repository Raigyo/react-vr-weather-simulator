import React, { Component } from 'react';
import { AppRegistry, Text, View, Pano, asset, StyleSheet } from 'react-vr';
import WeatherCard from './vr/components/WeatherCard';
import WindCloudObject from './vr/components/WindCloudObject';

const api_key = '47570adfc9ae35f5fdabcddb973d6daf';

class WeatherSimulator extends React.Component {

  constructor(){
    super();
    this.state = {
     weatherObject: {
       name: '',
       main: {
         temp: 0
       },
       weather: [
         {description: ''}
       ],
       wind: {
         deg: 1,
         speed: 1
       }
     }
   }
 }

//Fetch the API
  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=liege&units=metric&appid=${api_key}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({weatherObject: json}));
  }
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}
      }>
        <Pano source={asset('liege-pano.jpg')}/>
        <WeatherCard weatherObject={this.state.weatherObject}/>
        <WindCloudObject wind={this.state.weatherObject.wind}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
