import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{

  state = {advice: ''};

  componentDidMount(){
    this.fetchAdvice();
    
  }

  fetchAdvice =()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=> {
      const {advice} = response.data.slip
      this.setState({advice})
    })
    .catch((error)=> {
      console.log(error)
    })
  }
  render(){

    return (
      <div className='app'>
              <div className='card'>
              <h1 className='heading'>{this.state.advice}</h1>
              <button className='button' onClick={this.fetchAdvice}>
                <span>Give me Advice!</span>
              </button>
              </div>

      </div>
    )
  }
}

export default App;
