import React, { Component } from 'react';
import Input from './component/input';
import  QRCode from 'qrcode.react';
import './App.css';

class App extends Component {
  state={
    text:"",
  }
  changeHandler=(e)=>{
    e.preventDefault();

    var inp=e.target.value;
    this.setState({
     text:inp
    });
  }
  

  render(){
  return (
    <div className="App">
      <div className="header">
              <h1>QRery.</h1>
              </div>
            <div className="qr">
        <QRCode value={this.state.text} />
        </div>

          <div className="inputer">
          <Input change={this.changeHandler}/>
          </div>


          <div>
            <p>Grab a screen-shot of the QR-code!</p>
            </div>

 
    </div>
  );
};
  };

export default App;
